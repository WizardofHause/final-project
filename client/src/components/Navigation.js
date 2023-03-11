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
                <NavLink to='/' style={{ textDecoration: 'none' }}><img src={spiral} class='mx-auto my-2 w-8 md:w-12 select-none px-2' alt="Oops! ¯\_(ツ)_/¯" /></NavLink>
                <NavLink to='/bank' style={{ textDecoration: 'none' }}><button class='text-amber-50 bg-amber-600 block w-auto md:w-full'>HOME</button></NavLink>
                <NavLink to='/user_bank' style={{ textDecoration: 'none' }}><button class='text-red-100 bg-red-900 block w-auto md:w-full'>PROFILE</button></NavLink>
                <NavLink to='/memories/new' style={{ textDecoration: 'none' }}><button class='text-teal-100 bg-teal-700 block w-auto md:w-full'>CREATE</button></NavLink>
                <NavLink to='/' style={{ textDecoration: 'none' }}><button class='text-indigo-100 bg-indigo-900 block w-auto md:w-full' onClick={handleLogOut}>LEAVE</button></NavLink>
            </div>
        </nav>
    )
}

export default Navigation