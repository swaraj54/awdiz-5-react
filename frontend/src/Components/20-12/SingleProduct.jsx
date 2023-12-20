import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const [productData, setProductData] = useState({});
    console.log(productData,"productData")

    const { id } = useParams();

    console.log(id, "id")


    async function getSingleProductData() {
        try {

            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            // console.log(response.data)
            setProductData(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (id) {
            getSingleProductData()
        }
    }, [id])

    return (
        <div>
            <h1>{productData.title}</h1>
            <img src={productData.image} />
        </div>
    )
}

export default SingleProduct