import {createStore} from 'redux'
import rootReducer from './reducer'

const initState = {
    
}

export default createStore(
    rootReducer, initState
)