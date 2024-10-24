import React, { useState, useEffect } from "react";
import TitleBar from "./Components/TitleBar";
import ScoreBoard from "./Components/ScoreBoard";
import GameCard from "./Components/GameCard";



function App() {
  const [pokemonNames, setPokemonNames] = useState(['arceus', 'mewtwo', 'reshiram',
                                         'raikou', 'moltres', 'charizard', 'xerneas',
                                         'palkia', 'dialga', 'entei', 'zamazenta', 'kyurem']);

  const [shuffledPokemonNames, setShuffledPokemonNames] = useState(pokemonNames);

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function shufflePokemonNames() {
    const shuffledArray = [...pokemonNames].sort(() => Math.random() - 0.5);
    setShuffledPokemonNames(shuffledArray);
    
  }

  function handleCardClick() {
    shufflePokemonNames();
  }
  return(
    <div>
      <div className="title-score-board">
        <TitleBar title="... Memory Game"/>
        <ScoreBoard currentScore={score} highestScore={highScore}/>
      </div>
          <p>Get points by clicking on a card, but don't click on any more than once</p>
      <div className="game-container">
        {shuffledPokemonNames.map((pokemonName, index) => (
          <GameCard cardName={pokemonName} key={index} handleClick={handleCardClick}/>
        ))}
      </div>
    </div>
  );



  
}

export default App;
