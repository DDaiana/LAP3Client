import React from 'react';
import { useDispatch } from "react-redux";
import { questionAction } from "../../actions";

export default function Question({currentQuestion, results}) {
    console.log("RESULTS INSIDE QUESTION")
    console.log(results)
    console.log("RESULTS INSIDE QUESTION")

    const dispatch = useDispatch();

    console.log("RESULTS  ",results[currentQuestion-1].incorrect_answers)
    let answers = results[currentQuestion-1].incorrect_answers 
    answers.push(results[currentQuestion-1].correct_answer)
    console.log(answers)
    let randomAnswers = answers.sort(function () {
        return Math.random() - 0.5;
    });

    const handleClick = () => {
        dispatch(questionAction());
    }

    return (
        <div>
			<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion}</span>/{results.length}
						</div>
						<div className='question-text'>{results[currentQuestion-1].question}</div>
					</div>
					<div className='answer-section'>
						{randomAnswers.map((item) => (
							<button onClick={handleClick}>{item}</button>
						))}
			</div>
        </div>
    )
}
