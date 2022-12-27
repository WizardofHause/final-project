import MemoryCard from './MemoryCard'

function MainBank({ currentUser, memories, search }) {

    const searchedMemory = memories.filter((memory) =>
        memory.title.toLowerCase().includes(search.toLowerCase()))

    const memoryCard = searchedMemory.map(memory => {
        return (
            <MemoryCard
                key={memory.id}
                memory={memory}
            />
        )
    })
    return (
        <>
            <h1>{currentUser.name}'s Memry Bank</h1>
            <div className='tl-container'>
                {memoryCard.sort((a,b) => a.date - b.date)}
            </div>
        </>
    )
}

export default MainBank