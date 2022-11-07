import React from "react";
import './Pokedex.css';

const Pokedex = (props) => {
    const { pokemons, loadind } = props;
    return (
        <div className="pokedex">
            <h1>Pokedex</h1>
            <div>Paginação:</div>
        </div>
    )
}
export default Pokedex