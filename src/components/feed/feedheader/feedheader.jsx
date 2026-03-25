import React from 'react'
import './feedheader.css'

const Feedheader = () => {
  return (
    <div className="feed-header">
        <h1>Community Feed</h1>
        <p>48 verified incients near Kumasi.</p>
        <div className="crime-categories">
          <button>All</button>
          <button>High</button>
          <button>Average</button>
          <button>Low</button>
        </div>
    </div>
  )
}

export default Feedheader
