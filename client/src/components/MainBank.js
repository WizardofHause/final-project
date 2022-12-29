// import { useEffect } from 'react'
import MemoryCard from './MemoryCard'

function MainBank({ currentUser, sortedMemories, search }) {

    // const sortedMemories = memories.sort((a,b) => a.date - b.date)

    // useEffect(() => {
    //     memories.sort((a,b) => a.date - b.date)
    // }, [memories])

    const searchedMemory = sortedMemories.filter((memory) =>
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
                {/* {memoryCard.sort((a,b) => a.date - b.date)} */}
                {memoryCard}
            </div>
        </>
    )
}

export default MainBank