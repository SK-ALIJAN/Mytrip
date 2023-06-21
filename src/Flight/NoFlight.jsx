import React from "react";
import "./NoFlight.css";
import { TbMoodSad } from "react-icons/tb";
const NoFlight = () => {
  return (
    <>
      {" "}
      <TbMoodSad className="loader" />
      <h3 id="message">Oops! No Flights are Available</h3>
    </>
  );
};

export default NoFlight;
