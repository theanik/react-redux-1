import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from '../service/action/counterAction'

const Counter = ({increment, decrement,count}) => {
    return (
        <div>
            <h3>Count {count}</h3>
            <button onClick={() => increment(5)} >Inc</button>
            <button onClick={() => decrement(10)}>Dsc</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    count : state.counterReducer.count
})

export default connect(mapStateToProps, {increment, decrement})(Counter)
