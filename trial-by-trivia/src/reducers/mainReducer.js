const initialState = {
    number: '10',
    category: '9',
    difficulty: 'easy'
}

const mainReducer = (state = initialState, action) => {
    console.log("REDUCER")
    console.log(action)
    switch (action.type) {
        case "NUMBER":
            return {...state, number: action.payload}
        case "CATEGORY":
            return {...state, category: action.payload}
        case "DIFFICULTY":
            return {...state, difficulty: action.payload}
        default:
            return state;
    }
}

export default mainReducer;
