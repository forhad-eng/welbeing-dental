import React from 'react'
import { Link } from 'react-router-dom'

const ProService = ({ proService }) => {
    const { name, img, price, description } = proService

    return (
        <div className="shadow-xl rounded-lg">
            <img
                style={{ height: '200px', borderRadius: '0.5rem 0.5rem 0 0' }}
                src={img}
                className="w-full hover:scale-95 hover:transition-all"
                alt=""
            />
            <div className="text-gray-800 mt-6 pl-4">
                <p className="font-[600] tracking-wider">{name}</p>
                <p className="mb-3 font-[500] ">
                    Price: <span className="text-orange-500">${price}</span>
                </p>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
            <Link to="/checkout">
                <button className="w-4/5 block mx-auto my-4 p-2 bg-blue-500 text-white rounded-lg outline-none">
                    Book An Appointment
                </button>
            </Link>
        </div>
    )
}

export default ProService
