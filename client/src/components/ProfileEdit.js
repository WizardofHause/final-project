// import React, { useState, useEffect } from 'react'
import React, { useState } from 'react'

function ProfileEdit({ currentUser, createProfile }) {
    const { user_profile } = currentUser
    const [formData, setFormData] = useState(user_profile ? {
        first_name: user_profile.first_name,
        last_name: user_profile.last_name,
        dob: user_profile.dob,
        pob: user_profile.pob,
        current_city: user_profile.current_city,
        family: user_profile.family,
        interests: user_profile.interests,
        user_id: currentUser.id
    }
    : {
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

    // useEffect(() => {
    //     fetch(`/user_profiles/${user_id}`)
    //         .then((res) => res.json())
    //         .then((profile) => setFormData(profile))
    // }, [user_id])

    function onSubmit(e) {
        e.preventDefault()
        // const profile = {
        //     first_name,
        //     last_name,
        //     dob,
        //     pob,
        //     current_city,
        //     family,
        //     interests,
        // }
        fetch(`/user_profiles/${user_profile.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(profile => {
                        console.log(profile)
                        createProfile(profile)
                        // history.push(`/user_bank`) //<- ROUTE NEEDS CHANGING
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

export default ProfileEdit