// src/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Optional: for styling

const Login = () => {
    // State to hold form data: PRN and password
    const [formData, setFormData] = useState({
        prn: '',
        password: ''
    });

    // State for error and success messages
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    // Update state as user types in the form
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Check if both fields are filled
        if (!formData.prn || !formData.password) {
            setMessage('Please enter both PRN and password.');
            setIsError(true);
            return;
        }

        try {
            // Replace with your actual API endpoint URL
            const response = await axios.post('http://<your-ec2-public-ip>:<your-api-port>/api/auth/login', {
                prn: formData.prn,
                password: formData.password
            });

            // If login is successful
            if (response.status === 200) {
                setMessage('Login successful!');
                setIsError(false);
                // You would typically handle tokens or redirection here
                // e.g., localStorage.setItem('token', response.data.token);
                // navigate('/dashboard');
            }
        } catch (error) {
            // Handle login errors from the API
            console.error('Login error:', error);
            setMessage(error.response?.data?.message || 'Login failed. Please check your credentials.');
            setIsError(true);
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Student Login</h2>
                
                <div className="form-group">
                    <label htmlFor="prn">PRN No.</label>
                    <input
                        type="text"
                        id="prn"
                        name="prn"
                        value={formData.prn}
                        onChange={handleChange}
                        placeholder="Enter your PRN"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <button type="submit" className="login-button">Login</button>

                {/* Display messages */}
                {message && (
                    <p className={`message ${isError ? 'error-message' : 'success-message'}`}>
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
};

export default Login;