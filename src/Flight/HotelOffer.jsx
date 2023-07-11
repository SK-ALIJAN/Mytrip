import React, { useState } from "react";
import styles from "./hotelOffer.module.css";
import { useNavigate } from "react-router-dom";
import HotelDetails from "../Hotel/HotelDetails";
const HotelOffer = (props) => {
  let Navigate = useNavigate();
  let [hotelView, setHotelview] = useState(false);
  let onClose = () => {
    setHotelview(false);
  };

  return (
    <>
      {" "}
      <div
        className={styles.offerBox}
        onClick={() => {
          localStorage.setItem("carrentPage", "flight");
          setHotelview(true);
        }}
      >
        <div className={styles.images}>
          <img src={props.image} alt="" />
          <p>T&C's Apply</p>
        </div>
        <div className={styles.for_details}>
          <div>
            <p>{props.hotel_name}</p>
            <p>Get Up To {props.id}% OFF*</p>
            <p>{props.place}</p>
          </div>
          <p className={styles.view_details}>VIEW DETAILS</p>
        </div>
      </div>
      {hotelView ? <HotelDetails {...props} onClose={onClose} /> : ""}
    </>
  );
};

export default HotelOffer;
