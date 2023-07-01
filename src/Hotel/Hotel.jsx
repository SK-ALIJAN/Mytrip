import React from "react";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import Searching from "./Searching";
import { useContext } from "react";
import { Contextapi } from "../ContextApi";
import { BsChevronDoubleDown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./Hotel.css";

const Hotel = () => {
  let { states } = useContext(Contextapi);
  // console.log(states.hotel);
  let Navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Searching />
      <div>
        <div className="explore_more" id="explore_">
          <BsChevronDoubleDown className="downIcon" />
          <p>Explore More</p>
          <BsChevronDoubleDown className="downIcon" />
        </div>
      </div>

      <div className="fewImage">
        <img
          src="https://platforms.makemytrip.com/contents/48d22495-59b0-4a47-8aa6-1cc8568fa842"
          alt=""
          className="HotelImage"
        />
        <div className="FourSide">
          <div>
            <img
              src="https://images.pexels.com/photos/16376256/pexels-photo-16376256/free-photo-of-taj-mahal-palace-hotel-in-mumbai.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              onClick={() => {
                localStorage.setItem(
                  "quary",
                  JSON.stringify({ side: "north" })
                );
                Navigate("/hotel/allHotel");
              }}
            />
            <p>North India</p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1523544261025-3159599b1fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c291dGglMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              onClick={() => {
                localStorage.setItem(
                  "quary",
                  JSON.stringify({ side: "south" })
                );
                Navigate("/hotel/allHotel");
              }}
            />
            <p>South India</p>
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/id/466240080/photo/victoria-memorial-landmark-in-calcutta-india.jpg?s=612x612&w=0&k=20&c=908J0rxwTyUBivotass3lCizKrsE5gGYQ5UpHP3V6zY="
              alt=""
              onClick={() => {
                localStorage.setItem("quary", JSON.stringify({ side: "west" }));
                Navigate("/hotel/allHotel");
              }}
            />
            <p>Bengal(East side)</p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVtYmFpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt=""
              onClick={() => {
                localStorage.setItem("quary", JSON.stringify({ side: "east" }));
                Navigate("/hotel/allHotel");
              }}
            />
            <p>Mumbai(West side)</p>
          </div>
        </div>
      </div>
      <img
        src="https://promos.makemytrip.com/images/clarks-LogoStrip-270223.webp"
        alt=""
        className="AdvertisementImage"
      />
      <Footer />
    </>
  );
};

export default Hotel;
