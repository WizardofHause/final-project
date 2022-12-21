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
                {memoryCard}
            </div>
        </>
    )
}

export default MainBank