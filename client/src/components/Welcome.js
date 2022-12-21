import spiral from '../triskelion-symbol.png'
import { Link } from 'react-router-dom'

function Welcome({ currentUser }) {
    return (
        <>
            <img src={spiral} width='50' alt="Oops! ¯\_(ツ)_/¯" />
            <h1>Memry</h1>
            {currentUser ?
                <Link to='/bank' style={{ textDecoration: 'none' }}>
                    <button>My Bank</button>
                </Link>
                : (
                    <>
                        <Link to='/login' style={{ textDecoration: 'none' }}>
                            <button>Log In</button>
                        </Link>
                        <Link to='/signup' style={{ textDecoration: 'none' }}>
                            <button>Sign Up</button>
                        </Link>
                    </>
                )}
        </>
    )
}

export default Welcome