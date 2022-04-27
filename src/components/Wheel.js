import React, { useImperativeHandle } from 'react'
import "./Wheel.css";

const Wheel = React.forwardRef((props, ref) => {

  useImperativeHandle(ref, () => ({
    spin() {
      let wheel = document.querySelector('.wheel')
      let degrees = Math.floor(3600 + Math.random() * 3600)
      wheel.style.transition = 'all 10s ease-out'
      wheel.style.transform = `rotate(${degrees}deg)`
    }
  }))

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
})

export default Wheel