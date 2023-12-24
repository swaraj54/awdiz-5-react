import React, { useReducer } from 'react';
// Step 1
const initialState = { count: 0, username: "Awdiz", userRole: "admin" }

// Step 2
// dispatch = action = {type : "INCREMENT"}
const Reducer = (state, action) => {
    console.log(state, "state", action, "action")
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 }
        case 'DECREMENT':
            return { ...state, count: state.count - 1 }
        case "RESET":
            return { ...state, count: 0 }
        case "CHANGNAME":
            return { ...state, username: "Swaraj" }
        default:
            return state
    }
}

const UseReducer = () => {
    // Step 3
    const [state, dispatch] = useReducer(Reducer, initialState)
    console.log(state, "state")

    return (
        <div>
            <h1>{state.count}</h1>
            <h1>{state.username}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button><br />
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button><br />
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
            <button onClick={() => dispatch({ type: "CHANGNAME" })}>Change Name</button>

        </div>
    )
}

export default UseReducer