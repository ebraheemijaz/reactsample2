import React, { useState } from 'react'

function Search({ setQuery }) {
    const [text, setText] = useState('')
    const handleChange = (e) => {
        setText(e.target.value)
        setQuery(e.target.value)
    }
    return (
        <section className="search">
            <form>
                <input
                    type="text"
                    className="form-control"
                    autoFocus
                    value={text}
                    onChange={handleChange}
                    placeholder="Search Charecter"
                />
            </form>
        </section>
    )
}

export default Search
