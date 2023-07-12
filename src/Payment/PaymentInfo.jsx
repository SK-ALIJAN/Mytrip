import React, { useEffect, useState } from "react";
import styles from "./PaymentInfo.module.css";
import CreditCardPaymentForm from "./CreditCardPaymentForm";
import UpiMethod from "./UpiMethod";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

let vari = null;
let data = null;
let lsData = JSON.parse(localStorage.getItem("bookings"));
if (lsData == null) {
  lsData = [];
}

const PaymentInfo = () => {
  let [radio, setRadio] = useState("Card");
  let handleChange = (e) => {
    setRadio(e.target.value);
  };
  let Navigate = useNavigate();

  let [modal, setModal] = useState(false);
  let [tick, setTick] = useState(false);

  useEffect(() => {
    data = JSON.parse(localStorage.getItem("toPayment"));
  }, []);
  function check(message) {
    vari = message;
  }
  let handleClick = () => {
    const currentDate = new Date();

    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const year = currentDate.getFullYear().toString().slice(-2);

    const formattedDate = `${day}/${month}/${year}`;

    if (radio == "Card") {
      if (vari == "done") {
        data["payment"] = "Card";
        data["date"] = formattedDate;
        lsData.push(data);
        localStorage.setItem("bookings", JSON.stringify(lsData));
        setModal(true);
        setTimeout(() => {
          setTick(true);
        }, 500);
      }
    } else {
      data["payment"] = "UPI";
      data["date"] = formattedDate;
      lsData.push(data);
      localStorage.setItem("bookings", JSON.stringify(lsData));
      setModal(true);
      setTimeout(() => {
        setTick(true);
      }, 500);
    }
  };

  return (
    <div className={styles.head}>
      <p>Payment Info</p>
      {/* ...radio button */}
      <div className="radio-inputs">
        <label className="radio">
          <input
            type="radio"
            name="radio"
            value="UPI"
            onChange={handleChange}
          />
          <span className="name">UPI</span>
        </label>
        <label className="radio">
          <input
            type="radio"
            name="radio"
            value="Card"
            onChange={handleChange}
            defaultChecked
          />
          <span className="name">Card</span>
        </label>
      </div>
      {radio == "Card" ? (
        <CreditCardPaymentForm check={check} />
      ) : (
        <UpiMethod />
      )}

      <button className={styles.completeCheckout} onClick={handleClick}>
        Complete Checkout & Place Order
      </button>

      {modal ? (
        <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            {tick ? <FaCheck className={styles.icontick} /> : ""}
            <h2>Payment Successful</h2>
            <p>Thank you for your payment.</p>
            <button
              className={styles.closeButton}
              onClick={() => {
                setModal(false);
                setTimeout(() => {
                  Navigate("/");
                }, 500);
              }}
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PaymentInfo;
