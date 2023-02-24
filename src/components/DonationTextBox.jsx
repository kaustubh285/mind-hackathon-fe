import React from "react";

const DonationTextBox = ({ text, onTextChange }) => {
  const onChange = (e) => {
    const re = /^[0-9\b]+$/;
    const val = e.target.value;
    if (val === "" || re.test(val)) {
      onTextChange(val);
    }
  };

  return (
    <div class='textboxContainer'>
      <input value={text} style={{ fontSize: "x-large" }} onChange={onChange} />
    </div>
  );
};

export default DonationTextBox;
