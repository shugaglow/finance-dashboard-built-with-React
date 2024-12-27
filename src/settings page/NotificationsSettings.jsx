import HeaderComponent from "../components/HeaderComponent"
import NotificationsBody from "../components/NotificationsBody"
import toggleIconLeft from "../assets/ToggleLeft.svg"
import toggleIconRight from "../assets/ToggleRight.svg"
import SaveButton from "../components/SaveButton"


function NotificationsSettings() {
return (
    <div className="notifications-content">
        <div className="top-notifications">
        <HeaderComponent headercaption="Notification Preferences" headertext="Choose how you’d like to receive updates about your applications and messages"/>

        <div className="notifications-body">
        <div className="body">
            <NotificationsBody titlecontent="Application Updates" bodycontent="Get notified when there are updates about  applications you post" toggle={toggleIconLeft}/>
        </div>

        <div className="body">
            <NotificationsBody titlecontent="Job Alerts" bodycontent="Receive notifications for new job hires from employees" toggle={toggleIconLeft}/>
        </div>

        <div className="body">
            <NotificationsBody titlecontent="Interview Reminders" bodycontent="Get SMS reminders to schedule interviews" toggle={toggleIconRight}/>
        </div>
        </div>

        <div>
            <SaveButton/>
        </div>

        </div>


        
    </div>
)
}

export default NotificationsSettings