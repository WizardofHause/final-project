import { useState } from 'react'

export default function MemoryNew({ addMemory, currentUser }) {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        status: '',
        main_img: '',
        description: '',
        likes: '',
        user_id: ''
    })
    const [errors, setErrors] = useState([])

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
                        .then(addMemory)
                } else {
                    res.json()
                        .then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
                }
            })
    }
    return (
        <div>
            { errors ? errors.map(e => <div>{e}</div>) : null }
            <form onSubmit={onSubmit}>
                <label>Title</label>
                <input type='text' name='title' value={formData.title} onChange={handleChange} />

                <label>Category</label>
                <input type='text' name='category' value={formData.category} onChange={handleChange} />

                <label>Status</label>
                <input type='number' name='status' value={formData.status} onChange={handleChange} />

                <label>Display Image</label>
                <input type='text' name='main_img' value={formData.main_img} onChange={handleChange} />

                <label>Description</label>
                <input type='text' name='description' value={formData.description} onChange={handleChange} />

                <input type='submit' value='Create' />
            </form>
            {errors ? errors.map(e => <h2 style={{ color: 'red' }}>{e.toUpperCase()}</h2>) : null}
        </div>
    )
};