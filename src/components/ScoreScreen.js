import React, { useContext } from 'react';
import { ScoreContext } from '../contexts/ScoreContext';

const ScoreScreen = () => {

    // Uses the ScoreContext to dynamically update the best score on game over score screen
    const {scores} = useContext(ScoreContext);

    const toggleDisplay = () =>{
        const overlay = document.getElementById("score-overlay")
        overlay.style.visibility = "hidden"
    }

    return (
        <div className="score-screen-container" id="score-overlay">
            <div className="score-screen">
                <p>Game Over!</p>
                <p>Best Score</p>
                <p>{scores.bestScore}</p>
                <button onClick={toggleDisplay}>Play again?</button>
            </div>
        </div>
        
     );
}
 
export default ScoreScreen;