import React from 'react'
import '../../CSS/Login.css'
import {Button} from "@mui/material";
import introimg from "../../../src/Assets/Images/intro.png";
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar'


function Login() {
  return (
   <>
    {/* <Navbar /> */}

   <div className='login-card'>
    <div className='login-card-header'>
    <center>
    <h1>Login Page</h1>
    </center>
       </div>

        {/* <div className='login-card-body'> */}
        <form>
        <div className='form-group'>
        <input type='text' className='form-control' placeholder='Username' />
        <input type='password' className='form-control' placeholder='Passowrd' />
        <select  className='form-control'>
          <option value='Select'>Select Role</option>
          <option value='Admin'>Admin</option>
          <option value='User'>Receptionist</option>
          <option value='User'>Nurse</option>
          <option value='User'>OPD User</option>
          <option value='User'>IPD User</option>

        </select>

       </div> 
       <center>
       <button className='login-btn'>LOGIN</button>
       <div className='register-link'>
       <h5 className='user-heading'>New User ? </h5> <Link to="/register"> Sign-up </Link>  
       </div>
       <Link to ="/forgetpassword" >Forget Username or Password ? </Link>      
       </center>
       </form>
       
       </div> 
   </>
  )
}
export default Login;