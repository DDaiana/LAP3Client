import React from 'react';
import { useNavigate} from 'react-router-dom';
import { useSelector } from "react-redux";


export default function Game() {

    const stateCheck = useSelector((state) => {
      console.log("STATE IS ",state)
    })

    let navigate = useNavigate() ;
    const navigateToScore = () => {
      navigate('/score')
    }
  return (
    <div>Game
        <button onClick={navigateToScore}>Finished game</button>
    </div>
  )
}
