import React, { useState } from "react";
import "../CSS/Home.css";
import axios from "axios";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Prototype from "./Prototype";
import Navbar from "../Components/Navbar/Navbar";
import plus from "../Assets/Images/plus.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* <Navbar className="navbar" /> */}
      <div className="background-img"></div>
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
          <form action="/verify" method="post">
            <div className="form-group">
              <input
                type="text"
                name="userName"
                className="form-control"
                placeholder="Username"
                required
              />
              <input
                type="password"
                name="pass"
                className="form-control"
                placeholder="Passowrd"
                required
              />
              <select className="form-control" name="selection" required>
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
