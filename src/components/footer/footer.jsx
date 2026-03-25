import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <p>How it works</p>
      <div className='instructions-grid'>
        <div className='instruction'>
            <div className='number'>
                1
            </div>
            <h1><strong>Choose Incident Type</strong></h1>
            <p>Select from categories-assault,theft,suspicious activity,hazard and more</p>
        </div>
        <div className='instruction'>
            <div className='number'>
                2
            </div>
            <h1><strong>Add Details & Location</strong></h1>
            <p>Describe what u witnessed and where.Optionally attach photos with metadata removed</p>
        </div>
        <div className='instruction'>
            <div className='number'>
                3
            </div>
            <h1><strong>Submit & Track</strong></h1>
            <p>Your report is anonymous and published to the feed.Use your reference ID to follow up</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
