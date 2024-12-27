import  { useState } from "react";
import SmsComponent from "../components/SmsComponent"
import alertIcon from "../assets/Bell-Icon.svg"
import deleteIcon from "../assets/delete-icon.svg"
import HeaderComponent from "../components/HeaderComponent"

function SystemUpdateSms() {
    const [totalsms, setTotalsms] = useState([

        {
            id: 1,
            smstitle: "System Downtime Notification",
            smstext:
            "The platform will be offline for scheduled maintenance from [Start Time] to [End Time]. Please plan your activities accordingly"
        },

        {
            id: 2,
            smstitle: " System Maintenance Scheduled",
            smstext:
            "Our system will undergo maintenance on January 3rd, 2025. During this period, some features may be temporarily unavailable."
        },

        {
            id: 3,
            smstitle: "System Optimization Complete",
            smstext:
            "System updates have been successfully applied. You may notice faster load times and improved performance."
        },
    ]);

    const handleDelete = (id) => {
        const updatedItems = totalsms.filter((sms) => sms.id !== id);
        setTotalsms(updatedItems); // Update state with the remaining items
    };

    return (
    <div>
            <div className="sms-parent-component">
            <div className="top-notifications">
            <HeaderComponent headercaption="System Update" headertext="Keep track of essential system upgrades and enhancements to ensure smooth and secure financial management."/>
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
    )
}

export default SystemUpdateSms



