import React, { useEffect } from "react";
import "../assets/admin.css";
function Admin() {
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

    setCampaignsList(listOfCampaigns);
  }, []);
  return (
    <div className='admin-page'>
      <table className='campaigns-table' border={1}>
        {campaignsList.map((campaign) => (
          <tr>
            <td>{campaign.date}</td>
            <td>{campaign.type}</td>
            <td>{campaign.title}</td>
            <td>
              <img src={campaign.img} alt='img' height={70} />
            </td>
            <td>{campaign.desc}</td>
            <td>
              <img
                src='https://cdn-icons-png.flaticon.com/512/61/61456.png'
                alt='edit'
                height={20}></img>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Admin;
