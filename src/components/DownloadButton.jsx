// import { Link } from "react-router-dom";
// import DownloadIcon from "./assets/download-report.svg"


/* eslint-disable react/prop-types */
function DownloadButton({ buttonName, icon }) {
    return (
    <>
        <button className="download-button">
            <p>{buttonName}</p>
            <img src={icon} alt="button icon" />
        </button>
    </>
    );
}

export default DownloadButton;