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
import Footer from './Pages/Shared/Footer/Footer'
import Header from './Pages/Shared/Header/Header'

function App() {
    return (
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
                    path="/checkout"
                    element={
                        <RequireAuth>
                            <CheckOut />
                        </RequireAuth>
                    }
                />
            </Routes>
            <Toaster />
            <Footer />
        </div>
    )
}

export default App
