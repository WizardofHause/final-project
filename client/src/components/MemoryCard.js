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
                c = 'shadow border-4 border-teal-500 bg-teal-700 text-teal-50 capitalize text-center font-semibold px-2 py-1 rounded-xl';
                break;
            case 'romance':
                c = 'shadow border-4 border-red-700 bg-red-900 text-red-50 capitalize text-center font-semibold px-2 py-1 rounded-xl';
                break;
            case 'event':
                c = 'shadow border-4 border-sky-600 bg-sky-800 text-sky-50 capitalize text-center font-semibold px-2 py-1 rounded-xl';
                break;
            case 'holiday':
                c = 'shadow border-4 border-amber-400 bg-amber-600 text-amber-50 capitalize text-center font-semibold px-2 py-1 rounded-xl';
                break;
            case 'celebration':
                c = 'shadow border-4 border-indigo-500 bg-indigo-900 text-indigo-50 capitalize text-center font-semibold px-2 py-1 rounded-xl';
                break;
        }
        return c
    }

    const styleStatus = (status) => {
        let s;
        switch (status) {
            case 'past':
                s = 'bg-stone-900 text-amber-100 text-xs uppercase px-2 py-1 rounded-full mr-auto font-semibold';
                break;
            case 'present':
                s = 'bg-stone-900 text-teal-100 text-xs uppercase px-2 py-1 rounded-xl mr-auto font-semibold';
                break;
            case 'future':
                s = 'bg-stone-900 text-indigo-100 text-xs uppercase px-2 py-1 rounded-xl mr-auto font-semibold';
                break;
        }
        return s
    }

    const showDetails = () => {
        setDetails(!details)
    }

    return (
        <div className='tl-item'>
            <div className='tl-content'>
                <Link to={`/memories/${memory.id}`} style={{ textDecoration: 'none' }}>
                    {/* <span className='tag'/> */}
                    <div class='flex justify-between items-center pb-2 mb-2'>
                        <span class={styleCategory(category)}>{format(new Date(date), 'EEEE: MMMM d, yyyy')}</span>
                        <span class={styleCategory(category)}>{category}</span>
                    </div>
                    <h1 class='mb-2 font-black text-2xl bg-stone-100 p-2 text-center border-4 border-stone-200 rounded-lg px-auto uppercase'>{title} <span class='text-base italic font-semibold capitalize'>by {user.name}</span>
                    </h1>
                    <div className='memory-image-container'>
                        <img class='m-4' src={main_img} alt="Render Error!" onMouseEnter={showDetails} onMouseLeave={showDetails} />
                        <div className='overlay'>
                            <span class={styleStatus(status)}>{status}</span>
                        </div>
                    </div>
                    {details ? // vvv attempt to make the transition to show details smoother
                        <div className='details-container'> 
                            <div class='bg-stone-100 p-2 mt-5 border-4 border-stone-200'>
                                <p class='italic text-center'>Favorites: {likes}</p>
                                <p class='bg-stone-200 text-stone-900 p-3 m-1 border-4 border-stone-300 font-semibold'>{description}</p>
                            </div>
                        </div> : null}
                    <span className="circle" />
                </Link>
            </div>
        </div>
    )
}

export default MemoryCard