import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "../Profile/Profile";
import Home from "../Homepage/Home";
import ContactUsPage from "../Homepage/ContactUs";
import Authentication from "../Profile/Authentication";
import PrivateRouter from "./PrivateRouter";
import NotFoundPage from "./NotFoundPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/authentication" element={<Authentication />} />
      <Route
        path="/profile"
        element={
          <PrivateRouter>
            <Profile />
          </PrivateRouter>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
