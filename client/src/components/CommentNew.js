import { useState } from "react"

function CommentNew({ memory, currentUser, onAddComment }) {
    const [errors, setErrors] = useState(false)
    const [formData, setFormData] = useState({
        body: '',
    })

    // HANDLER FUNCTION SETS STATE FOR FORM DATA BASED ON INPUT
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    // PERSISTS FORM DATA TO DB OR RENDERS AN ERROR MESSAGE
    function onSubmit() {
        fetch('/comments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData, memory_id: memory.id, user_id: currentUser.id })
        })
            .then(res => {
                console.log(currentUser)
                if (res.ok) {
                    res.json()
                        .then((newComment) => { onAddComment(newComment) })
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
                    <input type='text' name='comment' value={formData.comment} onChange={handleChange} />
                    <input type='submit' value='create' />
                </form>
                : null}
            {errors ? errors.map(e => <h2 style={{ color: 'red' }}>{e.toUpperCase()}</h2>) : null}
        </div>
    )
};

export default CommentNew;