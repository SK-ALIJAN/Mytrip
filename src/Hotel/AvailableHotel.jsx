import React, { useContext, useEffect, useRef } from "react";
import {
  AiFillStar,
  AiOutlineWifi,
  AiOutlineRight,
  AiOutlineLeft,
} from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import Style from "./AvailableHotel.module.css";
import { Contextapi } from "../ContextApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HotelDetails from "./HotelDetails";

const AvailableHotel = (data) => {
  let ImageRef = useRef(null);
  let num = 0;
  let imageIndex;
  let { Auth } = useContext(Contextapi);
  let Navigate = useNavigate();
  let [hotelView, setHotelview] = useState(false);
  useEffect(() => {
    let id = setInterval(() => {
      if (num > 3) {
        num = 0;
      }
      ImageRef.current.setAttribute("src", data.more_image[num]);
      imageIndex = num;
      num += 1;
    }, 4000);
    return () => {
      clearInterval(id);
    };
  }, []);

  let onClose = () => {
    setHotelview(false);
  };

  return (
    <section id={Style.main_container}>
      <div className={Style.imageDiv}>
        <AiOutlineLeft
          className={Style.LeftIcon}
          onClick={() => {
            if (imageIndex !== 0) {
              ImageRef.current.setAttribute(
                "src",
                data.more_image[--imageIndex]
              );
            }
          }}
        />
        <img
          src={data.image}
          alt=""
          className={Style.titleImage}
          ref={ImageRef}
        />
        <div className={Style.insideImage}>
          {data.more_image.map((ele, index) => {
            return <img src={ele} alt="" key={index} />;
          })}
        </div>
        <AiOutlineRight
          className={Style.RightIcon}
          onClick={() => {
            if (imageIndex < 4) {
              ImageRef.current.setAttribute(
                "src",
                data.more_image[++imageIndex]
              );
            }
          }}
        />
      </div>
      <div className={Style.detailsDiv}>
        <div className={Style.firstoneT}>
          <p>{data.hotel_name}</p>
          <p>{data.place}</p>
        </div>
        <div className={Style.firstoneS}>
          <p>
            {data.rating}
            {<AiFillStar id={Style.iconicon} />}
          </p>
          <p>({data.total_ratings} Ratings)</p>
          <p> {data.quality}</p>
        </div>

        <div className={Style.facilities}>
          {<AiOutlineWifi className={Style.iconicons} />} free wifi{" "}
          {<BiFoodMenu className={Style.iconicons} />} Breakfast & Lunch/Dinner
        </div>

        <div className={Style.pricess}>
          <div>
            <p> &#x20B9; {data.price}</p>
            <p> &#x20B9; {data.price + 3000}</p>
          </div>
          <p>per room per night</p>
        </div>

        <div>
          <button
            onClick={() => {
              localStorage.setItem("carrentPage", "hotel/allHotel");
              setHotelview(true);
            }}
          >
            View Deatils
          </button>
          <button
            onClick={() => {
              if (Auth.login) {
                localStorage.setItem("toPayment", JSON.stringify(data));
                Navigate("/payment");
              } else {
                localStorage.setItem("carrentPage", "hotel/allHotel");
                Navigate("/authentication");
              }
            }}
          >
            Book Now
          </button>
        </div>
      </div>
      {hotelView ? <HotelDetails {...data} onClose={onClose} /> : ""}
    </section>
  );
};

export default AvailableHotel;
