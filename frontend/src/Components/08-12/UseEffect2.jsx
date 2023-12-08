import { useEffect, useState } from "react";

function UseEffect2() {
    const [counter, setCounter] = useState(0);
    function Increment() {
        setCounter((prevValue) => prevValue + 1)
    }

    useEffect(() => {
        alert("Hi from use effect..")
    }, [])

    return (
        <div>
            <h1>UseEffect 2</h1>
            <h1>counter : {counter}</h1>
            <button onClick={Increment}>+</button>
        </div>
    )
}

export default UseEffect2;