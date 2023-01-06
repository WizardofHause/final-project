import { Link } from 'react-router-dom'

export default function UserComments({ comment }){
    return (
        <div class='border-4 border-stone-300 m-2 p-2 rounded-lg bg-stone-100'>
            <Link to={`/memories/${comment.memory.id}`} style={{ textDecoration: 'none' }}><span class='text-italic font-black hover:text-blue-600'>{comment.memory.title}:</span></Link>
            <span className='user-comment-item' key={comment.id}>
                <span className='user-comment-content'><em>"{comment.body}"</em></span>
            </span>
        </div>
    )
}