const initialState = {
    response: ""
}

const answerReducer = (state = initialState, action) => {
    console.log("ANSWER REDUCER")
    console.log(action)
    switch (action.type) {
        case "SUBMIT":
            return {...state, response: action.payload}
        default:
            return state;
    }
}

export default answerReducer;
