import React from "react";
import "./HomePageStyling/Footer.css";
import { BsCheckLg, BsArrowRight } from "react-icons/bs";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footerFirst">
        <div>
          <p>Try to book here</p>
          <div>
            <p>{<BsCheckLg className="tick" />}Safe and Secure</p>
            <p>{<BsCheckLg className="tick" />}Choose the Best</p>
            <p>{<BsCheckLg className="tick" />}Our 24/7 Support</p>
          </div>
        </div>
        <div>
          <button>Click to Book here {<BsArrowRight />}</button>
          <button> My Bookings {<BsArrowRight className="tick" />}</button>
        </div>
      </div>

      <div className="Footer-data">
        <Logo />
        <div className="contact-information">
          <h3>Contact Information</h3>
          <p>Phone: +1-555-123-4567</p>
          <p>Email: info@bookitnow.com</p>
          <p>Address: 123 Main Street, Anytown, USA</p>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Flights</li>
            <li>Hotels</li>
            <li>Car Rentals</li>
            <li>Destinations</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="social-media">
          <h3>Social Media</h3>
          <ul>
            <li>
              Facebook:{" "}
              <a href="https://facebook.com/bookitnow">
                facebook.com/bookitnow
              </a>
            </li>
            <li>
              Twitter:{" "}
              <a href="https://twitter.com/bookitnow">twitter.com/bookitnow</a>
            </li>
            <li>
              Instagram:{" "}
              <a href="https://instagram.com/bookitnow">
                instagram.com/bookitnow
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a href="https://linkedin.com/company/bookitnow">
                linkedin.com/company/bookitnow
              </a>
            </li>
          </ul>
        </div>
        <div className="disclaimer">
          <p>
            Disclaimer: BookItNow is a leading platform for flight and hotel
            bookings. This website provides information and facilitates
            bookings, but does not guarantee the availability, accuracy, or
            quality of the services offered by airlines, hotels, or car rental
            agencies.
          </p>
        </div>
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} BookItNow. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
