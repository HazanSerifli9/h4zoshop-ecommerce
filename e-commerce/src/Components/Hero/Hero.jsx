import React from "react";
import hand_icon from "../../assets/hand_icon.png";

import "../Hero/Hero.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import firstSlide from "../../assets/41d1e8b2e93f452b83d770b6ef5ff08a copy.png";
import secondSlide from "../../assets/78644316 copy.png";
import thirdSlide from "../../assets/80136947.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1 className="new-arrivals">NEW ARRIVALS ONLY</h1>
        <div className="collections">
          <div className="hero-hand-icon">
            <img src={hand_icon} alt="" />
          </div>
          <p className="collections-text">New collection for everyone</p>
        </div>
        <p className="hero-text">Discover our latest collection of fashion</p>
        <Link to="/shop" className="cta-button">
          Shop Now
        </Link>
      </div>
      <div className="hero-right">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={firstSlide} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={secondSlide}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={thirdSlide} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
