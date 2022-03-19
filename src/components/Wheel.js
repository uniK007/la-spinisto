import React from 'react'
import "./Wheel.css";

const Wheel = () => {
  return (
    <div className='wheel'>
      <div className='inner-wheel'>

        <div className='section'>
          {/* <span className='a1'>$100</span> */}
        </div>

        <div className='section'>
          {/* <span className='2'></span> */}
        </div>

        <div className='section'>
          {/* <span className='3'></span> */}
        </div>

        <div className='section'>
          {/* <span className='4'></span> */}
        </div>

        <div className='section'>
          {/* <span className='5'></span> */}
        </div>

        <div className='section'>
          {/* <span className='6'></span> */}
        </div>

      </div>
      {/*Inner transparent circle*/}
      <div id='circle'></div>
      
      <div id='pointer'></div>

    </div>
  )
}

export default Wheel