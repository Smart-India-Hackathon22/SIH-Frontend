import React from 'react'
import "./Doctor.css";
import Header from "../../Components/Header/Header";
import Navbar from '../../Components/Navbar/Navbar'

import items from "../../Components/Sidebar/Sidebar.json"
import SidebarItem from "../../Components/Sidebar/SidebarItem"
import "../../CSS/Sidebar.css";
function Doctor() {
  return (
    <>
    <Navbar />

    <div className='flex-doctor-details'>
   {/* <Header /> */}
    <div className='detail'>
   
        <h1 className='doctor-details-heading'>DOCTOR DETAILS  </h1>
        <div className='underline2'></div>
        <div className='doctor-details'>
        {/* filter to search the specilized doctor as per the field and also to filter as per the name of the doctor */}
        <div className='doctor-search'>
        <center>
            <input type='text' placeholder='Search Doctor, Specialization, Available .......' className='doctor-filter'/>
            <button className='search-doctor-btn'>Search</button>
            </center>
            </div>

            <div className='doctor-list'>
                 <table className='doctor-table' border={1}>
                 <tbody>
                        <tr>
                            <th>sr.no</th>
                            <th>Doctor Name</th>
                            <th>Specilized Field</th>
                            <th>Experience</th>
                            <th>Cabin No.</th>
                            <th>Available Doctor</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Dr.Rajesh</td>
                            <td>Cardiology</td>
                            <td>5 years</td>
                            <td>C-1</td>
                            <td>Available</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Dr.Mahesh</td>
                            <td>Heart Specialist</td>
                            <td>3 years</td>
                            <td>C-2</td>
                            <td>Available</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Dr.Suresh</td>
                            <td>OPD User</td>
                            <td>2 years</td>
                            <td>C-3</td>
                            <td>Available</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Dr.Nima Ben</td>
                            <td>IPD User</td>
                            <td>3 year</td>
                            <td>C-4</td>
                            <td>Not Available</td>

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

export default Doctor;