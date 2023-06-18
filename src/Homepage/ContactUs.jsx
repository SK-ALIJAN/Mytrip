import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";
import "./HomePageStyling/ContactUs.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUsPage = () => {
  let [show, setShow] = useState(false);
  return (
    <>
      <Navbar />
      <div className="bgimage">
        <div className="contact-us-page">
          <header className="page-header">
            <h1>Contact Us</h1>
          </header>
          <main className="page-content">
            <section className="contact-details">
              <div className="contact-info">
                <h2>Get in Touch</h2>
                <p>
                  Feel free to reach out to us for any inquiries or feedback.
                </p>
                <div className="contact-item">
                  <FaPhone />
                  <span>Phone: +91 8595453740</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope />
                  <span>Email: Connect2skalijan@gmail.com</span>
                </div>
                <div className="contact-item">
                  <FaMapMarker />
                  <span>Kolkata, WestBengal, India</span>
                </div>
              </div>
              <div className="contact-form">
                <h2>Send us a Message</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                  </div>
                  <button
                    type="submit"
                    onClick={(e) => {
                    e.preventDefault();
                      setShow(true);
                      setTimeout(() => {
                        setShow(false);
                      }, 2000);
                    }}
                  >
                    Send Message
                  </button>
                </form>
                {show ? (
                  <p className="message">
                    Thank you , We'll Get Back to You Soon!
                  </p>
                ) : (
                  ""
                )}
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsPage;
