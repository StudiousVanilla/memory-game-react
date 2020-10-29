import React, {useContext} from 'react';
import { ScoreContext } from '../contexts/ScoreContext';

const BestScore = () => {

    // Uses the ScoreContext to dynamically update the best score in the DOM
    const {scores} = useContext(ScoreContext) 


    return ( 
        <div className="best-score">
            <p className="score">Best Score</p>
            <p className="score">{scores.bestScore}</p>
        </div>
        
     );
}
 
export default BestScore;