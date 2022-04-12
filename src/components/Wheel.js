import React from 'react'
import "./Wheel.css";

const Wheel = () => {
  return (
    <div className='wheel-container'>

      <div className='wheel'>
        <div className='inner-wheel'>

          <div className='section'>
            <span className='amount'>Retry</span>
          </div>

          <div className='section'>
            <span className='amount'>$100</span>
          </div>

          <div className='section'>
            <span className='amount'>Try again!!</span>
          </div>

          <div className='section'>
            <span className='amount'>$1000</span>
          </div>

          <div className='section'>
            <span className='amount'>oops!</span>
          </div>

          <div className='section'>
            <span className='amount'>$500</span>
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