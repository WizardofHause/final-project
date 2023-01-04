import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import spiral from '../triskelion-symbol.png'


function SignUp({ updateUser, fetchMemories }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const { name, email, password } = formData

    function onSubmit(e) {
        e.preventDefault()
        const user = {
            name,
            email,
            password
        }

        fetch(`/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(user => {
                        updateUser(user)
                        fetchMemories()
                        history.push(`/user_bank`)
                    })
                } else {
                    res.json().then(json => setErrors(Object.entries(json.errors)))
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
            <form onSubmit={onSubmit} class='text-center border-8 border-orange-200 rounded w-64 mx-auto mt-8'>
                <label class='p-2 block text-teal-700 font-semibold text-xl'>
                    Username
                </label>
                <input class='border-4 border-indigo-200 rounded h-8 text-purple-800 font-semibold' type='text' name='name' value={name} onChange={handleChange} />

                <label class='p-2 block text-teal-700 font-semibold text-xl'>
                    Email
                </label>
                <input class='border-4 border-indigo-200 rounded h-8 text-purple-800 font-semibold' type='text' name='email' value={email} onChange={handleChange} />

                <label class='p-2 block text-teal-700 font-semibold text-xl'>
                    Password
                </label>
                <input class='border-4 border-indigo-200 rounded h-8 text-purple-800 font-semibold' type='password' name='password' value={password} onChange={handleChange} />

                <button type='submit' class='p-2 block mx-auto my-2 bg-purple-500 text-purple-100'>Sign Up</button>
            </form>
            {errors ? errors.map(e => <div>{e[1]}</div>) : null}
        </div>
    )
}

export default SignUp