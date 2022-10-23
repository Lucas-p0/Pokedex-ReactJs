import React, { useState } from "react";
import './Input.css';

const Searchbar = (props) => {
    const { onSearch } = props;
    const [search, setSearch] = useState('dito')

    const onChangeHandler = (e) => {
        console.log("pokemon:", e.target.value)
        setSearch(e.target.value)

    }

    const onButtonCliclHandler = () => {

        onSearch(search)
        console.log("Pokemon:", search)
    }
    return (
        <div className="input-container">
            <input placeholder="Bucar pokemon" onChange={onChangeHandler} />
            <button onClick={onButtonCliclHandler} > Buscar</button>

        </div>
    )
}

export default Searchbar;