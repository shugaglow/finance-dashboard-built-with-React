import { Outlet } from "react-router-dom";
import Expenses from "../expenses page/Expenses";



export default function ExpensesLayout(){
    return(
        <div className="layout">
            <Expenses/>
            <Outlet />
        </div>
    )
}
