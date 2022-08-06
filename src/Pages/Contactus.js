import React from 'react'
import CountUp from 'react-countup';
import "../../src/CSS/Contactus.css";
import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar/Navbar'


function Contactus() {
  return (
    <>
    <Navbar />


    {/* <div className='text'>Contactus</div> */}
    <Header />
                        <section className="career-statics">

                            <div className="statistic1">
                            
                            <div className="candidates"> 
                            <CountUp start={0} end={200000} delay={0}>
                            {({ countUpRef }) => (
                                <div className='counttext'>
                                <span ref={countUpRef} />
                                </div>
                            )}
                            </CountUp>
                            <h1 className="detail">Bed Available</h1>

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
                            <h1 className="detail">Recoverd patient</h1>

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
                            <h1 className="detail">In Patient </h1>

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
                        <h1 className="detail">Open Hospital</h1>
                        </div>      

                             </div>

                   
                        </section>
    </>
  )
}

export default Contactus;