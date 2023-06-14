import React from "react";
import Logo from "./Logo";
import "./HomePageStyling/Navbar.css";
import { NavLink } from "react-router-dom";

let link = [
  { to: "/flight", label: "Flight" },
  { to: "/hotel", label: "hotel" },
  { to: "/cars", label: "rental cars" },
];

const Navbar = () => {
  return (
    <nav>
      <div className="leftbutton">
        <Logo />
        <div className="Menu">
          {link.map((nav, index) => {
            return <NavLink to={nav.to}>{nav.label}</NavLink>;
          })}
        </div>
      </div>
      <div className="rightbutton">
        <div className="support">
          <p>?</p>
          <p>support</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
