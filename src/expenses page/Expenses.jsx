import TabsButton from "../components/TabsButton";


export default function Expenses(){
    return(
        <div>
            <TabsButton pathName={"fiatExpenses"} buttonName={"Fiat Expenses"}/>
            <TabsButton pathName={"cryptoExpenses"} buttonName={"Crypto Expenses"}/>
            <TabsButton pathName={"totalExpenses"} buttonName={"Total Expenses"}/>
        </div>
    )
}
