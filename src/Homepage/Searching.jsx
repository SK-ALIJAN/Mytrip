import React, { useState, useEffect, useReducer } from "react";
import "./HomePageStyling/Searching.css";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaExchangeAlt,
} from "react-icons/fa";

let reducer = (state, action) => {
  switch (action.type) {
    case "from": {
      return { ...state, from: true, to: false };
    }
    case "to": {
      return { ...state, to: true, from: false };
    }

    default:
      throw new Error("Invalid action Type!");
  }
};

let initialState = { from: false, to: false };
const today = new Date().toISOString().split("T")[0];

const Searching = () => {
  let [radio, setRadio] = useState("Return");
  let [show, setShow] = useState(false);
  let [state, Dispatch] = useReducer(reducer, initialState);
  let [fromshow, setfromShow] = useState(false);
  let [toshow, settoShow] = useState(false);

  let handleChange = (e) => {
    setRadio(e.target.value);
  };

  useEffect(() => {
    let id = setTimeout(() => {
      setShow(true);
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  let handleinput = () => {};

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
              {/* <label className="radio">
                <input
                  type="radio"
                  name="radio"
                  value="Multi-City"
                  onChange={handleChange}
                />
                <span className="name">Multi-City</span>
              </label> */}
            </div>

            <div className="flightInput">
              <div>
                <section className="section1">
                  <div className="from">
                    <label htmlFor="From">From</label>

                    <FaPlaneDeparture className="ticks" id="ftick" />
                    <input
                      type="text"
                      placeholder=""
                      onChange={(e) => {
                        Dispatch({ type: "from", payload: e.target.value });
                      }}
                      onClick={() => {
                        setfromShow(!fromshow);
                      }}
                    />

                    {state.from && fromshow ? (
                      <div className="fromData">ddd</div>
                    ) : (
                      ""
                    )}
                  </div>
                  <FaExchangeAlt className="ticks" id="middle" />
                  <div className="To">
                    <label htmlFor="To">To</label>
                    <FaPlaneArrival className="ticks" id="stick" />
                    <input
                      type="text"
                      placeholder=""
                      onChange={(e) => {
                        Dispatch({ type: "to", payload: e.target.value });
                      }}
                      onClick={() => {
                        settoShow(!toshow);
                      }}
                    />
                    {state.to && toshow ? <div className="toData"></div> : ""}
                  </div>
                </section>
                <section className="section2">
                  <div className="date">
                    <label htmlFor="Date">Date</label>
                    <input type="date" className="tarikh" min={today} />
                  </div>
                  {radio == "Return" ? (
                    <div className="date" id="return">
                      <label htmlFor="Date">Return</label>
                      <input type="date" className="tarikh" />
                    </div>
                  ) : (
                    ""
                  )}
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
