// import React from 'react'

import items from "../../Components/Sidebar/Sidebar.json"
import SidebarItem from "../../Components/Sidebar/SidebarItem"
import "../../CSS/Sidebar.css";
import Navbar from '../../Components/Navbar/Navbar'

import {Link} from 'react-router-dom';
import "./Discharge.css"


import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export default class Discharge extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {isOff: false};
  }

  handleClick() {
    this.setState({isOff:!this.state.isOff});
  }

  render() {
    const { isOff } = this.state;
    let title=this.state.isOff? "discharge":"discharge-hide";
    return (
      <>
      <div className="container">
    <div className="wrap">
    { items.map((item, index) => <SidebarItem key={index} item={item} />) }
    </div>
    <div className="flex-dischargepage">
    <div className='discharge-uhid'>  

    <form>
                <label className='uhid-heading'>UHID:</label>
                <input type="number" placeholder="Enter UHID" className='discharge-uhid-input' required  />
                <button className='submit-button'  onClick={this.handleClick}>SEARCH</button>

</form> 
</div>
                <div className={title}>
           <div className="discharge-body">
            <div className="discharge-body-heading">
            <h1>Discharge Summary</h1>
           </div>

           <form>
           <div className="flex-patient-hospital-details">
           <div className="discharge-patient-details">
          <h2>Patient Details :</h2>
           <div className='discharge-patientname'>
                        <h4>Name : </h4>
                        <h4> Patient Full Name </h4>
                    </div>
                    <div className='discharge-patientdob'>
                    <h4>DOB : </h4>
                        <h4> 27/03/2022 </h4>
                    </div>
                    <div className='discharge-patientgender'>
                    <h4>Gender : </h4>
                        <h4> Male </h4>
                    </div>
                    <div className='discharge-patientage'>
                    <h4>Age : </h4>
                        <h4> 110</h4>
                    </div>
                    <div className='discharge-patientaddress'>
                    <h4>Address : </h4>
                        <h4> B-6, ADIT Society behind MBIT nagar, CVM Road, BVMcity, 321654</h4>
                    </div>
                    <div className='discharge-patientbloodgrp'>
                    <h4>Blood Group : </h4>
                        <h4> ABCD+-</h4>
                    </div>
                    <div className='discharge-patientemail'>
                    <h4>Email id : </h4>
                        <h4> NA</h4>
                    </div>
                    <div className='discharge-patientnumber'>
                    <h4>Contact NO. : </h4>
                        <h4> +91 1234567890</h4>
                    </div>
           </div>
           <div className="discharge-hospital-details">
           <h2>Hospital Details :</h2>
           <div className='discharge-hospitalname'>
                        <h4>Hospital Name : </h4>
                        <h4> AYUSH Hospital 1 </h4>
                    </div>
                   
                    
                    <div className='discharge-hospitaladdress'>
                    <h4> Hospital Address : </h4>
                        <h4> B-6, AYUSH Hospital1 behind MBIT nagar, CVM Road, BVMcity, 321654</h4>
                    </div>
                    
                    <div className='discharge-hospitalemail'>
                    <h4>Hospital Email id : </h4>
                        <h4> ayushhospital@gmail.com</h4>
                    </div>
                    <div className='discharge-hospitalnumber'>
                    <h4>Contact NO. : </h4>
                        <h4> +91 1234567890</h4>
                    </div>
           </div>
           </div>
           <h2>Diagnosis summary :</h2>

<div className="flex-tbl">
           <table className="diagnosis-tbl">
            <tr>
                <td className="column-heading">Principal diagnosis</td>
                <td><input type="text" className="diagnosis-input" placeholder="Enter Principal diagnosis" /></td>
            </tr>
            <tr>
                <td className="column-heading">Reason for Presentation</td>
                <td><input type="text" className="diagnosis-input" placeholder="Reason for Presentation" /></td>
            </tr>
            <tr>
                <td className="column-heading">Secondary diagnosis</td>
                <td><input type="text" className="diagnosis-input" placeholder="Enter Secondary diagnosis" /></td>
            </tr>
            <tr>
                <td className="column-heading">Complication</td>
                <td><input type="text" className="diagnosis-input" placeholder="Enter Complication" /></td>
            </tr>
            <tr>
                <td className="column-heading">Past medical History</td>
                <td><input type="text" className="diagnosis-input" placeholder="Enter Past medical History" /></td>
            </tr>
            
           </table>
           <table className="diagnosis-tbl">
            <tr>
                <td className="column-heading"> Presentaion Date</td>
                <td><input type="text" className="diagnosis-input"  placeholder="enter Presentation date" /></td>
            </tr>
            <tr>
                <td className="column-heading">Discharge Date</td>
                <td><input type="text" className="diagnosis-input"  placeholder="enter Discharge date" /></td>
            </tr>
            <tr>
                <td className="column-heading">Length Stay </td>
                <td><input type="text" className="diagnosis-input"  placeholder=" Length stay" /></td>
            </tr>
            <tr>
                <td className="column-heading">Discharge Destination</td>
                <td><input type="text" className="diagnosis-input"  placeholder="Discharge Destination" /></td>
            </tr>
           </table>
</div>
           <h2>Medicine on Discharge :</h2>

            <div className="discharge-medicine-details" > 
                <table className="medicine-details-tbl">
                    <tr>
                    <th>Medicine</th>
                    <th>Directions</th>
                    <th>Duration/End Date</th>
                    <th>Status</th>
                    <th>Change Reason/ Clinical Indication</th>
                    <th>Quantity Supplied</th>
                    </tr>
                    <tr>
                    <td><input type="text" className="diagnosis-input"  placeholder="Medicine" /></td>
                    <td><input type="text" className="diagnosis-input"  placeholder="Directions" /></td>
                    <td><input type="text" className="diagnosis-input"  placeholder="Duration/End Date" /></td>
                    <td><input type="text" className="diagnosis-input"  placeholder="Status" /></td>
                    <td><input type="text" className="diagnosis-input"  placeholder="Change Reason/ Clinical Indication" /></td>
                    <td><input type="text" className="diagnosis-input"  placeholder="Quantity Supplied" /></td>

                    </tr>
                </table>
            </div>


            <center>
            <Link to="/page2">
            <button className="next-button">NEXT</button>
            </Link>
</center>

</form>
           </div>
            
                </div>  
                </div>
                
    
      </div>
      </>
    );
  }
}


