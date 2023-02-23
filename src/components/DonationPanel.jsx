import React from "react";
import "../assets/donations.css";

const DonationPanel = ({text, onClick, active}) => {
    return (
        <div onClick={onClick} className="DonationPanel">
            <p>{text}</p>
            {active && <p>ON!</p>}
        </div>
    )
}

export default DonationPanel;
