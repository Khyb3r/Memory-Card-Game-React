import { useEffect, useState, useSyncExternalStore } from "react";



function GameCard(props) {
    const pokemonName = props.cardName;
    const [pokemonImage, setPokemonImage] = useState(null);


    const getPokeApiRequest = async (pokemonName) => {
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
            const response = await fetch(url);

            if(!response.ok) {
            throw new Error("The requet failed: Error " + response.status);
        }
        const pokemonData = await response.json();
        if(pokemonData.sprites.front_default) {
            setPokemonImage(pokemonData.sprites.front_default)
        }
            
        } catch (error) {
            console.log(error);
        }
    }
    function getClickedPokemon() {
        console.log(shuffleToClick.fetch.cardName);
        


    }
    useEffect(() => {
        getPokeApiRequest(pokemonName);
    }, [pokemonName]);
    
    

    return(
    <div className="card-container" onClick={props.handleClick}>
        <img src={pokemonImage} className="pokemon-image"/>
        <p className="pokemon-name">{pokemonName}</p>
    </div>
    );

}
export default GameCard;