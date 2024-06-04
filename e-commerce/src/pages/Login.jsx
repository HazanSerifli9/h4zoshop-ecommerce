import React from "react";
import "../styles/Login.css";
import { useState } from "react";
import { FaGoogle, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import Navbar from "../Components/HomePage/Navbar";
import Footer from "../Components/HomePage/Footer";

const LoginSignUp = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div>
      <Navbar />
      <div className="mainContainer">
        <div className="headerContainer">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {" "}
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <input type="username" placeholder="Username" />{" "}
            </div>
          )}
          <div className="input">
            {/*FONTAWESOME IMG HERE*/}
            <input type="email" placeholder="Email" />{" "}
          </div>
          <div className="input">
            {/*FONTAWESOME IMG HERE*/}
            <input type="password" placeholder="Password" />{" "}
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Forget your password?<span>Click Here!</span>
          </div>
        )}
        <div className="social-signup">
          <button className="social-button google">
            <FaGoogle />{" "}
            {action === "Login" ? "Login with Google" : "Sign Up with Google"}
          </button>
          <button className="social-button facebook">
            <FaFacebook />{" "}
            {action === "Login"
              ? "Login with Facebook"
              : "Sign Up with Facebook"}
          </button>
          <button className="social-button twitter">
            <FaTwitter />{" "}
            {action === "Login" ? "Login with Twitter" : "Sign Up with Twitter"}
          </button>
          <button className="social-button github">
            <FaGithub />{" "}
            {action === "Login" ? "Login with Github" : "Sign Up with Github"}
          </button>
        </div>
        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginSignUp;
