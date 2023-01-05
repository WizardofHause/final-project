import React, { useState, useEffect } from 'react';
import UserMemories from './UserMemories'
import UserComments from './UserComments'
import ProfileDetails from './ProfileDetails'

export default function UserBank() {
    const [currentUser, setCurrentUser] = useState(false)
    const [memories, setMemories] = useState([])
    const [comments, setComments] = useState([])
    const [userProfile, setUserProfile] = useState(false)

    const updateUser = (user) => setCurrentUser(user)

    useEffect(() => {
        fetch('/authorized_user')
            .then((res) => {
                if (res.ok) {
                    res.json()
                        .then((user) => {
                            updateUser(user)
                            setUserProfile(user.user_profile)
                            setComments(user.comments)
                            setMemories(user.memories)
                        })
                }
            })
    }, [])

    const sortedMemories = (memories.slice(0).sort((a, b) => a.date.localeCompare(b.date))).reverse()

    const userMemories = sortedMemories.map(memory => {
        return (
            <UserMemories
                key={memory.created_at}
                memory={memory}
            />
        )
    })

    const userComments = comments.map(comment => {
        return (
            <UserComments
                key={comment.created_at}
                comment={comment}
            />
        )
    })

    return (
        <div class='ml-24 mt-4 flex flex-col items-center'>
            <span class='bg-orange-200 rounded-2xl my-2 px-4'>
                <h1 class='my-4 font-black text-stone-600 bg-stone-100 text-4xl p-2 text-center rounded-lg px-auto'>{currentUser.name}'s Profile</h1>
            </span>
            <ProfileDetails
                userProfile={userProfile}
                setUserProfile={setUserProfile}
                currentUser={currentUser}
            />
            <span class='px-4 font-black text-2xl p-2 rounded-lg bg-stone-100 border-4 border-stone-300 text-stone-600'>{currentUser.name}'s Memry's</span>
            {memories.length > 0 ?
                <div className='tl-container'>
                    {userMemories}
                </div>
                : <p>Nothing Here?! Create some Memry's, ya dinker doink!</p>}
            <div class='px-6 pt-8 pb-none m-4 bg-stone-200 rounded-lg'>
                <span class='px-4 font-black text-2xl p-2 rounded-lg bg-stone-100 border-4 border-stone-300'>{currentUser.name}'s Comments</span>
                {comments.length > 0 ?
                    <div className='comments-container'>
                        {userComments}
                    </div>
                    : <p>Nothing Here?! Comment on some shit, ya dinker doink!</p>}
            </div>
        </div>
    )
}