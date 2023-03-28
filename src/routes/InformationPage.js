import React, { useState } from "react"
import PokeInfo from "../components/PokeInfo"

const InformationPage = () => {
    const [pokemon, setPokemon] = useState("")
    const [pokemonData, setPokemonData] = useState([])

    const getPokemon = async () => {
        const pokemonArray = []
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
            if (!response.ok) throw new Error("Response was not OK!")
            const pkmn = await response.json()

            pokemonArray.push(pkmn)
            setPokemonData(pokemonArray)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase()) //sørger for at ignorere uppercase bogastaver
    }
    const handleSubmit = (e) => {
        e.preventDefault() //sørger for den ikke reloader page
        getPokemon()
    }

    return (
        <div className="PokemonDetail">
            <h1>Pokemon details!</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        onChange={handleChange}
                        placeholder="Enter pokemon name"
                    >
                    </input>
                </label>
            </form>
            <div className="barsInformationPageDiv">
            {pokemonData.map((data) => {
                return <div key={data.id}>
                    <PokeInfo data={data}/>
                    </div>})}
            </div>
        </div>
    )
}
export default InformationPage

