import React from 'react'
import { Link } from 'react-router-dom'
import loginVector from '../../../images/login-vector.png'

const SignUp = () => {
    return (
        <div>
            <div className="lg:px-16 my-10">
                <div className="grid lg:grid-cols-2 gap-5 lg:gap-0">
                    <img src={loginVector} alt="" />

                    <form className="w-11/12 lg:w-10/12 mx-auto p-8 border-[1px] border-gray-300 rounded ">
                        <p className="text-2xl font-bold">Welcome!</p>
                        <p className="mb-5">Sign up by entering the information below</p>
                        <input
                            className="w-full border-2 rounded-lg mb-5 p-2 text-sm font-[500] outline-none"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                        />
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
                        <input
                            className="w-full border-2 rounded-lg mb-5 p-2 text-sm font-[500] outline-none"
                            type="password"
                            name="confirm-password"
                            id="confirm-password"
                            placeholder="Confirm Password"
                        />

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded-lg mb-3 font-semibold"
                        >
                            Sign up
                        </button>

                        <Link to="/login">
                            Already have an account? <span className="text-blue-600 underline">Login</span>
                        </Link>
                    </form>
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

export default SignUp
