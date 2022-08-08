import React, {useEffect, useState} from 'react';
import { useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {fetchQuiz} from '../../actions';
import  Question  from '../../components/Question';


export default function Game() {

    const category = useSelector(state => state.category);
    const difficulty = useSelector(state => state.difficulty);
    const number = useSelector(state => state.number);

    const dispatch = useDispatch();

    // useEffect( async () => {
    //   const results =  await fetchQuiz(category, difficulty, number)
    // },[])

    let [results, setResults] = useState("")
    let [currentQuestion, setCurrentQuestion] = useState("")

    // useEffect( () => {
    //   async function fetchData(category, difficulty, number) {
    //     const resultsData = await fetchQuiz(category, difficulty, number)
    //     setResults(resultsData[0])
    //     setCurrentQuestion(resultsData[0].question)
    //   }
    //   fetchData();
    // }, [])
  
  // async function fetchCall(){
  //   console.log("FETCH")
  //   const resultsData = await fetchQuiz(category, difficulty, number)
  //   console.log("FETCH DONE")
  //   setResults(resultsData[0])
  //   console.log("STATE CHANGE DONE")
  // }
    // const resultsData = await fetchQuiz(category, difficulty, number)
    //     setResults(resultsData[0])

  useEffect(()=>{
    dispatch(fetchQuiz(category, difficulty, number))
    console.log(results)
  },[])



    let navigate = useNavigate() ;
    const navigateToScore = () => {
      navigate('/score')
    }




  return (
    <div>Game
{/* 
    <View>
      <Text>{!data.length ? 'Loading...' : data[0].name}</Text>
    </View> */}

      {/* <Question currentQuestion={1} results = {results}/> */}
    </div>
  )
}
