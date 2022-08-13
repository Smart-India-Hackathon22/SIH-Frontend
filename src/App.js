import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home'
import Register from '../src/Pages/Register/Register'
import Login from '../src/Pages/Login/Login'
import Prototype from './Pages/Prototype'

import Aboutus from '../src/Pages/Aboutus'
import Contactus from '../src/Pages/Contactus'
import Receptionist from './Pages/Receptionist'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Discharge from './Components/Discharge/Discharge'

import Admin from './Pages/Admin/Admin'
import History from './Pages/History/History'
import Doctor from './Pages/Doctor/Doctor'
import OPD from './Pages/OPD/OPD'
import IPD from './Pages/IPD/IPD'
import Page2 from './Components/Discharge/Page2'



function App() {
  return (
    <>
     
      <Router>
      <Navbar />
      {/* <Header />   */}
      {/* <Sidebar /> */}
     

        <Routes>
        {/* <Route  path="/" element={<Register />} /> */}
          <Route  path="/" element={<Home />} />
          {/* <Route  path="/header" element={<Header />} /> */}
          <Route  path="/register" element={<Register />} />
          <Route  path="/history" element={<History />} />
          <Route  path="/admin" element={<Admin />} />
          {/* <Route  path="/nurse" element={<Nurse />} /> */}
          <Route  path="/opduser" element={<OPD />} />
          <Route  path="/ipduser" element={<IPD />} />
          <Route  path="/dischargesummary" element={<Discharge />} />
          <Route  path="/page2" element={<Page2 />} />
          <Route  path="/doctordetail" element={<Doctor />} />
          <Route  path="/login" element={<Login />} />
          <Route  path="/prototype" element={<Prototype />} />
          <Route  path="/aboutus" element={<Aboutus />} />
          <Route  path="/livestatus" element={<Contactus />} />
          <Route  path="/receptionist" element={<Receptionist />} />
        </Routes>
      {/* <Home /> */}
      {/* <Home /> */}

      {/* <Register /> */}

      {/* <Login /> */}
      {/* <Footer /> */}

      </Router>


    </>
  )
}

export default App