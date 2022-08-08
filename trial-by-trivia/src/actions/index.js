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

export async function fetchQuiz(category, difficulty, number){
        console.log("INSIDE FETCH FUNCTION")
        const url = `https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}&type=multiple`
        try {
            let data = await axios.get(url)
            const quizData = data.data.results
            return quizData
           
        } catch (err) {
            console.log(err)
        }
    }

