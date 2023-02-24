import React from "react";
import "../assets/faq.css";

function FAQ() {
  return (
    <div>
      <div className='Header'>
        <img
          src='http://icons.duckduckgo.com/ip2/www.mind.org.uk.ico'
          alt='logo'
          style={{ float: "right" }}
        />
        <h1 className='MindSky'>
          Mind
          <br />
          Neath Port Talbot
          <br />
          Castell-nedd Port Talbot
        </h1>
      </div>
      <hr className='solid' />
      <h2 className='MindPink' align='center'>
        {" "}
        Frequently Asked Questions{" "}
      </h2>
      <h3 className='MindBlue'>
        {" "}
        Why choose to support a mental health charity?{" "}
      </h3>
      <p className='MindPurple'>
        When you're experiencing a mental health problem, supportive and
        reliable information can change your life; that's what we do. We empower
        people to udnerstand their mental health and the choices available to
        them through the following services:
        <ul className='MindPurple'>
          {" "}
          <li>
            {" "}
            Our <b>Infoline,</b> which offers confidential help for the price of
            a local call
          </li>{" "}
          <li>
            {" "}
            Our <b>Legal Line,</b> which provides information on mental health
            related law to the public, service users, family members, carers,
            mental health professionals and advocates{" "}
          </li>{" "}
          <li>
            {" "}
            Our <b>award-winning information,</b> certified by the Patient
            Information Forum (PIF) Tick
          </li>
        </ul>
      </p>
      <br />
      <h3 className='MindBlue'> How will NPT Mind use my donation? </h3>
      <p className='MindPurple'>
        Your donation will be used responsibly to help people with mental
        problems get support and respect.
        <br />
        We will keep administration costs to a minimum without jeopardising the
        quality of our work.
        <br />
        As much of your donation as possible will be spent directly on our
        life-changing work.
        <br />
        <br />
        We will answer any question you have about how your donation is spent
        and clear financial information will be available to you at any time.
        <br />
        <br />
        We may turn down a donation if we feel that accepting it would
        negatively impact our independence or reputation. If we do, we will
        explain why.
      </p>
      <br />
      <h3 className='MindBlue'> How will NPT Mind support my fundraising? </h3>
      <p className='MindPurple'>
        Fundraising is incredibly important to us, and we are proud of what it
        helps us achieve. We will constantly review our fundraising practices to
        ensure they are fair, sensitive, and appropriate.
        <br />
        <br />
        We are committed to ensuring the highest quality of experience for our
        supporters. Int the interest of empowering and protecting our
        supporters, we train and support all our staff, volunteers, and
        third-party organisations that work on behalf of NPT Mind to recognise
        and appropriately respond to vulnerability without discrimination or
        judgement.
        <br />
        <br />
        We work to ensure supporters are treated fairly and treated as
        individuals at all tiems, and not exploited or treated in any way which
        might bring them harm as a result of their interaction with us.
        <br />
        <br />
        Our approach to supporters in vulnerable circumstances is informed by
        the{" "}
        <i>
          {" "}
          Fundraising Regulator's Code of Fundraising Practice and the Chartered
          Institute of Fundraising's guidance.
        </i>
      </p>
      <br />
      <h3 className='MindBlue'>
        {" "}
        Can I choose which projects my money funds?{" "}
      </h3>
      <p className='MindPurple'>
        We want to be more transparent with where your money goes when you
        donate to us, so we have now elected to allow you to choose which
        projects or campaigns your money goes towards!
        <br />
        <br />
        You'll be able to see how much you've donated to each project/campaign
        you've donated to, and what your money helps us do.
      </p>
    </div>
  );
}

export default FAQ;
