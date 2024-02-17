import React, { useContext, useState } from 'react'
import { MyContext } from '../context/AuthContext.js';
import { useEffect } from 'react';
import api from '../helper/AxiosConfig';
import toast from 'react-hot-toast';
import RestrictsNonLoggedInUser from './Redircts/RestrictsNonLoggedInUser.jsx';

const Cart = () => {
    const [cartProducts, setCartProducts] = useState([])
    const { state } = useContext(MyContext)
    console.log(cartProducts, "cartProducts")
    async function getCartProducts() {
        try {
            const response = await api.post('/user/read-cart', { userId: state?.user?.userId });
            // console.log(response.data)
            if (response.data.success) {
                setCartProducts(response.data.cart)
                toast.success(response.data.message)
                // router('/cart')
            }
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message)
        }
    }

    async function Checkout() {
        try {
            //
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
        <RestrictsNonLoggedInUser>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {cartProducts?.length ? <div>
                    {cartProducts?.map((product) => (
                        <div key={product._id}>
                            {/* <img src={product.image} /> */}
                            <h1>{product.name}</h1>
                            <h1>{product.price}</h1>
                            <h1>{product.category}</h1>
                        </div>
                    ))}
                </div> : <div>Loading...</div>}
                <button onClick={Checkout}>Checkout ?</button>
            </div>
        </RestrictsNonLoggedInUser>
    )
}

export default Cart