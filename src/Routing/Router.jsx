import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Homepage/Home";
import ContactUsPage from "../Homepage/ContactUs";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUsPage />} />
    </Routes>
  );
};

export default Router;
