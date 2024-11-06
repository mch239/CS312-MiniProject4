import React, { useState, useNavigate } from 'react';
import axios from 'axios';


const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        name: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send a POST request to the backend server on localhost:5000
            const response = await axios.post('http://localhost:5000/register', formData);
            console.log("User registered:", response.data);
            alert('Registration successful!'); // Success feedback to the user
        } catch (error) {
            console.error("Registration error:", error);
            // Provide feedback to the user on error
            alert('Registration failed. Try again.');
        }
    };

    return (
        <div className="overflow-div">
                <div className="credentials-container">
                <form onSubmit={handleSubmit}>
                      <h2 className="center">Register</h2>
                         <input
                            type="text"
                            name="username"
                            placeholder="Username (Email)"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    <div className="btn-wrapper">
                    <button type="submit">Register</button>
                    </div>
                </form>
                </div>
        </div>
    );
}

export default Register;