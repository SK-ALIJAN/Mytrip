import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "../Profile/Profile";
import Home from "../Homepage/Home";
import ContactUsPage from "../Homepage/ContactUs";
import Authentication from "../Profile/Authentication";
import PrivateRouter from "./PrivateRouter";
import NotFoundPage from "./NotFoundPage";
import Flight from "../Flight/Flight";
import ViewFlight from "../Flight/ViewFlight";
import Hotel from "../Hotel/Hotel";
import AllHotel from "../Hotel/AllHotel";
import Payment from "../Payment/Payment";

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
      <Route path="/payment" element={<Payment />} />
      <Route path="/flight" element={<Flight />} />
      <Route path="/hotel" element={<Hotel />} />
      <Route path="/flight/viewFlight" element={<ViewFlight />} />
      <Route path="/hotel/allHotel" element={<AllHotel />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
