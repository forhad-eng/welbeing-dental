import React, { useState } from 'react'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import toast from 'react-hot-toast'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { auth } from '../../../Firebase/firebase.init'
import loginVector from '../../../images/login-vector.png'
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner'
import SocialLogin from '../SocialLogin/SocialLogin'

const Login = () => {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [pass, setPass] = useState({ value: '', error: '' })
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    if (user) {
        navigate(from, { replace: true })
    }

    if (sending) {
        toast.success(`Reset link will be sent upon user exist`, { id: 'emailSending' })
    }

    if (resetError) {
        toast.error(`${resetError}`, { id: 'userNotFound' })
    }

    const emailHandler = e => {
        if (/\S+@\S+\.\S+/.test(e.target.value)) {
            setEmail({ value: e.target.value, error: '' })
        } else if (e.target.value === '') {
            setEmail({ value: '', error: "Email field can't be empty" })
        } else {
            setEmail({ value: '', error: 'Invalid email' })
        }
    }

    const passHandler = e => {
        if (e.target.value.length < 6) {
            setPass({ value: '', error: 'Password require minimum 6 characters' })
        } else {
            setPass({ value: e.target.value, error: '' })
        }
    }

    const loginHandler = e => {
        e.preventDefault()

        signInWithEmailAndPassword(email.value, pass.value)
    }

    const passResetHandler = () => {
        if (email.value) {
            sendPasswordResetEmail(email.value)
        } else if (email.error) {
            toast.error(`${email.error}`, { id: 'invalidEmailErr' })
        } else {
            toast.error(`Please enter your email`, { id: 'enterEmailToReset' })
        }
    }

    return (
        <>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <div>
                    <div className="lg:px-16 mt-10 mb-2">
                        <div className="grid lg:grid-cols-2 gap-5 lg:gap-0">
                            <form
                                onSubmit={loginHandler}
                                className="w-11/12 lg:w-10/12 mx-auto p-8 border-[1px] border-gray-300 rounded order-2 lg:order-1"
                            >
                                <p className="text-2xl font-bold">Welcome!</p>
                                <p className="mb-5">Login by entering the information below</p>
                                <input
                                    onBlur={emailHandler}
                                    className={`w-full border-2 rounded-lg p-2 text-sm font-[500] outline-none ${
                                        email.error ? 'mb-0' : 'mb-5'
                                    }`}
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    required
                                />
                                {email.error && <p className="text-red-700">{email.error}</p>}

                                <input
                                    onBlur={passHandler}
                                    className={`w-full border-2 rounded-lg p-2 text-sm font-[500] outline-none ${
                                        pass.error ? 'mb-0' : 'mb-5'
                                    }`}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    required
                                />
                                {pass.error && <p className="text-red-700">{pass.error}</p>}

                                <div className="flex justify-between">
                                    <div>
                                        <input type="checkbox" name="" id="remember" />
                                        <label className="ml-2" htmlFor="remember">
                                            Remember me?
                                        </label>
                                    </div>
                                    <span onClick={passResetHandler} className="text-blue-600 underline cursor-pointer">
                                        Forgot password?
                                    </span>
                                </div>

                                {error && <p className="text-red-700">{error.message}</p>}
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white py-3 rounded-lg mt-4 mb-3 font-semibold"
                                >
                                    Login
                                </button>

                                <Link to="/signup">
                                    Don't have an account?{' '}
                                    <span className="text-blue-600 underline">Create an account</span>
                                </Link>
                            </form>

                            <div className="order-1 lg:order-2">
                                <img src={loginVector} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="pl-1 lg:pl-36 mb-16">
                        <div className="px-8 flex justify-start md:justify-center lg:justify-start items-center">
                            <hr style={{ height: '2px' }} className="w-32 md:w-44 bg-gray-300 mr-2" />
                            <p>Or</p>
                            <hr style={{ height: '2px' }} className="w-32 md:w-44 bg-gray-300 ml-2" />
                        </div>

                        <div className="flex justify-start md:justify-center lg:justify-start items-center">
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Login
