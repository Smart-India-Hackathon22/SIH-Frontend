import React from 'react'
import Header from '../../Components/Header/Header';
import "./History.css";
import Navbar from '../../Components/Navbar/Navbar'


import items from "../../Components/Sidebar/Sidebar.json"
import SidebarItem from "../../Components/Sidebar/SidebarItem"
import "../../CSS/Sidebar.css";

function History() {
  return (
   <>
    <Navbar />

    <Header />

    <div className='history'>
            <div className='history-card'>
                <div className='history-card-header'>
                    <div className='uid'>   
                <h4>UHID : </h4>
                <input type="text" placeholder="Enter UHID" className='uhid'/>
                </div> 
                    <h1>History</h1>
                    <div className='underline'> </div>                        

                    </div>
                <div className='history-card-body'>
                    <div className='patientname'>
                        <h4>Name : </h4>
                        <h4> Patient Full Name </h4>
                    </div>
                    <div className='patientdob'>
                    <h4>DOB : </h4>
                        <h4> 27/03/2022 </h4>
                    </div>
                    <div className='patientgender'>
                    <h4>Gender : </h4>
                        <h4> Male </h4>
                    </div>
                    <div className='patientage'>
                    <h4>Age : </h4>
                        <h4> 110</h4>
                    </div>
                    <div className='patientaddress'>
                    <h4>Address : </h4>
                        <h4> B-6, ADIT Society behind MBIT nagar, CVM Road, BVMcity, 321654</h4>
                    </div>
                    <div className='patientbloodgrp'>
                    <h4>Blood Group : </h4>
                        <h4> ABCD+-</h4>
                    </div>
                    <div className='patientemail'>
                    <h4>Email id : </h4>
                        <h4> NA</h4>
                    </div>
                    <div className='patientnumber'>
                    <h4>Contact NO. : </h4>
                        <h4> +91 1234567890</h4>
                    </div>

                    <div className='history-patient-summary'>
                        <h1 className='patient-summary-haeding'>Patient Summary</h1>
                        <div className='underline'></div>

                        <table border={1} className="history-tbl">
                        <tbody>
                            <tr>
                                <th>sr.no</th>
                                <th>Prescription</th>
                                <th>Assigned Doctor</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Next Date</th>
                            </tr>
                            
                           
                            <td>1</td>
                            <td>skin medicine, yogas,........</td>
                            <td>Dr.Manish</td>
                            <td>28/02/2021</td>
                            <td>Done</td>
                            <td>1/03/2023</td>
                           
                            <tr>
                            <td>2</td>
                            <td>skin medicine, yogas,........</td>
                            <td>Dr.Manish</td>
                            <td>28/02/2021</td>
                            <td>Done</td>
                            <td>1/03/2023</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>skin medicine, yogas,........</td>
                            <td>Dr.Manish</td>
                            <td>28/02/2021</td>
                            <td>Done</td>
                            <td>1/03/2023</td>
                            </tr>
                            <tr>
                            <td>4</td>
                            <td>skin medicine, yogas,........</td>
                            <td>Dr.Manish</td>
                            <td>28/02/2021</td>
                            <td>Done</td>
                            <td>1/03/2023</td>
                            </tr>
                            <tr>
                            <td>5</td>
                            <td>skin medicine, yogas,........</td>
                            <td>Dr.Manish</td>
                            <td>28/02/2021</td>
                            <td>Pending</td>
                            <td>1/03/2023</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
            </div>
    </div>
   </>
  )
}

export default History