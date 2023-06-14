import React from "react";
import { Image } from "@chakra-ui/react";
import img from "./logo.png";

const Logo = () => {
  return (
    <>
      <Image src={img} alt="Logo" w="100%" />
    </>
  );
};

export default Logo;
