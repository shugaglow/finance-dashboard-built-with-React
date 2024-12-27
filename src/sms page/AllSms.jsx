import  { useState } from "react";
import SmsComponent from "../components/SmsComponent";
import alertIcon from "../assets/Bell-Icon.svg";
import deleteIcon from "../assets/delete-icon.svg";
import HeaderComponent from "../components/HeaderComponent";

function AllSms() {
const [totalsms, setTotalsms] = useState([
    {
        id: 1,
        smstitle: "Account Balance Alert",
        smstext: "Your account balance is below $100. Consider reviewing your recent transactions.",
    },
    {
        id: 2,
        smstitle: "Payment Received",
        smstext: "You’ve received a payment of $250.00 from Jane Doe. Available balance: $1,200.00",
    },
    {
        id: 3,
        smstitle: "Unusual Activity Detected",
        smstext: "Suspicious login attempt detected on your account. If this wasn’t you, please update your credentials immediately.",
    },
    {
        id: 4,
        smstitle: "Daily Summary",
        smstext: "Daily Summary: 3 transactions processed, total spent $350.00, available balance $850.00.",
    },
]);

const handleDelete = (id) => {
    const updatedItems = totalsms.filter((sms) => sms.id !== id);
    setTotalsms(updatedItems); // Update state with the remaining items
};

return (
    <div className="sms-parent-component">
        <div className="top-notifications">
        <HeaderComponent
            headercaption="General Alerts"
            headertext="Get instant updates on your financial activities. Never miss an update about your finances."
        />
    </div>

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
);
}

export default AllSms;
