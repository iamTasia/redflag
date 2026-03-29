import React from 'react'
import './features.css'
import { assets } from '../../assets/assets'

const Features = () => {
  return (
    <div className='features'>
      <div className='feature'>
        <img src={assets.lock} alt="Lock icon" />
        <div>
          <h1><strong>Zero Identity Tracking</strong></h1>
          <p>No IP logging, no accounts, no emails. Your data never touches our servers.</p>
        </div>
      </div>
      <div className='feature'>
        <img src={assets.alert} alt="Alert icon" />
        <div>
          <h1><strong>Real-Time Community Alerts</strong></h1>
          <p>Verified reports are published to the community feed instantly so neighbours stay informed.</p>
        </div>
      </div>
      <div className='feature'>
        <img src={assets.location} alt="Location pin icon" />
        <div>
          <h1><strong>Fuzzy Location Reporting</strong></h1>
          <p>Pin incidents on a map without revealing your exact position. Precision without exposure.</p>
        </div>
      </div>
      <div className='feature'>
        <img src={assets.attachment} alt="Attachment icon" />
        <div>
          <h1><strong>Evidence Uploads</strong></h1>
          <p>Attach photos or short clips. All metadata — GPS, device info — is stripped before upload.</p>
        </div>
      </div>
    </div>
  )
}

export default Features
