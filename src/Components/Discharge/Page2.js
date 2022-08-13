import React from 'react'

import items from "../../Components/Sidebar/Sidebar.json"
import SidebarItem from "../../Components/Sidebar/SidebarItem"
import "../../CSS/Sidebar.css";
import Navbar from '../../Components/Navbar/Navbar'

import {Link} from 'react-router-dom';
import "./Discharge.css"

function Page2() {
  return (
    <>
    <div className="container">
  <div className="wrap">
  { items.map((item, index) => <SidebarItem key={index} item={item} />) }
  </div>
  <div className="flex-dischargepage">
  {/* <div className='discharge-uhid'>  

  <form>
              <label className='uhid-heading'>UHID:</label>
              <input type="name" placeholder="Enter UHID" className='discharge-uhid-input' required />
              <button className='submit-button'>SEARCH</button>
</form> 
</div> */}
              <div className="discharge">
         <div className="discharge-body">
          <div className="discharge-body-heading">
          <h1>Discharge Summary</h1>
         </div>
       

         <h2>Recommendations :</h2>

<form>

<div className="discharge-medicine-details" > 
    <table className="medicine-details-tbl">
        <tr>
        <th>Recommendation</th>
        <th>Personal Responsible</th>
       
        </tr>
        <tr>
        <td><input type="text" className="diagnosis-input"  placeholder="Recommendation" /></td>
        <td><input type="text" className="diagnosis-input"  placeholder="Person responsible" /></td>
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
        <td><input type="text" className="diagnosis-input"  placeholder="" /></td>
        <td><input type="text" className="diagnosis-input"  placeholder="" /></td>
        <td><input type="text" className="diagnosis-input"  placeholder="" /></td>
        <td><input type="text" className="diagnosis-input"  placeholder="" /></td>
        <td><input type="text" className="diagnosis-input"  placeholder="" /></td>
        <td><input type="text" className="diagnosis-input"  placeholder="" /></td>

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
            <Link to="/dischargesummary">
          <button className="prev-button">PREV</button>
          </Link>
          <button className="print-button">PRINT</button>
</center>

</form>
         </div>
          
              </div>  
              </div>
              
  
    </div>
    </>
  )
}

export default Page2
