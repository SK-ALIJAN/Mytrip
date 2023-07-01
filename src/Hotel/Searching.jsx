import React, { useState } from "react";
import Style from "./Searching.module.css";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

let Reducer = (State, action) => {
  switch (action.type) {
    case "Search": {
      return {
        ...State,
        Search: action.payload,
      };
    }
    case "CheckIn": {
      return {
        ...State,
        CheckIn: action.payload,
      };
    }
    case "CheckOut": {
      return {
        ...State,
        CheckOut: action.payload,
      };
    }
    case "Guests": {
      return {
        ...State,
        Guests: action.payload,
      };
    }
    default:
      return State;
  }
};
let initialValue = {
  Search: "",
  CheckIn: "",
  CheckOut: "",
  Guests: "",
};

const Searching = () => {
  let [state, Dispatch] = useReducer(Reducer, initialValue);
  let Navigate = useNavigate();
  let handleClick = () => {
    let { Search, CheckIn, CheckOut, Guests } = state;
    if (Search != "" && CheckIn !== "" && CheckOut !== "" && Guests !== "") {
      localStorage.setItem("quary", JSON.stringify(state));
      Navigate("/hotel/allHotel");
    }
  };

  return (
    <>
      <p className={Style.slogan}>
        Discover limitless luxury, where dreams find a stay.
      </p>
      <section className={Style.section_main}>
        <input
          type="text"
          className={Style.search_input}
          placeholder="Search by City , Hotel"
          onChange={(e) => {
            Dispatch({ type: "Search", payload: e.target.value });
          }}
        />

        <div>
          <label>Check-In:</label>
          <input
            type="date"
            className={Style.date_input}
            onChange={(e) => {
              Dispatch({ type: "CheckIn", payload: e.target.value });
            }}
          />
        </div>
        <div>
          <label>Check-Out:</label>
          <input
            type="date"
            className={Style.date_input}
            onChange={(e) => {
              Dispatch({ type: "CheckOut", payload: e.target.value });
            }}
          />
        </div>
        <div>
          <label>Number of Guests:</label>
          <input
            type="number"
            min="1"
            className={Style.number_input}
            placeholder="Enter Number of Guests"
            onChange={(e) => {
              Dispatch({ type: "Guests", payload: e.target.value });
            }}
          />
        </div>
        <button
          type="button"
          className={Style.search_button}
          onClick={handleClick}
        >
          Search
        </button>
      </section>
    </>
  );
};

export default Searching;
