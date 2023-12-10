import React, { useState } from 'react'

const RegisterForm = () => {

    const [userData, setUserData] = useState({ name: "", email: "", password: "" })
    console.log(userData, "userData")
    function handleSubmit(e) {
        e.preventDefault();
        alert("Registration Completed..")
        setUserData({ name: "", email: "", password: "" })
    }

    function handleChange(e) {
        // console.log(e.target.value, e.target.name)
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>Name :</label><br />
                <input type='text' required onChange={handleChange} name="name" value={userData.name} /><br />
                <label>Email :</label><br />
                <input type='email' required onChange={handleChange} name='email' value={userData.email} /><br />
                <label>Password</label><br />
                <input type='password' required onChange={handleChange} name='password' value={userData.password} /><br />
                <input type='submit' value="Register" />
            </form>
        </div>
    )
}

export default RegisterForm