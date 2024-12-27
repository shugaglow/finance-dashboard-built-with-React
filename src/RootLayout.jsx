import { Outlet } from "react-router-dom"
import Sidebar from "./components/Sidebar"

function RootLayout() {
    return (
        <div className="main-page">
            <div className="sidebar-segment">
                <Sidebar/>
            </div>

            <div className="main-content-segment">
                <Outlet/>
            </div>
            
        </div>
    )
}

export default RootLayout
