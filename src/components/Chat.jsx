import sendIcon from "../assets/send.svg"

function Chat() {
    return (
    <div className="chat-container">
        <input
                placeholder="Talk to our AI finance expert"
                className="chat-input"
                type="text"
                aria-label="Chat input field"
                name="chat"
        />
        <img
                        src={sendIcon}
                        alt="Send message"
                        className="chat-icon"
                        onClick={() => alert("Message sent!")}
        />
    </div>
);
}

export default Chat;