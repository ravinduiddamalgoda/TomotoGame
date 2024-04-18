import React, { useState } from 'react';

const Register = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [conpassword, setconpassword] = useState("");
    const [passwordMatchError, setPasswordMatchError] = useState(false);

    const checkPassword = () => {
        return password != conpassword;
    };

    const handleSubmit = (e) => {
        e.preventDefault;
        if (checkPassword()) {
            setPasswordMatchError(true);
            return;
        }else {
            alert("succcesss")
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-pink-500">
            <div className="bg-white p-8 rounded shadow">
                <h2 className="text-2xl font-bold mb-4">Register</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                        <input onChange={(e) => {setemail(e.target.value)}} type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                        <input onChange={(e) => {setpassword(e.target.value)}} type="password" id="password" className="w-full px-3 py-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Confirm Password</label>
                        <input onChange={(e) => {setconpassword(e.target.value)}} type="password" id="password" className="w-full px-3 py-2 border border-gray-300 rounded" />
                    </div>

                    {passwordMatchError && <p className='text-[#db0211]'>Passwords do not match.</p>}

                    <button onSubmit={handleSubmit} type="submit" className="w-full bg-pink-600 text-white py-2 px-4 rounded font-bold">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;