import { ChevronRightIcon } from '@heroicons/react/solid'
import React from 'react'
import { Link } from 'react-router-dom'
import dentalPic from '../../images/dental-pic.png'
import '../../Styles/Home.css'

const Home = () => {
    return (
        <div className="home-banner grid md:grid-cols-2 md:gap-10 md:items-center px-4 md:px-16">
            <div className="order-2 md:order-1">
                <img width={'530'} src={dentalPic} alt="" />
            </div>
            <div className="ml-52 mt-6 md:mb-20 md:ml-44 order-1 md:order-2">
                <p className="text-2xl uppercase mb-2">Welcome to</p>
                <p className="text-2xl md:text-4xl mb-2 md:mb-7">
                    <span className=" font-semibold tracking-wide">Wellbeing</span> Dental
                </p>
                <p className="text-sm mb-3 md:mb-7">
                    We have been providing services with reputation for 25 years! We give our max to the patient and do
                    all the necessary stuffs to make patient happy. We believe in service first and it made us wellknown
                    having satisfied the patient.
                </p>
                <Link to="/">
                    <button className="flex items-center ml-8 md:ml-0 mx-auto px-3 py-2 bg-blue-500 text-white rounded outline-none">
                        See More <ChevronRightIcon className="w-5 h-5" />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
