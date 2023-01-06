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

    // return (
    //     <>
    //         <form id='profile_edit_form' onSubmit={onSubmit}>
    //             <label>
    //                 First Name
    //             </label>
    //             <input type='text' name='first_name' value={first_name} onChange={handleChange} />

    //             <label>
    //                 Last Name
    //             </label>
    //             <input type='text' name='last_name' value={last_name} onChange={handleChange} />

    //             <label>
    //                 Birthday
    //             </label>
    //             <input type='date' name='dob' value={dob} onChange={handleChange} />

    //             <label>
    //                 Birth Place
    //             </label>
    //             <input type='text' name='pob' value={pob} onChange={handleChange} />

    //             <label>
    //                 Current City
    //             </label>
    //             <input type='text' name='current_city' value={current_city} onChange={handleChange} />

    //             <label>
    //                 Family Members
    //             </label>
    //             <input type='text' name='family' value={family} onChange={handleChange} />

    //             <label>
    //                 Interests & Hobbies
    //             </label>
    //             <input type='text' name='interests' value={interests} onChange={handleChange} />

    //             <input type='submit' value='Remember Me' />
    //         </form>
    //         {errors ? errors.map(e => <div>{e[1]}</div>) : null}
    //     </>
    // )

    return (
        <div>
            <form id='profile_edit_form' onSubmit={onSubmit} class='bg-stone-100 border-4 border-stone-300 rounded-lg p-6 text-stone-600'>
                <div class='m-1'>
                <label>
                    First Name
                </label>
                <input class='rounded p-2 text-stone-600' type='text' name='first_name' value={first_name} onChange={handleChange} />

                <label class='ml-3'>
                    Last Name
                </label>
                <input class='rounded p-2 text-stone-600' type='text' name='last_name' value={last_name} onChange={handleChange} />
                </div>

                <div class='m-1'>
                <label>
                    Birthday
                </label>
                <input class='rounded p-2 text-stone-600' type='date' name='dob' value={dob} onChange={handleChange} />
                
                <label class='ml-16'>
                    Birth Place
                </label>
                <input class='rounded p-2 text-stone-600' type='text' name='pob' value={pob} onChange={handleChange} />
                </div>

                <div class='m-1'>
                <label>
                    Current City
                </label>
                <input class='rounded p-2 text-stone-600' type='text' name='current_city' value={current_city} onChange={handleChange} />

                <label>
                    Occupation
                </label>
                <input class='rounded p-2 text-stone-600' type='text' name='family' value={family} onChange={handleChange} />
                </div>
                
                <label>
                   User Bio
                </label>
                <textarea class='rounded p-2 text-stone-600' name='interests' value={interests} onChange={handleChange} />

                <button type='submit' class='px-2 py-1 mt-2 bg-stone-300 rounded-lg text-xs text-stone-500 shadow uppercase'>Remember Me</button> 
            </form>
            {errors ? errors.map(e => <div>{e[1]}</div>) : null}
        </div>
    )
}

export default ProfileNew