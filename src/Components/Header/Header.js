import React,{useEffect} from 'react';
import '../../../src/CSS/Header.css';
// import logo from '../../../src/Assets/Images/codegems.png';
import logo from '../../../src/Assets/Images/logo2.png';
import {Button} from '@mui/material';
import {Link} from 'react-router-dom';  
import items from "../../Components/Sidebar/Sidebar.json"
import SidebarItem from "../../Components/Sidebar/SidebarItem"
import "../../CSS/Sidebar.css";



function Header() {
    const [bg, changeBGColor] = React.useState(1);
    // const [tx, text] = React.useState();
    // const [scrolled,setScrolled]=React.useState(false);
    // const handleScroll=() => {
    //     const offset=window.scrollY;
    //     if(offset >= 0){
    //       setScrolled(true);
    //     }
    //     else{
    //       setScrolled(false);
    //     }
    //   }
    
    //   useEffect(() => {
    //     window.addEventListener('scroll',handleScroll)
    //   })
    // let navbarClasses=['header'];
    //   if(scrolled){
    //     navbarClasses.push('scrolled');
    //   }
  return (
    <>
    <div className="container">
    <div className="wrap">
    { items.map((item, index) => <SidebarItem key={index} item={item} />) }
    </div>




    {/* <div className="wrap">
      <ul>
      <li><Link to="/register"
       onClick={() => changeBGColor(1)}
        style={{
          backgroundColor: bg === 1 ? "salmon" : " rgb(50, 51, 52)" }}>Register</Link></li>

      
        <li><Link to="/history"  onClick={() => changeBGColor(2)}
        style={{
          backgroundColor: bg === 2 ? "salmon" : " rgb(50, 51, 52)"
        }}>History</Link></li>
      
        <li><Link to="/addrole" onClick={() => changeBGColor(3)}
        style={{
          backgroundColor: bg === 3 ? "salmon" : " rgb(50, 51, 52)"
        }}>AddRole</Link></li>
          <li><Link to="/details" onClick={() => changeBGColor(4)}
        style={{
          backgroundColor: bg === 4 ? "salmon" : " rgb(50, 51, 52)"
        }}>Doctor-Details</Link></li>
          <li><Link to="/livestatus" onClick={() => changeBGColor(5)}
        style={{
          backgroundColor: bg === 5 ? "salmon" : " rgb(50, 51, 52)"
        }}>Availability</Link></li>
      </ul>
    </div> */}
  </div>


    </>
    )
}

export default Header