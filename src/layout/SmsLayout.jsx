import { Outlet } from "react-router-dom";
import Sms from "../sms page/Sms";


function SmsLayout() {
return (
    <div className="layout">
            <Sms/>
            <Outlet />
        </div>
)
}

export default SmsLayout