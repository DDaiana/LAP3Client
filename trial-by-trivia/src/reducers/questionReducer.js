const initialState = {
    question:1
}

const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return {...state, question: state.question + action.payload}
        default:
            return state;
    }
}

export default questionReducer;
