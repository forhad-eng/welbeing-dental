import React from 'react'
import { Link } from 'react-router-dom'
import loginVector from '../../../images/login-vector.png'

const Login = () => {
    return (
        <div>
            <div className="lg:px-16 my-10">
                <div className="grid lg:grid-cols-2 gap-5 lg:gap-0">
                    <form className="w-11/12 lg:w-10/12 mx-auto p-8 border-[1px] border-gray-300 rounded order-2 lg:order-1">
                        <p className="text-2xl font-bold">Welcome!</p>
                        <p className="mb-5">Login by entering the information below</p>
                        <input
                            className="w-full border-2 rounded-lg mb-5 p-2 text-sm font-[500] outline-none"
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email"
                        />
                        <input
                            className="w-full border-2 rounded-lg mb-5 p-2 text-sm font-[500] outline-none"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                        />
                        <div className="flex justify-between">
                            <div>
                                <input type="checkbox" name="" id="remember" />
                                <label className="ml-2" htmlFor="remember">
                                    Remember me?
                                </label>
                            </div>
                            <Link to="/" className="text-blue-600 underline">
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded-lg mt-4 mb-3 font-semibold"
                        >
                            Login
                        </button>

                        <Link to="/signup">
                            Don't have an account? <span className="text-blue-600 underline">Create an account</span>
                        </Link>
                    </form>

                    <div className="order-1 lg:order-2">
                        <img src={loginVector} alt="" />
                    </div>
                </div>
            </div>
            <div className="w-3/4 md:w-1/3 mx-auto px-8 my-2 flex items-center">
                <hr style={{ height: '2px' }} className="w-1/2 bg-gray-300 mr-2" />
                <p>Or</p>
                <hr style={{ height: '2px' }} className="w-1/2 bg-gray-300 ml-2" />
            </div>
        </div>
    )
}

export default Login
