import React, { useContext } from 'react'
import { MyContext } from '../context/AuthContext.js';
import { useEffect } from 'react';
import api from '../helper/AxiosConfig';
import toast from 'react-hot-toast';

const Cart = () => {

    const { state } = useContext(MyContext)

    async function getCartProducts() {
        try {
            const response = await api.post('/user/read-cart', { userId: state?.user?.userId });
            // console.log(response.data)
            if (response.data.success) {
                console.log(response.data.cart)
                toast.success(response.data.message)
                // router('/cart')
            }
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message)
        }
    }

    useEffect(() => {
        if (state?.user && state?.user?.userId) {
            getCartProducts()
        }
    }, [state])
    return (
        <div>Cart</div>
    )
}

export default Cart