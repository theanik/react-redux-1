import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from '../service/action/counterAction'

const Counter2 = () => {

    const count = useSelector(state => state.counterReducer.count)
    const dichpach = useDispatch()

    return (
        <div>
            <h3>Count {count}</h3>
            <button onClick={() => dichpach(increment(5))} >Inc</button>
            <button onClick={() => dichpach(decrement(10))}>Dsc</button>
        </div>
    )
}

export default Counter2
