const initialState = {
    number: 0,
    category: '',
    difficulty: ''
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "NUM":
            return {...state, number: state.number + action.payload}
        case "CATEGORY":
            return {...state, category: action.payload}
        case "DIFFICULTY":
            return {...state, difficulty: action.payload}
        default:
            return state;
    }
}

export default mainReducer;