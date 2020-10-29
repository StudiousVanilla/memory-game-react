import React, {useContext, useState} from 'react';
import clubArray from '../clubs'
import { ScoreContext } from '../contexts/ScoreContext';


const Game = () => {


    // functions can manage the state data in the ScoreContext
    const {updateCurrentScore, resetScores} = useContext(ScoreContext)

    // useState Hook initilaisation
    const [teamsSelected, setTeamsSelected] = useState([]) 

    // called when a team is selected
    const selectTeam = (e) =>{

        // if a team is in the teamsSelected array then the game is over
        if(teamsSelected.includes(e.target.alt) === true){
            // teamsSelected array is reset
            setTeamsSelected([])
            // scores are reset and best score updated in the ScoreContext if needed
            resetScores();
            reorderTeams();
        }
        else{
            // if the team is a valid choice then it is added to the teamsSelected array
            setTeamsSelected((teamsSelected)=> teamsSelected.concat(e.target.alt))

            // the current score is then updated in the ScoreContext
            updateCurrentScore()      
        }


    }

    const shuffleTeams = () =>{
        clubArray.sort(() => Math.random() - 0.5);
        console.log('shuffle');
        return clubArray
    }

    const reorderTeams = () =>{
        clubArray.sort((a,b) => a.name > b.name ? 1 : -1);
        console.log('order');
        return clubArray
    }


    return (
        // dynamically renders each team from the clubArray to create the game board
        <ul className="gameBoard">
            { clubArray.map(club =>{
                return(
                    <li onClick={selectTeam} key={club.name} >
                        <img className="clubTile" src={club.source} alt={club.name} onClick={shuffleTeams}></img>
                    </li>
                )
            })}
        </ul>
     );
}
 
export default Game;