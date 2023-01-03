import { Link } from 'react-router-dom'

export default function UserComments({ comment }){
    return (
        <div>
            <Link to={`/memories/${comment.memory.id}`} style={{ textDecoration: 'none' }}><h3>{comment.memory.title}:</h3></Link>
            <div className='comment-item' key={comment.id}>
                <span className='comment-content'>"{comment.body}" - {comment.user.name}</span>
            </div>
        </div>
    )
}