import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Axios from 'axios'
import CharacterGrid from './components/CharacterGrid'
import Search from './components/Search'

function App() {
    const [items, setItems] = useState([])
    const [isloading, setIsloading] = useState(true)
    const [query, setQuery] = useState('')

    useEffect(() => {
        const fectchItems = async () => {
            setIsloading(true)
            const results = await Axios(
                `https://breakingbadapi.com/api/characters?name=${query}`
            )
            setItems(results.data)
            setIsloading(false)
        }
        fectchItems()
    }, [query])
    return (
        <div className="container">
            <Header />
            <Search setQuery={setQuery} />
            <CharacterGrid isloading={isloading} data={items} />
        </div>
    )
}

export default App
