import React from "react";
import "../assets/donations.css";

const DonationPanel = ({ text, onClick, active }) => {
  const classname = active ? "value_checked" : "value";
  return (
    <label onClick={onClick} style={{ cursor: "pointer" }}>
      <span class={classname}>{text}</span>
    </label>
  );
};

export default DonationPanel;
