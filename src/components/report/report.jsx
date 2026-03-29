import React from 'react'
import './report.css'
import { assets } from '../../assets/assets'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router'

const Report = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("")
  const navigate = useNavigate();

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
    }
  };

  const handleSubmit = () => {
    navigate('/confirmation');
  };

  return (
    <div className='reportform'>
      <div className='Top'>
        <div className="text">
          <h1>Report an Incident</h1>
          <p>All fields are required unless marked optional. Your identity stays anonymous.</p>
        </div>
        <button>Mark as Urgent</button>
      </div>
      <div className="report-area">
        <h1>Incident Category</h1>
        <div className="category-grid">
          <div className="category">
            <img src={assets.knife} alt="Assault" />
            <p>Assault</p>
          </div>
          <div className="category">
            <img src={assets.home} alt="Burglary" />
            <p>Burglary</p>
          </div>
          <div className="category">
            <img src={assets.suspicious} alt="Suspicious" />
            <p>Suspicious</p>
          </div>
          <div className="category">
            <img src={assets.fire} alt="Hazard" />
            <p>Hazard</p>
          </div>
          <div className="category">
            <img src={assets.car} alt="Road" />
            <p>Road</p>
          </div>
          <div className="category">
            <img src={assets.drug} alt="Drug Activity" />
            <p>Drug Activity</p>
          </div>
          <div className="category">
            <img src={assets.alert} alt="Vandalism" />
            <p>Vandalism</p>
          </div>
          <div className="category">
            <img src={assets.plus} alt="Other" />
            <p>Other</p>
          </div>
        </div>
        <div className="data-grid">
          <div className="data">
            <h1>Date</h1>
            <input type="date" />
          </div>
          <div className="data">
            <h1>Approximate Time</h1>
            <input type="time" />
          </div>
          <div className="data">
            <h1>Neighbourhood / Area</h1>
            <input type="text" />
          </div>
          <div className="data">
            <h1>Nearest Landmark</h1>
            <input type="text" />
          </div>
        </div>
        <div className="description">
          <h1>What Happened</h1>
          <textarea placeholder="Describe what you witnessed in as much detail as you can." />
        </div>
        <div className="incident-grid">
          <div className="incident">
            <h1>Severity Level</h1>
            <select name="Security">
              <option value="high">High — Immediate danger</option>
              <option value="severe">Severe danger</option>
              <option value="average">Average danger</option>
              <option value="low">Low danger</option>
            </select>
          </div>
          <div className="incident">
            <h1>Is incident ongoing?</h1>
            <select name="State">
              <option value="resolved">No — Already resolved</option>
              <option value="finished">No — Finished</option>
              <option value="ongoing">Yes — Still ongoing</option>
            </select>
          </div>
        </div>
        <div className="attachment-div">
          <h1>Attach Evidence <span style={{ fontWeight: 400, color: 'var(--text-4)' }}>(Optional)</span></h1>
          <div className="evidence" onClick={handleClick}>
            <img src={assets.attachment} alt="" />
            <p className="evidence-label">Click to browse</p>
            <p className="evidence-hint">Photos or video up to 30 MB. GPS and device metadata removed automatically.</p>
            {fileName && <p className="evidence-filename">📎 {fileName}</p>}
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept='image/*,video/*'
          />
        </div>
      </div>
      <div className="submit-area">
        <div className="policy">
          <p>By submitting, you confirm this report is accurate to the best of your knowledge.</p>
        </div>
        <button onClick={handleSubmit}>Submit Anonymously</button>
      </div>
    </div>
  )
}

export default Report
