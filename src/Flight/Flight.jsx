import React from "react";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import Searching from "../Homepage/Searching";
import { BsChevronDoubleDown } from "react-icons/bs";
import "./flight.css";
import { useContext } from "react";
import { Contextapi } from "../ContextApi";
import HotelOffer from "./HotelOffer";
const Flight = () => {
  let { states } = useContext(Contextapi);
  let hotelOfferData = states.hotel.filter((ele) => {
    return ele.side == "west" || ele.side == "south";
  });

  return (
    <>
      <Navbar />
      <Searching />
      <section className="flight_section">
        <div className="firstOne">
          <div className="explore_more">
            <BsChevronDoubleDown className="downIcon" />
            <p>Explore More</p>
            <BsChevronDoubleDown className="downIcon" />
          </div>
          <div className="whereToGo">
            <div>
              <img
                src="https://promos.makemytrip.com/appfest/2x/icon-wheretogo-23062022.png"
                alt=""
              />
              <p>Where2Go</p>
            </div>

            <div>
              <img
                src="https://promos.makemytrip.com/appfest/2x/trip-money-1.png"
                alt=""
              />
              <p>TripMoney</p>
            </div>

            <div>
              <img
                src="https://promos.makemytrip.com/Growth/Images/B2C/2x/dt_tert_flights.png"
                alt=""
              />
              <div>
                <p style={{ fontWeight: 900 }}>Explore International Flights</p>
                <p>Cheapest Flights to Paris, Bali, Tokyo & more</p>
              </div>
            </div>

            <div>
              <img
                src="https://promos.makemytrip.com/images/myBiz/MICE/mice%20icon%20-%20square.png"
                alt=""
              />
              <div>
                <p>MICE</p>
                <p>Offsites, Events & Meetings</p>
              </div>
            </div>
            <div style={{ border: "none" }}>
              <img
                src="https://promos.makemytrip.com/appfest/2x/gift%20card%201.png"
                alt=""
              />

              <p>Gift Cards</p>
            </div>
          </div>
          <img
            src="https://platforms.makemytrip.com/contents/6ab6038e-7a18-4d8c-bd56-a6aaeb09da09"
            alt=""
          />
        </div>

        <div className="hotelShow">
          <p>Offers On Hotels Bookings</p>
          <div className="showmeHotel">
            {hotelOfferData.map((ele) => {
              return <HotelOffer key={ele.id} {...ele} />;
            })}
          </div>
        </div>
        <div className="advertisement">
        <img src="https://platforms.makemytrip.com/contents/43489ac9-197e-4aca-9b59-8170a9636bd6" alt="" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Flight;
