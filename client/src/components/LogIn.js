import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import spiral from '../triskelion-symbol.png'


function LogIn({ updateUser, fetchMemories }) {
    const [formData, setFormData] = useState({
        name: '',
        password: ''
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const { name, password } = formData

    function onSubmit(e) {
        e.preventDefault()
        const user = {
            name,
            password
        }
        fetch(`/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(user => {
                        updateUser(user)
                        fetchMemories()
                        history.push('/bank')
                    })
                } else {
                    res.json().then(json => setErrors(json.errors))
                }
            })

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    return (
        <div class='text-center mt-48'>
            <Link to='/' style={{ textDecoration: 'none' }}><img src={spiral} class='w-64 mx-auto' alt="Oops! ¯\_(ツ)_/¯" /></Link>
                <form onSubmit={onSubmit}>
                    <div class='text-center border-8 border-orange-200 w-64 mx-auto'>
                    <label class='p-2 block text-orange-700 font-semibold text-xl'>
                        Username
                    </label>
                    <input class='border-4 border-orange-200 rounded h-8 text-orange-800 font-semibold' type='text' name='name' value={name} onChange={handleChange} />
                    <label class='p-2 block text-orange-700 font-semibold text-xl'>
                        Password
                    </label>
                    <input class='border-4 border-orange-200 rounded h-8 text-orange-800 font-semibold' type='password' name='password' value={password} onChange={handleChange} autoComplete='off' />
                    <button class='p-2 block mx-auto my-2 bg-orange-600 text-orange-100' type='submit'>Log In</button>
                    </div>
                </form>
            {errors ? <div>{errors}</div> : null}
        </div>
    )
}

export default LogIn