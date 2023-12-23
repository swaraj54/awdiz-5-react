import React, { memo } from 'react'
import toast from 'react-hot-toast'

const Todos = ({ AddTodo, todos }) => {
    toast.success("Hi from todos..")
    return (
        <div>
            <h1>Todos</h1>
            {todos.map((todo) => (
                <h2>{todo}</h2>
            ))}
            <button onClick={AddTodo}> Add todo</button>
        </div>
    )
}

export default memo(Todos);