import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
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

    // return (
    //     // <div class='ml-24 mr-2 mt-4 flex flex-col items-center'>
    //     <div class='ml-24 mr-2 mt-4 flex flex-col items-center'>
    //         <span class='bg-stone-300 rounded-lg my-2 px-3 py-0'>
    //             <h1 class='my-4 font-black text-stone-600 bg-stone-100 text-4xl p-3 text-center rounded'>{currentUser.name}'s Profile</h1>
    //         </span>
    //         <ProfileDetails
    //             userProfile={userProfile}
    //             setUserProfile={setUserProfile}
    //             currentUser={currentUser}
    //         />
    //         <span class='px-4 font-black text-2xl p-2 rounded-lg bg-stone-100 border-4 border-stone-300 text-stone-600'>{currentUser.name}'s Memry's</span>
    //         {memories.length > 0 ?
    //             <div className='tl-container'>
    //                 {userMemories}
    //             </div>
    //             : <>
    //                 <p class='mt-4 px-2 font-semibold text-lg italic bg-red-700 border-4 border-red-900 text-red-100 rounded-lg uppercase'>YOU HAVE ACCOMPLISHED NOTHING</p>
    //                 <p class='mt-1 font-semibold'>Create some Memry's, ya dinker doink!</p>
    //                 <NavLink to='/memories/new' style={{ textDecoration: 'none' }}><button class='px-2 py-1 m-2 flex-col text-center justify-center items-center bg-stone-300 ml-auto rounded-lg text-xs text-stone-500 shadow'>LET'S MAKE SOME MEMRY'S</button></NavLink>
    //             </>}
    //         <div class='px-6 pt-8 pb-none m-4 bg-stone-200 rounded-lg'>
    //             <span class='px-4 font-black text-2xl p-2 rounded-lg bg-stone-100 border-4 border-stone-300'>{currentUser.name}'s Comments</span>
    //             {comments.length > 0 ?
    //                 <div className='comments-container'>
    //                     {userComments}
    //                 </div>
    //                 : <p>Nothing Here?! Comment on some shit, ya dinker doink!</p>}
    //         </div>
    //     </div>
    // )

    //         flex flex-col items-center


    return (
        <div class='ml-24 mr-4 mt-4'> 
            <div class='flex flex-col items-start'>
                <h1 class='my-4 font-black text-stone-600 bg-stone-100 text-4xl p-3 text-center rounded-lg border-4 border-stone-300'>{currentUser.name}'s Profile</h1>
            </div>
            <div class='flex flex-col items-start'>
            <ProfileDetails
                userProfile={userProfile}
                setUserProfile={setUserProfile}
                currentUser={currentUser}
            />
            </div>
            <span class='px-4 font-black text-2xl p-2 rounded-lg bg-stone-100 border-4 border-stone-300 text-stone-600'>{currentUser.name}'s Memry's</span>
            {memories.length > 0 ?
                <div className='tl-container'>
                    {userMemories}
                </div>
                : <>
                    <p class='mt-4 px-2 font-semibold text-lg italic bg-red-700 border-4 border-red-900 text-red-100 rounded-lg uppercase'>YOU HAVE ACCOMPLISHED NOTHING</p>
                    <p class='mt-1 font-semibold'>Create some Memry's, ya dinker doink!</p>
                    <NavLink to='/memories/new' style={{ textDecoration: 'none' }}><button class='px-2 py-1 m-2 flex-col text-center justify-center items-center bg-stone-300 ml-auto rounded-lg text-xs text-stone-500 shadow'>LET'S MAKE SOME MEMRY'S</button></NavLink>
                </>}
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