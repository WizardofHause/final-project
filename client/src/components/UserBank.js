import React, { useState, useEffect } from 'react';
// import ProfileEdit from './ProfileEdit'
// import ProfileNew from './ProfileNew'
import UserMemories from './UserMemories'
import UserComments from './UserComments'
import ProfileDetails from './ProfileDetails'

export default function UserBank({ currentUser }) {
    const { user_profile, memories, comments } = currentUser
    const [userProfile, setUserProfile] = useState(false)

    useEffect(() => {
        if (user_profile) {
            fetch(`/user_profiles/${user_profile.id}`)
                .then((res) => {
                    if (res.ok) {
                        res.json()
                            .then((profile) => setUserProfile(profile))
                    } 
                })
        } else {
            setUserProfile(false)
        }
    }, [user_profile])

    const createProfile = (profile) => setUserProfile(profile)

    const sortedMemories = (memories.slice(0).sort((a, b) => a.date.localeCompare(b.date))).reverse()

    const userMemories = sortedMemories.map(memory => {
        return (
            <UserMemories
                key={memory.createdAt}
                memory={memory}
            />
        )
    })

    const userComments = comments.map(comment => {
        return (
            <UserComments
                key={comment.createdAt}
                comment={comment}
            />
        )
    })

    return (
        <>
            <h1>{currentUser.name}'s Profile</h1>
            {/* {userProfile ?
                // MAKE THESE INTO TWO SEPARATE COMPONENTS
                <>
                    <p>{user_profile.first_name} {user_profile.last_name}</p>
                    <p>Born {user_profile.dob}, in {user_profile.pob}</p>
                    <p>Current City: {user_profile.current_city}</p>
                    <p>Family Members: {user_profile.family}</p>
                    <p>Interests & Hobbies: {user_profile.interests}</p>
                    <ProfileEdit currentUser={currentUser} createProfile={createProfile} />
                </>
                : <>
                    <p>Nothing Here! Create a profile, ya dinker doink!</p>
                    <ProfileNew currentUser={currentUser} createProfile={createProfile} />
                </>} */}
                <ProfileDetails currentUser={currentUser} createProfile={createProfile} user_profile={userProfile}/>
            <h2>{currentUser.name}'s Memry's</h2>
            {memories.length > 0 ?
                <div className='tl-container'>
                    {userMemories}
                </div>
                : <p>Nothing Here! Create some Memry's, ya dinker doink!</p>}

            <h2>{currentUser.name}'s Comments</h2>
            {comments.length > 0 ?
                <div className='comments-container'>
                    {userComments}
                </div>
                : <p>Nothing Here! Comment on some shit, ya dinker doink!</p>}
        </>
    )
}