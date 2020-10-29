import React, {createContext, useState} from 'react';

export const ScoreContext = createContext();

const ScoreContextProvider = (props) => {

    // records and allows for updating of state
    const [scores, setScores ] = useState({
        bestScore: 0,
        currentScore:0,
        tempBestScore:0
    })
    
    // updates current score by setting new state
    const updateCurrentScore = () =>{
        // if the temporary best score is lower than the current score then it is incremented by 1
        if(scores.currentScore >= scores.tempBestScore){
            setScores({
                bestScore:scores.bestScore, 
                currentScore:scores.currentScore + 1,
                tempBestScore:scores.tempBestScore + 1
            })
        }
        else{
            // if the temporary best score is higher than the current score then only the current score changes
            setScores({
                bestScore:scores.bestScore,
                currentScore:scores.currentScore + 1,
                tempBestScore:scores.tempBestScore
            })
        }      
    }

    // current score is reset to 0 and the bestScore is set to the temporary best score
    const resetScores = () =>{
        setScores({
            bestScore:scores.tempBestScore,
            currentScore:0,
            tempBestScore:scores.tempBestScore
        })
    }

    return (
        // The scores state date, ands the functions to manage them, are passed to recieving components
        <ScoreContext.Provider value={{scores, updateCurrentScore:updateCurrentScore, resetScores:resetScores}}>
            {props.children}
        </ScoreContext.Provider>
     );
}
 
export default ScoreContextProvider;