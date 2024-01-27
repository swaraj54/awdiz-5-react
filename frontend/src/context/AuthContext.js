// useContext


import axios from 'axios';
import { createContext, useEffect, useReducer } from 'react'

export const MyContext = createContext();

const InitialState = { user: null, test: 'Awdiz' } // {_id , name, number, email} 

// action: { type: "LOGIN", payload : { name :"virat" , email : "virat@gmail.com"} }
const Reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload }
        case "LOGOUT":
            return { ...state, user: null }
        default:
            return state
    }
}
// HOC - HIGHER ORDER COMPONENT  
const AuthContext = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, InitialState)

    async function getCurrentUserData(token) {
        try {
            const response = await axios.post('http://localhost:8000/api/v1/auth/get-current-user', { token })
            // const response = { data: { success: true, user: { name: "Swaraj", email: "swaraj@gmail.com" } } }
            if (response.data.success) {
                dispatch({ type: "LOGIN", payload: response.data.user })
            }
        } catch (error) {
            dispatch({type : 'LOGOUT'})
            localStorage.removeItem('my-token')
            // JSON.parse(localStorage.getItem('my-token'))
            console.log(error.response.data.message)
        }
    }

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('my-token'))
        if (token) {
            getCurrentUserData(token)
        }
    }, [])

    return (
        <MyContext.Provider value={{ state, dispatch }} >{children}</MyContext.Provider>
    )
}

export default AuthContext;