import React from "react";
import img from "./logo.png";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  let Navigate = useNavigate();
  return (
    <>
      <img
        src={img}
        alt="Logo"
        w="100%"
        onClick={() => {
          Navigate("/");
        }}
      />
    </>
  );
};

export default Logo;
