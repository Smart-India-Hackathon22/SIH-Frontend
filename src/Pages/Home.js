import React, { useState } from "react";
import "../CSS/Home.css";
import axios from "axios";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Prototype from "./Prototype";
import Navbar from "../Components/Navbar/Navbar";
import plus from "../Assets/Images/plus.png";
import { Link } from "react-router-dom";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function Home() {
  // const [userName, setUserName] = useState('');
  // const [pass, setPass] = useState('');
  // const [selection, setSelecion] = useState('');
  // const [loading, setLoading] = useState('');

  // async function submitHandler(e){
  //   e.preventDefault();
    // if (!userName && !pass && !selection) {
    //   return toast.error('Please fill username,password and roletype');
    // }
    // if (!userName) {
    //   return toast.error('Please fill username');
    // }
    // if (!pass) {
    //   return toast.error('Please fill password');
    // }
    // if (!selection) {
    //   return toast.error('Please fill roletype');
    // }
   // try {
      // setLoading(true);
      // const { data } = await axios.post('/verify', {
      //   userName,
      //   pass,
      //   selection,
      // }, {
      //   headers: {
      //     "Content-type": "application/json;charset=UTF-8",
      //     // url: "http://localhost:3000/register"
      //   }
      // });
      // setLoading(false);

      // toast.success(data.message, {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });

      // toast.success(data.message);
   // } 
   // catch (err) {
      // setLoading(false);

      // toast.error(
      //   err.response && err.response.data.message
      //     ? err.response.data.message
      //     : err.message
      //   , {
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //   });

      // toast.error(
      //   err.response && err.response.data.message
      //     ? err.response.data.message
      //     : err.message
      // )
   // }

  // }

  return (
    <>
      {/* <Navbar className="navbar" /> */}
      <div className="background-img"></div>
      {/* <ToastContainer
      theme="colored"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={5}
      /> */}
      <div className="login-card">
        <div className="login-card-image">
          <img src={plus} alt="PLUS" />
        </div>
        <div className="login-card-body">
          <div className="login-card-header">
            <center>
              <h1>Login Page</h1>
            </center>
          </div>

          {/* <div className='login-card-body'> */}
          {/* <form onSubmit={(e)=>submitHandler(e)}> */}
          <form action="/verify" method="post">
            <div className="form-group">
              <input
                type="text"
                name="userName"
                // onChange={(e) => setUserName(e.target.value)}
                className="form-control"
                placeholder="Username"

              />
              <input
                type="password"
                name="pass"
                // onChange={(e) => setPass(e.target.value)}
                className="form-control"
                placeholder="Passowrd"

              />
              {/* <select className="form-control" name="selection" onChange={(e) => setSelecion(e.target.value)} > */}
              <select className="form-control" name="selection" >
                <option value="Select">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Doctor">Doctor</option>
                <option value="Receptionist">Receptionist</option>
                <option value="OPD User">OPD User</option>
                <option value="IPD User">IPD User</option>
              </select>
            </div>
            <center>
              <button className="login-btn" type="submit">
                LOGIN
              </button>
              <div className="register-link">
                <h5 className="user-heading">New User ? </h5>{" "}
                <Link to="/register"> Sign-up </Link>
              </div>
              <Link to="/forgetpassword">Forget Username or Password ? </Link>
            </center>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
