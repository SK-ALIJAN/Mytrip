import React from "react";
import styles from "./hotelOffer.module.css";
import { useNavigate } from "react-router-dom";

const HotelOffer = (props) => {
  let Navigate = useNavigate();

  return (
    <div className={styles.offerBox}>
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
        <p
          className={styles.view_details}
          onClick={() => {
            Navigate("/hotel");
          }}
        >
          VIEW DETAILS
        </p>
      </div>
    </div>
  );
};

export default HotelOffer;
