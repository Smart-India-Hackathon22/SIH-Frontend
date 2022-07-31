import React from 'react'
import '../../CSS/Login.css'
import {Button} from "@mui/material";
import introimg from "../../../src/Assets/Images/intro.png";
import { Link } from 'react-router-dom';

function Login() {
  return (
   <>
    <div className='login-container'>

    <div className='img-slider'>
    <img src={introimg} alt='intro'/>
    </div>

    <div className='login-form'>
    
    <h1 className='login-heading'>Login</h1>
    <form>

    <div className='flex-email'>
    <input type='email' className='email' placeholder='Enter your email' required/>
    </div>
    <br />
    <br />
    <div className='flex-password'>
    <input type='password'  className="pass" placeholder='Enter your password' required />
    </div>
    <br />
    <br />


    <div className='flex-usertype'>
    <select className="usertype" id="usertype" required>
                                    <option value="0">select usertype</option>
                                    <option value="1">Admin</option>
                                    <option value="2">Patient</option>
                                    <option value="3">OPD User</option>
                                    <option value="4">IPD User</option>
                                    <option value="5">Nurse</option>
                                    <option value="6">receptionist</option>
                                </select>
    </div>
                               
                                <br />
                                <br />
          <div className='flex-btn'>
          <Button className='login-btn'><Link to="/receptionist">Login</Link></Button>
          </div>
    </form>
    </div>
    </div>
   </>
  )
}
export default Login;