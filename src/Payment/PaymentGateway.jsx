import React from "react";
import CustomerInfo from "./CustomerInfo";
import PaymentInfo from "./PaymentInfo";
import CurrentCart from "./CurrentCart";
import Style from "./Styling.module.css";


const PaymentGateway = () => {
  return (
    <div id={Style.mainT}>
      <section className={Style.cusPay}>
        <CustomerInfo />
        <PaymentInfo />
      </section>

      <section className={Style.cusPay}>
        <CurrentCart />
      </section>
    </div>
  );
};

export default PaymentGateway;
