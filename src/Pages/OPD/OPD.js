import React, { useState } from 'react'
import items from "../../Components/Sidebar/Sidebar.json"
import SidebarItem from "../../Components/Sidebar/SidebarItem"
import "../../CSS/Sidebar.css";
import Navbar from '../../Components/Navbar/Navbar'

import "./OPD.css"
function OPD() {

    const [uhid, setuhid] = useState();
    const [opdData, setopdData] = useState();
    async function submitOpd(event) {
        event.preventDefault();
        const res = await fetch("https://sihcodegemsbackend.herokuapp.com/getOpdId", {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({ uhid })
        })
        const results = await res.json();
        console.log(results.data);
        if (results.data) setopdData(results.data)
    }

    return (
        <>

            <div className="container">
                <div className="wrap">
                    {items.map((item, index) => <SidebarItem key={index} item={item} />)}
                </div>

                <div className='opduser'>
                    <div className="opduser-container">
                        <div className="opduser-header">
                            <h1>OPD User Dashboard</h1>
                            <div className='underline'></div>
                        </div>
                        <form onSubmit={(e) => submitOpd(e)}>
                            <div className='uid'>
                                <h4>UHID : </h4>
                                <input type="number"
                                    placeholder="Enter UHID"
                                    className='uhid'
                                    name='uhid'
                                    onChange={(e) => setuhid(e.target.value)}
                                    value={uhid}
                                    required
                                />
                            </div>
                            <button type='submit' className='submit-button'>Enter</button>
                        </form>
                        < div className='opd-body'>
                            <div className='opdpatientname'>
                                <h4>Patient Registration No :</h4>
                                <h4 name="uhid">{opdData !== undefined ? opdData.r : " "} {opdData !== undefined ? opdData.mname : " "} {opdData !== undefined ? opdData.lname : " "}</h4>
                            </div>
                            <div className='opdpatientname'>
                                <h4>Patient Full Name : </h4>
                                <h4>{opdData !== undefined ? opdData.fname : " "} {opdData !== undefined ? opdData.mname : " "} {opdData !== undefined ? opdData.lname : " "}</h4>
                            </div>

                            <div className='opdpatientgender'>
                                <h4>Gender : </h4>
                                <h4>{opdData !== undefined ? opdData.gender : " "}</h4>
                            </div>
                            <div className='opdpatientage'>
                                <h4>Age : </h4>
                                <h4>{opdData !== undefined ? opdData.age : " "}</h4>
                            </div>
                            <div className='opdpatientaddress'>
                                <h4>Address : </h4>
                                <h4>{opdData !== undefined ? opdData.city : " "}</h4>
                            </div>
<form action='/addopduser' method='post'>
                                    <div className='assigned-doctor'>
                                        <h4 className='doctor-heading'>Assigned Doctor Name : </h4>
                                        <input type="text" placeholder="Enter Doctor name" className='opd-user-diagnosis' name='assignedDoctor' required />
                                    </div>
                                    <div className='next-date'>
                                        <h4 className='nextdate-heading'> Next Appointment : </h4>
                                        <input type="date" className='opd-user-diagnosis' name='nextDate' required />
                                    </div>
                                    <div className='diagnosis'>
                                        <h4 className='diagnosis-heading'>Diagnosis : </h4>
                                        <input type="text" placeholder="Enter Diagnosis" className='opd-user-diagnosis' name='Diagnosis' required />
                                    </div>
                                    {/* symptoms field for the opd patient */}
                                    <div className='symptoms'>
                                        <h4 className='symptoms-heading'>Symptoms : </h4>
                                        <input type="text" placeholder="Enter Symptoms" className='opd-user-symptoms' name='Symptoms' required />
                                    </div>
                                    {/* Add Labels ad its fields of srno, medicine name, noofdays, morning, afternoon, evening, total, and medicine type */}
                                    <div className='opd-data-entry'>
                                            <div className='opd-entry-container'>
                                                <h4>Enter Drug Dose :</h4>
                                                <div className='flex-entrytbl-addbtn'>
                                                    {/* <table className='opd-entrydata-table'>
            <tr>
            
           
            <td>
            <div className='labels-medicine-name'>
            <input type="text" placeholder="Medicine Name" className='input-opd' required/>
            </div>
            </td>
            <td>
            <div className='labels-noofdays'>
            <input type="text" placeholder="No.of Days" className='input-opd' required/>
            </div>
            </td>
            <td>
            <div className='labels-morning'>
            <input type="text" placeholder="Morning" className='input-opd' required/>
            </div>
            </td>
            <td>
            <div className='labels-afternoon'>
            <input type="text" placeholder="Afternoon" className='input-opd' required/>
            </div>
            </td>
            <td>
            <div className='labels-evening'>
            <input type="text" placeholder="Evening" className='input-opd' required/>
            </div>
            </td>
            <td>
            <div className='labels-total'>
            <input type="text" placeholder="Total" className='input-opd' required/>
            </div>
            </td>
            <td>
            <div className='labels-medicine'>
            <input type="text" placeholder="Medi-Type" className='input-opd' required/>
            </div>
            </td>
            </tr>
            </table>

            <button className='add-button'>ADD</button> */}
                                                </div>
                                            </div>
                                    </div>

                                    <div className='opd-list'>
                                        <table className='opd-table' border={1}>
                                            <tbody>
                                                <tr>
                                                    <th>sr.no</th>
                                                    <th>Medicine Name</th>
                                                    <th>NoOfDays</th>
                                                    <th>Morning</th>
                                                    <th>Afternoon</th>
                                                    <th>Evening</th>
                                                    <th>Total</th>
                                                    <th>Medi Type</th>
                                                </tr>
                                                <tr>
                                                    <td><input type='number' name='SrNo1' required/></td>
                                                    <td><input type='text' name='medicineName1' required/></td>
                                                    <td><input type='number' name='noOfDays1' required/></td>
                                                    <td><input type='number' name='morning1' required/></td>
                                                    <td><input type='number' name='afternoon1' required/></td>
                                                    <td><input type='number' name='evening1' required/></td>
                                                    <td><input type='number' name='total1' required/></td>
                                                    <td><input type='text' name='medi_type1' required/></td>
                                                </tr>
                                                <tr>
                                                    <td><input type='number' name='SrNo2' /></td>
                                                    <td><input type='text' name='medicineName2' /></td>
                                                    <td><input type='number' name='noOfDays2' /></td>
                                                    <td><input type='number' name='morning2' /></td>
                                                    <td><input type='number' name='afternoon2' /></td>
                                                    <td><input type='number' name='evening2' /></td>
                                                    <td><input type='number' name='total2' /></td>
                                                    <td><input type='text' name='medi_type2' /></td>
                                                </tr>
                                                <tr>
                                                    <td><input type='number' name='SrNo3' /></td>
                                                    <td><input type='text' name='medicineName3' /></td>
                                                    <td><input type='number' name='noOfDays3' /></td>
                                                    <td><input type='number' name='morning3' /></td>
                                                    <td><input type='number' name='afternoon3' /></td>
                                                    <td><input type='number' name='evening3' /></td>
                                                    <td><input type='number' name='total3' /></td>
                                                    <td><input type='text' name='medi_type3' /></td>
                                                </tr>
                                                <tr>
                                                    <td><input type='number' name='SrNo4' /></td>
                                                    <td><input type='text' name='medicineName4' /></td>
                                                    <td><input type='number' name='noOfDays4' /></td>
                                                    <td><input type='number' name='morning4' /></td>
                                                    <td><input type='number' name='afternoon4' /></td>
                                                    <td><input type='number' name='evening4' /></td>
                                                    <td><input type='number' name='total4' /></td>
                                                    <td><input type='text' name='medi_type4' /></td>
                                                </tr>
                                            </tbody>




                                        </table>
                                    </div>
                        <button className='submit-button' type='submit'>Save Data </button>

                                    </form>

                                    </div>
                                    </div>
                    <div className='popup-container'>
                        <div className='dialog-buttons'>
                            <button className='referesh-btn'>Refresh Patient List</button>
                            <button className='close-btn'>Close This Form</button>
                        </div>

                        <div className='opd-patient-list'>

                            <h4>Patient List : </h4>
                            <p>MUKESHBHAI SUTHAR</p>
                            <p>MUKESHBHAI SUTHAR</p>
                            <p>MUKESHBHAI SUTHAR</p>
                            <p>MUKESHBHAI SUTHAR</p>
                        </div>

                        <div className='dialog-buttons-2'>
                            <button className='save'>Admit to IPD</button>
                            {/* <button className='stock-btn'>Check Medicine Stock</button> */}
                        </div>

                        <button className='save'>Print </button>

                    </div>
              
                
                


            
            </div>
            </div>
        </>
    )
}

export default OPD;