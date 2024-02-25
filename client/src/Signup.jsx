import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        console.log("name, email, password", name, email, password);
        axios
            .post("http://localhost:5000/register", { name, email, password })
            .then((result) => {
                console.log(result);
                navigate("/login");
            })
            .catch((err) => console.log(err));
    };

    return (
        <section className="flex items-center m-auto w-full h-screen max-w-sm m-0-auto">
            <form className="w-full space-y-5 rounded-md bg-white shadow-2xl px-5 pt-6 pb-8 mb-4">
                <h1 className="text-center text-4xl">Register</h1>
                <div className="">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="fullName"
                    >
                        Full name
                    </label>
                    <input
                        className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-3xl focus:shadow-blue-500"
                        id="fullName"
                        type="text"
                        placeholder="Full name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-3xl focus:shadow-blue-500"
                        id="email"
                        type="text"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-3xl focus:shadow-blue-500"
                        id="password"
                        type="password"
                        placeholder="******************"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Register
                </button>
                <div>
                    <label className="block text-center mb-1">
                        Already have an account
                    </label>
                    <Link
                        to="/login"
                        className="w-full text-center border bg-gray-100 hover:bg-gray-200 text-black-500 py-2 px-4 focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Login
                    </Link>
                </div>
            </form>
        </section>
    );
};

export default Signup;
