import React from "react";
import DonationRadio from "../components/DonationRadio";
import DonationTextBox from "../components/DonationTextBox";
import { useState } from "react";
import "../assets/donations.css";

const DonationPage = () => {

    const priceOptions = [
        {text: "£1", value: 1},
        {text: "£5", value: 5},
        {text: "£10", value: 10},
        {text: "£15", value: 15}
    ]

    const frequencyOptions = [
        {text: "One-Time", value: 0},
        {text: "Monthly", value: 1}
    ]

    // 2 states, we can have the selected price be one of the options,
    // OR have the price be determined by a text box
    const [selectedPrice, setSelectedPrice] = useState(priceOptions[0]);
    const [selectedFrequency, setSelectedFrequency] = useState(frequencyOptions[0]);
    const [text, setText] = useState("");

    const onTextChange = (newText) => {
        // If we empty the text box
        if (newText === "") {
            // Then select one of the radios 
            setSelectedPrice(priceOptions[0]);
        } else {
            setSelectedPrice(null);
        }
        setText(newText);
    }

    const onSelectPrice = (price) => {
        setSelectedPrice(price)
        setText("");
    }

    const onSubmit = () => {
        let price;
        if (selectedPrice !== null) {
            price = selectedPrice; 
        } else {
            price = text;
        }
            
        localStorage.setItem("price", JSON.stringify(price))
        localStorage.setItem("frequency", JSON.stringify(selectedFrequency.text))
    }

    return (
        <div class="DonationRadioGroupsContainer">
            <div class="ltrContainer">
                <DonationRadio
                    options={priceOptions} 
                    setSelectedOption={onSelectPrice}
                    selectedOption={selectedPrice} 
                />
                <label class={text === "" ? "value" : "value_checked" }>Custom Amount</label>
                <DonationTextBox
                    text={text}
                    onTextChange={onTextChange}
                />

            </div>
            <DonationRadio 
                options={frequencyOptions}
                setSelectedOption={setSelectedFrequency}
                selectedOption={selectedFrequency}
            />
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}

export default DonationPage
