import spiral from '../triskelion-symbol.png'
import { Link } from 'react-router-dom'

function Welcome({ currentUser }) {
    return (
        <div class='text-center mt-48'>
            <img src={spiral} class='w-64 mx-auto' alt="Oops! ¯\_(ツ)_/¯" />
            <h1 class='p-4 text-6xl font-extrabold font-sans tracking-wide text-center'>Memry</h1>
            {currentUser ?
                <Link to='/bank' style={{ textDecoration: 'none' }}>
                    <button>My Bank</button>
                </Link>
                : (
                    <>
                        <Link to='/login' style={{ textDecoration: 'none' }}>
                            <button class='px-4 py-2 m-2 shadow-lg text-xl'>Log In</button>
                        </Link>
                        <Link to='/signup' style={{ textDecoration: 'none' }}>
                            <button class='px-4 py-2 m-2 justify-right shadow-lg text-xl'>Sign Up</button>
                        </Link>
                    </>
                )}
        </div>
    )
}

export default Welcome