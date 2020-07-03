import React from 'react'
import CharacterItem from './CharacterItem'
import Loader from './Loader'

function CharacterGrid({ data, isloading }) {
    return isloading ? (
        <Loader />
    ) : (
        <section className="cards">
            {data.map((item) => (
                <CharacterItem key={item.char_id} data={item} />
            ))}
        </section>
    )
}

export default CharacterGrid
