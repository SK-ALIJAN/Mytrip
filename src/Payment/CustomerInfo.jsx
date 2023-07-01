import React from "react";
import Style from "./Styling.module.css";

const stateNames = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];
const CustomerInfo = () => {
  return (
    <div className={Style.CustomerInfo}>
      <p>Customer Info</p>
      <div>
        <div>
          <label htmlFor="FirstName">First Name</label>
          <input type="text" placeholder="First Name" />
        </div>
        <div>
          <label htmlFor="LasttName">Last Name</label>
          <input type="text" placeholder="Last Name" />
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input type="email" placeholder="xyz@gmail.com" />
        </div>
      </div>

      <div>
        <div>
          <label htmlFor="Address">Address</label>
          <input type="text" placeholder="Address" />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input type="text" value="india" readOnly />
        </div>
      </div>

      <div>
        <div>
          <label htmlFor="Town/City">Town/City</label>
          <input type="text" placeholder="Town /City" />
        </div>
        <div>
          <label htmlFor="State/Province">State/Province/Territory</label>
          <select>
            {stateNames.map((stateName) => (
              <option key={stateName} value={stateName}>
                {stateName}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="Zip/Postal">Zip/Postal</label>
          <input type="number" placeholder="000000" />
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
