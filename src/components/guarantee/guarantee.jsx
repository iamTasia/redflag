import React from 'react'
import './guarantee.css'
import { assets } from '../../assets/assets'

const Guarantee = () => {

  return (
    <div className='guarantee'>
      <img src={assets.lock} alt="" />
      <h1>Your anonymous is guaranteed</h1>
      <p>No personal information is collected.End-to-end encrypted.No login needed</p>
      <div className="g-feature">
        <img src="" alt="" />
        <p>End-to-end encrypted</p>
      </div>
      <div className="g-feature">
        <img src="" alt="" />
        <p>No IP address logged</p>
      </div>
      <div className="g-feature">
        <img src="" alt="" />
        <p>File metadata stripped</p>
      </div>
      <div className="g-feature">
        <img src="" alt="" />
        <p>No account required</p>
      </div>
      <div className="session-div">
        <h1>ANONYMOUS SESSION ID</h1>
        <p>RF-7X2K-9M4P-Q8ZJ</p>
      </div>
    </div>
  )
}

export default Guarantee
