import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AllProducts = () => {

    const [products, setProducts] = useState([]);
    console.log(products, "products")

    const router = useNavigate();


    async function getData() {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            // console.log(response.data, "response.data")
            setProducts(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    function Routing(id) {
        // toast(id) // 1,2,3,4,5
        router(`/single-product/${id}`); // /single-product/18
    }

    useEffect(() => {
        // toast.success("Component rendered on browser...")
        getData();
    }, [])

    return (
        <div>
            {products?.length ? <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {products.map((product) => (
                    <div onClick={() => Routing(product.id)} style={{ height: '500px', width: "23%", border: '2px solid black', marginBottom: '30px', cursor: 'pointer' }}>
                        <img style={{ height: "400px", margin: 'auto' }} src={product.image} />
                        <h1>{product.title}</h1>
                        <h3>${product.price}/-</h3>
                    </div>
                ))}
            </div> : <div>Loading..</div>}
        </div>
    )
}

export default AllProducts