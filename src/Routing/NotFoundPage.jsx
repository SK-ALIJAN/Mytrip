import React from "react";
import "./NotFound.css";
import dog from "./dog.png";
import { useNavigate } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
const NotFoundPage = () => {
let Navigate=useNavigate();

  return (
    <div className="not-found-container">
      <img src={dog} alt="" style={{ backgroundColor: "inherit" }} />
      <h1 className="not-found-heading">404 Not Found</h1>
      <p className="not-found-message">
        Sorry, the page you're looking for does not exist.
      </p>
      <button className="GoToHome" onClick={()=>{
      Navigate('/');
      }}>Go To Home {<TiArrowBackOutline className="Gotoicon"/>}</button>
    </div>
  );
};

export default NotFoundPage;
