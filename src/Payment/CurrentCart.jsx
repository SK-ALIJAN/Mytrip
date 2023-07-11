import React from "react";
import styles from "./carrent.module.css";

const CurrentCart = () => {
  let data = JSON.parse(localStorage.getItem("toPayment"));

  return (
    <div className={styles.mainDiv}>
      <p>Current Cart</p>
      {data["category"] !== undefined ? (
        <div className={styles.Hotelab}>
          <div>
            <p>Hotel Name :</p>
            <p>{data.hotel_name}</p>
          </div>
          <div>
            <p>Place :</p>
            <p>{data.name}</p>
          </div>

          <div>
            <p>Price :</p>
            <p>&#x20B9; {data.price}</p>
          </div>

          <div style={{ borderBottom: "2px solid grey" }}>
            <hr />
            <p>Cart Total</p>
            <hr />
          </div>
          <p style={{ textAlign: "center" }}>&#x20B9; {data.price}</p>
        </div>
      ) : (
        <div className={styles.Flightabs}>
          <div>
            <p>Flight Name :</p>
            <p>{data.name}</p>
          </div>
          <div>
            <p>Class Name :</p>
            <p>{data.class}</p>
          </div>

          <div>
            <p>Date :</p>
            <p>{data.date}</p>
          </div>

          <div>
            <p>Price :</p>
            <p>&#x20B9; {data.price}</p>
          </div>

          <div style={{ borderBottom: "2px solid grey" }}>
            <hr />
            <p>Cart Total</p>
            <hr />
          </div>
          <p style={{ textAlign: "center" }}>&#x20B9; {data.price}</p>
        </div>
      )}
    </div>
  );
};

export default CurrentCart;
