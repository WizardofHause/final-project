import { useHistory, NavLink } from 'react-router-dom'

function Navigation({ updateUser, currentUser }) {
    const history = useHistory()

    const handleLogOut = () => {
        fetch('/logout', {
            method: 'DELETE'
        })
            .then(res => {
                if (res.ok) {
                    updateUser(false)
                    history.push(`/`) 
                }
            })
    }

    return (
        <nav>
            <div>
                <button><NavLink to='/'>Home</NavLink></button>
            </div>

            {currentUser ? (<button><NavLink to='/profile'>View Profile</NavLink></button>) : (<button><NavLink to='/signup'>Sign Up</NavLink></button>)}

            {currentUser ? <button onClick={handleLogOut}>Log Out</button> : <button><NavLink to='/login'>Log In</NavLink></button>}

            {currentUser ? <button><NavLink to='/memories/new'>Make a Memry</NavLink></button> : null}

        </nav>
    )
}

export default Navigation