import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import { UrlParamContext } from '../../App'
import { auth } from '../../Firebase/firebase.init'

const CheckOut = () => {
    const [user] = useAuthState(auth)
    const { serviceID } = useParams()
    const { setParam } = useContext(UrlParamContext)
    setParam(serviceID)

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = data => {
        toast.success(`Thanks For Booking, A representative of us will call you soon at ${data.phoneNumber}`)
        navigate('/')
    }

    return (
        <div className="px-4 md:px-0">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="md:w-1/2 lg:w-2/5 mx-auto my-16 p-8 border-[1px] border-gray-300 rounded"
            >
                <p className="mb-5 text-2xl text-center font-[600]">Please Fill out the information below</p>
                <input
                    className="w-full rounded-lg mb-5 p-3 text-sm font-[500] bg-gray-100 outline-none"
                    type="text"
                    name="name"
                    value={user && user.displayName}
                    readOnly
                />

                <input
                    className="w-full rounded-lg mb-5 p-3 text-sm font-[500] bg-gray-100 outline-none"
                    type="text"
                    name="email"
                    value={user && user.email}
                    readOnly
                />

                <input
                    {...register('address', { required: true })}
                    className={`w-full border-2 rounded-lg p-2 text-sm font-[500] outline-none ${
                        errors.address ? 'mb-0' : 'mb-5'
                    }`}
                    type="text"
                    placeholder="Your Address"
                />
                {errors.address && <span className="text-red-600">This field is required</span>}

                <input
                    {...register('phoneNumber', { required: true })}
                    className={`w-full border-2 rounded-lg p-2 text-sm font-[500] outline-none ${
                        errors.phoneNumber ? 'mb-0' : 'mb-5'
                    }`}
                    type="text"
                    placeholder="Phone Number"
                />
                {errors.phoneNumber && <span className="text-red-600">This field is required</span>}

                <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg mt-2 mb-3 font-semibold">
                    Checkout
                </button>
            </form>
        </div>
    )
}

export default CheckOut
