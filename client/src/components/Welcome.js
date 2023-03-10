import spiral from '../triskelion-symbol.png'
import { Link } from 'react-router-dom'

function Welcome({ currentUser }) {
    return (
        <div class='flex flex-col justify-center items-center h-screen m-3'>
            <img src={spiral} class='w-32 lg:w-64 mx-auto select-none' alt="Oops! ¯\_(ツ)_/¯" />
            <h1 class='p-4 text-4xl lg:text-6xl font-extrabold font-sans tracking-wide text-center select-none'>
                {/* EACH LETTER HAS ITS OWN STYLE CLASS */}
                <span class='text-stone-900 hover:text-red-900'>M</span>
                <span class='text-stone-800 hover:text-amber-600'>e</span>
                <span class='text-stone-700 hover:text-teal-700'>m</span>
                <span class='text-stone-600 hover:text-sky-800'>r</span>
                <span class='text-stone-500 hover:text-indigo-900'>y</span>
            </h1>
            {currentUser ?
            <div>
                <Link to='/bank' style={{ textDecoration: 'none' }}>
                <img src='https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg' alt='error' class='shadow rounded-full h-36 mx-auto'/>
                </Link>
                </div>
                : (
                    <>
                        <Link to='/login' style={{ textDecoration: 'none' }}>
                            <button class='px-4 py-2 m-2 shadow-xl-lg text-sm lg:text-xl bg-stone-700 hover:bg-teal-700 rounded-xl'>Log In</button>
                        </Link>
                        <Link to='/signup' style={{ textDecoration: 'none' }}>
                            <button class='px-4 py-2 m-2 shadow-xl text-sm lg:text-xl bg-stone-700 hover:bg-indigo-900 rounded-xl'>Sign Up</button>
                        </Link>
                        {/* APP TITLE EASTER EGG ON HOVER; PREVIEW OF APP COLOR PALETTE */}
                        <div class='p-6 text-sm lg:text-xl font-black font-mono text-center select-none'>
                            <span class='bg-red-900 w-2 h-2 p-2 text-transparent rounded-tl-lg rounded-bl-lg hover:text-red-900 hover:bg-transparent'>M</span>
                            <span class='bg-amber-600 w-2 h-2 p-2 text-transparent hover:text-amber-600 hover:bg-transparent'>e</span>
                            <span class='bg-teal-700 w-2 h-2 p-2 text-transparent hover:text-teal-700 hover:bg-transparent'>m</span>
                            <span class='bg-sky-800 w-2 h-2 p-2 text-transparent hover:text-sky-800 hover:bg-transparent'>r</span>
                            <span class='bg-indigo-900 w-2 h-2 p-2 text-transparent rounded-tr-lg rounded-br-lg hover:text-indigo-900 hover:bg-transparent'>y</span>
                        </div>
                    </>
                )}
        </div>
    )
}

export default Welcome