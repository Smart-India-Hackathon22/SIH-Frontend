import React,{useEffect} from 'react';
import '../../../src/CSS/Header.css';
// import logo from '../../../src/Assets/Images/codegems.png';
import logo from '../../../src/Assets/Images/logo2.png';
import {Button} from '@mui/material';
import {Link} from 'react-router-dom';  

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
      <ul>
      <li><Link to="/register"
       onClick={() => changeBGColor(1)}
        style={{
          backgroundColor: bg === 1 ? "salmon" : " rgb(50, 51, 52)" }}>Register</Link></li>

        {/* <li id="toggle1"><a href="#">category<i className="fas fa-chevron-circle-down" id="arrow1"></i></a></li>
        <ul id="nested">
        
         
        </ul> */}
        {/* <script>
          document.getElementById("toggle1").addEventListener("click", () => {
            if (nested.style.display == "block") {
              nested.style.display = "none";
              arrow1.style.display = "block";
            }
            else {
              nested.style.display = "block";
              arrow2.style.display = "block";
            }


          });


        </script> */}
        <li><Link to="/history"  onClick={() => changeBGColor(2)}
        style={{
          backgroundColor: bg === 2 ? "salmon" : " rgb(50, 51, 52)"
        }}>History</Link></li>
        {/* <ul id="nested1">
          <li><a to="#">Dashborad</a></li>
          <li><a to="#">Dashborad</a></li>
        </ul> */}
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
        {/* <li><a href="#">more</a></li> */}
      </ul>
    </div>
  </div>



{/* 



    <div className="Footer">
        <div className="footer-nav">
            <ul>
            <li>
                    <Button className='footer-btn-link'>
                        <Link to="/Login" className='link'>Home</Link>
                    </Button>
                    </li>
                    <li>
                    <Button className='footer-btn-link'>
                        <Link to="/Login" className='link'>About US</Link>
                    </Button>
                    </li>
                    <li>
                    <Button className='footer-btn-link'>

                        <Link to="/Login" className='link'>Contact US</Link>
                    </Button>
                    </li>
                    <li>
                    <Button className='footer-btn-link'>
                        <Link to="/Login" className='link'>Login</Link>
                    </Button>
                    </li>
                    <li>
                    <Button className='footer-btn-link'>
                        <Link to="/Register" className='link'>Register</Link>
                    </Button>
                    </li>
                    </ul>
        </div>
        <div className="footer-logo">
            <img src={logo} alt='logo' className='logo' />
        </div>
    
            <center>
                <p className="Copyright">All Rights Reserved @ ADIT 2022</p>
            </center>
        </div> */}

















        {/* <section>
            <div className="header">
                <div className="header-logo">
                    <img src={logo} alt="logo" className='logo'/>
                </div>
                <div className="header-nav">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section> */}
    </>
    )
}

export default Header