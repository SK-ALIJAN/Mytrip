import React from "react";
import style from "./Error.module.css";
const ErrorMessage = ({ click }) => {
  return (
    <div id={style.contain}>
      <h3 className={style.h3}>Incorrect Credentials</h3>
      <p className={style.p}>Check your email and password and try again</p>
      <button
        className={style.okbtn}
        onClick={() => {
          click();
        }}
      >
        OK
      </button>
    </div>
  );
};

export default ErrorMessage;
