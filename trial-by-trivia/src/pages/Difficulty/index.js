import React from 'react';
import { useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { numberAction, difficultyAction } from "../../actions";

export default function Difficulty() {
  
  const difficulty = useSelector((state) => {
    console.log("STATE IS ",state.mainReducer.difficulty)
    return state.mainReducer.difficulty});

  const number = useSelector((state) => {
    console.log("STATE IS ",state.mainReducer.number)
    return state.mainReducer.number});

  const dispatch = useDispatch();

  let navigate = useNavigate() ;
  const navigateToGame = () => {
    navigate('/game')
  }

  const handleDifficulty = (e) => {
    dispatch(difficultyAction(e.target.value))
  }

  const handleNumber = (e) => {
    e.preventDefault();
    dispatch(numberAction(e.target[0].value))
    navigateToGame()
  }


  let difficulty_list = [{name:"Easy", value:"easy"},
                         {name:"Medium", value:"medium"},
                         {name:"Hard", value:"hard"}]

  let number_list = [{name:"Five", value:5},
                     {name:"Ten", value:10},
                     {name:"Fifteen", value:15}]

  return (
    <div>Difficulty
    <h2>Difficulty</h2>
    {difficulty_list.map(item => <button value = {item.value} onClick={(e) => handleDifficulty(e)}>{item.name}</button>)}
    <h2>Number of Questions</h2>
    <form onSubmit={handleNumber}>
      <select>
        {number_list.map(item => <option value={item.value}>{item.name}</option>)}
      </select>
      <input type="submit"/>
    </form>
  </div>
  )
}
