import React, { useEffect } from "react";
import "../assets/home.css";

function Home() {
  const [campaignsList, setCampaignsList] = React.useState([]);

  useEffect(() => {
    let listOfCampaigns = [
      {
        img: "https://images.squarespace-cdn.com/content/v1/5dc41f88c25b0b210020f722/1677061294280-NP9Y497ODS71YMJ9G44V/haire-feature.jpg?format=750w",
        date: "22 Feb 2023",
        type: "project campaign",
        title: "Healthy toolkit campaign",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crastincidunt, nulla sed varius blandit, felis massa pellentesqueenim, quis tristique lorem mauris eget mauris.",
        progress: "80%",
      },

      {
        img: "https://images.squarespace-cdn.com/content/v1/5dc41f88c25b0b210020f722/1677061294280-NP9Y497ODS71YMJ9G44V/haire-feature.jpg?format=750w",
        date: "22 Feb 2023",
        type: "project campaign",
        title: "Healthy toolkit campaign",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crastincidunt, nulla sed varius blandit, felis massa pellentesqueenim, quis tristique lorem mauris eget mauris.",
        progress: "80%",
      },
      {
        img: "https://images.squarespace-cdn.com/content/v1/5dc41f88c25b0b210020f722/1677061294280-NP9Y497ODS71YMJ9G44V/haire-feature.jpg?format=750w",
        date: "22 Feb 2023",
        type: "project campaign",
        title: "Healthy toolkit campaign",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crastincidunt, nulla sed varius blandit, felis massa pellentesqueenim, quis tristique lorem mauris eget mauris.",
        progress: "80%",
      },
      {
        img: "https://images.squarespace-cdn.com/content/v1/5dc41f88c25b0b210020f722/1677061294280-NP9Y497ODS71YMJ9G44V/haire-feature.jpg?format=750w",
        date: "22 Feb 2023",
        type: "project campaign",
        title: "Healthy toolkit campaign",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crastincidunt, nulla sed varius blandit, felis massa pellentesqueenim, quis tristique lorem mauris eget mauris.",
        progress: "80%",
      },
      {
        img: "https://images.squarespace-cdn.com/content/v1/5dc41f88c25b0b210020f722/1677061294280-NP9Y497ODS71YMJ9G44V/haire-feature.jpg?format=750w",
        date: "22 Feb 2023",
        type: "project campaign",
        title: "Healthy toolkit campaign",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crastincidunt, nulla sed varius blandit, felis massa pellentesqueenim, quis tristique lorem mauris eget mauris.",
        progress: "80%",
      },
      {
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
              <div className='progress-bar'>
                <div data-size='10%' className='progress'></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
