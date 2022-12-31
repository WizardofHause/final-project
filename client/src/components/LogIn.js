import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import spiral from '../triskelion-symbol.png'


function LogIn({ fetchUser }) {
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
                        fetchUser(user)
                        history.push('/bank')
                    })
                } else {
                    res.json().then(json => setErrors(json.errors))
                    console.log(errors)
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
                    Password
                </label>
                <input type='password' name='password' value={password} onChange={handleChange} autoComplete='off' />
                <input type='submit' value='Log In' />
            </form>
            {errors ? <div>{errors}</div> : null}
        </>
    )
}

export default LogIn