import React from 'react';

export default function Question({currentQuestion, results}) {
    console.log("RESULTS INSIDE QUESTION")
    console.log(results)
    console.log("RESULTS INSIDE QUESTION")

    let answers = results.incorrect_answers.push(results.correct_answer)

    let randomAnswers = answers.sort(function () {
        return Math.random() - 0.5;
    });

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
							<button>{item}</button>
						))}
			</div>
        </div>
    )
}
