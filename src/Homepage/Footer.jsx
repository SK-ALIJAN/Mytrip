import React from "react";
import "./HomePageStyling/Footer.css";
import { BsCheckLg, BsArrowRight } from "react-icons/bs";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";


const Footer = () => {
  let Navigate = useNavigate();
  return (
    <div id="footer">
      <div className="footerFirst">
        <div>
          <p>Try to book here</p>
          <div>
            <p>{<BsCheckLg className="tick" />}Safe and Secure</p>
            <p id="hidethis">{<BsCheckLg className="tick" />}Choose the Best</p>
            <p>{<BsCheckLg className="tick" />}Our 24/7 Support</p>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              Navigate("/flight");
            }}
          >
            Click to Book here {<BsArrowRight className="tick" />}
          </button>
          <button
            onClick={() => {
              Navigate("/profile");
            }}
          >
            My Bookings {<BsArrowRight className="tick" />}
          </button>
        </div>
      </div>

      <div className="Footer-data">
        <div className="contacts">
          <div className="contact-information">
            <h3>Contact Information</h3>
            <p>Phone: +91 8695453740</p>
            <p>Email: Connect2skalijan@gmail.com</p>
            <p>Address: Kolkata, WestBengal, India</p>
          </div>
          <div className="quick-links">
            <h3>Quick Links</h3>
            <div className="link">
              <div>
                <p>Home</p>
                <p>Flights</p>
                <p>Hotels</p>
              </div>
              <div>
                <p>Car Rentals</p>
                <p>Destinations</p>
                <p>Contact Us</p>
              </div>
            </div>
          </div>

          <div className="newsletter-subscription">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Stay up to date with our latest news and promotions.</p>
            <form>
              <input type="email" placeholder="Enter your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="disclaimer">
          <p>
            Disclaimer: My trip is a leading platform for flight and hotel
            bookings. This website provides information and facilitates
            bookings, but does not guarantee the availability, accuracy, or
            quality of the services offered by airlines, hotels, or car rental
            agencies.
          </p>
        </div>
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} My Trip. All rights reserved.
          </p>
          <button  onClick={()=>{Navigate('/contact')}}>Feel free to get support</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
