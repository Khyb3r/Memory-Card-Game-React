import React from "react";

function ScoreBoard(props){
    return(
        <div className="score-board">
            <h3>Score: {props.currentScore}</h3>
            <h3>Highest Score: {props.highestScore}</h3>
        </div>
    );
}
export default ScoreBoard;