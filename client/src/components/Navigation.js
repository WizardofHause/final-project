import { useHistory, NavLink } from 'react-router-dom'
import spiral from '../triskelion-symbol.png'

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
            <div className="sidenav">
                <NavLink to='/' style={{ textDecoration: 'none' }}><img src={spiral} width='50' class='mx-auto my-2 w-12' alt="Oops! ¯\_(ツ)_/¯" /></NavLink>
                <NavLink to='/bank' style={{ textDecoration: 'none' }}><button>Main</button></NavLink>
                <NavLink to='/user_bank' style={{ textDecoration: 'none' }}><button>Profile</button></NavLink>
                <NavLink to='/memories/new' style={{ textDecoration: 'none' }}><button>New</button></NavLink>
                <button onClick={handleLogOut}>Exit</button>
            </div>
        </nav>
    )
}

export default Navigation