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
