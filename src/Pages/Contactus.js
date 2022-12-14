import React from 'react'
import CountUp from 'react-countup';
import "../../src/CSS/Contactus.css";
import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar/Navbar'

import items from "../Components/Sidebar/Sidebar.json"
import SidebarItem from "../Components/Sidebar/SidebarItem"
import "../CSS/Sidebar.css";

function Contactus() {
  return (
    <>
   
   <div className="container">
            <div className="wrap">
    { items.map((item, index) => <SidebarItem key={index} item={item} />) }
    </div>
                        <div className="career-statics">

                            <div className="statistic1">
                            
                            <div className="candidates"> 
                            <CountUp start={0} end={200000} delay={0}>
                            {({ countUpRef }) => (
                                <div className='counttext'>
                                <span ref={countUpRef} />
                                </div>
                            )}
                            </CountUp>
                            <h1 className="detail-heading">Bed Available</h1>

                        </div>                   
                        </div>   

                          <div className="statistic1">                

                        <div className="candidates"> 
                            <CountUp start={0} end={600000} delay={0}>
                            {({ countUpRef }) => (
                                <div className='counttext'>
                                <span ref={countUpRef} />
                                </div>
                            )}
                            </CountUp>
                            <h1 className="detail-heading">Recoverd patient</h1>

                        </div>                   
                        </div>

                        <div className="statistic1">                 

                        <div className="candidates"> 
                            <CountUp start={0} end={900000} delay={0}>
                            {({ countUpRef }) => (
                                <div className='counttext'>
                                <span ref={countUpRef} />
                                </div>
                            )}
                            </CountUp>
                            <h1 className="detail-heading">In Patient </h1>

                        </div>  
                        </div>  
                        
                        <div className="statistic1">                 

                         <div className="candidates"> 
                            <CountUp start={0} end={9} delay={0}>
                            {({ countUpRef }) => (
                                <div className='counttext'>
                                <span ref={countUpRef} />
                                </div>
                            )}
                            </CountUp>
                        <h1 className="detail-heading">Open Hospital</h1>
                        </div>      

                             </div>

                   
                        </div>
                        </div>
    </>
  )
}

export default Contactus;