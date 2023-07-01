import React from "react";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import PaymentGateway from "./PaymentGateway";
const Payment = () => {
  return (
    <>
      <Navbar />
      <PaymentGateway/>
      <Footer />
    </>
  );
};

export default Payment;
