import React, { useState, useEffect } from "react";
import TitleBar from "./Components/TitleBar";
import ScoreBoard from "./Components/ScoreBoard";
import GameCard from "./Components/GameCard";



function App() {
  const [cards, setCards] = useState([])
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);


  useEffect(() => {
    getPokeApiRequest;
  }, [])



  const getPokeApiRequest = async () => {
    try {
    const url = `https://pokeapi.co/api/v2/pokemon/ditto`;
    const response = await fetch(url);

    if (!response.ok) {
     throw new Error("The connection failed: Error " + response.statusText);
    }

    const pokeData = await response.json();
    
      
    } catch (error) {
      console.log(error);
      
    }
      
    }


  return(
    <div>
      <div className="title-score-board">
        <TitleBar title="... Memory Game"/>
        <ScoreBoard currentScore={score} highestScore={highScore}/>
      </div>
          <p>Get points by clicking on a card, but don't click on any more than once</p>
      <div className="game-container">
        <GameCard cardName="ditto"/>
      </div>
      
    </div>
  );



  
}

export default App;
