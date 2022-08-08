import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Categories() {
    let [category, setCategory] = useState("");

    let navigate = useNavigate() ;
    const navigateToDifficulty = () => {
      navigate('/difficulty')
    }

    const handleCategory = ( e) => {
      console.log('target: ' +  e.target.innerText)
    }

  
  return (
    <div>Categories
      <button value="Animals" onClick={navigateToDifficulty}>Difficulty</button>
      <button onClick={(e) => handleCategory(e)}>Music</button>
      <button onClick={(e) => handleCategory(e)}>Science</button>
      <button onClick={(e) => handleCategory(e)}>Food</button>
      <button onClick={(e) => handleCategory(e)}>Celebs</button>
    </div>
  )
}
