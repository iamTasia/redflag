import React from 'react'
import './report.css'
import { assets } from '../../assets/assets'
import { useRef,useState } from 'react'

const Report = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("")

  const handleClick = () => {
    // This 'clicks' the hidden input when the div is clicked
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
      console.log("File ready for upload:", selectedFile);
    }
  };

  return (
    <div className='reportform'>
      <div className='Top'>
        <div className="text">
          <h1>Report an Incident</h1>
          <p>Fields marked are required. Your identity stays anonymous</p>
        </div>
        <button>Mark as Urgent</button>
      </div>
      <div className="report-area">
        <h1>Incident Category</h1>
        <div className="category-grid">
          <div className="category">
            <img src={assets.knife} alt="" />
            <p>Assault</p>
          </div>
          <div className="category">
            <img src={assets.home} alt="" />
            <p>Burglary</p>
          </div>
          <div className="category">
            <img src={assets.suspicious} alt="" />
            <p>Suspicious</p>
          </div>
          <div className="category">
            <img src={assets.fire} alt="" />
            <p>Hazard</p>
          </div>
          <div className="category">
            <img src={assets.car} alt="" />
            <p>Road</p>
          </div>
          <div className="category">
            <img src={assets.drug} alt="" />
            <p>Drug Activity</p>
          </div>
          <div className="category">
            <img src={assets.siren} alt="" />
            <p>Vandalism</p>
          </div>
          <div className="category">
            <img src={assets.plus} alt="" />
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
            <h1>Neighbourhood/Area</h1>
            <input type="text" />
          </div>
          <div className="data">
            <h1>Nearest Landmark</h1>
            <input type="text" />
          </div>
        </div>
        <div className="description">
          <h1>What Happened</h1>
          <textarea/>
        </div>
        <div className="incident-grid">
          <div className="incident">
            <h1>Security Level</h1>
            <select name="Security" id="">
              <option value="High-Immediate danger">High-Immediate danger</option>
              <option value="Severe danger">Severe danger</option>
              <option value="Average danger">Average danger</option>
              <option value="Low danger">Low danger</option>
            </select>
          </div>
          <div className="incident">
            <h1>Is incident ongoing</h1>
            <select name="State" id="">
              <option value="No-Already Resolved">No-Already Resolved</option>
              <option value="No-Finished">No-Finished</option>
              <option value="Yes-Still ongoing">Yes-Still ongoing</option>
            </select>
          </div>
        </div>
        <div className="attachment-div">
          <h1>Attach Evidence is Optional</h1>
          <div className="evidence" onClick={handleClick}>
            <img src={assets.attachment} alt="" />
            <p>Click to browse</p>
            <p>Photos or video up to 30MB.GPS and device metadata removed automatically</p>
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
          <p>By submitting,you confirm this report is accurate to the best of your knowledge</p>
        </div>
        <button>Submit Anonymously</button>
      </div>
    </div>
  )
}

export default Report
