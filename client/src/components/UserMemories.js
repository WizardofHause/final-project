import { Link } from 'react-router-dom'
import { format } from 'date-fns'

export default function UserMemories({ memory }) {
    return (
        <div className='tl-item'>
            <div className='tl-content'>
                <Link to={`/memories/${memory.id}`} style={{ textDecoration: 'none' }}>
                    <div class='border-4'>
                        {/* <span className='tag' /> */}
                        <p>{format(new Date(memory.date), 'MMMM d, yyyy (EEEE)')}</p>
                        <h1>{memory.title}</h1>
                        <h4>{memory.category} - {memory.status}</h4>
                        <img src={memory.main_img} alt="Render Error!" width="200" />
                        <p>Likes: {memory.likes}</p>
                        <p>{memory.description}</p>
                        <span className="circle" />
                    </div>
                </Link>
            </div>
        </div>
    )
}