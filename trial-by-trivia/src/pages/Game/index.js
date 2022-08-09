import React, {useEffect, useState} from 'react';
import { useNavigate} from 'react-router-dom';
import { useSelector } from "react-redux";
import {fetchQuiz} from '../../actions';
import  Question  from '../../components/Question';
import Timer from '../../components/Timer';


export default function Game() {

    const category = useSelector(state => state.mainReducer.category);
    const difficulty = useSelector(state => state.mainReducer.difficulty);
    const number = useSelector(state => state.mainReducer.number);

    const currentQuestion = useSelector(state => state.questionReducer.question);


    let [isLoaded, setIsLoaded] = useState(false)
    let [results, setResults] = useState([])

 
 
  useEffect(()=>{
    async function fetchData() {
      const results = await fetchQuiz(category, difficulty, number) 
      setResults(results)
      setIsLoaded(true)
      return results
    }
    fetchData();
  },[]);



    console.log(results)


    let navigate = useNavigate() ;
    const navigateToScore = () => {
      navigate('/score')
    }

    const runGame = () => {
      return(
      <>
      <Timer />
      <Question currentQuestion={currentQuestion} results = {results}/>
      </>
      )
    }




  return (
    <div>Game
      {isLoaded == true ? 
       runGame():
      null}
      {/* {results.map(item => item.question)} */}
{/* 
    <View>
      <Text>{!data.length ? 'Loading...' : data[0].name}</Text>
    // </View> */}
 {/* <Question currentQuestion={1} results = {results}/> */}

    
    </div>
  )
}
