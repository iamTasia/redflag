import React from 'react'
import './Alerts.css'

const Alerts = () => {
  return (
    <div className="sidebar">
    {/* Live Alerts Card */}
        <div className="alert-card">
            <div className="card-header">
                <div className="header-left">
                    <span>🔔</span>
                    <h3>Live Alerts</h3>
                </div>
                <span className="live-indicator">Live</span>
            </div>
            <div className="card-content">
                <div className="alert-item">
                    <p> <strong>New HIGH report</strong> near Kejetia — Assault.</p>
                </div>
                <div className="alert-item">
                    <p> <strong>Suspicious vehicle</strong> in Adum confirmed by 7.</p>
                    
                </div>
                <div className="alert-item">
                    <p><strong>Bantama hazard</strong> resolved by workers.</p>
                </div>
            </div>
        </div>

        {/* This Week Stats Card */}
        <div className="Rside-card">
            <div className="Rcard-header">
                <div className="header-left">
                    <span>📊</span>
                    <h3>This Week</h3>
                </div>
            </div>
            <div className="Rcard-content">
                <div className="stat-row">
                    <span>Reports filed</span>
                    <strong>48</strong>
                </div>
                <div className="stat-row">
                    <span>Resolved</span>
                    <strong>31</strong>
                </div>
                <div className="stat-row">
                    <span>Active reporters</span>
                    <strong>214</strong>
                </div>
                <div className="stat-row">
                    <span>Avg. response</span>
                    <strong>4.2h</strong>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Alerts
