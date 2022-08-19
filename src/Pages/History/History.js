import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';

import Header from '../../Components/Header/Header';
import "./History.css";
import Navbar from '../../Components/Navbar/Navbar';
import axios from "axios"

// import FormData from 'form-data';

import items from "../../Components/Sidebar/Sidebar.json"
import SidebarItem from "../../Components/Sidebar/SidebarItem"
import "../../CSS/Sidebar.css";
// import { post } from '../../../../SIH-Backend/routers/router';
var FormData = require('form-data');
function History() {

    const ComponentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => ComponentRef.current,
    });


    const [uhid, setuhid] = useState();
    const [historyData, setHistoryData] = useState();
    async function submitHistory(event) {
        event.preventDefault();
        // const res = await axios.post("http://localhost:8000/gethistory", formdata)
        const res = await fetch("https://sihcodegemsbackend.herokuapp.com/gethistory",{
            method:"POST",
            headers:{
                "Content-type":"application/json;charset=UTF-8"
            },
            body:JSON.stringify({uhid})
        })
        const results=await res.json();
        console.log(results.data);
        if(results.data) setHistoryData(results.data)
    }
    
    return (
        <>
            {/* <Navbar /> */}

            {/* <Header />
     */}
            <form onSubmit={(e)=> submitHistory(e)}>
            <div className="container">
                <div className="wrap">
                    {items.map((item, index) => <SidebarItem key={index} item={item} />)}
                </div>
                <div className='history'>
                    <div className='history-card'>
                            <div className='history-card-header'>
                                <div className='uid'>
                                    <h4>UHID : </h4>
                                    <input type="number"
                                        name="uhid"
                                        onChange={(e) => setuhid(e.target.value)}
                                        value={uhid}
                                        placeholder="Enter UHID"
                                        className='uhid'
                                        required />
                                </div>  
                                <button type='submit' className='submit-button'>Enter</button>
                                {/* <div className='printbtn'>
                <button className='print-button'>PRINT</button>
            </div> */} </div>
                               
                           
                            { historyData && <div className='history-card-body' ref={ComponentRef}>
                                <div className='flex-historyheading-print'>
                            <h1 className='history-heading'>History</h1>
                    <button className='print-button' onClick={handlePrint}>PRINT</button>

                            </div>
                                <div className='underline'> </div>
                                <div className='patientid'>
                                <h4 className="fieldname-style"> Patient Registration ID : </h4>
                                <h4 className='dataname-style'>{historyData.registration_no} </h4>
                            </div>
                            <div className='patientname'>
                                <h4 className="fieldname-style"> Patient Full Name : </h4>
                                <h4 className='dataname-style'>{historyData.fname} {historyData.mname} {historyData.lname}</h4>
                            </div>
                            <div className='patientdob'>
                                <h4 className="fieldname-style">Date of Birth : </h4>
                                <h4 className='dataname-style'>{historyData.dob}</h4>
                            </div>
                            <div className='patientgender'>
                                <h4 className="fieldname-style">Gender : </h4>
                                <h4 className='dataname-style'>{historyData.gender}</h4>
                            </div>
                            <div className='patientage'>
                                <h4 className="fieldname-style">Age : </h4>
                                <h4 className='dataname-style'>{historyData.age}</h4>
                            </div>
                            <div className='patientaddress'>
                                <h4 className="fieldname-style">Address (cityname) : </h4>
                                <h4 className='dataname-style'>{historyData.city}</h4>
                            </div>
                            <div className='patientbloodgrp'>
                                <h4 className="fieldname-style">Blood Group : </h4>
                                <h4 className='dataname-style'>{historyData.blood_grp}</h4>
                            </div>
                            <div className='patientemail'>
                                <h4 className="fieldname-style">Email id : </h4>
                                <h4 className='dataname-style'>{historyData.email_id}</h4>
                            </div>
                            <div className='patientnumber'>
                                <h4 className="fieldname-style">Contact NO. : </h4>
                                <h4 className='dataname-style'>{historyData.phone_no}</h4>
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
                        </div>}
                    </div>
                </div>
            </div>
            </form>
        </>
    )
}

export default History