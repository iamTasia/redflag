import React from 'react'
import './safe.css'

const Safe = () => {
  return (
    <div className='safe-div'>
      <div className='safe-1'>
        <p>100%Anonymous No Sign-Up Required</p>
      </div>
      <div className='safe-2'>
        <p>See Something,</p>
        <h1><i><span>Flag</span></i> Something.</h1>
        <h2>Stay Safe.</h2>
      </div>
      <div className='safe-3'>
        <p>Report crimes,suspicious activity and unsafe situations in your community-completely anonymously,in under 3 minutes</p>
      </div>
      <div className='safe-buttons'>
        <button className='report'>Submit a Report</button>
        <button className='community'>View Community Feed</button>
      </div>
      <hr />
      <div className='safe-4'>
        <div className='stat-item'>
            <h1>12,480</h1>
            <h4>Reports Filed</h4>
        </div>
        <div className='stat-item'>
            <h1>94%</h1>
            <h4>Anonymous Rate</h4>
        </div>
        <div className='stat-item'>
            <h1>3min</h1>
            <h4>Avg. Submit Time</h4>
        </div>
      </div>
    </div>
  )
}

export default Safe
