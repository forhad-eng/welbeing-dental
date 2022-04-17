import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div>
            <div className="px-10 md:px-20 my-10">
                <form className="w-3/4 md:w-1/3 mx-auto p-8 border-[1px] border-gray-300 rounded">
                    <p className="mb-8 text-lg font-bold">Register</p>
                    <input
                        className="w-full border-b-2 mb-5 p-1 pb-1 text-sm font-semibold outline-none"
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                    />
                    <input
                        className="w-full border-b-2 mb-5 p-1 pb-1 text-sm font-semibold outline-none"
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
                        Register
                    </button>

                    <Link to="/signup">
                        Don't have an account? <span className="text-blue-600 underline">Create an account</span>
                    </Link>
                </form>

                <div className="w-3/4 md:w-1/3 mx-auto px-8 my-2 flex items-center">
                    <hr style={{ height: '2px' }} className="w-1/2 bg-gray-300 mr-2" />
                    <p>Or</p>
                    <hr style={{ height: '2px' }} className="w-1/2 bg-gray-300 ml-2" />
                </div>
            </div>
        </div>
    )
}

export default SignUp
