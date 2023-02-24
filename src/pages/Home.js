import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../assets/home.css";
import DonationPage from "./DonationPage";

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
        img: "https://www.mind.org.uk/media/8881/three-people-facing-away-with-arms-round-each-other.jpg?format=webp&quality=70",
        date: "22 Feb 2023",
        type: "project campaign",
        title: "General",
        desc: "All donations for will be used for the development of our services to provide better outreach and help to communities",
        progress: "80%",
      },

      {
        id: "923",
        img: "https://www.mind.org.uk/media/8738/person-smiling-at-camera-blue-jacket.jpg?center=0.46835443037974683,0.44915254237288138&mode=crop&width=767&height=384&rnd=132841222522930000&format=webp&quality=80",
        date: "20 Jan 2023",
        type: "project campaign",
        title: "Mental health problems",
        desc: "We're pushing for fundamental reforms to the outdated Mental Health Act and campaigning for those of us with a mental health problem to get the best care possible.",
        progress: "80%",
      },
      {
        id: "23",
        img: "https://www.mind.org.uk/media/8778/three-people-walking-and-laughing-2.jpg?anchor=center&mode=crop&width=767&height=384&rnd=132841222537800000&format=webp&quality=80",
        date: "08 Feb 2023",
        type: "project campaign",
        title: "Children and Young",
        desc: "We're campaigning for everyone aged 11-25 to get proper support for their mental health by pushing for the Government to #FundTheHubs.",
        progress: "80%",
      },
      {
        id: "423",
        img: "https://www.mind.org.uk/media/8671/person-wearing-headphones.jpg?anchor=center&mode=crop&width=767&height=384&rnd=132841222504970000&format=webp&quality=80",
        date: "16 Jan 2023",
        type: "project campaign",
        title: "Poverty",
        desc: "We're pushing the Government to change the benefits system and give those of us living with a mental health problem a real living income if we are unable to work.",
        progress: "80%",
      },
      {
        id: "523",
        img: "https://www.mind.org.uk/media/8707/person-speaking-on-the-phone.jpg?crop=0,0.277982905982906,0,0.38889102842688239&cropmode=percentage&width=767&height=384&rnd=132841222510400000&format=webp&quality=80",
        date: "02 Nov 2022",
        type: "project campaign",
        title: "Racialised communities",
        desc: "The mental health system is stacked against those of us who are members of racialised communities. We want to change the discriminatory Mental Health Act and improve support for these communities.",
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
    localStorage.setItem("camps", JSON.stringify(tempList));
    forceUpdate();
  };

  return (
    <div style={{ padding: "15px", paddingRight: "0px" }}>
      <h2>Our Campaigns</h2>

      <div className='page' style={{ width: "100vw", overflow: "hidden" }}>
        <div className='campaigns'>
          {campaignsList.map((campaign) => (
            <div className='campaign-box'>
              <img
                className='campaign-img'
                src={campaign.img}
                alt='campaign-img'
              />
              <div className='campaign-desc'>
                <div style={{ minHeight: "220px" }}>
                  <div className='date-type'>
                    {campaign.date} {campaign.type}
                  </div>
                  <div className='heading'>{campaign.title}</div>
                  <div className='desc'>{campaign.desc}</div>
                  {/* <div className='progress-bar'>
                <div data-size='10%' className='progress'></div>
              </div> */}
                </div>

                <Button
                  style={{ marginTop: "15px" }}
                  variant={
                    donationList.includes(campaign.id)
                      ? "contained"
                      : "outlined"
                  }
                  className='donate-button'
                  onClick={() => addCampaignToList(campaign.id)}>
                  {donationList.includes(campaign.id) ? "Remove" : "Donate"}
                </Button>
              </div>
            </div>
          ))}
          <div style={{ width: "100vw" }}>
            <DonationPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
