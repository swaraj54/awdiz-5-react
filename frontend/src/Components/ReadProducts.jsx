import React, { useEffect, useState } from 'react'
import api from '../helper/AxiosConfig'
import { useNavigate } from 'react-router-dom'

const ReadProducts = () => {
    const router = useNavigate();
    const [products, setProducts] = useState([])
    console.log(products, "products")
    async function getProducts() {
        try {
            const response = await api.get('/product/read-products')
            if (response?.data.success) {
                setProducts(response.data.products)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div>
            {products?.length ? <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                {products?.map((product) => (
                    <div onClick={() => router(`/single-product/${product._id}`)} style={{ border: "2px solid black", width: "30%", height: "500px", marginBottom: "50px", cursor: "pointer" }}>
                        <img style={{ width: "70%", margin: "auto", height: "70%" }} src={product.image} />
                        <h3>Name : {product.name}</h3>
                        <h4>Price : {product.price}/-</h4>
                        <h4>Category : {product.category}</h4>
                        <h4>Quantity : {product.quantity}</h4>
                    </div>
                ))}
            </div> : <div>Loading..</div>}
        </div>
    )
}

export default ReadProducts