import { useState } from "react";
import toast from "react-hot-toast";
import api from "../helper/AxiosConfig";

const AddProduct = () => {
    const [productData, setProductData] = useState({ name: "", price: "", image: "", category: "", quantity: "" })

    function handleChange(e) {
        setProductData({ ...productData, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if (productData.name && productData.price && productData.image && productData.category && productData.quantity) {
            try {
                const response = await api.post('/product/add-product', { productData })
                if (response?.data.success) {
                    toast.success(response.data.message)
                    setProductData({ name: "", price: "", image: "", category: "", quantity: "" })
                }
            } catch (error) {
                toast.error(error.response.data.error)
            }
        } else {
            toast.error("All fields are required.")
        }
    }
    return (
        <div>
            <h1>AddProduct</h1>
            <form onSubmit={handleSubmit}>
                <label>Name :</label><br />
                <input type="text" value={productData.name} onChange={handleChange} name='name' /><br />
                <label>Price :</label><br />
                <input type="number" value={productData.price} onChange={handleChange} name="price" /><br />
                <label>Image :</label><br />
                <input type="url" value={productData.image} onChange={handleChange} name='image' /><br />
                <label>Category :</label><br />
                <input type="text" value={productData.category} onChange={handleChange} name='category' /><br />
                <label>Quantity :</label><br />
                <input type="number" value={productData.quantity} onChange={handleChange} name='quantity' /><br />
                <input type="submit" value="Add Product" /><br />
            </form>
        </div>
    )
}

export default AddProduct;