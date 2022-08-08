import React from 'react';
import { useNavigate} from 'react-router-dom';

export default function Game() {

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
