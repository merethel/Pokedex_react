/* import React, {useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"

const App = () => {
    const [pokemon, setPokemon] = useState("pikachu")
    const [pokemonData, setPokemonDate] = useState([])
    const [pokemonType, setPokemonType] = useState("")
    
    const getPokemon = async () => {
        const toArray = []
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
            if (!response.ok) throw new Error("Response was not OK!")
            const pkmn = await response.json()

            console.log(pkmn.id)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className="App">
            <h1>HELLO!</h1>
        </div>
/*         <>
            <nav>
                <Link to="/">Pokemons</Link>
                <Link to="/information">Information</Link>
            </nav>
            <Outlet />
        </> 
    )
}
export default App

 */