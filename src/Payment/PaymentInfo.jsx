import React from "react";
import styles from "./PaymentInfo.module.css";
const PaymentInfo = () => {
  return (
    <div className={styles.head}>
    <p>Payment Info</p>
      <div className={styles.radio}>
        <label htmlFor="male">
          <input checked value="male" name="gender" id="male" type="radio" className={styles.inputT}/>
         Card
        </label>
        <label htmlFor="female">
          <input value="female" name="gender" id="female" type="radio" className={styles.inputT}/>
         Upi
        </label>
      </div>
    </div>
  );
};

export default PaymentInfo;
