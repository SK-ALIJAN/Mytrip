import React from "react";
import { FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";
import "./HomePageStyling/ContactUs.css";
import Navbar from "./Navbar";

const ContactUsPage = () => {
  return (
    <>
      <Navbar/>
      <div className="contact-us-page">
        <header className="page-header">
          <h1>Contact Us</h1>
        </header>
        <main className="page-content">
          <section className="contact-details">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>Feel free to reach out to us for any inquiries or feedback.</p>
              <div className="contact-item">
                <FaPhone />
                <span>Phone: +1 123 456 7890</span>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <span>Email: info@example.com</span>
              </div>
              <div className="contact-item">
                <FaMapMarker />
                <span>123 Street, City, State, Country</span>
              </div>
            </div>
            <div className="contact-form">
              <h2>Send us a Message</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5"></textarea>
                </div>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </section>
        </main>
        <footer className="page-footer">
          <p>© 2023 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default ContactUsPage;
