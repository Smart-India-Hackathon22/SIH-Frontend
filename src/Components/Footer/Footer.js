import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../src/Assets/Images/logo2.png';
import {Button} from '@mui/material';
import '../../../src/CSS/Footer.css';




function Footer() {
    
  return (
    <div className="Footer">
            <div className="FooterContainer">
                <div className="box" id="box-left">
                    <div className="logo">
                    <Button>
                          <Link to="/"> <img src={logo} alt='logo' className='logo' /></Link>
                              </Button>
                    </div>
                </div>
                <div className="box" id="box-right">
                    <p>
                        <b>
                            {" "}
                            A. D. Patel Institute of Technology, Karamsad, Anand
                        </b>
                        <br />
                        This site is developed by the codegems team.
                    </p>
                </div>
            </div>
            <center>
                <p className="Copyright">All Rights Reserved @ ADIT 2022</p>
            </center>
        </div>
  )
}

export default Footer