import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { categoryAction } from "../../actions";

export default function Categories() {
    // let [category, setCategory] = useState("");

    const category = useSelector((state) => {
      console.log("STATE IS ",state)
      return state.category});
    const dispatch = useDispatch();
    // const loading = useSelector((state) => state.loading);

    let navigate = useNavigate() ;
    const navigateToDifficulty = () => {
      navigate('/difficulty')
    }

    const handleCategory = (e) => {
      dispatch(categoryAction(e.target.value))
      navigateToDifficulty();
    }

    let category_list = [{name:"Music", value:12},
                         {name:"Animals", value:27},
                         {name:"Computer Science", value:18},
                         {name: "Mathematics", value:19},
                         {name: "Science", value:17},
                         {name: "Celebrities", value:26},
                         {name: "Books", value:10},
                         {name: "Anime", value:31},
                         {name: "Television", value:14},
                         {name:"Film", value:11}]

  
  return (
    <div>Categories
      <h2>Category</h2>
      {category_list.map(item => <button value = {item.value} onClick={(e) => handleCategory(e)}>{item.name}</button>)}
      <button onClick={(e) => handleCategory(e)}>Random</button>
    </div>
  )
}
