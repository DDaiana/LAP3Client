import React from 'react';
import { useNavigate} from 'react-router-dom';

export default function Score() {
    let navigate = useNavigate() ;
    const navigateToProfile = () => {
      navigate('/')
    }
  return (
    <div>Score
        <button onClick={navigateToProfile}>Exit game</button>
    </div>
  )
}
