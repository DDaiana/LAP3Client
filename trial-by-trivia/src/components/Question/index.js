import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { questionAction, answerListAction, answerCorrectAction } from "../../actions";

export default function Question({currentQuestion, results}) {
    console.log("RESULTS INSIDE QUESTION")
    console.log(results)
    console.log("RESULTS INSIDE QUESTION")

    const answerList = useSelector(state => state.answerReducer.list);

    const answerCorrect = useSelector(state => state.answerReducer.correct);

    const dispatch = useDispatch();

    let [isLoaded, setIsLoaded] = useState(false)

    let [canSplit, setCanSplit] = useState(true)

    useEffect(()=>{
        console.log("INCORRECT  ",results[currentQuestion-1].incorrect_answers)
        let answers = results[currentQuestion-1].incorrect_answers 
        console.log("INCORRECT ANSWERS", answers)
        answers.push(results[currentQuestion-1].correct_answer)
        // console.log("ALL ANSWERS", answers)
        let randomAnswers = answers.sort(function () {
            return Math.random() - 0.5;
        });
        dispatch(answerListAction(randomAnswers))
        dispatch(answerCorrectAction(results[currentQuestion-1].correct_answer))
        setIsLoaded(true)
        // document.querySelectorAll('button').disabled = 'false';


    
    },[currentQuestion])

    console.log(answerList)
    console.log(answerCorrect)
    // console.log("INCORRECT  ",results[currentQuestion-1].incorrect_answers)
    // let answers = results[currentQuestion-1].incorrect_answers 
    // console.log("INCORRECT ANSWERS", answers)
    // answers.push(results[currentQuestion-1].correct_answer)
    // // console.log("ALL ANSWERS", answers)
    // let randomAnswers = answers.sort(function () {
    //     return Math.random() - 0.5;
    // });

    const handleClick = (e) => {
        e.preventDefault();
        console.log(e.target.innerText)
        console.log(results[currentQuestion-1].correct_answer)
        const buttonConst = document.querySelectorAll('button')
        buttonConst.forEach(item => item.disabled = false)
        // document.getElementById(e.target.innerText).disabled = true;
        if (e.target.innerText === results[currentQuestion-1].correct_answer){
            console.log("CORRECT")
            dispatch(questionAction());
        } else{
            console.log("INCORRECT")
        }
        // dispatch(questionAction());
        // e.preventDefault();
        // setIsClicked(true)
    }

    const handleSplit = () => {

        if (canSplit == true){
            const filteredAnswers = answerList.filter(item => item != answerCorrect)
            const filteredRandomisedAnswers = filteredAnswers.sort(function () {
                return Math.random() - 0.5;
            });
            filteredRandomisedAnswers.pop()
            console.log(filteredRandomisedAnswers)
            for (let i=0; i<filteredRandomisedAnswers.length; i++){
                console.log("FIRST", filteredRandomisedAnswers[i])
                document.getElementById(filteredRandomisedAnswers[i]).disabled = 'true';
                console.log(filteredRandomisedAnswers[i])
                setCanSplit(false)
            } 
        } else{
            console.log("CANNOT USE")
        }
    }

    const runQuestion = () => {
        return( 
        <>
            <div className='question-section'>
                <div className='question-count'>
                    <span>Question {currentQuestion}</span>/{results.length}
                </div>
                <div className='question-text'>{results[currentQuestion - 1].question}</div>
            </div>
            <div className='answer-section'>
                    {answerList.map((item) => (
                        <button id={item} onClick={handleClick}>{item}</button>
                    ))}
            </div>
            {canSplit ? <button id="split" onClick={handleSplit}>"50-50"</button>: null}
        </>
        )
    }

    return (
        <div>
             {isLoaded == true ? 
       runQuestion():
      null}
        </div>
    )
}
