import { ChevronRightIcon } from '@heroicons/react/solid'
import React from 'react'
import { Link } from 'react-router-dom'
import dentalPic from '../../images/dental-pic.png'
import '../../Styles/Home.css'
import Doctor from './Doctor/Doctor'
import ProServices from './ProServices/ProServices'
import Services from './Services/Services'

const Home = () => {
    return (
        <section>
            <div className="home-banner grid md:grid-cols-2 lg:gap-10 lg:px-10">
                <div className="order-2 md:order-1 md:flex items-center">
                    <img width={'530'} src={dentalPic} alt="" />
                </div>

                <div className="mt-6 md:mt-16 lg:mt-28 ml-44 md:ml-20 lg:ml-40 pr-2 order-1 md:order-2">
                    <p className="text-2xl uppercase mb-2">Welcome to</p>
                    <p className="text-2xl md:text-5xl mb-2 md:mb-7">
                        <span className="font-bold tracking-wide">Wellbeing</span> Dental
                    </p>
                    <p className="text-sm mb-3 md:mb-7 md:leading-6">
                        We have been providing services with reputation for 25 years! We give our max to the patient and
                        do all the necessary stuffs to make patient happy. We believe in service first and it made us
                        wellknown having satisfied the patient.
                    </p>
                    <Link to="/blogs">
                        <button className="flex items-center ml-8 md:ml-0 mx-auto px-3 py-2 bg-blue-500 text-white rounded outline-none">
                            See More <ChevronRightIcon className="w-5 h-5" />
                        </button>
                    </Link>
                </div>
            </div>

            <Services />
            <ProServices />
            <Doctor />
        </section>
    )
}

export default Home
