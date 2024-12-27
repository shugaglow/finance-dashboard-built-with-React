import TabsButton from "../components/TabsButton";


export default function Settings(){
    return(
        <div>
            <TabsButton pathName={"notifications"} buttonName={"Notifications Settings"}/>
            <TabsButton pathName={"privacyandsecurity"} buttonName={"Privacy and Security"}/>
            <TabsButton pathName={"faqs"} buttonName={"FAQs"}/>
        </div>
    )
}
