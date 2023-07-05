import React, { useEffect, useRef, useState } from "react";
import styles from "./UPI.module.css";

function UPIPaymentOption() {
  let [loading, setLoading] = useState("Create");
  let [price, setPrice] = useState(0);
  let ref = useRef(null);
  let handleSubmit = (e) => {
    e.preventDefault();
    setLoading("Just a Minute...");
    setTimeout(() => {
      setLoading("All Set!");
      ref.current.style.backgroundColor = "teal";
      ref.current.style.backgroundImage = "none";
    }, 2000);
  };

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("toPayment"));
    setPrice(data.price);
  }, []);

  return (
    <div className={styles.upiOption}>
      <div>
        <div>
          <div className={styles.upiTitle}>
            <img
              src="https://www.vectorlogo.zone/logos/upi/upi-ar21.svg"
              alt=""
            />
            <p>UPI Payment </p>
          </div>
          <div className={styles.vpa}>
            <p>Enter Your VPA (UPI ID)</p>
            <form action="" onSubmit={handleSubmit}>
              <input type="text" required placeholder="Enter VPA " />
              <div>
                <p>Amount :</p>
                <p>&#x20B9; {price}</p>
              </div>
              <input
                type="submit"
                value={loading}
                ref={ref}
                disabled={loading === "All Set!"}
              />
            </form>
          </div>
          <div className={styles.imagesHere}>
            <img
              src="https://img.icons8.com/?size=1x&id=SZ8HYUgmLcNc&format=png"
              alt=""
            />
            <img
              src="https://img.icons8.com/?size=1x&id=OYtBxIlJwMGA&format=png"
              alt=""
            />
            <img
              src="https://img.icons8.com/?size=1x&id=112309&format=png"
              alt=""
            />
          </div>
        </div>

        <div id={styles.pleaseNote}>
          <p>Please note:</p>
          <ul>
            <li>
              UPI payment is subject to the terms and conditions of your bank
              and payment app.
            </li>
            <li>
              Ensure that you enter the correct UPI ID or scan the correct QR
              code.
            </li>
            <li>Make sure your UPI app is up to date and secure.</li>
            <li>
              Any transaction fees or charges may apply as per your bank or
              payment app's policy.
            </li>
            <li>
              Keep your UPI PIN or password confidential and do not share it
              with anyone.
            </li>
            <li>
              Verify the payment details before confirming the transaction.
            </li>
            <li>
              In case of any issues or discrepancies, contact your bank or
              payment app's customer support.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UPIPaymentOption;
