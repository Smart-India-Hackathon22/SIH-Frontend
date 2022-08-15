import React, { useState } from 'react';

import items from "../../Components/Sidebar/Sidebar.json"
import SidebarItem from "../../Components/Sidebar/SidebarItem"
import "../../CSS/Sidebar.css";
import Navbar from '../../Components/Navbar/Navbar'

import { Link } from 'react-router-dom';
import "./Discharge.css"
import ReactDOM from 'react-dom';

function Discharge() {
    const [uhid, setuhid] = useState(0);
    const [dischargeData, setDischargeData] = useState();
    async function submitDischarge(event) {
        event.preventDefault();
        const res = await fetch("http://localhost:8000/getdischarge", {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({ uhid })
        })
        const results = await res.json();
        console.log(results.data);
        if (results.data) setDischargeData(results.data)
    }

    return (
        <>
            <form onSubmit={(e) => submitDischarge(e)}>

                <div className="container">
                    <div className="wrap">
                        {items.map((item, index) => <SidebarItem key={index} item={item} />)}
                    </div>
                    <div className="flex-dischargepage">
                        <div className='discharge-uhid'>

                            <label className='uhid-heading'>UHID:</label>
                            <input type="number"
                                placeholder="Enter UHID"
                                className='discharge-uhid-input'
                                name='uhid'
                                onChange={(e) => setuhid(e.target.value)}
                                value={uhid}
                                required />
                            <button className='submit-button' type='submit'>SEARCH</button>

                        </div>
                        <form action='/saveDischarge' method='post'>
                            <div className="discharge">
                                {dischargeData && <div className="discharge-body">
                                    <div className="discharge-body-heading">
                                        <h1>Discharge Summary</h1>
                                    </div>

                                    <div className="flex-patient-hospital-details">
                                        <div className="discharge-patient-details">
                                            <h2>Patient Details :</h2>
                                            <div className='discharge-patientname'>
                                                <h4>Name : </h4>
                                                <h4>{dischargeData.fname} {dischargeData.mname} {dischargeData.lname}</h4>
                                            </div>
                                            <div className='discharge-patientdob'>
                                                <h4>DOB : </h4>
                                                <h4>{dischargeData.dob}</h4>
                                            </div>
                                            <div className='discharge-patientgender'>
                                                <h4>Gender : </h4>
                                                <h4>{dischargeData.gender}</h4>
                                            </div>
                                            <div className='discharge-patientage'>
                                                <h4>Age : </h4>
                                                <h4>{dischargeData.age}</h4>
                                            </div>
                                            <div className='discharge-patientaddress'>
                                                <h4>Address : </h4>
                                                <h4>{dischargeData.city}</h4>
                                            </div>
                                            <div className='discharge-patientbloodgrp'>
                                                <h4>Blood Group : </h4>
                                                <h4>{dischargeData.blood_grp}</h4>
                                            </div>
                                            <div className='discharge-patientemail'>
                                                <h4>Email id : </h4>
                                                <h4>{dischargeData.email_id}</h4>
                                            </div>
                                            <div className='discharge-patientnumber'>
                                                <h4>Contact NO. : </h4>
                                                <h4>{dischargeData.phone_no}</h4>
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
                                                <td><input type="text"
                                                    className="diagnosis-input"
                                                    placeholder="Enter Principal diagnosis *"
                                                    name='pDiagno'
                                                    required
                                                /></td>
                                            </tr>
                                            <tr>
                                                <td className="column-heading">Reason for Presentation</td>
                                                <td><input type="text"
                                                    className="diagnosis-input"
                                                    placeholder="Reason for Presentation *"
                                                    name='presentation'
                                                    required
                                                /></td>
                                            </tr>
                                            <tr>
                                                <td className="column-heading">Secondary diagnosis</td>
                                                <td><input type="text"
                                                    className="diagnosis-input"
                                                    placeholder="Enter Secondary diagnosis *"
                                                    name='secDiagno'
                                                    required
                                                /></td>
                                            </tr>
                                            <tr>
                                                <td className="column-heading">Complication</td>
                                                <td><input type="text"
                                                    className="diagnosis-input"
                                                    placeholder="Enter Complication *"
                                                    name='complication'
                                                    required
                                                /></td>
                                            </tr>
                                            <tr>
                                                <td className="column-heading">Past medical History</td>
                                                <td><input type="text"
                                                    className="diagnosis-input"
                                                    placeholder="Enter Past medical History *"
                                                    name='pastHistory'
                                                    required
                                                /></td>
                                            </tr>

                                        </table>
                                        <table className="diagnosis-tbl">
                                            <tr>
                                                <td className="column-heading"> Presentaion Date</td>
                                                <td><input type="date"
                                                    className="diagnosis-input"
                                                    placeholder="enter Presentation date *"
                                                    name='presentationDate'
                                                    required
                                                /></td>
                                            </tr>
                                            <tr>
                                                <td className="column-heading">Discharge Date</td>
                                                <td><input type="date"
                                                    className="diagnosis-input"
                                                    placeholder="enter Discharge date *"
                                                    name='dischargeDate'
                                                    required
                                                /></td>
                                            </tr>
                                            <tr>
                                                <td className="column-heading">Length Stay </td>
                                                <td><input type="number"
                                                    className="diagnosis-input"
                                                    placeholder=" Length stay *"
                                                    name='stay'
                                                    required
                                                /></td>
                                            </tr>
                                            <tr>
                                                <td className="column-heading">Discharge Destination</td>
                                                <td><input type="text"
                                                    className="diagnosis-input"
                                                    placeholder="Discharge Destination *"
                                                    name='disDestination'
                                                    required
                                                /></td>
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
                                                <th>Quantity Supplied</th>
                                            </tr>
                                            <tr>
                                                <td><input type="text" className="diagnosis-input" name='medicine' placeholder="Medicine *" required /></td>
                                                <td><input type="text" className="diagnosis-input" name='direction' placeholder="Directions *" required /></td>
                                                <td><input type="date" className="diagnosis-input" name='endDate' placeholder="Duration/End Date *" required /></td>
                                                <td><input type="text" className="diagnosis-input" name='status' placeholder="Status *" required /></td>
                                                <td><input type="text" className="diagnosis-input" name='quantity' placeholder="Quantity Supplied *" required /></td>

                                            </tr>
                                        </table>
                                    </div>
                                        
                                            <h2>Recommendations :</h2>


                                                <div className="discharge-medicine-details" >
                                                    <table className="medicine-details-tbl">
                                                        <tr>
                                                            <th>Recommendation</th>
                                                            <th>Personal Responsible</th>

                                                        </tr>
                                                        <tr>
                                                            <td><input type="text" className="diagnosis-input" placeholder="Recommendation" name='recommendation' required /></td>
                                                            <td><input type="text" className="diagnosis-input" placeholder="Person responsible" name='responsible' required /></td>
                                                        </tr>
                                                    </table>
                                                </div>



                                                <div className="discharge-appointment-details" >
                                                    <h2>Follow Up Appointments:</h2>
                                                    <table className="medicine-details-tbl">
                                                        <tr>
                                                            <th>Description</th>
                                                            <th>When</th>
                                                            <th>Booking status</th>
                                                            <th>Name</th>
                                                            <th>Location</th>
                                                            <th>Contact details</th>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="text" className="diagnosis-input" name='description' required /></td>
                                                            <td><input type="date" className="diagnosis-input" name='when' required /></td>
                                                            <td><input type="text" className="diagnosis-input" name='booking' required /></td>
                                                            <td><input type="text" className="diagnosis-input" name='name' required /></td>
                                                            <td><input type="text" className="diagnosis-input" name='city' required /></td>
                                                            <td><input type="text" className="diagnosis-input" name='contact' required /></td>

                                                        </tr>
                                                    </table>
                                                </div>



                                                <div className="discharge-information-provided-details" >
                                                    <h2>Information provided to the patient :</h2>
                                                    <div className='underline'></div>
                                                    <h1>.</h1>

                                                </div>
                                                <div className="discharge-endofdocument-heading">
                                                    <h2>END OF DOCUMENT</h2>
                                                </div>

                                                <center className="button-below">
                                                    <button className="print-button" type='submit'>SAVE</button>
                                                </center>

                                        
                                        

                            


                                </div>}

                            </div>
                        </form>
                    </div>


                </div>
            </form>
        </>
    );
}

export default Discharge;
