import { useState } from "react"

const initialState = {
    body: '',
    memory_id: '',
    user_id: ''
}

function CommentNew({ memory, currentUser, onAddComment }) {
    const [errors, setErrors] = useState(false)
    const [formData, setFormData] = useState({
        body: '',
        memory_id: '',
        user_id: ''
    })

    // SETS INPUT VALUE TO STATE
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    // PERSISTS FORM DATA TO DB OR RENDERS AN ERROR MESSAGE
    function onSubmit(e) {
        e.preventDefault()
        fetch('/comments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData, memory_id: memory.id, user_id: currentUser.id })
        })
            .then(res => {
                if (res.ok) {
                    res.json()
                        .then(onAddComment)
                        .then(setFormData(initialState))
                }
                else {
                    res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
                }
            })
    }

    return (
        <div>
            {currentUser ?
                <form onSubmit={onSubmit}>
                    <label>Comment </label>
                    <input type='text' name='body' value={formData.body} onChange={handleChange} />
                    <input type='submit' value='create' />
                </form>
                : null}
            {errors ? errors.map(e => <h2 style={{ color: 'red' }}>{e.toUpperCase()}</h2>) : null}
        </div>
    )
};

export default CommentNew;