import React, { useState, useEffect } from "react"
import Card from "../components/Card"
import Pagination from "../components/Pagination"
import axios from "axios"
import PokeInfo from "../components/PokeInfo"

const PokemonPage = () => {
    const [pokemonData, setPokemonData] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextPageUrl, setnextPageUrl] = useState()
    const [prevPageUrl, setprevPageUrl] = useState()
    const [loading, setLoading] = useState(true)
    const [pokeDex, setPokeDex] = useState()
    let cancel

    const pokeFun = async () => {
        setLoading(true)
        const res = await axios.get(currentPageUrl, {
            cancelToken: new axios.CancelToken(c=>cancel=c) //sørger for at siden ikke loader data flere gange og derfor overrider
            /*når man bruger Create React App eller React version 18, så bliver useEffect() 
            hook'en af en eller anden grund kaldt 2 gange, og cancelToken sørger for kun at kalde 
            den én gang, og canceler eventuelle ekstra kald
            
            man kan løse dette ved at disable strict mode i index.js, men nu blev det lige sådan
            her :)
            */
        })
        setnextPageUrl(res.data.next)
        setprevPageUrl(res.data.previous)
        getPokemon(res.data.results)
        setLoading(false)
    }

    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url) 
            setPokemonData(state => {
                state = [...state, result.data]
                state.sort((a, b) => a.id > b.id ? 1 : -1) //sørger for at sortere i rækkefølge af id
                return state
            })
        })
    }

    useEffect(() => { //pakker fetch ind i useEffect for at undgå re-render - det bliver altså kun kørt én gang, da vi ikke re-fetcher fra api'en
        pokeFun()
        return () => cancel() //sørger for ikke at lave flere rerenders end 1
        //nedenstående sørger for at fjerne missing dependency warning på [currentPageUrl]
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPageUrl]) //hver gang currentPageUrl ændres, skal koden indeni reloades (altså når vi skifter side)

    if (loading) return "Loading..."

    return (
        <>
            <div className="pokemonContainer">
                <div className="left-content">
                    <Card pokemon={pokemonData} infoPokemon={poke=>setPokeDex(poke)}/>
                    <Pagination
                        prevPageUrl={prevPageUrl}
                        setPokemonData={setPokemonData}
                        setCurrentPageUrl={setCurrentPageUrl}
                        nextPageUrl={nextPageUrl}
                    />
                </div>
                <div className="right-content">
                    <PokeInfo data={pokeDex}/>
                </div>
            </div>
        </>
    )
}

export default PokemonPage