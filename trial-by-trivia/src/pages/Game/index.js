import React, {useEffect, useState} from 'react';
import { useNavigate} from 'react-router-dom';
import { useSelector } from "react-redux";
import {fetchQuiz} from '../../actions';
import  Question  from '../../components/Question';


export default function Game() {

    const category = useSelector(state => state.category);
    const difficulty = useSelector(state => state.difficulty);
    const number = useSelector(state => state.number);

    let [results, setResults] = useState([])
    let [currentQuestion, setCurrentQuestion] = useState("")

 
 
  useEffect(()=>{
    async function fetchData() {
      const results = await fetchQuiz(category, difficulty, number) 
      setResults(results)
      return results
    }
    fetchData();
  },[]);



    console.log(results)


    let navigate = useNavigate() ;
    const navigateToScore = () => {
      navigate('/score')
    }




  return (
    <div>Game
      {Array.isArray(results) ? 
      results.map(item => <h2>{item.question}</h2>):
      null}
      {/* {results.map(item => item.question)} */}
{/* 
    <View>
      <Text>{!data.length ? 'Loading...' : data[0].name}</Text>
    </View> */}

      {/* <Question currentQuestion={1} results = {results}/> */}
    </div>
  )
}
