import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { questionAction, answerListAction, answerCorrectAction, responseAction } from "../../actions";

export default function Question({currentQuestion, results}) {

    let color = "";

    // [scoreTime, ]
    const answerList = useSelector(state => state.answerReducer.list);

    const answerCorrect = useSelector(state => state.answerReducer.correct);

    const currentResponse = useSelector(state => state.responseReducer.correct);

    const secondsLeft = useSelector(state => state.timeReducer.time);

    console.log("ACCESSING TIME FROM QUESTION ," , secondsLeft)

    console.log(currentResponse)

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
        let buttonEnable = document.getElementsByClassName('response')
        buttonEnable = Array.from(buttonEnable)
        buttonEnable.forEach(item => {
            item.disabled = false
            item.style.background = ""
        })


        // document.querySelectorAll('button').disabled = 'false';
    },[currentQuestion])



    if(secondsLeft == 0){
        let buttonCheck = document.querySelectorAll('button')
        console.log("BUtTON CLIKC")
        console.log(buttonCheck)
        

    }
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
        // time += secondsLeft;
        // console.log("TIME ",time)
        console.log("CLICKED  ", color)
        console.log(e.target.innerText)
        console.log(results[currentQuestion-1].correct_answer)
        let buttonConst = document.getElementsByClassName('response')
        buttonConst = Array.from(buttonConst)
        buttonConst.forEach(item => item.disabled = false)
        document.getElementById(e.target.innerText).style.background='blue';
        buttonConst.forEach(item => {
            if(item.innerText !== e.target.value){
                item.disabled= true
            }
        })
        // document.getElementById(e.target.innerText).disabled = true;
        dispatch(responseAction(e.target.innerText))
        if (currentResponse === results[currentQuestion-1].correct_answer){
            console.log("CORRECT")

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
            {console.log("COLOR IS ", color)}
            <div className='answer-section'>
                    {answerList.map((item) => (
                        <button className = "response" style={{backgroundColor: color}} id={item} onClick={handleClick}>{item}</button>
                    ))}
            </div>
            {canSplit ? <button className = "split" id="split" onClick={handleSplit}>"50-50"</button>: null}
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
