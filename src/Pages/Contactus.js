import React from 'react'
import CountUp from 'react-countup';
import "../../src/CSS/Contactus.css";
import Header from '../Components/Header/Header'


function Contactus() {
  return (
    <>

    {/* <div className='text'>Contactus</div> */}
    <div id="background-img-slide">
                        <section className="career-statics">

                            <div className="flex-statistics">
                            
                            <div className="candidates"> 
                            <CountUp start={0} end={20000} delay={0}>
                            {({ countUpRef }) => (
                                <div>
                                <span ref={countUpRef} />
                                </div>
                            )}
                            </CountUp>
                            <h1 className="detail1">Out Patient</h1>

                        </div>                   

                        <div className="candidates"> 
                            <CountUp start={0} end={60000} delay={0}>
                            {({ countUpRef }) => (
                                <div>
                                <span ref={countUpRef} />
                                </div>
                            )}
                            </CountUp>
                            <h1 className="detail2">Recoverd patient</h1>

                        </div>                   

                        <div className="candidates"> 
                            <CountUp start={0} end={90000} delay={0}>
                            {({ countUpRef }) => (
                                <div>
                                <span ref={countUpRef} />
                                </div>
                            )}
                            </CountUp>
                            <h1 className="detail3">Open Hospital</h1>

                        </div>  

                         <div className="candidates"> 
                            <CountUp start={0} end={900} delay={0}>
                            {({ countUpRef }) => (
                                <div>
                                <span ref={countUpRef} />
                                </div>
                            )}
                            </CountUp>
                        <h1 className="detail4">In Patient</h1>
                        </div>      

                             </div>

                   
                        </section>
                    </div>
    </>
  )
}

export default Contactus;