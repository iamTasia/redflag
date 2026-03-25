import { assets } from '../../../assets/assets'
import './Incident.css'

const Incident = () => {
  return (
    <div className="map-card">
      <div className="map-header">
        <img src={assets.location} alt="pin" />
        <span>Incident Map</span>
      </div>

      <div className="map-viewport">
        {/* The Grid Background */}
        <div className="map-grid"></div>
        
        {/* The City Label */}
        <div className="city-label">KUMASI - LIVE</div>

        {/* Incident Dots (Manual positions for the mockup) */}
        <div className="dot green" style={{ top: '60%', left: '30%' }}></div>
        <div className="dot green" style={{ top: '45%', left: '42%' }}></div>
        <div className="dot red" style={{ top: '35%', left: '58%' }}></div>
        <div className="dot green" style={{ top: '48%', left: '70%' }}></div>
        <div className="dot red" style={{ top: '65%', left: '60%' }}></div>
      </div>

      <div className="map-footer">
        <p>48 incidents shown. Zoom to filter by neighbourhood.</p>
      </div>
    </div>
  )
}

export default Incident
