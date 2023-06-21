import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useContext } from "react";
import { Contextapi } from "../ContextApi";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import styles from "./profile.module.css";
import { BiSad } from "react-icons/bi";

const Profile = () => {
  let data = localStorage.getItem("loggedINUser");
  let bookings = JSON.parse(localStorage.getItem("bookings"));
  let { states, logout } = useContext(Contextapi);
  let [user, setUser] = useState(false);
  let userData = states.user.filter((ele) => {
    return ele.id === data;
  });
  setTimeout(() => {
    setUser(true);
  }, 500);

  return (
    <>
      <Navbar />
      {user == false ? (
         <div className={styles.loader}>
      <div className={styles.wrapper}>
        <div className={styles.circle}></div>
        <div className={styles['line-1']}></div>
        <div className={styles['line-2']}></div>
        <div className={styles['line-3']}></div>
        <div className={styles['line-4']}></div>
      </div>
    </div>
      ) : (
        <div className={styles.profile}>
          <div className={styles["profile-header"]}>
            <h2 className={styles.username}>{userData[0].name}</h2>
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
                ""
              )}
            </div>

            <button className={styles["logout-button"]} onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Profile;
