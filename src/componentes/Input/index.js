import React, { useState } from "react";
import './Input.css';

const Searchbar=()=>{
    const [search, setSearch] = useState('dito')

    const onChangeHandler = (e) => {
        console.log("pokemon:", e.target.value)
        setSearch(e.target.value)
        
    }

    const onButtonCliclHandler =() => {
        console.log("Pokemon:", search)
    }
    return(
        <div>
            <input placeholder="Bucar pokemon" onChange={onChangeHandler} />
            <button onClick={onButtonCliclHandler} > Buscar</button>

        </div>
    )
}

export default Searchbar;