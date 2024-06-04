import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import About from "./pages/AboutPage.jsx";
import Contact from "./pages/ContactUs.jsx";
import Login from "./pages/Login.jsx";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
