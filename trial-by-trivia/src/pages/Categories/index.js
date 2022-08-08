import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Categories() {
    let [category, setCategory] = useState("");
    let navigate = useNavigate() ;
    const navigateToDifficulty = (e) => {
        // setCategory = e.target.textContent;
        // console.log(setCategory);
        console.log(e.target.value);
    // navigate('/difficulty')
  }
  
  return (
    <div>Categories
      <button value="Animals" onClick={(e) => navigateToDifficulty(e)}>Animals</button>
      <button onClick={navigateToDifficulty("science")}>Science</button>
      <button onClick={navigateToDifficulty("food")}>Food</button>
      <button onClick={navigateToDifficulty("celebrities")}>Celebs</button>
    </div>
  )
}
