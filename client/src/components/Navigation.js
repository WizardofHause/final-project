import { useHistory, NavLink } from 'react-router-dom'
import spiral from '../triskelion-symbol.png'

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
                <NavLink to='/' style={{ textDecoration: 'none' }}><img src={spiral} class='mx-auto my-2 w-12 select-none' alt="Oops! ¯\_(ツ)_/¯" /></NavLink>
                <NavLink to='/bank' style={{ textDecoration: 'none' }}><button class='text-amber-50 bg-amber-600 block w-full'>Main</button></NavLink>
                <NavLink to='/user_bank' style={{ textDecoration: 'none' }}><button class='text-red-100 bg-red-900 block w-full'>Profile</button></NavLink>
                <NavLink to='/memories/new' style={{ textDecoration: 'none' }}><button class='text-teal-100 bg-teal-700 block w-full'>New</button></NavLink>
                <button class='text-indigo-100 bg-indigo-900 block w-full' onClick={handleLogOut}>Exit</button>
            </div>
        </nav>
    )
}

export default Navigation