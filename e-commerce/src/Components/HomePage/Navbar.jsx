import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingBasket,
  FaMoon,
  FaSun,
  FaUser,
  FaHome,
} from "react-icons/fa";
import "../../styles/Navbar.css";

const Navbar = () => {
  const [nightMode, setNightMode] = useState(false);

  const toggleNightMode = () => {
    setNightMode(!nightMode);
    document.body.classList.toggle("night-mode");
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        nightMode ? "navbar-dark bg-dark" : "navbar-light"
      }`}
    >
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/search">
                <FaSearch />{" "}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/my-basket">
                <FaShoppingBasket />
              </Link>
            </li>
            <li className="nav-item">
              <button
                onClick={toggleNightMode}
                className="nav-link btn btn-link night-mode-toggle"
              >
                {nightMode ? <FaSun /> : <FaMoon />} {nightMode ? "" : ""}
              </button>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                <FaUser />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <FaHome />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
