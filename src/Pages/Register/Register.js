import React, {useRef} from "react";
import { useReactToPrint } from "react-to-print";
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

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [bg, changeBGColor] = React.useState(1);
  return (
    <>
    {/* <Navbar /> */}

      <div className="flex-register" >
        {/* side menu bar section  */}
      
          <>
            <div className="container">
            <div className="wrap">
    { items.map((item, index) => <SidebarItem key={index} item={item} />) }
    </div>
            
              <div className="register" ref={componentRef}>
              <form action="/registration" method="post">
                <div className="flex-heading-btn">
                  <h3 className="registration-heading">
                    {" "}
                    Patient Registration
                  </h3>
                  <div className="flex-btn">
                    <Link to="/Login" className="link">
                      {" "}
                      <Button className="btn-link">Draft</Button>
                    </Link>
                    <Link to="/Login" className="link">
                      {" "}
                      <Button className="btn-link" onClick={handlePrint}>Print</Button>
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
                    type="number"
                    className="reg-no"
                    placeholder="Reg No.*"
                    name = "regNo"
                    required
                  />

                  <label className="label">Registration Date.</label>
                  <input type="date" className="reg-date"name="date" required />

                  <label className="label">Patient Type.</label>
                  <select className="reg-patient-type" name="patientType" required>
                                  <option>Select Patient type</option>
                                  <option>NEW </option>
                                  <option>OLD</option>
                                  <option>TRANSFER</option>
                                </select>

                  <div className="personal-details">
                  <h3 className="registration-heading">
                    {" "}
                    Personal Details
                  </h3>
                    {/* underline with grey color  */}
                    <div className="underline"></div>
                      <div className="flex-personal-details">
                              <div className="fname">
                                <label className="label">First Name</label>
                                <input
                                  type="text"
                                  className="name"
                                  placeholder="First Name*"
                                  name = "fname"
                                  required
                                />
                              </div>
                              <div className="mname">
                                <label className="label">Middle Name</label>
                                <input
                                  type="text"
                                  className="name"
                                  placeholder="Middle Name*"
                                  name = "mname"
                                  required
                                />
                              </div>
                              <div className="lname">
                                <label className="label">Last Name</label>
                                <input
                                  type="text"
                                  className="name"
                                  placeholder="Last Name*"
                                  name = "lname"
                                  required
                                />
                              </div>
                              <div className="dob">
                                <label className="label">DOB</label>
                                <input
                                  type="date"
                                  className="reg-dob"
                                  name = "dob"
                                  required
                                />
                              </div>
                              <div className="age">
                                <label className="label">Age</label>
                                <input
                                  type="number"
                                  className="reg-age"
                                  name = "age"
                                  placeholder="Age *"
                                  required
                                />
                              </div>
                              <div className="gender">
                                <label className="label">Gender</label>
                                <select className="reg-gender" name="gender" required>
                                  <option value='Gender'>Gender</option>
                                  <option value='Male'>Male</option>
                                  <option value='Female'>Female</option>
                                  <option value='Other'>Other</option>
                                </select>
                              </div>
                              <div className="bloodgroup">
                                <label className="label">Blood Group</label>
                                <select className="reg-bloodgroup" name = "bloodgroup">
                                  <option>Blood-Group +</option>
                                  <option value='A+'>A+</option>
                                  <option value='A-' >A-</option>
                                  <option value='B+'>B+</option>
                                  <option value='B-'>B-</option>
                                  <option value='AB+'>AB+</option>
                                  <option value='AB-'>AB-</option>
                                  <option value='O+'>O+</option>
                                  <option value='O-'>O-</option>
                                </select>
                              </div>
                              <div className="status">
                                <label className="label">Marrital Status</label>
                                <select className="reg-status" name = "status">
                                  <option>Marrital Status</option>
                                  <option>Married</option>
                                  <option>Unmarried</option>
                                </select>
                              </div>
                              {/* <div className="occupation">
                                <label className="label">Occupation</label>
                                <select  className="reg-occupation"  name="occupation" required>
                                  <option>Select Occupation</option>
                                  <option>Service</option>
                                  <option>Business</option>
                                </select>
                              </div> */}
                              <div className="citizen">
                                <label className="label" >Nationality</label>
                                <select className="reg-citizen" name = "nationality" required>
                                  <option>Select Nationality</option>
                                  <option>Indian</option>
                                  <option>Foreigner</option>
                                </select>
                              </div>
                              <div className="email" >
                                <label className="label">Email Id</label>
                                <input
                                  type="email"
                                  className="reg-email"
                                  placeholder="email@gmail.com"
                                  name = "email"
                                />
                              </div>
                              <div className="contactno">
                                <label className="label">Phone No.</label>
                                <input
                                  type="number" 
                                  className="reg-phno"
                                  placeholder="+91 1234567089  *"
                                  name = "phone"
                                  required
                                />
                              </div>
                        </div>

                      

                        
                  </div>

                  <div className="address-details">
                  <h3 className="registration-heading">
                    {" "}
                    Address Details
                  </h3>
                    <div className="underline"></div>
                    <div className="flex-address-details-1">
                      <div className="address">
                        <label className="label"> Street </label>
                        <input
                          type="text"
                          className="reg-address"
                          placeholder="B-No,Society,nearby *"
                          name = "street"
                          required
                        />
                      </div>
                      <div className="city">
                        <label className="label"> CityName</label>
                        <input
                          type="text"
                          className="reg-city"
                          placeholder="City name *"
                          name = "city"
                          required
                        />
                      </div>
                      <div className="state">
                        <label className="label"> State</label>
                        <input
                          type="text"
                          className="reg-state"
                          placeholder="State *"
                          name = "state"
                          required
                        />
                      </div>
                      <div className="pincode">
                        <label className="label"> Pincode</label>
                        <input
                          type="text"
                          className="reg-pincode"
                          placeholder="6-digit code"
                          name = "pincode"
                        />
                      </div>
                      <div className="country">
                        <label className="label"> Country</label>
                        <input
                          type="text"
                          className="reg-country"
                          placeholder="Country *"
                          name = "country"
                          required
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
                  <h3 className="registration-heading">
                    {" "}
                    Payment Information
                  </h3>
                    <div className="underline"></div>
                    <div className="flex-payer-info">
                      <div className="payer-name">
                        <label className="label">Payer Name</label>
                        <input
                          type="text"
                          className="reg-payer-name"
                          placeholder="payer-name*"
                          name = "payerName"
                          required
                        />
                      </div>
                      <div className="payer-relation">
                        <label className="label">Payer Relation</label>
                        <input
                          type="text"
                          className="reg-payer-relation"
                          placeholder="Relation*"
                          name = "payerRelation"
                          required
                        />
                      </div>
                      <div className="payer-amount">
                        <label className="label">Amount</label>
                        <input
                          type="number"
                          className="reg-payer-amount"
                          placeholder="Amount Paid*"
                          name = "amount"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="allotment-details">
                  <h3 className="registration-heading">
                    {" "}
                    Allotment Information
                  </h3>
                    <div className="underline"></div>
                    <div className="flex-allotment-info">
                      <div className="doctor-name">
                        <label className="label">Doctor Name</label>
                        <input
                          type="text"
                          className="referred-doctor-name"
                          placeholder="Doctor-name *"
                          name = "docName"
                          required
                        />
                      </div>
                      <div className="room-no">
                        <label className="label">Room No.</label>
                        <input
                          type="number"
                          className="referred-room-no"
                          placeholder="Room-No. *"
                          name = "roomNo"
                          required
                        />
                      </div>
                      <div className="symptoms-name-1">
                        <label className="label">Symptoms1</label>
                        <input
                          type="text"
                          className="referred-symptoms-name-1"
                          placeholder="Symptoms1*"
                          name = "symptoms1"
                          required
                        />
                        </div>
                        <div className="symptoms-name-2">
                        <label className="label">Symptoms2</label>
                        <input
                          type="text"
                          className="referred-symptoms-name-2"
                          placeholder="Symptoms2"
                          name = "symptoms2"
                        />
                         </div>

                        <div className="symptoms-name-3">
                        <label className="label">Symptoms3</label>
                        <input
                          type="text"
                          className="referred-symptoms-name-3"
                          placeholder="Symptoms3"
                          name = "symptoms3"
                        />
                          </div>
                          <div className="symptoms-name-4">
                        <label className="label">Symptoms4</label>
                        <input
                          type="text"
                          className="referred-symptoms-name-4"
                          placeholder="Symptoms4"
                          name = "symptoms4"
                        />
                        </div>

                     
                     
                  </div>
                  </div>

                  {/* Clear Form Button and Submit Form button */}
                  <center>
                  <button className="clear-button" type="reset">CLEAR</button>
                    <button className="submit-button" type="submit">SUBMIT</button>
                  </center>
                </div>
                </form>
              </div>
            </div>
          </>
        
      </div>
    </>
  );
}

export default Register;
