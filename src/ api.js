export const searchPokemon = async(pokemon)=>{
    try{
        let url = `https://pokeapi.co/v2/pokemon/${pokemon}`
        const response = fetch(url)
        return await response.json()
        return

    }catch{
        console.log("Error:")
    }
}