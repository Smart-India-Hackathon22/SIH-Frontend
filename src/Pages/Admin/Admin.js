import React from "react";
import "./Admin.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import Navbar from '../../Components/Navbar/Navbar'



// After Admin path add this comment to the slide bar.json file
// "childrens": [
//   {
//       "title": "Admin",
//       "icon": "bi-house-fill",
//       "path": "/admin"
//   },
//   {
//       "title": "Nurse",
//       "icon": "bi-info-circle-fill",
//       "path": "/nurse"
//   },
//   {
//       "title": "Doctor",
//       "icon": "bi-phone-fill",
//       "childrens": [
//           {
//               "title": "OPD User",
//               "icon": "bi-facebook",
//               "path": "/opduser"

//           },
//           {
//               "title": "IPD User",
//               "icon": "bi-twitter",
//               "path": "/ipduser"
//           },
//           {
//               "title": "Receptionist",
//               "icon": "bi-instagram",
//               "path": "/receptionist"

//           }
//       ]
//   }
 
// ]

import items from "../../Components/Sidebar/Sidebar.json"
import SidebarItem from "../../Components/Sidebar/SidebarItem"
import "../../CSS/Sidebar.css";

function Admin() {
  return (
  <>
    <Navbar />

       <div className="container">
            <div className="wrap">
    { items.map((item, index) => <SidebarItem key={index} item={item} />) }
    </div>
    
  <section className="register">
  

  <div className="register-body">
    <label className="label">Role Type </label>
    <select className="select">
      <option value="admin">Admin</option>
      <option value="doctor">Doctor</option>
      <option value="patient">Patient</option>
      <option value="patient">OPD User</option>
      <option value="patient">IPD User</option>
    </select>


    <label className="label">Registration Date.</label>
    <input type="date" className="reg-date" required />

    <div className="personal-details">
    <h1 className="registration-heading">
      {" "}
      Personal Details
    </h1>
      {/* underline with grey color  */}
      <div className="underline"></div>
        <div className="flex-personal-details">
                <div className="fname">
                  <label className="label">First Name</label>
                  <input
                    type="text"
                    className="name"
                    placeholder="First Name*"
                    required
                  />
                </div>
                <div className="mname">
                  <label className="label">Middle Name</label>
                  <input
                    type="text"
                    className="name"
                    placeholder="Middle Name*"
                    required
                  />
                </div>
                <div className="lname">
                  <label className="label">Last Name</label>
                  <input
                    type="text"
                    className="name"
                    placeholder="Last Name*"
                    required
                  />
                </div>
                <div className="dob">
                  <label className="label">DOB</label>
                  <input
                    type="date"
                    className="reg-dob"
                    required
                  />
                </div>
                <div className="age">
                  <label className="label">Age</label>
                  <input
                    type="number"
                    className="reg-age"
                    placeholder="Age"
                    required
                  />
                </div>
                <div className="gender">
                  <label className="label">Gender</label>
                  <select className="reg-gender" required>
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="bloodgroup">
                  <label className="label">Blood Group</label>
                  <select className="reg-bloodgroup">
                    <option>Blood-Group +</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>O+</option>
                    <option>O-</option>
                  </select>
                </div>
                <div className="status">
                  <label className="label">Marrital Status</label>
                  <select className="reg-status">
                    <option>Marrital Status</option>
                    <option>Married</option>
                    <option>Unmarried</option>
                  </select>
                </div>
                <div className="occupation">
                  <label className="label">Occupation</label>
                  <input type="text" className="reg-occupation" />
                </div>
                <div className="citizen">
                  <label className="label">citizen</label>
                  <select className="reg-citizen" required>
                    <option>Citizen</option>
                    <option>Indian</option>
                    <option>Foreigner</option>
                  </select>
                </div>
                <div className="email">
                  <label className="label">Email Id</label>
                  <input
                    type="email"
                    className="reg-email"
                    placeholder="email@gmail.com *"
                  />
                </div>
                <div className="contactno">
                  <label className="label">Phone No.</label>
                  <input
                    type="text"
                    className="reg-phno"
                    placeholder="+91 1234567089  *"
                    required
                  />
                </div>
                <div className="landline">
          <label className="label"> Profession</label>
          <input
            type="text"
            className="reg-landline"
            placeholder="Profession *"
          />
        </div>
        <div className="landline">
          <label className="label"> Experience </label>
          <input
            type="text"
            className="reg-landline"
            placeholder="No of years *"
          />
        </div>
          </div>

        

          
    </div>

      {/* <div className="address-details">
      <h1 className="registration-heading">
        {" "}
        Address Details
      </h1>
        <div className="underline"></div>
        <div className="flex-address-details-1">
          <div className="address">
            <label className="label"> Street </label>
            <input
              type="text"
              className="reg-address"
              placeholder="B-No,Society,nearby"
            />
          </div>
          <div className="city">
            <label className="label"> CityName</label>
            <input
              type="text"
              className="reg-city"
              placeholder="City name"
            />
          </div>
          <div className="state">
            <label className="label"> State</label>
            <input
              type="text"
              className="reg-state"
              placeholder="State"
            />
          </div>
          <div className="pincode">
            <label className="label"> Pincode</label>
            <input
              type="text"
              className="reg-pincode"
              placeholder="6-digit code"
            />
          </div>
          <div className="country">
            <label className="label"> Country</label>
            <input
              type="text"
              className="reg-country"
              placeholder="Country"
            />
          </div>
          <div className="landline">
            <label className="label"> Landline</label>
            <input
              type="text"
              className="reg-landline"
              placeholder="12 digit No"
            />
          </div>
        
        </div>
        
      </div> */}

    <div className="payer-information-details">
    <h1 className="registration-heading">
      {" "}
      USER ID & Password
    </h1>
      <div className="underline"></div>
      <div className="flex-payer-info">
        <div className="payer-name">
          <label className="label">User Name </label>
          <input
            type="text"
            className="reg-payer-name"
            placeholder="Username*"
            required
          />
        </div>
        <div className="payer-relation">
          <label className="label">Password</label>
          <input
            type="text"
            className="reg-payer-relation"
            placeholder="Password*"
            required
          />
        </div>
        <div className="payer-amount">
          <label className="label">Confirm Pass</label>
          <input
            type="text"
            className="reg-payer-amount"
            placeholder="Confirm Password*"
            required
          />
        </div>
      </div>
    </div>

    {/* Clear Form Button and Submit Form button */}
    <center>
      <button className="clear-button">CLEAR</button>
      <button className="submit-button">SUBMIT</button>
    </center>
  </div>
</section>
</div>
</>
  )
}

export default Admin;
