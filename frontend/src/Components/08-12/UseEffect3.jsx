import { useEffect, useState } from "react";

function UseEffect3() {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(10);

    function Increment() {
        setCounter((prevValue) => prevValue + 1)
    }

    function Increment2() {
        setCounter2((prevValue) => prevValue + 1)
    }

    useEffect(() => {
        alert("Hi from useeffect.")
    }, [counter])

    return (
        <div>
            <h1>UseEffect3</h1>
            <h1>Counter : {counter}</h1>
            <button onClick={Increment}>+</button>
            <h1>Counter 2 : {counter2}</h1>
            <button onClick={Increment2}>+</button>
        </div>
    )
}

export default UseEffect3;