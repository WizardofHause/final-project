import MemoryCard from './MemoryCard'

function MainBank({ currentUser, sortedMemories, search }) {

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
        <div class='ml-20'>
            <h1 class='text-stone-600 pt-4 pl-4 text-xl font-black'>Good to see you again, {currentUser.name}</h1>
            {/* <h3>Check out these Memry's...</h3> */}
            <div className='tl-container'>
                {memoryCard}
            </div>
        </div>
    )
}

export default MainBank