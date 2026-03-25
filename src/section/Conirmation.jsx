import Header from '../components/header/header'
import './Confirmation.css'

const Conirmation = () => {
  return (
    <>
      <Header/>
      <div className="success-container">
        {/* Left Side: Summary */}
        <div className="summary-section">
          <div className="success-badge">✓</div>
          <h1>Report <br /><span>Submitted</span> <br />Successfully.</h1>
          <p className="subtitle">
            Your anonymous report has been received and encrypted. It will be reviewed and published to the community feed within a few minutes.
          </p>

          <div className="ref-box">
            <label>YOUR REFERENCE ID</label>
            <h3>RF - 2026 - 03 - K8X92</h3>
            <p>Save this to track your report. No account needed.</p>
          </div>

          <div className="action-buttons">
            <button className="btn-dark">Copy ID</button>
            <button className="btn-outline">View Feed →</button>
            <button className="btn-outline">Submit Another</button>
          </div>
        </div>

        {/* Right Side: Status & Reminders */}
        <div className="status-card">
  <h2 className="card-title">REPORT STATUS</h2>
  
  <div className="timeline-container">
    
    {/* Step 1 */}
    <div className="timeline-item">
      <div className="stepper-col">
        <div className="circle completed">✓</div>
        <div className="vertical-line"></div>
      </div>
      <div className="content-col">
        <h4>Report Received</h4>
        <p>Accepted and end-to-end encrypted.</p>
        <span className="timestamp">TODAY - 14:32:07</span>
      </div>
    </div>

    {/* Step 2 */}
    <div className="timeline-item">
      <div className="stepper-col">
        <div className="circle completed">✓</div>
        <div className="vertical-line"></div>
      </div>
      <div className="content-col">
        <h4>Metadata Stripped</h4>
        <p>All personal metadata removed from files.</p>
        <span className="timestamp">TODAY - 14:32:09</span>
      </div>
    </div>

    {/* Step 3 (Active) */}
    <div className="timeline-item">
      <div className="stepper-col">
        <div className="circle active"></div>
        <div className="vertical-line"></div>
      </div>
      <div className="content-col">
        <h4>Automated Review</h4>
        <p>Scanning content and verifying location data.</p>
        <span className="status-badge">IN PROGRESS</span>
      </div>
    </div>

    {/* Step 4 (Upcoming) */}
    <div className="timeline-item">
      <div className="stepper-col">
        <div className="circle upcoming">4</div>
        <div className="vertical-line hidden"></div>
      </div>
      <div className="content-col">
        <h4>Published to Feed</h4>
        <p>Report will appear in the community feed.</p>
        <span className="timestamp pending">PENDING - ~2-5 MIN</span>
      </div>
    </div>

  </div>
</div>
      </div>
    </>
  )
}

export default Conirmation
