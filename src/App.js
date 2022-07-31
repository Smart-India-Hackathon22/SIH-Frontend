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



function App() {
  return (
    <>
     
      <Router>
      <Navbar />
      <Header />
     

        <Routes>
        {/* <Route  path="/" element={<Register />} /> */}
          <Route  path="/" element={<Home />} />
          {/* <Route  path="/header" element={<Header />} /> */}
          <Route  path="/register" element={<Register />} />
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