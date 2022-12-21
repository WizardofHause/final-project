import React from 'react'

export default function Search({ search, onSearch }) {

    return (
        <div className='search'>
            <input
                id="search"
                type="text"
                placeholder="Search..."
                value={search}
                onChange={onSearch}
            />
        </div>
    )
}