import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        console.log("email, password", email, password);
        axios
            .post("http://localhost:5000/login", { name, email, password })
            .then((result) => {
                console.log(result);
                if (result.data === "Success") {
                    navigate("/home");
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <section className="flex items-center m-auto w-full h-screen max-w-sm m-0-auto">
            <form className="w-full space-y-5 rounded-md bg-white shadow-2xl px-5 pt-6 pb-8 mb-4">
                <h1 className="text-4xl text-center">Login</h1>

                <div className="">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-3xl focus:shadow-blue-500"
                        id="email"
                        type="text"
                        placeholder="Email"
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
                        onChange={(e) => setPassword(e.target.value)}
                        className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-3xl focus:shadow-blue-500"
                        id="password"
                        type="password"
                        placeholder="******************"
                    />
                </div>
                <div>
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Login
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Login;
