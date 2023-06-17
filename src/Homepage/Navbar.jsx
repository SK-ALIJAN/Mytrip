import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import "./HomePageStyling/Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";

let link = [
  { to: "/flight", label: "Flight" },
  { to: "/hotel", label: "hotel" },
  { to: "/cars", label: "rental cars" },
];

const Navbar = () => {
  const [showSupport, setShowSupport] = useState(false);
  const hideRef = useRef();
  let Navigate=useNavigate();

  useEffect(() => {
    document.addEventListener("contextmenu", handleClickOutside);
    return () => {
      document.removeEventListener("contextmenu", handleClickOutside);
    };
  }, []);

  const handleSupport = () => {
    setShowSupport(!showSupport);
  };

  const handleClickOutside = (e) => {
    if (hideRef.current && !hideRef.current.contains(e.target)) {
      setShowSupport(false);
    }
  };

  return (
    <nav>
      <div className="leftbutton">
        <Logo />
        <div className="Menu">
          {link.map((nav, index) => (
            <NavLink key={index} to={nav.to}>
              {nav.label}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="rightbutton">
        <div className="support" onClick={handleSupport}>
          <p>?</p>
          <p className="showw">support</p>

          <div
            className="supportDisplay"
            ref={hideRef}
            style={{ display: showSupport ? "block" : "none" }}
          >
            <p>Contact us</p>
            <p>Airlines Info</p>
            <p>My Bookings</p>
          </div>
        </div>
        <div
          className="MyBookings"
          onClick={() => {
            Navigate('./profile')
          }}
        >
          <BsFillPersonFill className="globeIcon" r />
          <p className="myBok">My Bookings</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
