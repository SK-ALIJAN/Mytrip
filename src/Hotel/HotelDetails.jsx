import React, { useState, useContext } from "react";
import styles from "./HotelDetails.module.css";
import { useNavigate } from "react-router-dom";
import { Contextapi } from "../ContextApi";

const HotelDetails = ({
  category,
  facilities,
  hotel_name,
  image,
  more_image,
  name,
  other,
  place,
  price,
  quality,
  rating,
  onClose,
}) => {
  let obj = {
    category,
    facilities,
    hotel_name,
    image,
    more_image,
    name,
    other,
    place,
    price,
    quality,
    rating,
  };
  let [images, setImage] = useState(image);
  let Navigate = useNavigate();
  let { Auth } = useContext(Contextapi);
  return (
    <>
      <div className={styles["hotel-details-container"]}>
        <button
          className={styles["close-button"]}
          onClick={() => {
            onClose();
          }}
        >
          Close
        </button>
        <div>
          <h1 style={{ fontWeight: "600" }}>{hotel_name}</h1>
          <img src={images} alt={hotel_name} className={styles.TitleImg} />{" "}
          <h2>Additional Images</h2>
          <div className={styles["additional-images"]}>
            {more_image.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Additional Image ${index + 1}`}
                onClick={() => {
                  setImage(image);
                }}
              />
            ))}
          </div>
        </div>

        <div>
          {" "}
          <h2>Details</h2>
          <p>
            <strong>Category:</strong> {category}
          </p>
          <p>
            <strong>Facilities:</strong> {facilities.join(", ")}
          </p>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Place:</strong> {place}
          </p>
          <p>
            <strong>Price:</strong> &#x20B9; {price}
          </p>
          <p>
            <strong>Quality:</strong> {quality}
          </p>
          <p>
            <strong>Rating:</strong> {rating} &#9733;
          </p>
          <p>
            <strong>Other:</strong> {other.substring(0, 100)}...
          </p>
          <button
            className={styles.bookItNow}
            onClick={() => {
              if (Auth.login) {
                localStorage.setItem("toPayment", JSON.stringify(obj));
                Navigate("/payment");
              } else {
                Navigate("/authentication");
              }
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default HotelDetails;
