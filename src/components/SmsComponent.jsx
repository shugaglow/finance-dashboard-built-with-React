/* eslint-disable react/prop-types */


function SmsComponent({ alertIcon, headerSmsText, deleteIcon, smsBody, onDelete, id }) {
    return (
    <div className="sms-container">
        <div className="left-sms-container">
        <img src={alertIcon} alt="bell icon" />
        </div>

    <div className="middle-sms-container">
        <div className="header-sms-container">
            <h1>{headerSmsText}</h1>
            <div className="icon-sms-container">
            <button
              onClick={() => onDelete(id)} // Trigger deletion by ID
                style={{
                background: "none",
                border: "none",
                cursor: "pointer",
            }}
            >
                <img src={deleteIcon} alt="delete icon" />
            </button>
        </div>
        </div>

        <div className="body-sms-container">
            <p>{smsBody}</p>
        </div>
    </div>
    </div>
);
}

export default SmsComponent;
