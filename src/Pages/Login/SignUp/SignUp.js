import React, { useState } from 'react'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../../Firebase/firebase.init'
import loginVector from '../../../images/login-vector.png'
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner'
import SocialLogin from '../SocialLogin/SocialLogin'

const SignUp = () => {
    const [agree, setAgree] = useState(false)
    const [name, setName] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [pass, setPass] = useState({ value: '', error: '' })
    const [confirmPass, setConfirmPass] = useState({ value: '', error: '' })
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, {
        sendEmailVerification: true
    })
    const [updateProfile] = useUpdateProfile(auth)
    const navigate = useNavigate()

    if (user) {
        toast.success('Success', { id: 'userCreationSuccess' })
        navigate('/')
    }

    const nameHandler = e => {
        if (e.target.value === '') {
            setName({ value: '', error: "Name field can't be empty" })
        } else {
            setName({ value: e.target.value, error: '' })
        }
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

    const confirmPassHandler = e => {
        if (e.target.value !== pass.value) {
            setConfirmPass({ value: '', error: "Password didn't match" })
        } else {
            setConfirmPass({ value: e.target.value, error: '' })
        }
    }

    const signUpHandler = async e => {
        e.preventDefault()

        if (pass.value !== confirmPass.value) {
            toast.error("Password didn't match", { id: 'passNotMatch' })
            return
        }

        await createUserWithEmailAndPassword(email.value, pass.value)
        await updateProfile({ displayName: name.value })
    }

    return (
        <>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <div>
                    <div className="md:px-10 lg:px-16 mt-10 mb-2">
                        <div className="grid lg:grid-cols-2 gap-5 lg:gap-0">
                            <img src={loginVector} alt="" />

                            <form
                                onSubmit={signUpHandler}
                                className="w-11/12 lg:w-10/12 mx-auto p-8 border-[1px] border-gray-300 rounded "
                            >
                                <p className="text-2xl font-bold">Welcome!</p>
                                <p className="mb-5">Sign up by entering the information below</p>
                                <input
                                    onBlur={nameHandler}
                                    className={`w-full border-2 rounded-lg p-2 text-sm font-[500] outline-none ${
                                        name.error ? 'mb-0' : 'mb-5'
                                    }`}
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    required
                                />
                                {name.error && <p className="text-red-700">{name.error}</p>}
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

                                <input
                                    onBlur={confirmPassHandler}
                                    className={`w-full border-2 rounded-lg p-2 text-sm font-[500] outline-none ${
                                        confirmPass.error ? 'mb-0' : 'mb-2'
                                    }`}
                                    type="password"
                                    name="confirm-password"
                                    id="confirm-password"
                                    placeholder="Confirm Password"
                                    required
                                />
                                {confirmPass.error && <p className="text-red-700">{confirmPass.error}</p>}

                                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                                <label className={`ml-2 ${agree || 'text-red-600'}`} htmlFor="terms">
                                    Agree Terms &amp; Conditions
                                </label>

                                {error && <p className="text-red-700">{error.message}</p>}
                                <button
                                    disabled={!agree}
                                    type="submit"
                                    className={`w-full bg-blue-500 text-white py-3 rounded-lg mt-2 mb-3 font-semibold ${
                                        agree || 'bg-blue-300'
                                    }`}
                                >
                                    Sign up
                                </button>

                                <Link to="/login">
                                    Already have an account? <span className="text-blue-600 underline">Login</span>
                                </Link>
                            </form>
                        </div>
                    </div>

                    <div className="pl-1 lg:pr-36 mb-16">
                        <div className="px-8 flex justify-start md:justify-center lg:justify-end items-center">
                            <hr style={{ height: '2px' }} className="w-32 md:w-44 bg-gray-300 mr-2" />
                            <p>Or</p>
                            <hr style={{ height: '2px' }} className="w-32 md:w-44 bg-gray-300 ml-2" />
                        </div>

                        <div className="flex justify-start md:justify-center lg:justify-end items-center">
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default SignUp
