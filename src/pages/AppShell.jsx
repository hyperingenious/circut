import { Outlet } from "react-router-dom"
import Navbar from '../components/appShell/Navbar'
import Footer from '../components/appShell/Footer'

function AppShell() {
    return (
        <>
            <Navbar />
            <Outlet /> 
            <Footer />
        </>
    )
}

export default AppShell
