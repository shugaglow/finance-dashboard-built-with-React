import TabsButton from "../components/TabsButton";


export default function Sms(){
    return(
        <div>
            <TabsButton pathName={"all"} buttonName={"All Alerts"}/>
            <TabsButton pathName={"transaction"} buttonName={"Transaction Update"}/>
            <TabsButton pathName={"systemupdate"} buttonName={"System Update"}/>
        </div>
    )
}