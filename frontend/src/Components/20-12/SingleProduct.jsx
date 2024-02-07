import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../helper/AxiosConfig';
import { MyContext } from '../../context/AuthContext';
import toast from 'react-hot-toast';

const SingleProduct = () => {
    const [productData, setProductData] = useState({});
    console.log(productData, "productData")
    const { state } = useContext(MyContext)
    const router = useNavigate();
    const { id } = useParams();


    async function getSingleProductData() {
        try {
            const response = await api.post('/product/get-single-product', { productId: id });
            // console.log(response.data)
            if (response.data.success) {
                setProductData(response.data.product)
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function AddToCart() {
        console.log(state?.user, "state?.user")
        if (state?.user?.userId) {
            try {
                const response = await api.post('/user/add-cart', { productId: id, userId: state?.user?.userId });
                // console.log(response.data)
                if (response.data.success) {
                    toast.success(response.data.message)
                    router('/cart')
                }
            } catch (error) {
                console.log(error)
                toast.error(error?.response?.data?.message)
            }
        } else {
            toast.error("Please login.")
            router(`/login-form/${productData._id}`)
        }
    }

    useEffect(() => {
        if (id) {
            getSingleProductData()
        }
    }, [id])

    return (
        <div style={{ textAlign: 'center', display: 'flex', justifyContent: "center" }}>
            <h1>{productData?.name}</h1>
            <h1>{productData?.price}</h1>
            <h1>{productData?.category}</h1>
            <img style={{ width: "30%", height: "400px" }} alt='img' src={productData?.image} />
            <button onClick={AddToCart}>Add to Cart</button>
        </div>
    )
}

export default SingleProduct