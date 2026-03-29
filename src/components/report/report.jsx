import React, { useRef, useState } from 'react'
import './report.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router'

const CATEGORIES = [
  { key: 'Assault',      icon: assets.knife,      label: 'Assault' },
  { key: 'Burglary',     icon: assets.home,       label: 'Burglary' },
  { key: 'Suspicious',   icon: assets.suspicious, label: 'Suspicious' },
  { key: 'Hazard',       icon: assets.fire,       label: 'Hazard' },
  { key: 'Road',         icon: assets.car,        label: 'Road' },
  { key: 'Drug Activity',icon: assets.drug,       label: 'Drug Activity' },
  { key: 'Vandalism',    icon: assets.alert,      label: 'Vandalism' },
  { key: 'Other',        icon: assets.plus,       label: 'Other' },
]

const now = new Date()
const today = now.toISOString().split('T')[0]
const currentTime = now.toTimeString().slice(0, 5)

const defaultState = {
  selectedCategories: [],
  date: today,
  time: currentTime,
  neighborhood: '',
  landmark: '',
  description: '',
  severity: 'high',
  ongoing: 'resolved',
  fileName: '',
}

const Report = () => {
  const fileInputRef = useRef(null)
  const navigate = useNavigate()

  const [selectedCategories, setSelectedCategories] = useState(defaultState.selectedCategories)
  const [date, setDate] = useState(defaultState.date)
  const [time, setTime] = useState(defaultState.time)
  const [neighborhood, setNeighborhood] = useState(defaultState.neighborhood)
  const [landmark, setLandmark] = useState(defaultState.landmark)
  const [description, setDescription] = useState(defaultState.description)
  const [severity, setSeverity] = useState(defaultState.severity)
  const [ongoing, setOngoing] = useState(defaultState.ongoing)
  const [fileName, setFileName] = useState(defaultState.fileName)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const toggleCategory = (key) => {
    setSelectedCategories(prev =>
      prev.includes(key) ? prev.filter(c => c !== key) : [...prev, key]
    )
  }

  const handleFileClick = () => fileInputRef.current.click()

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) setFileName(file.name)
  }

  const resetForm = () => {
    setSelectedCategories(defaultState.selectedCategories)
    setDate(defaultState.date)
    setTime(defaultState.time)
    setNeighborhood(defaultState.neighborhood)
    setLandmark(defaultState.landmark)
    setDescription(defaultState.description)
    setSeverity(defaultState.severity)
    setOngoing(defaultState.ongoing)
    setFileName(defaultState.fileName)
    setError('')
    setIsSubmitting(false)
    if (fileInputRef.current) fileInputRef.current.value = ''
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = () => {
    if (selectedCategories.length === 0) {
      setError('Please select at least one incident category.')
      return
    }
    if (!date) {
      setError('Please provide a date.')
      return
    }
    if (!time) {
      setError('Please provide an approximate time.')
      return
    }
    if (!neighborhood.trim()) {
      setError('Please provide a neighbourhood or area.')
      return
    }
    if (!description.trim()) {
      setError('Please describe what happened.')
      return
    }
    setError('')
    setIsSubmitting(true)
    // Brief delay for the submit animation before navigating
    setTimeout(() => {
      navigate('/confirmation', {
        state: { selectedCategories, date, time, neighborhood, landmark, description, severity, ongoing },
      })
    }, 500)
  }

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
          {CATEGORIES.map(({ key, icon, label }) => (
            <div
              key={key}
              className={`category${selectedCategories.includes(key) ? ' selected' : ''}`}
              onClick={() => toggleCategory(key)}
              role="button"
              aria-pressed={selectedCategories.includes(key)}
            >
              <img src={icon} alt={label} />
              <p>{label}</p>
            </div>
          ))}
        </div>

        <div className="data-grid">
          <div className="data">
            <h1>Date</h1>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} />
          </div>
          <div className="data">
            <h1>Approximate Time</h1>
            <input type="time" value={time} onChange={e => setTime(e.target.value)} />
          </div>
          <div className="data">
            <h1>Neighbourhood / Area</h1>
            <input
              type="text"
              value={neighborhood}
              onChange={e => setNeighborhood(e.target.value)}
              placeholder="e.g. Brunei, Ayeduase"
            />
          </div>
          <div className="data">
            <h1>Nearest Landmark <span style={{ fontWeight: 400, color: 'var(--text-4)' }}>(Optional)</span></h1>
            <input
              type="text"
              value={landmark}
              onChange={e => setLandmark(e.target.value)}
              placeholder="e.g. Near Total petrol station"
            />
          </div>
        </div>

        <div className="incident-grid">
          <div className="incident">
            <h1>Severity Level</h1>
            <select value={severity} onChange={e => setSeverity(e.target.value)}>
              <option value="high">High — Immediate danger</option>
              <option value="severe">Severe danger</option>
              <option value="average">Average danger</option>
              <option value="low">Low danger</option>
            </select>
          </div>
          <div className="incident">
            <h1>Is incident ongoing?</h1>
            <select value={ongoing} onChange={e => setOngoing(e.target.value)}>
              <option value="resolved">No — Already resolved</option>
              <option value="finished">No — Finished</option>
              <option value="ongoing">Yes — Still ongoing</option>
            </select>
          </div>
        </div>

        <div className="description">
          <h1>What Happened</h1>
          <textarea
            placeholder="Describe what you witnessed in as much detail as you can."
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>

        <div className="attachment-div">
          <h1>Attach Evidence <span style={{ fontWeight: 400, color: 'var(--text-4)' }}>(Optional)</span></h1>
          <div className="evidence" onClick={handleFileClick}>
            <img src={assets.attachment} alt="" />
            <p className="evidence-label">Click to browse</p>
            <p className="evidence-hint">Photos or video up to 30 MB. GPS and device metadata removed automatically.</p>
            {fileName && <p className="evidence-filename">📎 {fileName}</p>}
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*,video/*"
          />
        </div>
      </div>

      {error && <p key={error} className="form-error">{error}</p>}

      <div className="submit-area">
        <div className="policy">
          <p>By submitting, you confirm this report is accurate to the best of your knowledge.</p>
        </div>
        <div className="submit-buttons">
          <button className="btn-secondary" onClick={resetForm} disabled={isSubmitting}>Start New Report</button>
          <button className="btn-primary" onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="btn-spinner" />
                Submitting…
              </>
            ) : (
              'Submit Anonymously'
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Report
