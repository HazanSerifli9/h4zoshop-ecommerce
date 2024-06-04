import React from "react";
import NavBar from "../Components/HomePage/Navbar";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Products from "../Components/Products/Products";
import Testimonials from "../Components/Testimonials/Test";
import Footer from "../Components/HomePage/Footer";

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
