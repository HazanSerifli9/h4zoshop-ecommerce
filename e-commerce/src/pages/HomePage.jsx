import React from "react";
import NavBar from "../Component/HomePage/Navbar";
import Header from "../Component/Header/Header";
import Footer from "../Component/HomePage/Footer";
import Hero from "../Component/Hero/Hero";
import Products from "../Component/Products/Products";
import Testimonials from "../Component/Testimonials/Test";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Header />

      <Hero />
      <Products />
      <Testimonials />
      <Footer />
    </>
  );
}
