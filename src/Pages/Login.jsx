import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    
    return (
        <div className="flex justify-center items-center h-screen bg-pink-500">
            <div className="bg-white p-8 rounded shadow">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                        <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                        <input type="password" id="password" className="w-full px-3 py-2 border border-gray-300 rounded" />
                    </div>
                    <button type="submit" className="w-full bg-pink-600 text-white py-2 px-4 rounded font-bold">Login</button>
                    <button 
                        type="submit" 
                        className="w-full bg-pink-600 text-white py-2 px-4 rounded font-bold mt-4"
                        onClick={() => { navigate('/register') }}
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;