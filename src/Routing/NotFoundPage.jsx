import React from "react";
import "./NotFound.css";
import dog from "./dog.png"
const NotFoundPage = () => {
  return (
    <div className="not-found-container">
    <img src={dog} alt="" style={{backgroundColor:"inherit"}}/>
      <h1 className="not-found-heading">404 Not Found</h1>
      <p className="not-found-message">
        Sorry, the page you're looking for does not exist.
      </p>
    </div>
  );
};

export default NotFoundPage;
