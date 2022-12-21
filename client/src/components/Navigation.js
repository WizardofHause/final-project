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
            <div className="sidenav">
                <NavLink to='/' style={{ textDecoration: 'none' }}><button>Home</button></NavLink>
                <NavLink to='/profile' style={{ textDecoration: 'none' }}><button>View Profile</button></NavLink>
                <NavLink to='/memories/new' style={{ textDecoration: 'none' }}><button>Make a Memry</button></NavLink>
                <button onClick={handleLogOut}>Log Out</button>
            </div>
        </nav>
    )
}

export default Navigation