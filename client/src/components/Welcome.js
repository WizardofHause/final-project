import spiral from '../triskelion-symbol.png'
import { Link } from 'react-router-dom'

function Welcome({ currentUser }) {
    return (
        <>
            <img src={spiral} className="App-logo" alt="logo" />
            <h1>Memry</h1>
            {currentUser ? <button><Link to='/bank'>My Bank</Link></button>
                : (
                    <>
                        <button><Link to='/login'>Log In</Link></button>
                        <button><Link to='/signup'>Sign Up</Link></button>
                    </>
                )}
        </>
    )
}

export default Welcome