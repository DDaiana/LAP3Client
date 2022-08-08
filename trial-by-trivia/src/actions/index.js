export const category = (name) => {
    return { 
        type: "CATEGORY",
        payload: name
    }
}

export const number = (num) => {
    return { 
        type: "NUMBER",
        payload: num
    }
}

export const difficulty = (diff) => {
    return { 
        type: "DIFFICULTY",
        payload: diff
    }
}