import React from "react"
import typeColors from "../helpers/typeColors"

const Card = ({ pokemon, infoPokemon }) => {
    return (

        <>
            {
                pokemon.map((item) => {
                    return (
                        <>
                            <div className="card" key={item.id} onClick={() => infoPokemon(item)}
                             style={{ backgroundColor: typeColors[item.types[0].type.name] }}>
                                <div className="numberDiv">
                                    <h2>#{item.id}</h2>
                                </div>
                                <img src={item.sprites.front_default} alt="" />
                                <h2>{item.name}</h2>
                            </div>
                        </>
                    )
                })
            }

        </>
    )
}
export default Card