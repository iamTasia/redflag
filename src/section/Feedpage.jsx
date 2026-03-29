import React from 'react'
import Feedheader from '../components/feed/feedheader/feedheader'
import Header from '../components/header/header'
import Feed from '../components/feed/Feed'
import Incident from '../components/feed/Incident/Incident'
import Alerts from '../components/feed/Alerts/Alerts'
import './Feedpage.css'

const Feedpage = () => {
  return (
    <div>
      <Header />
      <main className="feed-main">
        <div className="feed-layout">
          <div className="feed-center">
            <Feedheader />
            <div className="feed-list">
              <Feed index={0} />
              <Feed index={1} />
              <Feed index={2} />
              <Feed index={3} />
            </div>
          </div>
          <aside className="feed-sidebar">
            <Incident />
            <Alerts />
          </aside>
        </div>
      </main>
    </div>
  )
}

export default Feedpage
