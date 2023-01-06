import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

export default function MemoryEdit({ editMemory }) {
    // set state for edit form data & errors
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        status: '',
        main_img: '',
        description: '',
        user_id: '',
        date: ''
    })
    const [errors, setErrors] = useState([])

    // initialize useParams and useHistory
    const { id } = useParams()
    const history = useHistory()

    // destructure formData object keys to use as values in edit form
    const { title, category, status, main_img, description, date } = formData

    // fetch data for memory selected by user
    useEffect(() => {
        fetch(`/memories/${id}`)
            .then((res) => res.json())
            .then((memory) => setFormData(memory))
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function onSubmit(e) {
        e.preventDefault()
        fetch(`/memories/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        })
            .then((res) => {
                if (res.ok) {
                    res.json()
                        .then((updatedMemory) => {
                            editMemory(updatedMemory);
                            history.push(`/memories/${updatedMemory.id}`)
                        })
                } else {
                    res.json()
                        .then(data => setErrors(Object.entries(data.errors).map(e => `${e[1]}`)))
                }
            })
    }

    return (
        <div class='ml-24 mr-20 mt-4 bg-stone-200 border-4 border-stone-300 rounded-lg p-6 text-stone-600'>
            <form onSubmit={onSubmit} id='profile_edit_form'>
                <label htmlFor='title'>Title</label>
                <input class='rounded p-2 text-stone-600' type='text' name='title' value={title} onChange={handleChange} />

                <div class='flex-row mt-4'>
                    <label htmlFor='category'>Category</label>
                    <select class='rounded p-2 text-stone-600' name='category' id='category' value={category} onChange={handleChange}>
                        <option value='vacation'>Vacation</option>
                        <option value='romance'>Romance</option>
                        <option value='event'>Event</option>
                        <option value='holiday'>Holiday</option>
                        <option value='celebration'>Celebration</option>
                        {/* ADDITIONAL CATEGORIES
                    <option value='meeting'>Meeting</option>
                    <option value='appointment'>Appointment</option>
                    <option value='in_memoriam'>In Memoriam</option>
                    <option value='just_because'>Just Because</option>
                    <option value='private'>Private</option> */}
                    </select>

                    <label htmlFor='status'>Status</label>
                    <select class='rounded p-2 text-stone-600' name='status' id='status' value={status} onChange={handleChange}>
                        <option value='past'>Past</option>
                        <option value='present'>Present</option>
                        <option value='future'>Future</option>
                    </select>

                    <label htmlFor='date'>Date</label>
                    <input class='rounded p-2 text-stone-600' type='date' name='date' value={date} onChange={handleChange} />

                    <label htmlFor='main_img'>Display Image</label>
                    <input class='rounded p-2 text-stone-600' type='text' name='main_img' value={main_img} onChange={handleChange} />
                </div>
                {formData.main_img
                    ? <img class='w-1/3 rounded-lg mx-auto mt-3' src={formData.main_img} alt="Oops!" />
                    : null}

                <label>Description</label>
                <textarea class='rounded p-2 text-stone-600' name='description' value={description} onChange={handleChange} />

                <button class='px-4 py-2 mt-4 shadow-xl text-xl bg-stone-700 hover:bg-amber-600 rounded-xl' type='submit'>Memry Managed</button>
            </form>
            {errors ? errors.map(e => <h2 style={{ color: 'red' }}>{e.toUpperCase()}</h2>) : null}
        </div>
    )
};