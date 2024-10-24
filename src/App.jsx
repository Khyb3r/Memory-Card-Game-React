import React, { useState, useEffect } from "react";
import TitleBar from "./Components/TitleBar";
import ScoreBoard from "./Components/ScoreBoard";
import GameCard from "./Components/GameCard";



function App() {
  const [cards, setCards] = useState({
      "name": "mew",
  }, {

  })
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
      


  return(
    <div>
      <div className="title-score-board">
        <TitleBar title="... Memory Game"/>
        <ScoreBoard currentScore={score} highestScore={highScore}/>
      </div>
          <p>Get points by clicking on a card, but don't click on any more than once</p>
      <div className="game-container">
        <GameCard cardName="ditto"/>
        <GameCard cardName="mew"/>
        <GameCard cardName="ditto"/>
        <GameCard cardName="mew"/>
        <GameCard cardName="ditto"/>
        <GameCard cardName="mew"/>
        <GameCard cardName="ditto"/>
        <GameCard cardName="mew"/>
        <GameCard cardName="ditto"/>
        <GameCard cardName="mew"/>
        <GameCard cardName="ditto"/>
        <GameCard cardName="mew"/>
      </div>
      
    </div>
  );



  
}

export default App;
