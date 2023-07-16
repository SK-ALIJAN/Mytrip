import "./HomePageStyling/image.css";
import {
  BsBuildingCheck,
  BsFillAirplaneFill,
  BsFillCarFrontFill,
} from "react-icons/bs";
import React from "react";
import { useNavigate } from "react-router-dom";

let image = [
  "https://img.freepik.com/free-photo/airplane-sunset_1150-8338.jpg?size=626&ext=jpg",
  "https://media.gettyimages.com/id/467789033/photo/city-above-the-clouds-darjeeling.jpg?s=612x612&w=0&k=20&c=bA_uGRMQPpOn49P4gSz8DjQgIIUotIG38D4ZfaaqvCA=",
  "https://images.pexels.com/photos/2517931/pexels-photo-2517931.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://r1imghtlak.mmtcdn.com/d513dd48e2ea11ea98ef0242ac110002.jpg?&output-quality=75&downsize=910:612&crop=910:612;0,3&output-format=jpg&downsize=821:550&crop=821:550",
  "https://img.freepik.com/free-vector/civil-passenger-airliner-jet_1284-18783.jpg?size=626&ext=jpg&ga=GA1.2.747389772.1686806713&semt=ais",
  "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400",
];

const Images = () => {
  let Navigate = useNavigate();
  return (
    <>
      {" "}
      <div className="main">
        <div className="firstline">
          <div>
            <p className="modifyit">My trip</p>
            <p>
              Experience the vibrant tapestry of cultures,{" "}
              <span className="hideNows">
                {" "}
                flavors, and landscapes as Mytrip India weaves together
                unforgettable journeys tailored just for you.
              </span>
            </p>
          </div>

          <div className="icond hideNows">
            <div className="icons">
              <div className="hotelIcon">
                <BsBuildingCheck />
              </div>
              <div className="flightIcon">
                <BsFillAirplaneFill />
              </div>
              <div className="carIcon">
                <BsFillCarFrontFill />
              </div>
            </div>

            <p>Explore the World with Mytrip Making Journeys Brighter!</p>
          </div>
          <div
            onClick={() => {
              Navigate("/flight");
            }}
          >
            <img src={image[0]} alt="" />
          </div>
          <div
            onClick={() => {
              Navigate("/hotel");
            }}
          >
            <img src={image[1]} alt="" />
          </div>
        </div>
        <div className="secondline">
          <div
            onClick={() => {
              Navigate("/flight");
            }}
          >
            <img src={image[2]} alt="" />
          </div>
          <div
            onClick={() => {
              Navigate("/hotel");
            }}
          >
            <img src={image[3]} alt="" />
          </div>
          <div
            onClick={() => {
              Navigate("/flight");
            }}
          >
            <img src={image[4]} alt="" />
          </div>

          <div
            onClick={() => {
              Navigate("/car");
            }}
            className="hideNows"
          >
            <img src={image[5]} alt="" />
          </div>
        </div>
      </div>
      <img
        src="https://platforms.makemytrip.com/contents/b605b631-f177-4732-a5bc-bee331e120eb"
        alt=""
        style={{ width: "90%", margin: "auto", display:"block",borderRadius:"11px"}}
         onClick={() => {
              Navigate("/hotel");
            }}
      />
    </>
  );
};

export default Images;
