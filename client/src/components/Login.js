import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [credentials, setCredentials] = useState({
        user_id: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/home', credentials);
            console.log("Logged In:", response.data);
        } catch (error) {
            console.error("Login Error:", error);
        }
    };

    return (
        <div className="overflow-div">
            <div className="credentials-container">
        <form onSubmit={handleSubmit}>
            <h2 className="center">Please Login</h2>
            <input
                type="text"
                name="username"
                placeholder="Username (Email)"
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
            />
            <div className="btn-wrapper">
                <button type="submit">Login</button>
            </div>
        </form>
        </div>
        </div>
    );
}

export default Login;