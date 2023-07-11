import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Contextapi } from "../ContextApi";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import styles from "./profile.module.css";
import { BiSad } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  let data = localStorage.getItem("loggedINUser");
  let Auth = localStorage.getItem("loggedIN");
  let bookings = JSON.parse(localStorage.getItem("bookings"));
  let { states, logout } = useContext(Contextapi);

  let [user, setUser] = useState(false);
  let [userData, setuserData] = useState({});
  let usData = states.user.filter((ele) => {
    return ele.id === data;
  });
  setTimeout(() => {
    setuserData(usData);
    setUser(true);
  }, 500);

  return (
    <>
      <Navbar />

      {user == false ? (
        <div className={styles.loader}>
          <div className={styles.wrapper}>
            <div className={styles.circle}></div>
            <div className={styles["line-1"]}></div>
            <div className={styles["line-2"]}></div>
            <div className={styles["line-3"]}></div>
            <div className={styles["line-4"]}></div>
          </div>
        </div>
      ) : userData.length !== 0 ? (
        <div className={styles.profile}>
          <div className={styles.profileImage}>
            <div className={styles["profile-header"]}>
              <h2 className={styles.username}>
                {userData[0].name.substring(0, 1)}
              </h2>
            </div>
            <div className={styles["profile-header"]}>
              <h2 className={styles.username}>{userData[0].name}</h2>
            </div>
          </div>

          <div className={styles["profile-content"]}>
            <h3 className={styles.h3}>Email</h3>
            <p className={styles.p}>{userData[0].email}</p>

            <h3 className={styles.h3}>Password</h3>
            <p className={styles.p}>{userData[0].password}</p>

            <div className={styles.books}>
              <h3 className={styles.h3}>Booking Details</h3>
              {bookings == null ? (
                <div className={styles.NoBooking}>
                  <BiSad />
                  <p>No Booking Available!</p>
                </div>
              ) : (
                <div className={styles.bookingsShow}>
                  {bookings.map((ele) => {
                    if (ele.category !== undefined) {
                      return (
                        <div key={ele}>
                          <p>Booking type : Hotel </p>
                          <p>Hotel's Name : {ele.hotel_name}</p>
                             <p>Date : {ele.date}</p>
                          <p>Payment Mode : {ele.payment}</p>
                          <p>Payment Status : Successfull</p>
                        </div>
                      );
                    } else {
                      return (
                        <div key={ele}>
                          <p>Booking type : Flight</p>
                          <p>Flight's Name : {ele.name}</p>
                            <p>Date : {ele.date}</p>
                          <p>Payment Mode : {ele.payment}</p>
                          <p>Payment Status : Successfull</p>
                        </div>
                      );
                    }
                  })}
                </div>
              )}
            </div>

            <button className={styles["logout-button"]} onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      <Footer />
    </>
  );
};

export default Profile;
