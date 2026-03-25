import React from 'react'
import Feedheader from '../components/feed/feedheader/feedheader'
import Header from '../components/header/header'
import Feed from '../components/feed/Feed'
import Incident from '../components/feed/Incident/Incident'
import Alerts from '../components/feed/Alerts/Alerts'

const Feedpage = () => {
  return (
    <div>
      {/* Adding the style tag directly here */}
      <style>{`
        .feed-grid {
          display: grid;
          grid-template-row: 1fr; /* 1x1 stack */
          gap: 5px;
          position:absolute;
          left:450px;
          top:200px;
        }
      `}</style>
      <Header/>
      <Feedheader/>
      <div className="feed-grid">
        {/* Your Feed items will stack vertically here */}
        <Feed/>
        <Feed/>
        <Feed/>
        <Feed/>
      </div>
      <Incident/>
      <Alerts/>
    </div>
  )
}

export default Feedpage