import React from "react";
import DonationRadio from "../components/DonationRadio";
import DonationTextBox from "../components/DonationTextBox";
import { useState } from "react";
import "../assets/donations.css";
import { useNavigate } from "react-router-dom";

const DonationPage = () => {
  const priceOptions = [
    { text: "£5", value: 5 },
    { text: "£8", value: 8 },
    { text: "£15", value: 15 },
    { text: "£25", value: 25 },
  ];

  const frequencyOptions = [
    { text: "One-Time", value: 0 },
    { text: "Monthly", value: 1 },
  ];

  // 2 states, we can have the selected price be one of the options,
  // OR have the price be determined by a text box
  const [selectedPrice, setSelectedPrice] = useState(priceOptions[0]);
  const [selectedFrequency, setSelectedFrequency] = useState(
    frequencyOptions[0]
  );
  const [text, setText] = useState("");
  let navigate = useNavigate();
  const onTextChange = (newText) => {
    // If we empty the text box
    if (newText === "") {
      // Then select one of the radios
      setSelectedPrice(priceOptions[0]);
    } else {
      setSelectedPrice(null);
    }
    setText(newText);
  };

  const onSelectPrice = (price) => {
    setSelectedPrice(price);
    setText("");
  };

  const onSubmit = () => {
    let price;
    if (selectedPrice !== null) {
      price = selectedPrice;
    } else {
      price = text;
    }

    localStorage.setItem("price", JSON.stringify(price));
    localStorage.setItem("frequency", JSON.stringify(selectedFrequency.text));

    navigate("/checkout");
  };

  return (
    <div class='DonationRadioGroupsContainer'>
      <div class='ltrContainer'>
        <DonationRadio
          options={priceOptions}
          setSelectedOption={onSelectPrice}
          selectedOption={selectedPrice}
        />
        <label
          style={{ fontSize: "x-large" }}
          class={text === "" ? "value" : "value_checked"}>
          Custom Amount
        </label>
        <DonationTextBox text={text} onTextChange={onTextChange} />
      </div>
      <DonationRadio
        options={frequencyOptions}
        setSelectedOption={setSelectedFrequency}
        selectedOption={selectedFrequency}
      />
      <button
        style={{ border: "none", backgroundColor: "#8149FF" }}
        onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default DonationPage;
