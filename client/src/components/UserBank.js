import Navigation from './Navigation'

function UserBank({ updateUser, currentUser }) {
    return (
        <>
            <h1>This is the main feed!</h1>
            <Navigation updateUser={updateUser} currentUser={currentUser}/>
        </>
    )
}

export default UserBank