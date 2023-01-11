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
        <div class='flex flex-col justify-center items-center h-screen'>
            <Link to='/' style={{ textDecoration: 'none' }}><img src={spiral} class='w-64 mx-auto select-none' alt="Oops! ¯\_(ツ)_/¯" /></Link>
            <h1 class='p-4 text-6xl font-extrabold font-sans tracking-wide text-center select-none'>
                <span class='text-stone-900 hover:text-red-900'>M</span>
                <span class='text-stone-800 hover:text-amber-600'>e</span>
                <span class='text-stone-700 hover:text-teal-700'>m</span>
                <span class='text-stone-600 hover:text-sky-800'>r</span>
                <span class='text-stone-500 hover:text-indigo-900'>y</span>
                </h1>
            <form onSubmit={onSubmit}>
                <div class='text-center mx-auto'>
                    <label class='p-2 block text-stone-700 font-semibold text-xl'>
                        Username
                    </label>
                    <input class='border-4 border-stone-700 hover:border-teal-700 rounded h-8 text-teal-700 font-semibold bg-transparent focus:bg-teal-50' type='text' name='name' value={name} onChange={handleChange} />
                    <label class='p-2 block text-stone-700 font-semibold text-xl'>
                        Password
                    </label>
                    <input class='border-4 border-stone-700 hover:border-teal-700 rounded h-8 text-teal-700 font-semibold bg-transparent focus:bg-teal-50' type='password' name='password' value={password} onChange={handleChange} autoComplete='off' />
                    <button class='p-2 block mx-auto my-2 bg-stone-700 text-stone-50 hover:bg-teal-700 hover:text-teal-50 rounded-lg' type='submit'>Log In</button>
                </div>
            </form>
            {errors ? <div class='border-2 border-red-300 bg-red-100 py-1 px-2 m-2 text-red-600 font-black uppercase'>{errors}</div> : null}
        </div>
    )
}

export default LogIn