import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="head-container">
      <div className="row">
        <div className="col-md-12">
          <div className="header">
            <p>
              <Link to="/">Home</Link> | <Link to="/shop">Shop</Link> |{" "}
              <Link to="/about">About</Link> |{" "}
              <Link to="/contact">Contact</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
