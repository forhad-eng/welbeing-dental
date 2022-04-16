import { MenuIcon, XIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../../images/logo.png'

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav className="flex justify-between items-center px-4 md:px-16 py-5 relative">
            <div className="flex items-center gap-3">
                <img src={logo} alt="" />
                <p className="text-2xl md:text-3xl">
                    <span className=" font-semibold text-gray-800">Wellbeing</span> Dental
                </p>
            </div>

            <div onClick={() => setOpen(!open)} className="md:hidden h-7 w-7">
                {open ? <XIcon /> : <MenuIcon />}
            </div>

            <div
                className={`md:flex items-center gap-2 md:gap-10 md:static absolute left-0 ease-in ${
                    open ? 'top-16 flex flex-col bg-gray-300 w-full p-3' : '-top-[500px]'
                }`}
            >
                <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-gray-700')}>
                    Services
                </NavLink>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-gray-700')}>
                    Blogs
                </NavLink>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-gray-700')}>
                    About Us
                </NavLink>
                <Link to="/">
                    <button className="px-3 py-1 bg-blue-500 text-white rounded outline-none">Login</button>
                </Link>
            </div>
        </nav>
    )
}

export default Header
