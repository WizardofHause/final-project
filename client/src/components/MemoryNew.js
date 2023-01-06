import { useState } from 'react'
import { useHistory } from 'react-router-dom'


export default function MemoryNew({ addMemory, currentUser }) {
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
    const history = useHistory()

    const { title, category, status, main_img, description, date } = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function onSubmit(e) {
        e.preventDefault()

        fetch('/memories', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData, user_id: currentUser.id })
        })
            .then((res) => {
                if (res.ok) {
                    res.json()
                        .then((memory) => {
                            addMemory(memory);
                            history.push(`/memories/${memory.id}`)
                        })
                } else {
                    res.json()
                        .then(data => setErrors(Object.entries(data.errors).map(e => `${e[1]}`)))
                }
            })
    }
    return (
        <div class='ml-24 mr-20 mt-12 bg-stone-200 border-4 border-stone-300 rounded-lg p-6 text-stone-600'>
            <form onSubmit={onSubmit} id='profile_edit_form'>
                <label htmlFor='title'>Title</label>
                <input class='rounded p-2 text-stone-600' type='text' name='title' value={title} onChange={handleChange} />

                <div class='flex-row mt-4'>
                    <label htmlFor='category'>Category</label>
                    <select class='rounded p-2 text-stone-600' name='category' id='category' value={category} onChange={handleChange}>
                        <option value=''>---</option>
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
                        <option value=''>---</option>
                        <option value='past'>Past</option>
                        <option value='present'>Present</option>
                        <option value='future'>Future</option>
                    </select>

                    <label htmlFor='date'>Date</label>
                    <input class='rounded p-2 text-stone-600' type='date' name='date' value={date} onChange={handleChange} />

                    <label htmlFor='main_img'>Main Image</label>
                    <input class='rounded p-2 text-stone-600 w-1/4' type='text' name='main_img' value={main_img} onChange={handleChange} />
                </div>
                {formData.main_img
                    ? <img class='w-1/3 rounded-lg mx-auto mt-3' src={formData.main_img} alt="Oops!" />
                    : null}

                <label>Description</label>
                <textarea class='rounded p-2 text-stone-600' name='description' value={description} onChange={handleChange} />

                <button class='px-4 py-2 m-2 shadow-xl text-xl bg-stone-700 hover:bg-amber-600 rounded-xl' type='submit'>Memory Made</button>
            </form>
            {errors ? errors.map(e => <h2 style={{ color: 'red' }}>{e.toUpperCase()}</h2>) : null}
        </div>
    )
};