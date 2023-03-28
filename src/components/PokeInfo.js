import React from "react"
import ProgressBar from "./ProgressBar"

const PokeInfo = ({ data }) => {
    return (
        <>
            {
                (!data) ? "" : (
                    <>
                        <h1>{data.name}</h1>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`} alt={data.name + "-image"} />
                        <div className="abilities">
                            {
                                data.abilities.map(poke => {
                                    return (
                                        <div className="group" key={poke.ability.url}>
                                            <h3>{poke.ability.name}</h3>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="base-stat">
                            {
                                data.stats.map(poke => {
                                    return (
                                        <div className="statBarsDiv" key={poke.stat.url}>
                                            {poke.stat.name}:<ProgressBar bgcolor="orange" progress={poke.base_stat} height={10} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </>
                )
            }
        </>
    )
}

export default PokeInfo