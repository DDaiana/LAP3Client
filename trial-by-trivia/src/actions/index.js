import axios from 'axios';

export function categoryAction(name) {
    return { 
        type: "CATEGORY",
        payload: name
    }
}

export function numberAction(num) {
    return { 
        type: "NUMBER",
        payload: num
    }
}

export function difficultyAction(diff) {
    return { 
        type: "DIFFICULTY",
        payload: diff
    }
}

export function questionAction(){
    return{
        type: "ADD",
        payload: 1
    }
}

export function answerListAction(answers){
    return{
        type: "LIST",
        payload: answers
    }
}

export function answerCorrectAction(answerCorrect){
    return{
        type: "CORRECT",
        payload: answerCorrect
    }
}

export async function fetchQuiz(category, difficulty, number){
        console.log("INSIDE FETCH FUNCTION")
        console.log(category, difficulty, number)
        const url = `https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}&type=multiple`
        try {
            let data = await axios.get(url)
            console.log(url)
            console.log(data)
            const quizData = data.data.results
            console.log(quizData)
            return quizData
           
        } catch (err) {
            console.log(err)
        }
    }

