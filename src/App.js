import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import ProServices from './Pages/Home/ProServices/ProServices'
import Services from './Pages/Home/Services/Services'
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
            </Routes>
        </div>
    )
}

export default App
