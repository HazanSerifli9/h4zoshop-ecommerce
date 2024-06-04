import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import logo from "../../assets/Screenshot 2024-05-24 at 17.49.04.png";
import "../../Styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="cFooterWrapper">
        <hr />

        <div className="cFooter">
          <div className="footer__logo">
            <img src={logo} alt="" />
            <span>H4zo Shoppier</span>
          </div>
          <div className="footer__social">
            <Link to="/" className="footer__social-icon">
              <FaFacebook />
            </Link>
            <Link to="/" className="footer__social-icon">
              <FaInstagram />
            </Link>
            <Link to="/" className="footer__social-icon">
              <FaTwitter />
            </Link>
            <Link to="/" className="footer__social-icon">
              <FaYoutube />
            </Link>
            <Link to="/" className="footer__social-icon">
              <AiFillGithub />
            </Link>
          </div>
          <div className="footer__copyright">
            <p>© 2024 Hazo Shoppier</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
