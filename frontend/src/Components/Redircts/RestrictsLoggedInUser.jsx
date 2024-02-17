import React, { useContext, useEffect } from 'react'
import { MyContext } from '../../context/AuthContext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const RestrictsLoggedInUser = ({ children }) => {
    const router = useNavigate()
    const { state, dispatch } = useContext(MyContext)
    
    useEffect(() => {
        if (state?.user?.userId) {
            toast.success("You are already loggedin.")
            router('/')
        }
    }, [state])

    return children;
}

export default RestrictsLoggedInUser