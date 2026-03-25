import React from 'react'
import { assets } from '../../assets/assets'
import './Feed.css'

const Feed = () => {
  return (
    <div className='feed'>
      <div className="crime">
        <img src={assets.knife} alt="" />
        <h1>Assault</h1>
      </div>
      <p className='time'>Today 14:22</p>
      <h1>Physical altercation near Kejetia Market bus stop</h1>
      <p>Two men observe in a violent confrontation near the main bus stop. One appeared to have a blunt object.Bystanders dispersed quickly.No police visible at time of incident.</p>
      <div className="bottom-grid">
        <div className="location">
            <img src={assets.location} alt="" />
            <p>Kejetia,Kumasi Central -200m</p>
        </div>
        <div className="comment-area">
            <div className="participants">
                <img src={assets.checkmark} alt="" />
                <p>Confirm(12)</p>
            </div>
            <div className="comments">
                <img src={assets.comment} alt="" />
                <p>4</p>
            </div>
            <div className="flag">
                <img src={assets.flag} alt="" />
                <p>Flag</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Feed
