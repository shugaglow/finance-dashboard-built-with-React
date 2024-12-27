import { Outlet } from "react-router-dom";
import Investments from "../investments page/Investments";





export default function InvestmentLayout(){
    return(
        <div className="layout">
            <Investments/>
            <Outlet />
        </div>
    )
}