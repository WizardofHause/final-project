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
        user_id: ''
    })
    const [errors, setErrors] = useState([])

    // initialize useParams and useHistory
    const { id } = useParams()
    const history = useHistory()

    // destructure formData object keys to use as values in edit form
    const { title, category, status, main_img, description } = formData

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
        .then((r)=>r.json())
        .then((updatedMemory) => {
            editMemory(updatedMemory);
            history.push(`/bank`) // <-- currently routes to main bank page!!!
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor='title'>Title</label>
                <input type='text' name='title' value={title} onChange={handleChange} />

                <label htmlFor='category'>Category</label>
                <select name='category' id='category' value={category} onChange={handleChange}>
                    <option value='vacation'>Vacation</option>
                    <option value='romance'>Romance</option>
                    <option value='event'>Event</option>
                    <option value='meeting'>Meeting</option>
                    <option value='appointment'>Appointment</option>
                    <option value='holiday'>Holiday</option>
                    <option value='celebration'>Celebration</option>
                    <option value='in_memoriam'>In Memoriam</option>
                    <option value='just_because'>Just Because</option>
                    <option value='private'>Private</option>
                </select>

                <label htmlFor='status'>Status</label>
                <select name='status' id='status' value={status} onChange={handleChange}>
                    <option value='past'>Past</option>
                    <option value='present'>Present</option>
                    <option value='future'>Future</option>
                </select>

                <label htmlFor='main_img'>Display Image</label>
                <input type='text' name='main_img' value={main_img} onChange={handleChange} />

                <label>Description</label>
                <input type='text' name='description' value={description} onChange={handleChange} />

                <button type='submit'>Memory Made</button>
            </form>
            {errors ? errors.map(e => <h2 style={{ color: 'red' }}>{e.toUpperCase()}</h2>) : null}
        </div>
    )
};