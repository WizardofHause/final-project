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
        <>
            <Link to='/' style={{ textDecoration: 'none' }}><button><img src={spiral} width='50' alt="Oops! ¯\_(ツ)_/¯" /></button></Link>
            <form onSubmit={onSubmit}>
                <label>
                    Username
                </label>
                <input type='text' name='name' value={name} onChange={handleChange} />

                <label>
                    Email
                </label>
                <input type='text' name='email' value={email} onChange={handleChange} />

                <label>
                    Password
                </label>
                <input type='password' name='password' value={password} onChange={handleChange} />

                <input type='submit' value='Sign up!' />
            </form>
            {errors ? errors.map(e => <div>{e[1]}</div>) : null}
        </>
    )
}

export default SignUp