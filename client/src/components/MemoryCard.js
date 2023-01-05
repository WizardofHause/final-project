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
                c = 'bg-teal-700 text-teal-50 capitalize text-center font-semibold px-2 py-1 ml-auto rounded-xl';
                break;
            case 'romance':
                c = 'bg-red-900 text-red-50 capitalize text-center font-semibold px-2 py-1 ml-auto rounded-xl';
                break;
            case 'event':
                c = 'bg-sky-800 text-sky-50 capitalize text-center font-semibold px-2 py-1 ml-auto rounded-xl';
                break;
            case 'holiday':
                c = 'bg-amber-600 text-amber-50 capitalize text-center font-semibold px-2 py-1 ml-auto rounded-xl';
                break;
            case 'celebration':
                c = 'bg-indigo-900 text-indigo-50 capitalize text-center font-semibold px-2 py-1 ml-auto rounded-xl';
                break;
        }
        return c
    }

    const styleStatus = (status) => {
        let s;
        switch (status) {
            case 'past':
                s = 'bg-amber-600 text-amber-100 capitalize px-2 py-1 rounded-xl mr-auto font-semibold';
                break;
            case 'present':
                s = 'bg-teal-700 text-teal-100 capitalize px-2 py-1 rounded-xl mr-auto font-semibold';
                break;
            case 'future':
                s = 'bg-indigo-900 text-indigo-100 capitalize px-2 py-1 rounded-xl mr-auto font-semibold';
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
                    <h1 class='mb-2 font-black text-xl bg-stone-100 p-2 text-center border-4 border-stone-200'>{title} <span class='text-sm italic font-semibold'>by {user.name}</span>
                    </h1>
                    <div class='flex justify-center items-center bg-stone-100 p-2 my-2 border-4 border-stone-200 rounded'>
                        <span class={styleStatus(status)}>{status}</span>
                        <span class='p-2 font-semibold'>{format(new Date(date), 'MMMM d, yyyy (EEEE)')}</span>
                        <span class={styleCategory(category)}>{category}</span>
                    </div>
                  
                    {/* <p class={styleCategory(category)}>{category} - {status}</p> */}
                    <img class='m-4'src={main_img} alt="Render Error!" onMouseEnter={showDetails} onMouseLeave={showDetails} />
                    {details ?
                        <div class='bg-stone-100 p-2 mt-5 border-4 border-stone-200'>
                            <p class='italic text-center'>Favorites: {likes}</p>
                            <p class='bg-stone-200 text-stone-900 p-3 m-1 border-4 border-stone-300 font-semibold'>{description}</p>
                        </div> : null}
                    <span className="circle" />
                </Link>
            </div>
        </div>
    )
}

export default MemoryCard