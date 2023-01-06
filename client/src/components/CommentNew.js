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
        <div>
            <h3 class='font-black text-lg p-2 px-4 my-4 rounded-lg bg-stone-100'>Add Comment</h3>
                <form onSubmit={onSubmit} class='text-center'>
                    <textarea class='w-11/12 h-full p-2' name='body' value={formData.body} onChange={handleChange} placeholder='Type some shit, ya stupid'/>
                    <div>
                    <button class='rounded-lg shadow-xl text-xl bg-stone-700 hover:bg-amber-600 rounded-xl' type='submit'>SUBMIT</button>
                    </div>
                </form>
            {errors ? errors.map(e => <h2 style={{ color: 'red' }}>{e.toUpperCase()}</h2>) : null}
        </div>
    )
};

export default CommentNew;