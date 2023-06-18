import React from "react";
import Navbar from "./Navbar";
import "./HomePageStyling/Home.css";
import Image from "./Images.jsx";
import Footer from "./Footer";
import Searching from "./Searching";
const Home = () => {
  return (
    <>
      <Navbar />
      <Searching />
      <Image />
      <Footer />
    </>
  );
};

export default Home;
