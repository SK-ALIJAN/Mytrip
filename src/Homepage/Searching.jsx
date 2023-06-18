import React, { useState, useEffect } from "react";
import "./HomePageStyling/Searching.css";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaExchangeAlt,
  FaCalendarAlt,
  FaCouch,
  FaUserFriends,
} from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { color } from "framer-motion";

const Searching = () => {
  let [radio, setRadio] = useState("Return");
  let [show, setShow] = useState(false);

  let handleChange = (e) => {
    setRadio(e.target.value);
  };
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  useEffect(() => {
    let id = setTimeout(() => {
      setShow(true);
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <>
      {show ? (
        <div className="mains">
          <p>Embark on enchanting journeys, With MyTrip's care, worry-free.</p>

          <div className="For-Searching">
            {/* ...radio button */}
            <div className="radio-inputs">
              <label className="radio">
                <input
                  type="radio"
                  name="radio"
                  defaultChecked
                  value="Return"
                  onChange={handleChange}
                />
                <span className="name">Return</span>
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="radio"
                  value="One-way"
                  onChange={handleChange}
                />
                <span className="name">One-way</span>
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="radio"
                  value="Multi-City"
                  onChange={handleChange}
                />
                <span className="name">Multi-City</span>
              </label>
            </div>

            <div className="flightInput">
              <div>
                <section className="section1">
                  <div className="from">
                    <label htmlFor="From">From</label>

                    <FaPlaneDeparture className="ticks" id="ftick" />
                    <input type="text" placeholder="Enter origin" />
                  </div>
                  <FaExchangeAlt className="ticks" id="middle" />
                  <div className="To">
                    <label htmlFor="To">To</label>
                    <FaPlaneArrival className="ticks" id="stick" />
                    <input type="text" placeholder="Enter destination" />
                  </div>
                </section>
                <section className="section2">
                  <div className="date">
                    <label htmlFor="Date">Date</label>
                    <input type="date" />
                  </div>
                  <div className="passengers">
                    <label htmlFor="Passengers">Passengers</label>
                    <input type="number" min="1" max="10" />
                  </div>
                  <div className="class">
                    <label htmlFor="Class">Class</label>
                    <select className="sl">
                      <option value="economy">Economy</option>
                      <option value="business">Business</option>
                      <option value="first">First Class</option>
                    </select>
                  </div>
                </section>
              </div>

              <button className="search">Search flights</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Searching;
