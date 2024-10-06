export const actionTypes = {
    ADD: 'ADD',
    SUBTRACT: 'SUBTRACT',
    MULTIPLY: 'MULTIPLY',
    DIVIDE: 'DIVIDE',
}

export const add = (num1, num2) => {
    return {
        type: actionTypes.ADD,
        payload: {num1, num2},
    }
}

export const subtract = (num1, num2) => {
    return {
        type: actionTypes.SUBTRACT,
        payload: {num1, num2},
    }
}

export const multiply = (num1, num2) => {
    return {
        type: actionTypes.MULTIPLY,
        payload: {num1, num2},
    }
}

export const divide = (num1, num2) => {
    return {
        type: actionTypes.DIVIDE,
        payload: {num1, num2},
    }
}