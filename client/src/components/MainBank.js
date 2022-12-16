import Navigation from './Navigation'
import MemoryCard from './MemoryCard'

function MainBank({ updateUser, currentUser, memories }) {

    const memoryCard = memories.map(memory => {
        return(
            <MemoryCard
                key={memory.id}
                memory={memory}
            />
        )
    })
    return (
        <>
            <h1>This is the main feed!</h1>
            <Navigation updateUser={updateUser} currentUser={currentUser}/>
            {memoryCard}
        </>
    )
}

export default MainBank