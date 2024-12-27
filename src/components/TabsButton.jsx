/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"

function TabsButton({pathName, buttonName}) {
    const navigate = useNavigate()
return (
    <button className="income-button" onClick={()=>navigate(pathName)}>{buttonName}</button>
)
}

export default TabsButton