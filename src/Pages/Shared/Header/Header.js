import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { signOut } from 'firebase/auth'
import React, { useContext, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import toast from 'react-hot-toast'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { UrlParamContext } from '../../../App'
import { auth } from '../../../Firebase/firebase.init'
import logo from '../../../images/logo.png'

const Header = () => {
    const [open, setOpen] = useState(false)
    const [user] = useAuthState(auth)
    const location = useLocation()
    const { param } = useContext(UrlParamContext)

    const path = location.pathname
    let displayStatus

    if (
        path === '/' ||
        path === '/services' ||
        path === '/blogs' ||
        path === '/about' ||
        path === '/login' ||
        path === '/signup' ||
        path === `/checkout/${param}`
    ) {
        displayStatus = true
    } else {
        displayStatus = false
    }

    return (
        <nav className={`sticky top-0 bg-white z-10 ${displayStatus ? 'block' : 'hidden'}`}>
            <div className="flex justify-between items-center px-4 md:px-6 lg:px-16 py-5 relative">
                <div className="flex items-center gap-3">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>

                    <Link to="/">
                        <p className="text-2xl md:text-3xl">
                            <span className=" font-semibold text-gray-800">Wellbeing</span> Dental
                        </p>
                    </Link>
                </div>

                <div onClick={() => setOpen(!open)} className="md:hidden h-7 w-7">
                    {open ? <XIcon /> : <MenuIcon />}
                </div>

                <div
                    className={`md:flex items-center gap-2 md:gap-10 md:static absolute left-0 transition-all  duration-75 ${
                        open ? 'top-16 flex flex-col bg-gray-300 w-full p-3' : '-top-[800px]'
                    }`}
                >
                    <NavLink
                        to="/services"
                        className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-gray-700')}
                    >
                        Services
                    </NavLink>
                    <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-gray-700')}>
                        Blogs
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-gray-700')}>
                        About Me
                    </NavLink>
                    {user ? (
                        <button
                            onClick={() => signOut(auth).then(toast.success('Signed Out'))}
                            className="px-3 py-1 bg-blue-500 text-white rounded outline-none"
                        >
                            Sign out
                        </button>
                    ) : (
                        <Link to="/login">
                            <button className="px-3 py-1 bg-blue-500 text-white rounded outline-none">Login</button>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Header
