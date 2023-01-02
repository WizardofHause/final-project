import React from 'react';
import MemoryCard from './MemoryCard'
import CommentCard from './CommentCard'

export default function Profile({ currentUser }) {
    const { user_profile, memories, comments } = currentUser

    const sortedMemories = (memories.slice(0).sort((a, b) => a.date.localeCompare(b.date))).reverse()

    const memoryCard = sortedMemories.map(memory => {
        return (
            <MemoryCard
                key={memory.id}
                memory={memory}
            />
        )
    })

    const commentCard = comments.map(comment => {
        return (
            <CommentCard
                key={comment.id}
                comment={comment}
                currentUser={currentUser}
            />
        )
    })

    return (
        <>
            <h1>{currentUser.name}'s Profile</h1>
            {user_profile ?
                <>
                    <p>{user_profile.first_name} {user_profile.last_name}</p>
                    <p>Born {user_profile.dob}, in {user_profile.pob}</p>
                    <p>Current City: {user_profile.current_city}</p>
                    <p>Family Members: {user_profile.family}</p>
                    <p>Interests & Hobbies: {user_profile.interests}</p>
                </>
                : <p>Nothing Here! Create a profile, ya dinker doink!</p>}
            <h2>{currentUser.name}'s Memry's</h2>
            <div className='tl-container'>
                {memoryCard}
            </div>
            <h2>{currentUser.name}'s Comments</h2>
            <div className='comments-container'>
                {commentCard}
            </div>
        </>
    )
}