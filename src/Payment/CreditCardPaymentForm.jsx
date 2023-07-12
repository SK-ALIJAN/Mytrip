import React, { useEffect, useReducer } from "react";
import styles from "./card.module.css";
let Reducer = (state, action) => {
  switch (action.type) {
    case "number": {
      return {
        ...state,
        number: action.payload,
      };
    }
    case "name": {
      return {
        ...state,
        name: action.payload,
      };
    }
    case "date": {
      return {
        ...state,
        date: action.payload,
      };
    }
    case "cvv": {
      return {
        ...state,
        cvv: action.payload,
      };
    }

    default:
      return state;
  }
};
function CreditCardPaymentForm(props) {
  let [state, Dispatch] = useReducer(Reducer, {
    number: "",
    name: "",
    date: "",
    cvv: "",
  });
  useEffect(() => {
    if (
      state.number !== "" &&
      state.name !== "" &&
      state.date !== "" &&
      state.cvv !== ""
    ) {
      props.check("done");
    }
  }, [state]);

  return (
    <div className={styles.cardPayment}>
      <p className={styles.paymentTitle}>Card Payment Gateway</p>

      <div className={styles.firstRow}>
        <div className={styles.card}>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            placeholder="Enter card number"
            onChange={(e) => {
              Dispatch({ type: "number", payload: e.target.value });
            }}
          />
        </div>
        <div className={styles.card}>
          <label htmlFor="cardName">Cardholder Name</label>
          <input
            type="text"
            id="cardName"
            placeholder="Enter cardholder name"
            onChange={(e) => {
              Dispatch({ type: "name", payload: e.target.value });
            }}
          />
        </div>
      </div>

      <div className={styles.firstRow}>
        <div className={styles.card}>
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="text"
            id="expiryDate"
            placeholder="MM/YY"
            onChange={(e) => {
              Dispatch({ type: "date", payload: e.target.value });
            }}
          />
        </div>
        <div className={styles.card}>
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            placeholder="Enter CVV"
            onChange={(e) => {
              Dispatch({ type: "cvv", payload: e.target.value });
            }}
          />
        </div>
      </div>

      <div className={styles.cardImages}>
        <img
          className="img-responsive images"
          src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Mastercard-Curved.png"
          alt="Mastercard"
        />
        <img
          className="img-responsive images"
          src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Discover-Curved.png"
          alt="Discover"
        />
        <img
          className="img-responsive images"
          src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Paypal-Curved.png"
          alt="Paypal"
        />
        <img
          className="img-responsive images"
          src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/American-Express-Curved.png"
          alt="American Express"
        />
      </div>

      <p className={styles.accept}>
        This payment method accepts this Above cards
      </p>
    </div>
  );
}

export default CreditCardPaymentForm;
