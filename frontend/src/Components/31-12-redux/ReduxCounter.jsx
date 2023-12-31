import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions'

const ReduxCounter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Co(unt : {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default ReduxCounter