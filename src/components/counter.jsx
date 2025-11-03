import React from 'react'
import { connect } from 'react-redux'
const counter = ({ count, onIncrement, onDecrement }) => {
    return (
        <div>
            <h1>Count  : {count}</h1>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    count: state.count
})

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' })
})


export default connect(mapStateToProps, mapDispatchToProps)(counter)