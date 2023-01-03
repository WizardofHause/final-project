import React, { useState } from 'react'

function ProfileNew({ currentUser, setUserProfile }) {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        dob: '',
        pob: '',
        current_city: '',
        family: '',
        interests: '',
        user_id: currentUser.id
    })
    const [errors, setErrors] = useState([])

    const { first_name, last_name, dob, pob, current_city, family, interests } = formData

    function onSubmit(e) {
        e.preventDefault()
        console.log(formData)
        fetch(`/user_profiles`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({...formData, user_id: currentUser.id})
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(profile => {
                        setUserProfile(profile)
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
            <form onSubmit={onSubmit}>
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

                <input type='submit' value='Remember Me' />
            </form>
            {errors ? errors.map(e => <div>{e[1]}</div>) : null}
        </>
    )
}

export default ProfileNew