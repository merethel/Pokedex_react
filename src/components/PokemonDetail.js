import React, {useState } from "react"

const PokemonDetail = () => {
    const [pokemon, setPokemon] = useState("pikachu")
    const [pokemonData, setPokemonData] = useState([])
    const [pokemonType, setPokemonType] = useState("")
    
    const getPokemon = async () => {
        const pokemonArray = []
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
            if (!response.ok) throw new Error("Response was not OK!")
            const pkmn = await response.json()

            pokemonArray.push(pkmn)

            const primaryType = pkmn.types[0].type.name
            const secondaryType = pkmn.types[1]?.type.name
            setPokemonType(secondaryType ? `${primaryType}/${secondaryType}` : primaryType)
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
            {pokemonData.map((data) => {
                return(
                    <div className="container">
                        <img src={data.sprites.front_default} alt={data.name + "-image"}/>
                        <div className="divTable">
                            <div className="divTableBody">
                            <div className="divTableRow">
                                <div className="divTableCell">ID</div>
                                <div className="divTableCell">{data.id}</div>
                            </div>
                            <div className="divTableRow">
                                <div className="divTableCell">Name</div>
                                <div className="divTableCell">{data.name}</div>
                            </div>
                            <div className="divTableRow">
                                <div className="divTableCell">Type</div>
                                <div className="divTableCell">{pokemonType}</div>
                            </div>
                        </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default PokemonDetail

