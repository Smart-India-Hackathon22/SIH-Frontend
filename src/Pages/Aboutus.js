import React from 'react'
import Typical from "react-typical";
import "../../src/CSS/Aboutus.css";
import Header from '../Components/Header/Header';


import items from "../Components/Sidebar/Sidebar.json"
import SidebarItem from "../Components/Sidebar/SidebarItem"
import "../CSS/Sidebar.css";

function Aboutus() {
  return (
    <>
    {/*<div>Aboutus</div> */}
      <Typical
                                className="auto-text"
                                loop={Infinity}
                                steps={[

                                    '"AYURVEDA" ',
                                    2000,
                                    '"YOGA" ',
                                    2000,
                                    '"NATUROPATHY" ',
                                    2000,
                                    '"UNANI" ',
                                    2000,
                                    '"SIDDHA" ',
                                    2000,
                                    '"HOMEOPATHY" ',
                                ]}
                            />
                            </>
  )
}

export default Aboutus