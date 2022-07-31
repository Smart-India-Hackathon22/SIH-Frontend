import React from 'react'
import '../../src/CSS/Prototype.css';
import ReactPlayer from 'react-player'

import Flash from 'react-reveal/Flash';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import RubberBand from 'react-reveal/RubberBand';


function Prototype() {
  return (
    <>
       <Flash>
    <h1 className='prototype-heading'> Prototype :- </h1>
    </Flash>
    <p className='underline'></p>

    <div className='flex-video-details'>
    <Fade right>
    <ReactPlayer url='https://www.youtube.com/watch?v=dgvlbg2mTOw' />
    </Fade>
    <div className='details'>
    <RubberBand>
    <h1>WEB APPLICATION FOR AYUSH BASED AVAILABILITY</h1>
    </RubberBand>
    {/* <Fade left> */}
    <Zoom bottom cascade>
    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Sociosqu at commodo 
    cursus ornare suspendisse pulvinar dolor lectus tellus quam fermentum eu cras 
    aptent vehicula habitasse mus. Netus tempor augue torquent vel iaculis hac sagittis 
    posuere adipiscing orci phasellus class diam proin mollis. Ultrices montes fringilla 
    nullam torquent maximus consequat est facilisis varius fermentum non nec magna elementum.
     Finibus facilisi dui class iaculis adipiscing phasellus eleifend rhoncus nec neque diam 
     suspendisse placerat mus nullam integer et hac eget fringilla facilisis amet et eu.
      Vel est sed lacus aptent feugiat dis tincidunt cras cras vehicula dictum sit montes
       neque vehicula. Inceptos mus varius pellentesque sit; feugiat maecenas quisque nascetur 
       tellus pharetra fames eleifend natoque luctus taciti. Himenaeos efficitur nascetur ex finibus 
       augue cubilia mattis pellentesque elementum fames penatibus cras sit dictum sagittis non, hac eros 
       tempus blandit venenatis adipiscing. Dolor libero hac dis mus per fermentum; libero class scelerisque 
       proin netus in ex platea purus proin pharetra vivamus torquent aliquet suscipit sapien.</p>
    {/* </Fade> */}
    </Zoom>
    </div>
    </div>
    </>
  )
}

export default Prototype