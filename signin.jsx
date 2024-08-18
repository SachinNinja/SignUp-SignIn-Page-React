import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    // handle form submission
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/app/user/signin', {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = {
                email: formData.email,
            };
            navigate('/home', { state: data });
        } catch (error) {
            console.error('Error:', error);
            // If user is not signed up, redirect to signup page
            navigate('/signup');
        }
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-black">
            {/* Background image with blur effect */}
            <div className="absolute inset-0 bg-cover bg-center filter" style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg?w=1060&t=st=1724003020~exp=1724003620~hmac=44013f1ee3de9fd02c39f6bfde208490de1a7b87ec366233a3181d1d02f024de")' }}></div>
            <div className="relative z-10 w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold mb-6 text-center text-blue-900 font-bold ">Sign In</h1>
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-blue-900 font-bold mb-2">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            title="Please enter a valid email address."
                            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-blue-900 font-bold  mb-2">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            title="Password must be at least 6 characters long."
                            minLength="6"
                            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Sign In
                    </button>
                </form>
                <p className="text-center mt-4 text-gray-600">
                    Not signed up? <a href="/signup" className='text-blue-900 font-bold '>Sign up here</a>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
