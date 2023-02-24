import React, { useEffect, useState } from "react";
import "../assets/profile.css";

function ProfilePage() {
  const [userDetails, setUserDetails] = useState({});
  const [donationHistory, setDonationHistory] = useState([]);
  const [savedCards, setPaymentInformation] = useState([]);
  useEffect(() => {
    let tempUserDetails = {
      img: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
      name: "John Doe",
      age: "32",
      email: "john.doe@work.com",
      created: "53 days",
      id: "123",
    };

    let tempDonationHistory = [
      {
        name: "1st Campaign",
        amount: "£5",
      },
      {
        name: "2nd Campaign",
        amount: "£9",
      },
      {
        name: "Jkl Campaign",
        amount: "£4",
      },
      {
        name: "Qwerty Campaign",
        amount: "£7",
      },
      {
        name: "Wasd Campaign",
        amount: "£10",
      },
    ];

    let savedCards=[
      {
        cardNumber: "**** **** **** 1234",
      }
    ]

    // todo: api call here
    setDonationHistory(tempDonationHistory);
    setUserDetails(tempUserDetails);
    setPaymentInformation(savedCards);
  }, []);

  return (
    <div className='profile-container'>
      <div className='separator'></div>
      <div className='profile-header'>
        <div></div>
        <img alt='user' src={userDetails.img} className='profile-img' />
        <div className='profile-body'>
          <h1 className='profile-name'>{userDetails.name}</h1>
          <table className='profile-table'>
            <tr>
              <th>Age:</th>
              <th>{userDetails.age}</th>
            </tr>

            <tr>
              <th>Email:</th>
              <th>{userDetails.email}</th>
            </tr>

            <tr>
              <th>User Since:</th>
              <th>{userDetails.created}</th>
            </tr>
          </table>
        </div>
        <div></div>
      </div>

      <div className='history-section'>
        <h3>{userDetails.name}'s Donation History</h3>
      </div>
      <table>
        {donationHistory.map(({ name, amount }) => (
          <div class="donationContainer">
            <tr>
              <th>{name}</th>
              <th>{amount}</th>
            </tr>
          </div>
        ))}
      </table>
      <div className="payment-information">
        <h3>Payment Information</h3>
        <h4>Saved Cards</h4>
        {savedCards.map(({ cardNumber }) => (
          <tr>
            <th>{cardNumber}</th><button>Delete</button>
          </tr>
        ))}
      </div>
      <div className="delete-account">
        <h3>Delete Account</h3>
        <button className="delete-button">Delete</button>
      </div>
    </div>
  );
}

export default ProfilePage;
