import React, { useContext, useEffect } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../../context/AuthContext'

const RestrictsNonLoggedInUser = ({ children }) => {
    const { state } = useContext(MyContext)
    const router = useNavigate()

    useEffect(() => {
        if (state?.user && state?.user?.userId === undefined) {
            toast.error("Log In first to access this page.")
            router('/login-form')
        }
    }, [state])
    return (
        <>{children}</>
    )
}

export default RestrictsNonLoggedInUser