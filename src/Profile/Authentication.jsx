import React, { useReducer, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./authentication.css";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

import { Contextapi } from "../ContextApi";
import ErrorMessage from "./ErrorMessage";
import LoginSuccessMessage from "./LoginMessage";
import { useEffect } from "react";

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
let lsData = null;

const Authentication = () => {
  let Navigate = useNavigate();
  let [state, Dispatch] = useReducer(reducer, { login: false, signup: true });
  let [text, setText] = useState({ name: "", email: "", password: "" }); //for signup
  let [Ltext, setLText] = useState({ email: "", password: "" }); //for login
  let [sHide, setSHide] = useState(true);
  let [LHide, setLHide] = useState(true);
  let { register, login, states } = useContext(Contextapi);
  let [error, setError] = useState(false);
  let [message, setMessage] = useState(false);

  let handleregister = (e) => {
    e.preventDefault();
    api(text);
    setText({ name: "", email: "", password: "" });
    Dispatch({ type: "login" });
  };
  useEffect(() => {
    lsData = localStorage.getItem("carrentPage");
  }, []);

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

  let handleLogin = (e) => {
    e.preventDefault();
    let userData = states.user.filter((ele, index) => {
      return ele.email === Ltext.email && ele.password === Ltext.password;
    });
    if (userData.length !== 0) {
      localStorage.setItem("loggedINUser", userData[0].id);
      login();
      setMessage(true);
      setTimeout(() => {
        Navigate(`/${lsData}`);
      }, 1000);
    } else {
      setError(true);
    }
  };
  let handleError = () => {
    setError(false);
  };

  return (
    <>
      <Navbar />
      <div className="login-signup-wrapper">
        {state.login ? (
          <div className="form login">
            <header>Login</header>
            <form action="#" onSubmit={handleLogin}>
              <div className="row">
                <FaEnvelope className="icon" />
                <input
                  type="text"
                  placeholder="Email address"
                  required
                  value={Ltext.email}
                  onChange={(e) => {
                    setLText((prev) => {
                      return { ...prev, email: e.target.value };
                    });
                  }}
                />
              </div>
              <div className="row">
                <FaLock className="icon" />
                <input
                  type={LHide ? "password" : "text"}
                  placeholder="Password"
                  required
                  value={Ltext.password}
                  onChange={(e) => {
                    setLText((prev) => {
                      return { ...prev, password: e.target.value };
                    });
                  }}
                />
                {LHide ? (
                  <BsEyeFill
                    className="BSICON"
                    onClick={() => {
                      setLHide(false);
                    }}
                  />
                ) : (
                  <BsEyeSlashFill
                    className="BSICON"
                    onClick={() => {
                      setLHide(true);
                    }}
                  />
                )}
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
            {error ? <ErrorMessage click={handleError} /> : ""}
            {message ? <LoginSuccessMessage /> : ""}
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
                  type={sHide ? "password" : "text"}
                  placeholder="Password"
                  required
                  onChange={(e) => {
                    setText((prev) => {
                      return { ...prev, password: e.target.value };
                    });
                  }}
                  value={text.password}
                />
                {sHide ? (
                  <BsEyeFill
                    className="BSICON"
                    onClick={() => {
                      setSHide(false);
                    }}
                  />
                ) : (
                  <BsEyeSlashFill
                    className="BSICON"
                    onClick={() => {
                      setSHide(true);
                    }}
                  />
                )}
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
