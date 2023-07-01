import React from "react";
import { useContext } from "react";
import { Contextapi } from "../ContextApi";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import Style from "./AllHotel.module.css";
import AvailableHotel from "./AvailableHotel";

const AllHotel = () => {
  let localSt_data = JSON.parse(localStorage.getItem("quary"));
  let { states } = useContext(Contextapi);

  let filterdata = states.hotel.filter((ele) => {
    if (localSt_data.side) {
      return ele.side == localSt_data.side;
    } else {
      let lsdata = localSt_data.Search.toLowerCase();
      let ele_data = ele.name.toLowerCase();
      return lsdata == ele_data;
    }
  });
  console.log(filterdata);
  return (
    <>
      <Navbar />
      <section className={Style.Hotel_available}>
        {filterdata.length == 0 ? (
          <div id={Style.notAvailablehotel}>
            <p>404 Eroor</p>
            <p>Not Found Data</p>
          </div>
        ) : (
          <div className={Style.devide}>
            <div id={Style.getData}>
              {filterdata.map((ele) => {
                return <AvailableHotel {...ele} key={ele.id} />;
              })}
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default AllHotel;
