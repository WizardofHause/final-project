import { Link } from 'react-router-dom'
import { format } from 'date-fns'

function MemoryCard({ memory }) {
    const { title, category, status, main_img, description, likes, user, date } = memory
    console.log(date)
    // const newDate = (date) => {
    //     const dateArray = []
    //     dateArray.push(`${date}T00:00`)
    //     return dateArray[0]
    // }
    // console.log(newDate(date))
    return (
        <div className='tl-item'>
            <div className='tl-content'>
            <Link to={`/memories/${memory.id}`} style={{ textDecoration: 'none' }}>
                <span className='tag'/>
                    <h1 class='font-black'>{title} <span class='text-sm italic font-semibold'>by {user.name}</span></h1>
                    <h4 class='capitalize'>{category} - {status}</h4>
                    {/* <Link to={`/memories/${memory.id}`} style={{ textDecoration: 'none' }}><img src={main_img} alt="Render Error!" width="200" /></Link> */}
                    <img src={main_img} alt="Render Error!" width="200" />
                    <p>Favorites: {likes}</p>
                    {/* <p>{date}</p> */}
                    <p>{format(new Date(date), 'MMMM d, yyyy (EEEE)')}</p>
                    <p>{description}</p>
                    {/* <Link to={`/memories/${memory.id}`} style={{ textDecoration: 'none' }}><button>More Details!</button></Link> */}
                <span className="circle" />
                </Link>
            </div>
        </div>
    )
}

export default MemoryCard