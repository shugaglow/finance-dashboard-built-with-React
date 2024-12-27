// import { useNavigate } from "react-router-dom"

import TabsButton from "../components/TabsButton";

export default function Income(){
    // const navigate = useNavigate()
    return(
        <div>
            {/* <button className="income-button" onClick={()=>navigate("fiat")}>Fiat Income</button> */}
            {/* <button className="income-button" onClick={()=>navigate("crypto")}>Crypto Income</button> */}
            {/* <button className="income-button" onClick={()=>navigate("total")}>Total Income</button> 
            */}

            <TabsButton pathName={"fiat"} buttonName={"Fiat Income"}/>
            <TabsButton pathName={"crypto"} buttonName={"Crypto Income"}/>
            <TabsButton pathName={"total"} buttonName={"Total Income"}/>


        </div>
    )
}
