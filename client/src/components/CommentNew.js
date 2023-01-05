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
                        .then(setErrors)
                }
                else {
                    res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[1]}`)))
                }
            })
    }

    return (
        <div className='comment-new'>
                <form className='comment-new-form' onSubmit={onSubmit}>
                    <h3><label>Add Comment </label></h3>
                    <textarea className='body' name='body' value={formData.body} onChange={handleChange} />
                    <button type='submit'>SUBMIT</button>
                </form>
            {errors ? errors.map(e => <h2 style={{ color: 'red' }}>{e.toUpperCase()}</h2>) : null}
        </div>
    )
};

export default CommentNew;