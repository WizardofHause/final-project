import React from 'react';

export default function Profile({ currentUser }) {
    const { name, email, user_profile, memories, comments } = currentUser
    return (
        <>
        <h1>{name}</h1>
        <h1>{user_profile ? user_profile.first_name : null}</h1>
        </>
    )
}