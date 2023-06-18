import React, { useState } from "react";
import { createContext, useReducer, useEffect } from "react";
import axios from "axios";

let Contextapi = createContext();

let flightUrl = `https://6487f0dd0e2469c038fcaded.mockapi.io/flight`;
let hotelUrl = `https://6487f0dd0e2469c038fcaded.mockapi.io/hotel`;
let userUrl = `https://6410847f7b24bb91f21fd94b.mockapi.io/ali`;

let reducer = (state, { type, payload }) => {
  switch (type) {
    case "flight": {
      return { ...state, flight: payload };
    }
    case "hotel": {
      return { ...state, hotel: payload };
    }
    case "user": {
      return { ...state, user: payload };
    }
    default:
      throw new Error("Invalid type", type);
  }
};

const ContextProvider = ({ children }) => {
  let [states, Dispatch] = useReducer(reducer, {
    hotel: [],
    flight: [],
    user: [],
  });
  let [Auth, setAuth] = useState({ register: false, login: false });
  let FetchData = async (url, type) => {
    let config = { url };

    try {
      let data = await axios(config);
      if (type === "flight") {
        Dispatch({ type: "flight", payload: data.data });
      } else if (type === "user") {
        Dispatch({ type: "user", payload: data.data });
      } else {
        Dispatch({ type: "hotel", payload: data.data });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    FetchData(flightUrl, "flight");
    FetchData(hotelUrl, "hotel");
    FetchData(userUrl, "user");
  }, [Auth]);

  let PassingData = {
    register: () => {
      setAuth({ ...Auth, register: true });
    },
    login: () => {
      setAuth({ ...Auth, login: true });
    },
    logout: () => {
      setAuth({ ...Auth, login: false });
    },
    states,
    Auth,
  };

  return (
    <Contextapi.Provider value={PassingData}>{children}</Contextapi.Provider>
  );
};

export { ContextProvider, Contextapi };
