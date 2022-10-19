import React, { useState } from "react";
import './Input.css';

const Searchbar=()=>{
    const [search, setSearch] = useState('dito')

    const onChangeHandler = (e) => {
        console.log("pokemon:", e.target.value)
        setSearch(e.target.value)
        
    }
    return(
        <div>
            <input placeholder="Bucar pokemon" onChange={onChangeHandler} />
            {search}
        </div>
    )
}

export default Searchbar;