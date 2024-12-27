import { Outlet } from "react-router-dom";
import Settings from "../settings page/Settings";





export default function SettingsLayout(){
    return(
        <div className="layout">
            <Settings/>
            <Outlet />
        </div>
    )
}