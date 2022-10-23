import React from "react";
import { useState } from "react";
import { searchPokemon } from "/Projetos/reactJs/Pokedex/src/api";
import './Input.css';

const Searchbar = () => {

    const [search, setSearch] = useState('dito')
    const [pokemon, setPokemon] = useState()

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }
    const onButtonCliclHandler = () => {
        onSearchHandler(search)
    }
    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
    }
    return (
        <div className="input-container">
            <input placeholder="Bucar pokemon" onChange={onChangeHandler} />
            <button onClick={onButtonCliclHandler} > Buscar</button>
            {pokemon ? (
                <div>
                    <div>Nome:{pokemon.name}</div>
                    <div>Peso:{pokemon.weight}</div>
                    <img src={pokemon.sprites.front_default} alt="{pokemon.name}" />
                </div>
            ) : null
            }
        </div >

    )
}

export default Searchbar;