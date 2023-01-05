import { Link } from 'react-router-dom'
import { format } from 'date-fns'

export default function UserMemories({ memory }){
    return (
        <div className='tl-item'>
            <div className='tl-content'>
                <span className='tag' />
                <h1>{memory.title}</h1>
                <h4>{memory.category} - {memory.status}</h4>
                <Link to={`/memories/${memory.id}`} style={{ textDecoration: 'none' }}><img src={memory.main_img} alt="Render Error!" width="200" /></Link>
                <p>Likes: {memory.likes}</p>
                <p>{format(new Date(memory.date), 'MMMM d, yyyy (EEEE)')}</p>
                <p>{memory.description}</p>
                <Link to={`/memories/${memory.id}`} style={{ textDecoration: 'none' }}><button>More Details!</button></Link>
                <span className="circle" />
            </div>
        </div>
    )
}