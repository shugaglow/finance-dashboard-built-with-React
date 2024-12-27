import HeaderComponent from "../components/HeaderComponent"
import NotificationsBody from "../components/NotificationsBody"
import toggleIconLeft from "../assets/ToggleLeft.svg"
import toggleIconRight from "../assets/ToggleRight.svg"
import SaveButton from "../components/SaveButton"


function PrivacyAndSecurity() {
return (
    <div className="notifications-content">
        <div className="top-notifications">
        <HeaderComponent headercaption="Privacy and Security" headertext="Manage your account’s privacy settings and security features"/>

        <div className="notifications-body">
        <div className="body">
            <NotificationsBody titlecontent="Two-Factor Authentication" bodycontent="Add an extra layer of security to your account" toggle={toggleIconLeft}/>
        </div>

        <div className="body">
            <NotificationsBody titlecontent="Profile Visibility" bodycontent="Make your profile visible to employees" toggle={toggleIconRight}/>
        </div>

        </div>

        <div>
            <SaveButton/>
        </div>

        </div>


        
    </div>
)
}

export default PrivacyAndSecurity