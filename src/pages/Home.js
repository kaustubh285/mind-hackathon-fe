import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../assets/home.css";

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update state to force render
  // A function that increment 👆🏻 the previous state like here
  // is better than directly setting `setValue(value + 1)`
}

function Home() {
  const [campaignsList, setCampaignsList] = React.useState([]);
  const [donationList, setDonationList] = useState([]);

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    let listOfCampaigns = [
      {
        id: "123",
        img: "https://images.squarespace-cdn.com/content/v1/5dc41f88c25b0b210020f722/1677061294280-NP9Y497ODS71YMJ9G44V/haire-feature.jpg?format=750w",
        date: "22 Feb 2023",
        type: "project campaign",
        title: "Healthy toolkit campaign",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crastincidunt, nulla sed varius blandit, felis massa pellentesqueenim, quis tristique lorem mauris eget mauris.",
        progress: "80%",
      },

      {
        id: "923",
        img: "https://images.squarespace-cdn.com/content/v1/5dc41f88c25b0b210020f722/1677061294280-NP9Y497ODS71YMJ9G44V/haire-feature.jpg?format=750w",
        date: "22 Feb 2023",
        type: "project campaign",
        title: "Healthy toolkit campaign",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crastincidunt, nulla sed varius blandit, felis massa pellentesqueenim, quis tristique lorem mauris eget mauris.",
        progress: "80%",
      },
      {
        id: "23",
        img: "https://images.squarespace-cdn.com/content/v1/5dc41f88c25b0b210020f722/1677061294280-NP9Y497ODS71YMJ9G44V/haire-feature.jpg?format=750w",
        date: "22 Feb 2023",
        type: "project campaign",
        title: "Healthy toolkit campaign",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crastincidunt, nulla sed varius blandit, felis massa pellentesqueenim, quis tristique lorem mauris eget mauris.",
        progress: "80%",
      },
      {
        id: "423",
        img: "https://images.squarespace-cdn.com/content/v1/5dc41f88c25b0b210020f722/1677061294280-NP9Y497ODS71YMJ9G44V/haire-feature.jpg?format=750w",
        date: "22 Feb 2023",
        type: "project campaign",
        title: "Healthy toolkit campaign",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crastincidunt, nulla sed varius blandit, felis massa pellentesqueenim, quis tristique lorem mauris eget mauris.",
        progress: "80%",
      },
      {
        id: "523",
        img: "https://images.squarespace-cdn.com/content/v1/5dc41f88c25b0b210020f722/1677061294280-NP9Y497ODS71YMJ9G44V/haire-feature.jpg?format=750w",
        date: "22 Feb 2023",
        type: "project campaign",
        title: "Healthy toolkit campaign",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crastincidunt, nulla sed varius blandit, felis massa pellentesqueenim, quis tristique lorem mauris eget mauris.",
        progress: "80%",
      },
      {
        id: "623",
        img: "https://images.squarespace-cdn.com/content/v1/5dc41f88c25b0b210020f722/1677061294280-NP9Y497ODS71YMJ9G44V/haire-feature.jpg?format=750w",
        date: "22 Feb 2023",
        type: "project campaign",
        title: "Healthy toolkit campaign",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crastincidunt, nulla sed varius blandit, felis massa pellentesqueenim, quis tristique lorem mauris eget mauris.",
        progress: "80%",
      },
    ];

    // todo: api call here
    setCampaignsList(listOfCampaigns);
  }, []);

  function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  const addCampaignToList = (id) => {
    console.log(id);
    let tempList = donationList;

    let listCamp = campaignsList;

    listCamp.forEach((c) => {
      if (c.id === id) {
        c["selected"] = true;
      }
    });

    setCampaignsList(listCamp);
    if (tempList.includes(id)) tempList = removeItemOnce(tempList, id);
    else tempList.push(id);
    setDonationList(tempList);
    forceUpdate();
  };

  useEffect(() => {
    console.log(donationList);
  }, [donationList]);

  return (
    <div className='page'>
      <div className='campaigns'>
        {campaignsList.map((campaign) => (
          <div className='campaign-box'>
            <img
              className='campaign-img'
              src={campaign.img}
              alt='campaign-img'
            />
            <div className='campaign-desc'>
              <div className='date-type'>
                {campaign.date} {campaign.type}
              </div>
              <div className='heading'>{campaign.title}</div>
              <div className='desc'>{campaign.desc}</div>
              {/* <div className='progress-bar'>
                <div data-size='10%' className='progress'></div>
              </div> */}

              <Button
                style={{ marginTop: "15px" }}
                variant={
                  donationList.includes(campaign.id) ? "contained" : "outlined"
                }
                className='donate-button'
                onClick={() => addCampaignToList(campaign.id)}>
                {donationList.includes(campaign.id) ? "Remove" : "Donate"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
