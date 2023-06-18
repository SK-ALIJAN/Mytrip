import React, { useReducer, useState, useContext } from "react";
import "./authentication.css";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Contextapi } from "../ContextApi";

let reducer = (state, action) => {
  switch (action.type) {
    case "login": {
      return { ...state, login: true, signup: false };
    }

    case "signup": {
      return { ...state, login: false, signup: true };
    }

    default:
      return state;
  }
};

const Authentication = () => {
  let [state, Dispatch] = useReducer(reducer, { login: false, signup: true });
  let [text, setText] = useState({ name: "", email: "", password: "" });
  let { register, login, states } = useContext(Contextapi);

  let handleregister = (e) => {
    e.preventDefault();
    api(text);
    setText({ name: "", email: "", password: "" });
  };

  async function api(details) {
    let url = `https://6410847f7b24bb91f21fd94b.mockapi.io/ali`;
    try {
      let response = await fetch(url, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(details),
      });
      let data = await response.json();
      register();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <Navbar />
      <div className="login-signup-wrapper">
        {state.login ? (
          <div className="form login">
            <header>Login</header>
            <form action="#">
              <div className="row">
                <FaEnvelope className="icon" />
                <input type="text" placeholder="Email address" required />
              </div>
              <div className="row">
                <FaLock className="icon" />
                <input type="password" placeholder="Password" required />
              </div>
              <div className="row button">
                <input type="submit" value="Login" />
              </div>
            </form>
            <p>
              New User?{" "}
              <span
                onClick={() => {
                  Dispatch({ type: "signup" });
                }}
              >
                Sign up here
              </span>
            </p>
          </div>
        ) : (
          <div className="form signup">
            <header>Signup</header>
            <form action="#" onSubmit={handleregister}>
              <div className="row">
                <FaUser className="icon" />
                <input
                  type="text"
                  placeholder="Full name"
                  required
                  onChange={(e) => {
                    setText((prev) => {
                      return { ...prev, name: e.target.value };
                    });
                  }}
                  value={text.name}
                />
              </div>
              <div className="row">
                <FaEnvelope className="icon" />
                <input
                  type="text"
                  placeholder="Email address"
                  required
                  onChange={(e) => {
                    setText((prev) => {
                      return { ...prev, email: e.target.value };
                    });
                  }}
                  value={text.email}
                />
              </div>
              <div className="row">
                <FaLock className="icon" />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(e) => {
                    setText((prev) => {
                      return { ...prev, password: e.target.value };
                    });
                  }}
                  value={text.password}
                />
              </div>
              <div className="checkbox">
                <input type="checkbox" id="signupCheck" />
                <label htmlFor="signupCheck">
                  I accept all terms & conditions
                </label>
              </div>
              <div className="row button">
                <input type="submit" value="Signup" />
              </div>
            </form>
            <p>
              Existing User?{" "}
              <span
                onClick={() => {
                  Dispatch({ type: "login" });
                }}
              >
                Login here
              </span>
            </p>
          </div>
        )}
      </div>

      <Footer className="btm" />
    </>
  );
};

export default Authentication;
