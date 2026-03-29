import React from 'react'
import Header from '../components/header/header'
import './Emergency.css'

const ghanaContacts = [
  {
    label: 'Unified Emergency',
    number: '112',
    description: 'Single number for police, fire & ambulance',
    priority: true,
  },
  {
    label: 'Police Emergency',
    number: '191',
    description: 'Ghana Police Service emergency line',
  },
  {
    label: 'Fire Service',
    number: '192',
    description: 'Ghana National Fire Service',
  },
  {
    label: 'National Ambulance',
    number: '193',
    description: 'National Ambulance Service',
  },
  {
    label: 'Police Toll-Free',
    number: '18555',
    description: 'Ghana Police general inquiries & emergencies',
  },
  {
    label: 'NADMO',
    number: '0299 350 030',
    description: 'National Disaster Management Organisation',
  },
]

const knustContacts = [
  {
    label: 'KNUST Security Hotline',
    number: '03220-62999',
    description: 'Main campus security emergency line',
    priority: true,
  },
  {
    label: 'KNUST Security Office',
    number: '03220-60229',
    description: 'Campus security general office',
  },
  {
    label: 'KNUST Police Station',
    number: '03220-60051',
    description: 'On-campus police station',
  },
  {
    label: 'KNUST Hospital',
    number: '+233 20 111 1049',
    description: '24-hour on-campus healthcare facility',
  },
  {
    label: 'KNUST Hospital Alt.',
    number: '+233 32 206 0320',
    description: 'Hospital main office line',
  },
  {
    label: 'Komfo Anokye Teaching Hospital',
    number: '+233 556 490 029',
    description: 'KATH — primary referral hospital in Kumasi',
  },
  {
    label: 'Ashanti Regional Police',
    number: '0299 207 770',
    description: 'Ashanti Regional Police HQ, Kumasi',
  },
  {
    label: 'Kumasi Police Info',
    number: '03220-22323',
    description: 'Kumasi Police general information line',
  },
]

const ContactCard = ({ label, number, description, priority }) => (
  <div className={`contact-card${priority ? ' contact-card--priority' : ''}`}>
    <div className="contact-top">
      <span className="contact-label">{label}</span>
      {priority && <span className="contact-badge">Primary</span>}
    </div>
    <a href={`tel:${number.replace(/\s/g, '')}`} className="contact-number">{number}</a>
    <p className="contact-desc">{description}</p>
  </div>
)

const Emergency = () => {
  return (
    <div>
      <Header />
      <main className="emergency-main">

        <div className="emergency-hero">
          <div className="emergency-eyebrow">Emergency Contacts</div>
          <h1 className="emergency-title">Help is One <span>Call Away.</span></h1>
          <p className="emergency-subtitle">
            Critical emergency numbers for Ghana and the KNUST community. Tap any number to call directly.
          </p>
          <div className="emergency-alert">
            <span className="alert-icon">⚠</span>
            <span>If you are in immediate danger, call <strong>112</strong> first — then file a report on RedFlag.</span>
          </div>
        </div>

        <div className="emergency-grid-wrapper">

          <section className="contact-section">
            <div className="contact-section-header">
              <div className="section-label">Ghana National</div>
              <h2 className="section-heading">National Emergency Services</h2>
              <p className="section-subheading">Available 24/7 across Ghana. 112 works even without airtime.</p>
            </div>
            <div className="contacts-grid">
              {ghanaContacts.map((c) => (
                <ContactCard key={c.number} {...c} />
              ))}
            </div>
          </section>

          <section className="contact-section">
            <div className="contact-section-header">
              <div className="section-label">KNUST &amp; Kumasi</div>
              <h2 className="section-heading">Campus &amp; Local Contacts</h2>
              <p className="section-subheading">On-campus security, KNUST hospital, and Kumasi area services.</p>
            </div>
            <div className="contacts-grid">
              {knustContacts.map((c) => (
                <ContactCard key={c.number} {...c} />
              ))}
            </div>
          </section>

        </div>

        <div className="emergency-note">
          <p>Numbers sourced from official Ghana Police Service, KNUST, KATH, NAS, and NADMO websites. Verify directly on official sites before publishing.</p>
        </div>

      </main>
    </div>
  )
}

export default Emergency
