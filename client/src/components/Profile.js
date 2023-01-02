import React from 'react';
import { Link } from 'react-router-dom'

export default function Profile({ currentUser }) {
    const { user_profile, memories, comments } = currentUser

    const sortedMemories = (memories.slice(0).sort((a, b) => a.date.localeCompare(b.date))).reverse()

    const memoryCard = sortedMemories.map(memory => {
        return (
            <div className='tl-item' key={memory.id}>
                <div className='tl-content'>
                    <span className='tag' />
                    <h1>{memory.title}</h1>
                    <h4>{memory.category} - {memory.status}</h4>
                    <Link to={`/memories/${memory.id}`} style={{ textDecoration: 'none' }}><img src={memory.main_img} alt="Render Error!" width="200" /></Link>
                    <p>Likes: {memory.likes}</p>
                    <p>{memory.date}</p>
                    <p>{memory.description}</p>
                    <Link to={`/memories/${memory.id}`} style={{ textDecoration: 'none' }}><button>More Details!</button></Link>
                    <span className="circle" />
                </div>
            </div>
        )
    })

    const commentCard = comments.map(comment => {
        return (
            <div key={comment.id}>
                <Link to={`/memories/${comment.memory.id}`} style={{ textDecoration: 'none' }}><h3>{comment.memory.title}:</h3></Link>
                {/* <h3>{comment.memory.title}:</h3> */}
                <div className='comment-item' key={comment.id}>
                    <br />
                    <span className='comment-content'>"{comment.body}" - {currentUser.name}</span>
                </div>
            </div>
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
            {memories.length > 0 ?
            <div className='tl-container'>
                {memoryCard}
            </div>
            : <p>Nothing Here! Create some Memry's, ya dinker doink!</p>}
            <h2>{currentUser.name}'s Comments</h2>
            {comments.length > 0 ?
            <div className='comments-container'>
                {commentCard}
            </div>
            : <p>Nothing Here! Comment on some shit, ya dinker doink!</p>}
        </>
    )
}