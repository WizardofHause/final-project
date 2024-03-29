import { useState } from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'

function MemoryCard({ memory }) {
    const [details, setDetails] = useState(false)

    const { title, category, status, main_img, likes, user, date } = memory

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
            default:
                c = null;
        }
        return c
    }

    const styleStatus = (status) => {
        let s;
        switch (status) {
            case 'past':
                s = 'bg-stone-600 text-amber-50 text-xs uppercase px-2 py-1 rounded-full mr-auto font-semibold';
                break;
            case 'present':
                s = 'bg-stone-600 text-teal-50 text-xs uppercase px-2 py-1 rounded-xl mr-auto font-semibold';
                break;
            case 'future':
                s = 'bg-stone-600 text-indigo-50 text-xs uppercase px-2 py-1 rounded-xl mr-auto font-semibold';
                break;
            default:
                s = null;
        }
        return s
    }

    const showDetails = () => {
        setDetails(prevDetails => !prevDetails)
    }

    const actualDate = (date) => {
        const dateArray = []
        dateArray.push(`${date}T00:00`)
        return dateArray[0]
    }

    return (
        <div className='tl-item'>
            <div className='tl-content'>
                <Link to={`/memories/${memory.id}`} style={{ textDecoration: 'none' }}>
                    <div class='flex justify-between items-center pb-2 mb-2 text-xs lg:text-lg'>
                        <span class={styleCategory(category)}>{format(new Date(actualDate(date)), 'MMMM d, yyyy')}</span>
                        <div className='date-and-category'>
                            <span class={styleCategory(category)}>{category}</span>
                        </div>
                    </div>
                    <div className='date-and-category'>
                        <h1 class='mb-2 font-black text-stone-700 text-xs lg:text-2xl bg-stone-100 p-2 text-center border-4 border-stone-200 rounded-lg uppercase'>{title} <span class='text-base italic font-semibold capitalize text-sm lg:text-lg'>by {user.name}</span>
                        </h1>
                    </div>
                    <div className='memory-image-container'>
                        <img class='lg:m-4' src={main_img} alt="Render Error!" onMouseEnter={showDetails} onMouseLeave={showDetails} />
                        <div className='memory-status-overlay'>
                            <span class={styleStatus(status)}>{status}</span>
                        </div>
                        <div className='memory-likes-button'>
                            <button class={styleCategory(category)}>
                                ❤️ {likes}
                            </button>
                        </div>
                    </div>
                    {details ? // vvv attempt to make the transition to show details smoother
                        <div className='details-container'>
                            <div class='bg-stone-100 p-2 mt-5 border-4 border-stone-200 rounded-lg'>
                                <p class='text-stone-900 font-semibold rounded-lg'>Click to see more!</p>

                                {/* <p class='bg-stone-200 text-stone-900 p-3 m-1 border-4 border-stone-300 font-semibold'>{description}</p> */}
                            </div>
                        </div> : null}
                    <span className="circle" />
                </Link>
            </div>
        </div>
    )
}

export default MemoryCard