import React, { useState } from "react";
import "../Styles/Contact.css";
import Navbar from "../Component/HomePage/Navbar";
import Footer from "../Component/HomePage/Footer";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
} from "react-icons/ai";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    if (!name.match(nameRegex)) {
      setNameError("Please enter a valid name.");
    } else if (!email.match(emailRegex)) {
      setEmailError("Please enter a valid email address.");
    } else if (message.length < 10) {
      setMessageError("Please enter a message with at least 10 characters.");
    } else {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);

      fetch("/api/contact", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setSent(true);
          } else {
            alert("Message failed to send.");
          }
        })
        .catch((error) => {
          alert("Message failed to send.");
        });
    }
  };

  return (
    <div>
      <Navbar />
      <div
        className="contact-form"
        style={{
          backgroundColor: "#f5f5f5",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#333" }}>Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <label htmlFor="name">
            Name
            <span className="error">
              {nameError && <small>{nameError}</small>}
            </span>
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />

          <label htmlFor="email">
            Email
            <span className="error">
              {emailError && <small>{emailError}</small>}
            </span>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
          />

          <label htmlFor="message">
            Message
            <span className="error">
              {messageError && <small>{messageError}</small>}
            </span>
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
          ></textarea>

          <button type="submit">Send</button>
        </form>{" "}
        <div className="contact">
          <div className="contact-info">
            <div className="contact-info-item">
              <AiOutlineMail size={24} />
              <p>Email: h4zoshoppier@gmail.com</p>
            </div>
            <div className="contact-info-item">
              <AiOutlinePhone size={24} />
              <p>Phone: +1234567890</p>
            </div>
            <div className="contact-info-item">
              <AiOutlineEnvironment size={24} />
              <p>Location: 123 Example St, LA, USA</p>
            </div>
          </div>
        </div>
        {sent && <p className="success-message">Your message has been sent!</p>}
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
