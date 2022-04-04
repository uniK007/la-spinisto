import React from 'react'
import "./Wheel.css";

const Wheel = () => {
  return (
    <div className='wheel-container'>

      <div className='wheel'>
        <div className='inner-wheel'>

          <div className='section'>
            {/* <span className='a1'>$100</span> */}
          </div>

          <div className='section'>
            {/* <span className='2'></span> */}
          </div>

          <div className='section'>
            {/* <span classNameName='3'></span> */}
          </div>

          <div className='section'>
            {/* <span classNameName='4'></span> */}
          </div>

          <div className='section'>
            {/* <span classNameName='5'></span> */}
          </div>

          <div className='section'>
            {/* <span classNameName='6'></span> */}
          </div>

        </div>
        {/*Inner transparent circle*/}
        <div id='circle'></div>
      </div>

      <div id='pointer'></div>
    </div>
  )
}

export default Wheel