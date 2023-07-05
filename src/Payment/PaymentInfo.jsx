import React, { useState } from "react";
import styles from "./PaymentInfo.module.css";
import CreditCardPaymentForm from "./CreditCardPaymentForm";
import UpiMethod from "./UpiMethod";

const PaymentInfo = () => {
  let [radio, setRadio] = useState("Card");
  let handleChange = (e) => {
    setRadio(e.target.value);
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
      {radio == "Card" ? <CreditCardPaymentForm /> : <UpiMethod />}

      <button className={styles.completeCheckout}> Complete Checkout & Place Order </button>
    </div>
  );
};

export default PaymentInfo;
