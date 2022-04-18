import { createContext, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import CheckOut from './Pages/CheckOut/CheckOut'
import About from './Pages/Home/About/About'
import Blogs from './Pages/Home/Blogs/Blogs'
import Home from './Pages/Home/Home'
import ProServices from './Pages/Home/ProServices/ProServices'
import Services from './Pages/Home/Services/Services'
import Login from './Pages/Login/Login/Login'
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth'
import SignUp from './Pages/Login/SignUp/SignUp'
import NotFound from './Pages/NotFound/NotFound'
import Footer from './Pages/Shared/Footer/Footer'
import Header from './Pages/Shared/Header/Header'

export const UrlParamContext = createContext()

function App() {
    const [param, setParam] = useState(0)
    //this useState hook is used to set URL Parameter of Checkout component for sake of optional rendering of header and footer

    return (
        <UrlParamContext.Provider value={{ param, setParam }}>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/services"
                        element={
                            <>
                                <Services />
                                <ProServices />
                            </>
                        }
                    />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route
                        path="/checkout/:serviceID"
                        element={
                            <RequireAuth>
                                <CheckOut />
                            </RequireAuth>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Toaster />
                <Footer />
            </div>
        </UrlParamContext.Provider>
    )
}

export default App
