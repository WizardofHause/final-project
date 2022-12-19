import Navigation from './Navigation'
import MemoryCard from './MemoryCard'

function MainBank({ updateUser, currentUser, memories, search }) {

    const searchedMemory = memories.filter((memory) => 
        memory.title.toLowerCase().includes(search.toLowerCase()))
        // || memory.location.toLowerCase().includes(search.toLowerCase()))

    const memoryCard = searchedMemory.map(memory => {
        return(
            <MemoryCard
                key={memory.id}
                memory={memory}
            />
        )
    })
    return (
        <>
            <h1>The Collective Unconscious</h1>
            <Navigation updateUser={updateUser} currentUser={currentUser}/>
            {memoryCard}
        </>
    )
}

export default MainBank