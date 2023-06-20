import React from "react";
import { HiCheckCircle } from "react-icons/hi";
import styles from "./message.module.css";

const LoginSuccessMessage = () => {
  return (
    <div className={styles["success-message"]}>
      <div className={styles["icon-wrapper"]}>
        <HiCheckCircle className={styles["success-icon"]} />
      </div>
      <h2 className={styles["success-heading"]}>Login Successful!</h2>
      <p className={styles["success-text"]}>
        Welcome back to our platform. Enjoy your stay!
      </p>
    </div>
  );
};

export default LoginSuccessMessage;
