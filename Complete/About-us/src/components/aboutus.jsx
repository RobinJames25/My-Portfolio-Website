import React from 'react';
import bgImage from '../assets/Background.jpg';
import './css/aboutus.css'

const AboutUs = () => {
  return (
    <div>
      <div className="about-hero">
        <img src={bgImage} alt="" />
        <h1>About Us</h1>
      </div>

      <section className="about-section">
        <h2>About us</h2>
        <p>
          Coast jobs is a community powered platform that connects job seekers with
          exclusive opportunities in Kenya's coastal region, we strive to bridge
          the gap between local talent and employers, offering a range of job listings
          that you will never find elsewhere. The platform is proudly maintained by
          volunteers at the Watamu ICT Hub, who dedicate their time to ensuring job
          seekers have equal access to opportunities.
        </p>
      </section>

      <div className="about-row">
        <section className="about-box">
          <h2>Our Vision</h2>
          <p>
            To be the leading platform
            where job seekers can 
            access up-to-date job
            opportunities, training and 
            support
          </p>
        </section>

        <section className="about-box">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower job seekers and employers at the coast by providing
            a reliable, user friendly platform for job listings and applications.
          </p>
        </section>

        <hr className="about-divider" />
      </div>

      <section className="about-section">
        <h2>#ikokazicoast</h2>
        <p>
          #ikokazicoast is one of Coast Jobs' most impactful campaigns, created to
          challenge the narrative that there are no jobs in the Coastal region. The 
          truth is --<span>there are plenty of opportunities</span> in companies, hotels and 
          institutions across the Coast. The problem? Many of them go unadvertised
          or unheard. That's where we come in--to <span>uncover and amplify</span> these jobs
          so that many youths can access them. Coast jobs is on a mission to prove
          that opportunities do exist right here in the Coastal region--from Mombasa 
          to Lamu, Taita to Tana River. The jobs might not always be easy to find, but 
          we're here to uncover them, post them, and connect you to them.
        </p>
      </section>

      <div className="about-divider-text">
        #ikokazicoast isn't just a hashtag it's a movement
      </div>

      <section className="about-section stand-for">
        <h2><i className="fas fa-bullseye icon"></i>What <span>#ikokazicoast</span> Stands for</h2>
        <ul className="check-list">
          <li>Highlighting real job and opportunities in the coast</li>
          <li>Encouraging employers to list vacancies and internships</li>
          <li>Inspiring coastal youth to believe and show up for work opportunities</li>
          <li>Bringing hope to the coastal youths on job opportunities</li>
        </ul>
      </section>

      <section className="about-section join-campaign">
        <h2><i className="fas fa-rocket icon"></i>How You Can Join the Campaign</h2>
        <ul className="no-bullets">
          <li>Use the hashtag #IkoKaziCoast when you find or post job leads</li>
          <li>Share your success stories on social media -- <span>tag us!</span></li>
          <li>Encourage local businesses to post jobs on Coast Jobs</li>
          <li>Share jobs you find in the coast region with us</li>
          <li>Attend our career talks, trainings, and CV clinics</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
