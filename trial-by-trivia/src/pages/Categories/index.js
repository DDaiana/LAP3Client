import React from 'react';
import { useNavigate} from 'react-router-dom';

export default function Categories() {
  let navigate = useNavigate() ;
  const navigateToDifficulty = () => {
    navigate('/difficulty')
  }
  
  return (
    <div>Categories
      <button onClick={navigateToDifficulty}>Difficulty</button>
    </div>
  )
}
