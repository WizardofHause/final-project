import { Link } from 'react-router-dom'

function Navigation({ updateUser, currentUser }) {

    const handleLogOut = () => {
        fetch('/api/logout', {
            method: 'DELETE'
        })
            .then(res => {
                if (res.ok) {
                    updateUser(false)
                }
            })
    }

    return (
        <nav>
            <div>
                <button><Link to='/'>Home</Link></button>
            </div>

            {currentUser ? (<button><Link to='/profile'>View Profile</Link></button>) : (<button><Link to='/sign_up'>Sign Up</Link></button>)}

            {currentUser ? <button onClick={handleLogOut}>Log Out</button> : <button><Link to='/login'>Log In</Link></button>}

        </nav>
    )
}

export default Navigation