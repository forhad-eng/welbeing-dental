import { HomeIcon, LocationMarkerIcon, PhoneIcon } from '@heroicons/react/solid'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../images/logo.png'

const Footer = () => {
    return (
        <footer className="bg-[#444f5d] text-gray-300">
            <div className="grid md:grid-cols-4 gap-10 md:gap-16 lg:gap-24 py-16 px-10">
                <div>
                    <div className="flex items-center gap-2 text-white">
                        <img width={'25'} src={logo} alt="" />
                        <p className="text-xl ">
                            <span className="font-semibold">Wellbeing</span> Dental
                        </p>
                    </div>
                    <p className="ml-8">
                        <small>The place you can trust</small>
                    </p>
                </div>

                <div>
                    <p className="text-white">Social</p>
                    <hr style={{ height: '1px' }} className="w-16 mt-1 mb-3" />
                    <ul>
                        <li>
                            <a href="/">
                                <small className="mb-1">Facebook</small>
                            </a>
                        </li>

                        <li>
                            <a href="/">
                                <small className="mb-1">Instagram</small>
                            </a>
                        </li>

                        <li>
                            <a href="/">
                                <small className="mb-1">Twitter</small>
                            </a>
                        </li>

                        <li>
                            <a href="/">
                                <small className="mb-1">Youtube</small>
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <p className="text-white">About Me</p>
                    <hr style={{ height: '1px' }} className="w-16 mt-1 mb-3" />
                    <ul>
                        <li>
                            <Link to="/services">
                                <small className="mb-1">Services</small>
                            </Link>
                        </li>

                        <li>
                            <Link to="/blogs">
                                <small className="mb-1">Blogs</small>
                            </Link>
                        </li>

                        <li>
                            <Link to="/services">
                                <small className="mb-1">Special Offers</small>
                            </Link>
                        </li>

                        <li>
                            <Link to="/blogs">
                                <small className="mb-1">FAQs</small>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <p className="text-white">Contact Us</p>
                    <hr style={{ height: '1px' }} className="w-16 mt-1 mb-3" />
                    <small className="flex gap-2 mb-1">
                        <HomeIcon className="w-4 h-4" />
                        Chittagong
                    </small>
                    <small className="flex gap-2 mb-1">
                        <LocationMarkerIcon className="w-4 h-4" />
                        GEC, Plot - 32/A
                    </small>

                    <small className="flex gap-2">
                        <PhoneIcon className="w-4 h-4" /> 01819400400
                    </small>
                </div>
            </div>

            <p className="text-center py-5 border-t-[1px] border-gray-500">
                <small>Copyright &copy; 2022 Wellbeing Dental / All rights reserved</small>
            </p>
        </footer>
    )
}

export default Footer
