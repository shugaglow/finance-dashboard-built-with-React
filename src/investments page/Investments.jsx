// import TabsButton from "../components/TabsButton";


// export default function Investments(){
//     return(
//         <div>
//             <TabsButton pathName={"fiatInvestments"} buttonName={"Fiat Investment"}/>
//             <TabsButton pathName={"cryptoInvestments"} buttonName={"Crypto Investment"}/>
//             <TabsButton pathName={"totalInvestments"} buttonName={"Total Investment"}/>
//         </div>
//     )
// }
import TabsButton from "../components/TabsButton";

function Investments() {
    return (
    <div>
            <TabsButton pathName={"fiatInvestments"} buttonName={"Fiat Investment"}/>
            <TabsButton pathName={"cryptoInvestments"} buttonName={"Crypto Investment"}/>
            <TabsButton pathName={"totalInvestments"} buttonName={"Total Investment"}/>
</div>
)
}

export default Investments