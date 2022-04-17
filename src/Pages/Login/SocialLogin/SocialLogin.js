import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../../Firebase/firebase.init'
import facebook from '../../../images/icons/fb.png'
import google from '../../../images/icons/google.png'

const SocialLogin = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    const navigate = useNavigate()

    if (user) {
        navigate('/')
    }

    return (
        <div className="px-10 md:px-20 my-2">
            <button
                onClick={() => signInWithGoogle()}
                className="w-full flex items-center bg-white mb-2 p-1 border-2 border-gray-300 rounded-full outline-none"
            >
                <img width={'37'} src={google} alt="Google" />
                <p className="mx-5 font-semibold">Continue with Google</p>
            </button>

            <button className="w-full flex items-center bg-white p-1 border-2 border-gray-300 rounded-full outline-none">
                <img width={'37'} src={facebook} alt="Facebook" />
                <p className="mx-5 font-semibold">Continue with Facebook</p>
            </button>
        </div>
    )
}

export default SocialLogin
