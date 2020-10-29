import React, { useContext } from 'react';
import { ScoreContext } from '../contexts/ScoreContext';

const CurrentScore = () => {

    // Uses the ScoreContext to dynamically update the current score in the DOM
    const {scores} = useContext(ScoreContext);

    return ( 
        <div className="current-score">
            <p className="score">Current Score</p>
            <p className="score">{scores.currentScore}</p>
        </div>
     );
}
 
export default CurrentScore;