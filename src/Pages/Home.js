import React from 'react';
import '../CSS/Home.css'
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Prototype from './Prototype';
import Navbar from '../Components/Navbar/Navbar';

import {Link} from 'react-router-dom';




function Home() {


 
  
  return (
    <>

    <div className='background-img'>
    <Navbar />
    <div className='login-card'>
    <div className='login-card-header'>
    <center>
    <h1>Login Page</h1>
    </center>
       </div>

        {/* <div className='login-card-body'> */}
        <form>
        <div className='form-group'>
        <input type='text' className='form-control' placeholder='Username' required/>
        <input type='password' className='form-control' placeholder='Passowrd' required/>
        <select  className='form-control' required>
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
     </div>
    </>
    )
}

export default Home;