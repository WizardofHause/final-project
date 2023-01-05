import React from 'react'

export default function Search({ search, onSearch }) {

    return (
        <div className='search' class='mx-20 my-2'>
            <input
                id="search"
                type="text"
                placeholder=" Search by title"
                value={search}
                onChange={onSearch}
                class='placeholder:text-stone-400'
            />
        </div>
    )
}