import React from 'react'

import items from "../../Components/Sidebar/Sidebar.json"
import SidebarItem from "../../Components/Sidebar/SidebarItem"
import "../../CSS/Sidebar.css";
import "./Discharge.css"

function Discharge() {
  return (
    <>
    <div className="container">
    <div className="wrap">
    { items.map((item, index) => <SidebarItem key={index} item={item} />) }
    </div>
    <div className='discharge-uhid'>   
                <label className='uhid-heading'>UHID:</label>
                <input type="text" placeholder="Enter UHID" className='discharge-uhid-input'/>
                </div>  
      </div>
    </>
  )
}

export default Discharge
