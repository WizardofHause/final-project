import Navigation from './Navigation'

function MainBank({ updateUser, currentUser }) {
    return (
        <>
            <h1>This is the main feed!</h1>
            <Navigation updateUser={updateUser} currentUser={currentUser}/>
        </>
    )
}

export default MainBank