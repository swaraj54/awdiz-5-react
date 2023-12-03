import { useState } from "react";



function Counter() {

    const [counter, setCounter] = useState(1); // 2 3

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    function Change() {
        setIsLoggedIn((prevValue) => !prevValue)
    }
    function Increment() {
        setCounter((prevValue) => prevValue + 1)
    }
    function Decrement() {
        setCounter((prevValue) => prevValue - 1)
    }
    function test() {
        setCounter(counter + 1)
    }
    function IncrementBy2() {
        setCounter((prevValue) => prevValue + 2)
    }
    return (
        <div>
            <h1>Counter - {counter}</h1><br />
            <button onClick={Increment} >+</button><br />
            <button onClick={Decrement}>-</button><br />
            <button onClick={test}>+</button><br />
            <button onClick={IncrementBy2}>+2</button><br />
            {isLoggedIn ? <button onClick={Change} >Logout</button> : <button onClick={Change}>Login</button>}
        </div>
    )
}

export default Counter;