import {INCREMENT, DECREMENT} from '../actionTypes'

export const increment = (p1) => {
    return {
        type : INCREMENT,
        p1
    }
}

export const decrement = (p1) => {
    return {
        type : DECREMENT,
        p1
    }
}
