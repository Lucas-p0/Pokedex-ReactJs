import React from "react";
import Navbar from './componentes/Navbar';
import './componentes/Navbar/Navbar.css';
import Searchbar from './componentes/SearchBar';
import {searchPokemon} from "./ api";


function App() {
 
  const onSearchHandler = async(pokemon)=>{
    const result = await searchPokemon(pokemon)
    console.log(result)
 }

  return (
    <div>
      <Navbar />
      <Searchbar onSearch={onSearchHandler}/>
    </div>

  );
}

export default App;
