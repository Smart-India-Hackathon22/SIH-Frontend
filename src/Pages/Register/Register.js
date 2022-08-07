import React from "react";
import { Button } from "@mui/material";
import introimg from "../../../src/Assets/Images/intro.png";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import "../../CSS/Register.css";
import { Link } from "react-router-dom";

import items from "../../Components/Sidebar/Sidebar.json"
import SidebarItem from "../../Components/Sidebar/SidebarItem"
import "../../CSS/Sidebar.css";

import "../../CSS/Register.css";
function Register() {
  const [bg, changeBGColor] = React.useState(1);
  return (
    <>
    {/* <Navbar /> */}

      <div className="flex-register">
        {/* side menu bar section  */}
        <section>
          <>
            <div className="container">
            <div className="wrap">
    { items.map((item, index) => <SidebarItem key={index} item={item} />) }
    </div>
            
              <section className="register">
             <form>
                <div className="flex-heading-btn">
                  <h1 className="registration-heading">
                    {" "}
                    Patient Registration
                  </h1>
                  <div className="flex-btn">
                    <Link to="/Login" className="link">
                      {" "}
                      <Button className="btn-link">Draft</Button>
                    </Link>
                    <Link to="/Login" className="link">
                      {" "}
                      <Button className="btn-link">Print</Button>
                    </Link>
                    <Link to="/Login" className="link">
                      {" "}
                      <Button className="btn-link">Search</Button>
                    </Link>
                  </div>
                </div>

                <div className="register-body">
                  <label className="label">Registration No.</label>
                  <input
                    type="text"
                    className="reg-no"
                    placeholder="Reg No.*"
                    required
                  />

                  <label className="label">Registration Date.</label>
                  <input type="date" className="reg-date" required />

                  <label className="label">Patient Type.</label>
                  <select className="reg-patient-type" required>
                                  <option>Select Patient type</option>
                                  <option>NEW </option>
                                  <option>OLD</option>
                                  <option>TRANSFER</option>
                                </select>

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
                                  placeholder="Age *"
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
                                <select  className="reg-occupation">
                                  <option>Select Occupation</option>
                                  <option>Service</option>
                                  <option>Business</option>
                                </select>
                              </div>
                              <div className="citizen">
                                <label className="label">Nationality</label>
                                <select className="reg-citizen" required>
                                  <option>Select Nationality</option>
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
                        </div>

                      

                        
                  </div>

                  <div className="address-details">
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
                      {/* <div className="landline">
                        <label className="label"> Landline</label>
                        <input
                          type="text"
                          className="reg-landline"
                          placeholder="12 digit No"
                        />
                      </div> */}
                    </div>
                    {/* <div className="flex-address-details-2">
                      
                    </div> */}
                  </div>

                  <div className="payer-information-details">
                  <h1 className="registration-heading">
                    {" "}
                    Payment Information
                  </h1>
                    <div className="underline"></div>
                    <div className="flex-payer-info">
                      <div className="payer-name">
                        <label className="label">Payer Name</label>
                        <input
                          type="text"
                          className="reg-payer-name"
                          placeholder="payer-name*"
                          required
                        />
                      </div>
                      <div className="payer-relation">
                        <label className="label">Payer Relation</label>
                        <input
                          type="text"
                          className="reg-payer-relation"
                          placeholder="Relation*"
                          required
                        />
                      </div>
                      <div className="payer-amount">
                        <label className="label">Amount</label>
                        <input
                          type="text"
                          className="reg-payer-amount"
                          placeholder="Amount Paid*"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="allotment-details">
                  <h1 className="registration-heading">
                    {" "}
                    Allotment Information
                  </h1>
                    <div className="underline"></div>
                    <div className="flex-allotment-info">
                      <div className="doctor-name">
                        <label className="label">Doctor Name</label>
                        <input
                          type="text"
                          className="referred-doctor-name"
                          placeholder="Doctor-name *"
                          required
                        />
                      </div>
                      <div className="symptoms-name">
                        <label className="label">Symptoms</label>
                        <input
                          type="text"
                          className="referred-symptoms-name"
                          placeholder="Symptoms"
                        />
                      </div>
                      <div className="room-no">
                        <label className="label">Room No.</label>
                        <input
                          type="number"
                          className="referred-room-no"
                          placeholder="Room-No."
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
                </form>
              </section>
            </div>
          </>
        </section>
      </div>
    </>
  );
}

export default Register;
