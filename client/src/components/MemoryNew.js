import { useState } from 'react'
import { useHistory } from 'react-router-dom'


export default function MemoryNew({ addMemory, currentUser }) {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        status: '',
        main_img: '',
        description: '',
        user_id: ''
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const { title, category, status, main_img, description } = formData

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
            .then(res => {
                if (res.ok) {
                    res.json()
                        .then(addMemory);
                    history.push(`/bank`)
                } else {
                    res.json()
                        .then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
                }
            })
    }
    return (
        <div>
            {errors ? errors.map(e => <div>{e}</div>) : null}
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

                <label htmlFor='date'>Date</label>
                <input type='date'/>

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