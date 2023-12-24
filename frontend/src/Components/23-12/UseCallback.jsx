import React, { useCallback, useState } from 'react'
import Todos from './Todos'

const UseCallback = () => {
    const [counter, setCounter] = useState(0);
    const [todos, setTodos] = useState([]);

    // function AddTodo() {
    //     setTodos((todo) => [...todo, "New todo"])
    // }

    const AddTodo = useCallback(() => {
        setTodos((todo) => [...todo, "New todo"])
    }, [todos])

    return (
        <div>
            <div>
                <h1>Counter : {counter}</h1>
                <button onClick={() => setCounter((c) => c + 1)}>+</button>
            </div>
            <Todos todos={todos} AddTodo={AddTodo} />
        </div>
    )
}

export default UseCallback