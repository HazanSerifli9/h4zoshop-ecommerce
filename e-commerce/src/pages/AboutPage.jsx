import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/HomePage/Navbar";
import Footer from "../Components/HomePage/Footer";
import missionImage from "../assets/mission-vision-values-icon-design-set_122317-19.avif";
import "../styles/About.css";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="about-us-container">
        <h1 className="title">About Us</h1>
        <div className="about-us-text-container"></div>
        <p className="card-text">
          Welcome to Hazo Shoppier, your one-stop online shop for all your
          needs. Founded in 2024 by Hazan Serifli, Hazo Shoppier was born out of
          a passion for your needs and the desire to offer customers a unique
          and satisfying shopping experience. Our team is dedicated to curating
          a diverse range of products that cater to various tastes, preferences,
          and budgets. At Hazo Shoppier, we pride ourselves on our commitment to
          customer satisfaction. We strive to offer exceptional customer
          service, lightning-fast shipping, and a seamless checkout process. Our
          friendly and knowledgeable support team is always ready to help you
          with any questions or concerns you may have. We also believe in giving
          back to our community and the environment. That's why we partner with
          a lot of charity to donate a portion of our profits to support their
          causes. By shopping with Hazo Shoppier, you're not only treating
          yourself to amazing products, but you're also making a positive impact
          on the world. Join us on this journey as we continue to grow and
          expand our offerings. We're excited to have you as part of the Hazo
          Shoppier family!
        </p>
        <div className="about-us-text-container">
          <div className="about-us-text-column">
            <div className="card-container">
              <div className="card">
                <h2 className="card-title">Our Mission</h2>
                <p className="card-text">
                  Our mission is to provide high-quality, innovative, and
                  affordable products that make your life easier and more
                  enjoyable.
                </p>
              </div>
              <div className="card">
                <h2 className="card-title">Our Vision</h2>
                <p className="card-text">
                  Our vision is to provide innovative solutions that make a
                  difference in people's lives.
                </p>
              </div>
              <div className="card">
                <h2 className="card-title">Our Values</h2>
                <p className="card-text">
                  At Hazo Shoppier, we believe in the power of community,
                  diversity, and sustainability. Our values are at the core of
                  everything we do and guide us in our mission to provide you
                  with the best products and service. We are committed to:
                </p>
                <ul className="card-list">
                  <li>Customer satisfaction</li>
                  <li>Quality products</li>
                  <li>Environmental responsibility</li>
                  <li>Community support</li>
                  <li>Continuous improvement</li>
                </ul>
              </div>
            </div>
          </div>
          <img className="card-image" src={missionImage} alt="Mission" />
          <div className="story-container">
            <h2 className="story-title">Our Story</h2>
            <p className="story-text">
              Every business has an origin story worth telling, and usually one
              that justifies why you do business and have clients.
            </p>
          </div>
          <Link to="/contact">
            <button className="contact-button">Contact Us</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
