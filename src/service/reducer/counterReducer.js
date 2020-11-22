/* eslint-disable */
import {INCREMENT, DECREMENT} from '../actionTypes'


const initState = {
    count : 5
}

export default function(state = initState, action){
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                count : state.count + action.p1
            }
        case DECREMENT:
            return{
                ...state,
                count : state.count - action.p1
            }
        default:
            return state
    }
}