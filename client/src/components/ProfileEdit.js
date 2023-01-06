import React, { useState, useEffect } from 'react'

function ProfileEdit({ userProfile, setUserProfile, setEditMenu }) {
    const [formData, setFormData] = useState({
            first_name: '',
            last_name: '',
            dob: '',
            pob: '',
            current_city: '',
            family: '',
            interests: '',
        })
    
    const [errors, setErrors] = useState([])

    const { first_name, last_name, dob, pob, current_city, family, interests } = formData

    useEffect(() => {
        fetch(`/user_profiles/${userProfile.id}`)
            .then((res) => res.json())
            .then((profile) => setFormData(profile))
    }, [userProfile.id])

    function onSubmit(e) {
        e.preventDefault()
        fetch(`/user_profiles/${userProfile.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({...formData})
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(profile => {
                        setUserProfile(profile)
                        setEditMenu(false)
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
        <div>
            <form onSubmit={onSubmit} class='bg-stone-100 border-4 border-stone-300 rounded-lg p-6 text-stone-600 font-semibold flex flex-wrap'>
                <label>
                    First Name
                </label>
                <input type='text' name='first_name' value={first_name} onChange={handleChange} />

                <label>
                    Last Name
                </label>
                <input type='text' name='last_name' value={last_name} onChange={handleChange} />

                <label>
                    Birthday
                </label>
                <input type='date' name='dob' value={dob} onChange={handleChange} />

                <label>
                    Birth Place
                </label>
                <input type='text' name='pob' value={pob} onChange={handleChange} />

                <label>
                    Current City
                </label>
                <input type='text' name='current_city' value={current_city} onChange={handleChange} />

                <label>
                    Family Members
                </label>
                <input type='text' name='family' value={family} onChange={handleChange} />

                <label>
                    Interests & Hobbies
                </label>
                <input type='text' name='interests' value={interests} onChange={handleChange} />

                <button type='submit' class='px-2 py-1 mt-2 inline flex-col text-center justify-center items-center bg-stone-300 rounded-lg text-xs text-stone-500 shadow uppercase mr-auto'>Remember Me</button> 
            </form>
            {errors ? errors.map(e => <div>{e[1]}</div>) : null}
        </div>
    )
}

export default ProfileEdit