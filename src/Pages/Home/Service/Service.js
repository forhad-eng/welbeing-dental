import React from 'react'
import { Link } from 'react-router-dom'
import '../../../Styles/Service.css'

const Service = ({ service }) => {
    const { name, img, price, description } = service

    return (
        <div className="service">
            <img src={img} alt="" />
            <div className="text-center text-gray-800 mt-6">
                <p className="font-[600] tracking-wider">{name}</p>
                <p className="mb-3 font-[500] ">
                    Price: <span className="text-orange-500">${price}</span>
                </p>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
            <Link to="/checkout">
                <button className="w-4/5 block mx-auto mt-4 p-2 bg-blue-500 text-white rounded-lg outline-none">
                    Book An Appointment
                </button>
            </Link>
        </div>
    )
}

export default Service
