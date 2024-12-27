import { Outlet } from "react-router-dom";
import Income from "../income page/Income.jsx";

export default function IncomeLayout(){
    return(
        <div className="layout">
            <Income />
            <Outlet />
        </div>
    )
}
