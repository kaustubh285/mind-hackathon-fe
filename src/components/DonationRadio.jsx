import React from "react";
import DonationPanel from "./DonationPanel";
import "../assets/donations.css";

const DonationRadio = ({ options, selectedOption, setSelectedOption }) => {
  //options: array of opts: {k=text, v=value}

  const render = () =>
    options.map((opt) => {
      const { text } = opt;
      const onClick = () => {
        setSelectedOption(opt);
      };
      const active = selectedOption != null && selectedOption.text === text;
      return (
        <DonationPanel
          text={text}
          onClick={onClick}
          active={active}
          style={{ cursor: "pointer" }}
        />
      );
    });

  return <div className='DonationRadioGroups'>{render()}</div>;
};

export default DonationRadio;
