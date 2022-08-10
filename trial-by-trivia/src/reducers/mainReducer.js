const initialState = {
    number: '10',
    category: '9',
    difficulty: 'easy',
    playerCount: 1,
    player1: {
        name: "player1",
        score: 0,
      },
      player2: {
        name: "player2",
        score: 0,
      },
}

const mainReducer = (state = initialState, action) => {
    console.log("REDUCER")
    console.log(action)
    switch (action.type) {
        case "NUMBER":
            return { ...state, number: action.payload }
        case "CATEGORY":
            return { ...state, category: action.payload }
        case "DIFFICULTY":
            return { ...state, difficulty: action.payload }
        case "SET_PLAYER_COUNT":
            return {
                ...state,
                playerCount: action.payload,
            };
        case "SET_PLAYER1":
            return {
                ...state,
                player1: {
                    ...state.player1,
                    ...action.payload,
                },
            };
        case "SET_PLAYER2":
            return {
                ...state,
                player2: {
                    ...state.player2,
                    ...action.payload,
                },
            };
        default:
            return state;
    }
}

export default mainReducer;
