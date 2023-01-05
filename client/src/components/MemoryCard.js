import { useState } from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'

function MemoryCard({ memory }) {
    const [details, setDetails] = useState(false)
    
    const { title, category, status, main_img, description, likes, user, date } = memory

    const styleCategory = (category) => {
        let c;
        switch (category) {
            case 'vacation':
                c = 'bg-green-300 capitalize text-center';
                break;
            case 'romance':
                c = 'bg-red-300 capitalize text-center';
                break;
            case 'event':
                c = 'bg-blue-300 capitalize text-center';
                break;
            case 'holiday':
                c = 'bg-yellow-300 capitalize text-center';
                break;
            case 'celebration':
                c = 'bg-purple-300 capitalize text-center';
                break;
        }
        return c
    }

    const showDetails = () => {
        setDetails(!details)
    }
    
    return (
        <div className='tl-item'>
            <div className='tl-content'>
                <Link to={`/memories/${memory.id}`} style={{ textDecoration: 'none' }}>
                    {/* <span className='tag'/> */}
                    <h1 class='font-black text-xl bg-stone-100 p-2'>{title} <span class='text-sm italic font-semibold'>by {user.name}</span></h1>
                    <p class={styleCategory(category)}>{category} - {status}</p>
                    <img src={main_img} alt="Render Error!" onMouseEnter={showDetails} onMouseLeave={showDetails}/>
                    {details ?
                    <div>
                        <p>Favorites: {likes}</p>
                        <p>{format(new Date(date), 'MMMM d, yyyy (EEEE)')}</p>
                        <p>{description}</p>
                    </div> : null }
                    <span className="circle" />
                </Link>
            </div>
        </div>
    )
}

export default MemoryCard