import React from "react";
import "../assets/donations.css";

const CausePanel = ({img, date, type, title, desc, progress}) => {
  return (
      <div className='campaign-box'>
        <img
          className='campaign-img'
          src={img}
          alt='campaign-img'
        />
        <div className='campaign-desc'>
          <div className='date-type'>
            {date} {type}
          </div>
          <div className='heading'>{title}</div>
          <div className='desc'>{desc}</div>
          <div className='progress-bar'>
            <div data-size='10%' className='progress'></div>
          </div>
        </div>
      </div>
    )
}

export default CausePanel
