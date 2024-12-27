import SmsComponent from "../components/SmsComponent"
import alertIcon from "../assets/Bell-Icon.svg"
import deleteIcon from "../assets/delete-icon.svg"
import HeaderComponent from "../components/HeaderComponent"
import { useState } from "react";

function TransactionSms() {
    const [totalsms, setTotalsms] = useState(
        [

            {
                id: 1,
                smstitle: "Currency Exchange Rate Alert",
                smstext:
                "The exchange rate for USD/NGN has changed to ₦7,180."
            },
    
            {
                id: 2,
                smstitle: " Suspicious Activity Detected",
                smstext:
                "We detected an unusual transaction on your account. If this wasn’t you, please contact support immediately."
            },
    
        ]
    ) 

    const handleDelete = (id) => {
        const updatedItems = totalsms.filter((sms) => sms.id !== id);
        setTotalsms(updatedItems); // Update state with the remaining items
    };

return (
    <div>
            <div>
            <div className="sms-parent-component">
            <div className="top-notifications">
            <HeaderComponent headercaption="Transaction Update" headertext="Stay up-to-date with every transaction and never miss a detail about your financial activity."/>
            </div>
        {/* <SmsComponent alertIcon={alertIcon} headerSmsText="New Sms Alert" smsBody="Your account has been credited with 111" arrowRight={arrowRight} /> */}
     {/* Render each SMS item */}
        {totalsms.map((sms) => (
        <SmsComponent
            key={sms.id}
            id={sms.id}
            headerSmsText={sms.smstitle}
            smsBody={sms.smstext}
            alertIcon={alertIcon}
            deleteIcon={deleteIcon}
            onDelete={handleDelete} // Pass delete handler
        />
    ))}

        </div>
    </div>
    </div>
)
}

export default TransactionSms