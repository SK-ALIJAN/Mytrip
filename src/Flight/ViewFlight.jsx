import React from "react";
import { useContext } from "react";
import { Contextapi } from "../ContextApi";
const ViewFlight = () => {
  let Quary = JSON.parse(localStorage.getItem("quary"));
  let { states } = useContext(Contextapi);
  let data = states.flight.filter((ele) => {
    return ele.from == Quary.from && ele.to == Quary.to;
  });
  console.log(data);
  return <div></div>;
};

export default ViewFlight;
