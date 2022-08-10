const initialState = {
    time: 15
}

const timeReducer = (state = initialState, action) => {
    console.log("ANSWER REDUCER")
    console.log(action)
    switch (action.type) {
        case "TIME":
            return {...state, time: action.payload}
        default:
            return state;
    }
}

export default timeReducer;
