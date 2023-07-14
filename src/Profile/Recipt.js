import React from "react";
import style from "./Recipt.module.css";
import { transform } from "framer-motion";

const Recipt = (props) => {
  return (
    <div className={style.mainRecipt}>
      <button
        onClick={() => {
          props.closeRecipt();
        }}
      >
        &#9587;
      </button>
      {props.category !== undefined ? (
        <div className={style.hotelrecipt}>
          <img src={props.image} />
          <div>
            <div>
              <p>{props.hotel_name}</p>
              <p>{props.name}</p>
            </div>

            <div>
              <p>
                {" "}
                Price :{" "}
                <b style={{ backgroundColor: "transparent" }}>
                  &#x20B9; {props.price}
                </b>
              </p>
              <p
                style={{
                  backgroundColor: "green",
                  color: "white",
                  padding: "3px",
                }}
              >
                {" "}
                Payment Successfull by {props.payment}{" "}
              </p>{" "}
            </div>
            <p
              style={{
                textAlign: "center",
                fontWeight: "900",
                fontSize: "17px",
                borderTop: "2px solid black",
                paddingTop: "10px",
              }}
            >
              May your journey be auspicious.
            </p>
          </div>
        </div>
      ) : (
        <div className={style.flightrecipt}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={props.image} />
            <p style={{ fontWeight: "600" }}>{props.name}</p>
          </div>{" "}
          <div style={{ display: "flex", alignItems: "center" }}>
            <p
              style={{
                marginRight: "40px",
                backgroundColor: "blue",
                color: "white",
                padding: "10px",
                width: "max-content",
              }}
            >
              {props.class}(Class)
            </p>
            <p>Date : {props.date}</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p> Flight type : {props.type}</p>
            <p> Passenger : {props.passenger}</p>
          </div>
          <p
            style={{
              fontWeight: 600,
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            {props.from} &#x2192; {props.to}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p>
              {" "}
              Price :{" "}
              <b style={{ backgroundColor: "transparent" }}>
                &#x20B9; {props.price}
              </b>
            </p>
            <p
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "3px",
              }}
            >
              {" "}
              Payment Successfull by {props.payment}{" "}
            </p>{" "}
          </div>
          <p
            style={{
              textAlign: "center",
              fontWeight: "900",
              fontSize: "17px",
              borderTop: "2px solid black",
              paddingTop: "10px",
            }}
          >
            May your journey be auspicious.
          </p>
        </div>
      )}
    </div>
  );
};

export default Recipt;
