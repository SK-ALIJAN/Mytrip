import React from "react";
import { useContext } from "react";
import { Contextapi } from "../ContextApi";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import Style from "./ViewFlight.module.css";
import NoFlight from "./NoFlight";
import AvailableFlight from "./AvailableFlight";

const ViewFlight = () => {
  let Quary = JSON.parse(localStorage.getItem("quary"));
  let { states } = useContext(Contextapi);
  let data = states.flight.filter((ele) => {
    return ele.from == Quary.from && ele.to == Quary.to;
  });

  return (
    <>
      <Navbar />
      <section className={Style.main_section}>
        <div className={Style.under_main_section}>
          <div>
            <p>TRIP TYPE</p>
            <p>{Quary.type}</p>
          </div>
          <div>
            <p>FROM</p>
            <p>{Quary.from}, India</p>
          </div>
          <div>
            <p>To</p>
            <p>{Quary.to}, India</p>
          </div>
          <div>
            <p>DEPART</p>
            <p>{Quary.date}</p>
          </div>
          {Quary.type == "return" ? (
            <div>
              <p>RETURN</p>
              <p>{Quary.return}</p>
            </div>
          ) : (
            ""
          )}
          <div>
            <p>PASSENGERS & CLASS</p>
            <p>
              {Quary.passenger} Person , {Quary.class}
            </p>
          </div>
        </div>
      </section>
      <section className={Style.flight_Available}>
        <p className={Style.flightDetails}>
          Flights from {Quary.from} to {Quary.to}
        </p>
        <div className={Style.SortedBy}>
          <p>Sorted By:</p>
          <p>Departure</p>
          <p>Stop</p>
          <p>Arrival</p>
          <p>Price &#8593;</p>
        </div>
      </section>
      <section className={Style.AllFlight}>
        {data.length == 0 ? (
          <div className={Style.NoFlight}>
            <NoFlight />
          </div>
        ) : (
          <div className={Style.AvailableFlight}>
            {data[0].data.map((ele) => {
              return <AvailableFlight key={ele.id} {...ele} {...Quary} />;
            })}
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default ViewFlight;
