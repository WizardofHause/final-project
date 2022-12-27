import { Link } from 'react-router-dom'

function MemoryCard({ memory }) {
    const { title, category, status, main_img, description, likes, user, date } = memory
    return (
        <div className='tl-item'>
            <div className='tl-content'>
                <span className='tag'/>
                    <h1>{title} by {user.name}</h1>
                    <h4>{category} - {status}</h4>
                    <Link to={`/memories/${memory.id}`} style={{ textDecoration: 'none' }}><img src={main_img} alt="Render Error!" width="200" /></Link>
                    <p>Likes: {likes}</p>
                    <p>Date: {date}</p>
                    <p>{description}</p>
                    <Link to={`/memories/${memory.id}`} style={{ textDecoration: 'none' }}><button>More Details!</button></Link>
                <span className="circle" />
            </div>
        </div>
    )
}

export default MemoryCard