import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";
import { useNavigate } from "react-router-dom";
import "./HomePageStyling/Searching.css";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaExchangeAlt,
} from "react-icons/fa";
import { Contextapi } from "../ContextApi";

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
  let [radio, setRadio] = useState("One-way");
  let [show, setShow] = useState(false);
  let [state, Dispatch] = useReducer(reducer, initialState);
  let [fromshow, setfromShow] = useState(false);
  let [toshow, settoShow] = useState(false);
  let from_ref = useRef("");
  let to_ref = useRef("");
  let dateRef = useRef(""),
    returnref = useRef(""),
    passRef = useRef(""),
    classRef = useRef("");

  let Navigate = useNavigate();

  let { states } = useContext(Contextapi);
  const from = Object.values(
    states.flight.reduce((acc, obj) => {
      acc[obj.from] = obj;
      return acc;
    }, {})
  ); // getting from data

  const to = Object.values(
    states.flight.reduce((acc, obj) => {
      acc[obj.from] = obj;
      return acc;
    }, {})
  ); // getting to data

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

  return (
    <>
      {show ? (
        <div className="mains">
          <p id="thistitle">Embark on enchanting journeys, With MyTrip's care, worry-free.</p>

          <div className="For-Searching">
            {/* ...radio button */}
            <div className="radio-inputs">
              <label className="radio">
                <input
                  type="radio"
                  name="radio"
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
                  defaultChecked
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

                    <FaPlaneDeparture
                      className="ticks"
                      id="ftick"
                      style={{
                        display:
                          from_ref.current.value === "" ? "block" : "none",
                      }}
                    />
                    <input
                      type="text"
                      placeholder=""
                      onChange={(e) => {
                        Dispatch({ type: "from", payload: e.target.value });
                      }}
                      onClick={() => {
                        setfromShow(!fromshow);
                      }}
                      className="checkings"
                      name="from"
                      ref={from_ref}
                    />

                    {state.from && fromshow ? (
                      <div className="fromData">
                        {from.map((ele) => {
                          return (
                            <p
                              className="chunck_data"
                              key={ele.id}
                              onClick={() => {
                                from_ref.current.value = ele.from;
                                setfromShow(false);
                              }}
                            >
                              {ele.from}
                            </p>
                          );
                        })}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <FaExchangeAlt
                    className="ticks"
                    id="middle"
                    onClick={() => {
                      let swapingValue = from_ref.current.value;
                      from_ref.current.value = to_ref.current.value;
                      to_ref.current.value = swapingValue;
                    }}
                  />
                  <div className="To">
                    <label htmlFor="To">To</label>
                    <FaPlaneArrival
                      className="ticks"
                      id="stick"
                      style={{
                        display: to_ref.current.value === "" ? "block" : "none",
                      }}
                    />
                    <input
                      type="text"
                      placeholder=""
                      onChange={(e) => {
                        Dispatch({ type: "to", payload: e.target.value });
                      }}
                      onClick={() => {
                        settoShow(!toshow);
                      }}
                      className="checkings"
                      name="to"
                      ref={to_ref}
                    />
                    {state.to && toshow ? (
                      <div className="toData">
                        {to.map((ele) => {
                          return (
                            <p
                              className="chunck_data"
                              key={ele.id}
                              onClick={() => {
                                to_ref.current.value = ele.to;
                                settoShow(false);
                              }}
                            >
                              {ele.to}
                            </p>
                          );
                        })}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </section>
                <section className="section2">
                  <div className="date">
                    <label htmlFor="Date">Date</label>
                    <input
                      type="date"
                      className="tarikh"
                      min={today}
                      ref={dateRef}
                    />
                  </div>
                  {radio == "Return" ? (
                    <div className="date" id="return">
                      <label htmlFor="Date">Return</label>
                      <input
                        type="date"
                        className="tarikh"
                        id="returnn"
                        ref={returnref}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="passengers">
                    <label htmlFor="Passengers">Passengers</label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      style={{ color: "white" }}
                      ref={passRef}
                    />
                  </div>
                  <div className="class">
                    <label htmlFor="Class">Class</label>
                    <select className="sl" ref={classRef}>
                      <option value="economy">Economy</option>
                      <option value="business">Business</option>
                      <option value="first">First Class</option>
                    </select>
                  </div>
                </section>
              </div>

              <button
                className="search"
                onClick={() => {
                  let quary;
                  if (radio == "Return") {
                    if (
                      from_ref.current.value !== "" &&
                      to_ref.current.value !== "" &&
                      dateRef.current.value !== "" &&
                      returnref.current.value !== "" &&
                      passRef.current.value !== "" &&
                      classRef.current.value !== ""
                    ) {
                      quary = {
                        from: from_ref.current.value,
                        to: to_ref.current.value,
                        date: dateRef.current.value,
                        return: returnref.current.value,
                        passenger: passRef.current.value,
                        class: classRef.current.value,
                        type: "return",
                      };
                      localStorage.setItem("quary", JSON.stringify(quary));
                      Navigate("/flight/viewFlight");
                    }
                  } else if (radio == "One-way") {
                    if (
                      from_ref.current.value !== "" &&
                      to_ref.current.value !== "" &&
                      dateRef.current.value !== "" &&
                      passRef.current.value !== "" &&
                      classRef.current.value !== ""
                    ) {
                      quary = {
                        from: from_ref.current.value,
                        to: to_ref.current.value,
                        date: dateRef.current.value,
                        passenger: passRef.current.value,
                        class: classRef.current.value,
                        type: "one-way",
                      };
                      localStorage.setItem("quary", JSON.stringify(quary));
                      Navigate("/flight/viewFlight");
                    }
                  } else {
                  }
                }}
              >
                Search flights
              </button>
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
