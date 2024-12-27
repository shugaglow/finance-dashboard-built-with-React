/* eslint-disable react/prop-types */
function NotificationsBody({titlecontent,bodycontent,toggle}) {
return (
    <div className="notifications-body-content">
        <div className="left-notifications-body">
            <h1>{titlecontent}</h1>
            <p>{bodycontent}</p>
        </div>

        <div className="right-notifications-body">
            <div className="toggle-container">
                <img src={toggle} alt="toggle" />
            </div>
        </div>
    </div>
)
}

export default NotificationsBody