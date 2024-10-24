import React, { useState, useEffect, useRef } from "react";
import TitleBar from "./Components/TitleBar";
import ScoreBoard from "./Components/ScoreBoard";
import GameCard from "./Components/GameCard";



function App() {
  const [pokemonNames, setPokemonNames] = useState(['arceus', 'mewtwo', 'reshiram',
                                         'raikou', 'moltres', 'charizard', 'xerneas',
                                         'palkia', 'dialga', 'entei', 'zamazenta', 'kyurem']);

  const [shuffledPokemonNames, setShuffledPokemonNames] = useState(pokemonNames);
  const [cardsClicked, setCardsClicked] = useState([]);

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function shufflePokemonNames() {
    const shuffledArray = [...pokemonNames].sort(() => Math.random() - 0.5);
    setShuffledPokemonNames(shuffledArray);
    
  }

  function handleCardClick(pokemonName) {
    shufflePokemonNames();
    if (cardsClicked.includes(pokemonName)) {
      setScore((prevScore) => 0);
      setCardsClicked([]);
      score > highScore ? setHighScore(score) : setHighScore(highScore);
    }
    else{
      setScore((prevScore) => prevScore + 1);
      setCardsClicked((prevCardsClicked) => [...cardsClicked, pokemonName]);
    }
  }
  

  return(
    <div>
      <div className="title-score-board">
        <TitleBar title="Pokemon Memory Game"/>
        <ScoreBoard currentScore={score} highestScore={highScore}/>
      </div>
          <p className="instruction-text">Get points by clicking on a card, but don't click on any more than once</p>
      <div className="game-container">
        {shuffledPokemonNames.map((pokemonName, index) => (
          <GameCard cardName={pokemonName} key={pokemonName} handleClick={() => handleCardClick(pokemonName)}/>
        ))}
      </div>
    </div>
  );



  
}

export default App;
