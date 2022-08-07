import React from 'react'
import items from "../../Components/Sidebar/Sidebar.json"
import SidebarItem from "../../Components/Sidebar/SidebarItem"
import "../../CSS/Sidebar.css";
import Navbar from '../../Components/Navbar/Navbar'

import "./OPD.css"
function OPD() {
  return (

    // OPD user dashboard   
    <>
    {/* <Navbar /> */}

    <div className="container">
         <div className="wrap">
 { items.map((item, index) => <SidebarItem key={index} item={item} />) }
 </div>
 
    <section className='opduser'>
    <div className="opduser-container">
    <div className="opduser-header">
    <h1>OPD User Dashboard</h1>
    <div className='underline'></div>
    </div>

    <div className='uid'>   
                <h4>UHID : </h4>
                <input type="text" placeholder="Enter UHID" className='uhid'/>
                </div>                        
                    <div className='opd-body'>
                    <div className='patientname'>
                        <h4>Name : </h4>
                        <h4> Patient Full Name </h4>
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
                    
                    <div className='diagnosis'>
                    <h4 className='diagnosis-heading'>Diagnosis : </h4>
                    <input type="text" placeholder="Enter Diagnosis" className='opd-user-diagnosis'/>    
                    </div>

                    {/* symptoms field for the opd patient */}
                    <div className='symptoms'>
                    <h4 className='symptoms-heading'>Symptoms : </h4>
                    <input type="text" placeholder="Enter Symptoms" className='opd-user-symptoms'/>
                    </div>

            {/* Add Labels ad its fields of srno, medicine name, noofdays, morning, afternoon, evening, total, and medicine type */}
            <div className='opd-data-entry'>
            <form>
            <div className='opd-entry-container'>
            <h4>Enter Drug Dose :</h4>
            <div className='flex-entrytbl-addbtn'>
            <table className='opd-entrydata-table'>
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

            <button className='add-button'>ADD</button>
            </div>
            </div>
            </form>
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
                            <td>1</td>
                            <td>MEDHYACHURNA</td>
                            <td>7</td>
                            <td>2.00</td>
                            <td>0.00</td>
                            <td>2.00</td>
                            <td>28</td>
                            <td>TABLET</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>MEDHYACHURNA</td>
                            <td>7</td>
                            <td>2.00</td>
                            <td>0.00</td>
                            <td>2.00</td>
                            <td>28</td>
                            <td>TABLET</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>MEDHYACHURNA</td>
                            <td>7</td>
                            <td>2.00</td>
                            <td>0.00</td>
                            <td>2.00</td>
                            <td>28</td>
                            <td>TABLET</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>MEDHYACHURNA</td>
                            <td>7</td>
                            <td>2.00</td>
                            <td>0.00</td>
                            <td>2.00</td>
                            <td>28</td>
                            <td>TABLET</td>
                        </tr>
</tbody>
                        



                 </table>
            </div>

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
                <button className='ipd-btn'>Admit to IPD</button>
                    <button className='stock-btn'>Check Medicine Stock</button>
                </div>

                <button className='save'>Save Data </button>
                <button className='save'>Print </button>
               </div>
    </section>


</div>
</>   
  )
}

export default OPD;