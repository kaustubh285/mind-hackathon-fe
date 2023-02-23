import React, { useEffect, useState } from "react";
import "../assets/profile.css";

function ProfilePage() {
  const [userDetails, setUserDetails] = useState({});
  const [donationHistory, setDonationHistory] = useState([]);
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
        name: "xyz campaign",
        amount: "5£",
      },
      {
        name: "abc campaign",
        amount: "9£",
      },
      {
        name: "jkl campaign",
        amount: "4£",
      },
      {
        name: "qwerty campaign",
        amount: "7£",
      },
      {
        name: "wasd campaign",
        amount: "10£",
      },
    ];

    // todo: api call here
    setDonationHistory(tempDonationHistory);
    setUserDetails(tempUserDetails);
  }, []);

  return (
    <div className='profile-container'>
      <div className='profile-header'>
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
      </div>

      <div className='history-section'>
        <h3>{userDetails.name}'s Donation History</h3>
      </div>
      <table>
        {donationHistory.map(({ name, amount }) => (
          <tr>
            <th>{name}</th>
            <th>{amount}</th>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ProfilePage;