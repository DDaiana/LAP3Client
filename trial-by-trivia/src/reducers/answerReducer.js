const initialState = {
    list: '',
    correct: ''
}

const answerReducer = (state = initialState, action) => {
    console.log("ANSWER REDUCER")
    console.log(action)
    switch (action.type) {
        case "LIST":
            return {...state, list: action.payload}
        case "CORRECT":
            return {...state, correct: action.payload}
        default:
            return state;
    }
}

export default answerReducer;
