import { Link } from 'react-router-dom'

function MemoryCard({ memory }){
    const { title, category, status, main_img, description, likes, user } = memory
    return(
        <div>
            <h1>{title} by {user.name}</h1>
            <h4>{category} - {status}</h4>
            <img src={main_img} alt="Render Error!" width="200"/>
            <p>Likes: {likes}</p>
            <p>{description}</p>
            <Link to={`/memories/${memory.id}`}><button> See More Details!</button></Link>
        </div>
    )
}

export default MemoryCard