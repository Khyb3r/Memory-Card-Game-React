import React, { useState, useEffect, useRef } from "react";
import TitleBar from "./Components/TitleBar";
import ScoreBoard from "./Components/ScoreBoard";
import GameCard from "./Components/GameCard";


function App() {

  // state variable array of pokemon names as strings to pass into GameCard component
  const [pokemonNames, setPokemonNames] = useState(['arceus', 'mewtwo', 'reshiram',
                                         'raikou', 'moltres', 'charizard', 'xerneas',
                                         'palkia', 'dialga', 'entei', 'zamazenta', 'kyurem']);

  // shuffled pokemon state variable to utilise shuffle/randomiser array on                                       
  const [shuffledPokemonNames, setShuffledPokemonNames] = useState(pokemonNames);

  // array of the cards clicked 
  const [cardsClicked, setCardsClicked] = useState([]);

  //  tracks the score and high score
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // shuffle method to change positions of cards
  function shufflePokemonNames() {
    // creates shallow copy of pokemon names with spread operator and uses the sort method to return
    // negative/positive to change elements in the array 
    const shuffledArray = [...pokemonNames].sort(() => Math.random() - 0.5);
    // update state function to update the shuffledPokemonNames with such array
    setShuffledPokemonNames(shuffledArray);
  }
  
  // passes in the name of the pokemon clciked
  function handleCardClick(pokemonName) {
    // calls the shuffle method to change the position of the cards
    shufflePokemonNames();

    // checks if the name of the pokemon is in the array of cards clicked
    // used to track elements we've clicked
    if (cardsClicked.includes(pokemonName)) {
      // keeps score at 0 and resets the clickedCards state array
      setScore((prevScore) => 0);
      setCardsClicked([]);
      // checks if the current score is higher than the highScore state variable
      // assigns it to the high score if it is and not if it isn't
      score > highScore ? setHighScore(score) : setHighScore(highScore);
    }
    // if the card clicked isn't part of the cardsClicked array
    else{
      // increase score and add it to lis of cardsClicked
      setScore((prevScore) => prevScore + 1);
      setCardsClicked((prevCardsClicked) => [...cardsClicked, pokemonName]);
    }
  }

  return(
    <div> {/* Encapsulates app to return as one DOM element */}
      <div className="title-score-board">
        <TitleBar title="Pokemon Memory Game"/> {/* Passed a string title prop to TitleBar component */}
        {/* Passed score and highest score which are our state variables to Score board component */}
        <ScoreBoard currentScore={score} highestScore={highScore}/> 
      </div>
       {/* instruction text tag  */}
          <p className="instruction-text">Get points by clicking on a card, but don't click on any more than once</p>
       {/* encapsulates our card game */}
      <div className="game-container">
        {/* creating 12 GameCard elements through mapping then passing necessary props */}
        {shuffledPokemonNames.map((pokemonName, index) => (
          <GameCard cardName={pokemonName} key={pokemonName} handleClick={() => handleCardClick(pokemonName)}/>
        ))}
      </div>
    </div>
  ); 
}
export default App;
