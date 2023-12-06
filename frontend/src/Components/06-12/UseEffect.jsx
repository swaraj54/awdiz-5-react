import { useEffect, useState } from "react";

function UseEffect() {
    // state 
    // functions
    // useeffects
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(10);

    function Increment() {
        setCounter((prevState) => prevState + 1)
    }

    function Increment2() {
        setCounter2((prevState) => prevState + 1)
    }

    useEffect(() => {
        alert("Hi from useeffect.")
        console.log("hii")
    });

    return (
        <div>
            <h1>UseEffect</h1>
            <h1>Counter : {counter}</h1>
            <button onClick={Increment}>+</button>
            <h1>Counter 2 : {counter2}</h1>
            <button onClick={Increment2}>+</button>
        </div>
    )
}

export default UseEffect;