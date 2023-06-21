import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./AvailableFlight.module.css";
const AvailableFlight = (props) => {
  let [click, setClick] = useState(false);
  let Navigate = useNavigate();
  return (
    <div className={Styles.main_box}>
      <div className={Styles.firstline}>
        <div className={Styles.details}>
          <img src={props.image} alt={props.name} />
          <div>
            <p>{props.name}</p>
            <p>{props.flight_code}</p>
          </div>
        </div>

        <div className={Styles.dept}>
          <p>{props.dept}</p>
          <p>{props.from}</p>
        </div>

        <div className={Styles.stop}>
          <p>{props.stop}</p>
        </div>

        <div className={Styles.arive}>
          <p>{props.arive}</p>
          <p>{props.to}</p>
        </div>

        <div className={Styles.price}>
          <p>&#x20B9;{props.price}</p>
          <p>per traveller</p>
          <button
            className={Styles.bookNow}
            onClick={() => {
              localStorage.setItem("toPayment", JSON.stringify(props));
              Navigate("/payment");
            }}
          >
            Book Now
          </button>
        </div>
      </div>

      {click ? (
        <div className={Styles.other}>{props.other}</div>
      ) : (
        <button
          onClick={() => {
            setClick(true);
          }}
        >
          Flight offers
        </button>
      )}
    </div>
  );
};

export default AvailableFlight;
