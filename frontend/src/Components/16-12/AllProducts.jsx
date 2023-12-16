import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'

const AllProducts = () => {

    

    async function getData() {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            console.log(response.data, "response.data")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        // toast.success("Component rendered on browser...")
        getData();
    }, [])
    return (
        <div>AllProducts</div>
    )
}

export default AllProducts