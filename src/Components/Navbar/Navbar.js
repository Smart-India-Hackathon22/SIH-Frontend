import React from 'react';
import "../Navbar/Navbar.css";

import {Link} from 'react-router-dom';

function Navbar() {
    const [bg, changeBGColor] = React.useState(1);

  return (
    
    <>
    <header id="name">
        <Link to="/" className='link1' onClick={() => changeBGColor(1)}
        style={{
        //   color: bg === 1 ? "salmon" : " rgb(50, 51, 52)"
          color: bg === 1 ? "rgb(50, 51, 52)" : " rgb(50, 51, 52)"
        }}> Dashboard</Link>
        <div className='profile'>
        <Link to="/" className='link2' onClick={() => changeBGColor(2)}
        style={{
          color: bg === 2 ? "salmon" : " rgb(50, 51, 52)"
        }}> Profile</Link>
        <Link to="/" className='link2' onClick={() => changeBGColor(3)}
        style={{
          color: bg === 3 ? "salmon" : " rgb(50, 51, 52)"
        }}> Logout</Link>
        </div>

        {/* <Link to="/">  <Button className='header-btn'>Profile</Button></Link> */}
        {/* <Link to="/"> <Button className='header-btn'>Logut Out</Button></Link> */}
    </header>
    </>
  )
}

export default Navbar