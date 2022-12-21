import { useHistory, NavLink } from 'react-router-dom'

function Navigation({ updateUser }) {
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
            <div className="nav-container">
                <button><NavLink to='/'>Home</NavLink></button>
                <button><NavLink to='/profile'>View Profile</NavLink></button>
                <button onClick={handleLogOut}>Log Out</button>
                <button><NavLink to='/memories/new'>Make a Memry</NavLink></button>
            </div>
        </nav>
    )
}

export default Navigation