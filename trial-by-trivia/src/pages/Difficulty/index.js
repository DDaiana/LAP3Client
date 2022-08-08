import React from 'react';
import { useNavigate} from 'react-router-dom';

export default function Difficulty() {
    let navigate = useNavigate() ;
  const navigateToGame = () => {
    navigate('/game')
  }
  return (
    <div>Difficulty
        <button onClick={navigateToGame}>Begin game</button>
    </div>
  )
}
