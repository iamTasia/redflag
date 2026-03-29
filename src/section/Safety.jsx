import React from 'react'
import Header from '../components/header/header'
import './Safety.css'

const generalTips = [
  {
    icon: '👁',
    title: 'Stay Aware of Your Surroundings',
    desc: 'Keep your phone out of sight in crowded areas. Walk confidently and avoid looking distracted. Trust your instincts — if something feels off, move to a safer location.'
  },
  {
    icon: '🚶',
    title: 'Avoid Isolated Areas at Night',
    desc: 'Stick to well-lit, busy routes after dark. Walk with a friend or group when possible. Let someone know your route and expected arrival time.'
  },
  {
    icon: '📵',
    title: 'Limit Valuables in Public',
    desc: 'Keep cash, phones, and jewellery discreet, especially on public transport. Use inside pockets or secure bags. Avoid flashy displays that attract attention.'
  },
  {
    icon: '🏃',
    title: 'Know Your Exits',
    desc: 'In any building or public space, note the nearest exits. If a situation feels dangerous, leave calmly before it escalates. Never block your own escape route.'
  },
  {
    icon: '📞',
    title: 'Keep Emergency Numbers Saved',
    desc: 'Save Ghana\'s emergency number (112), KNUST Security (03220-62999), and your nearest hospital. A second\'s delay to search for a number can be critical.'
  },
  {
    icon: '🤝',
    title: 'Look Out for Others',
    desc: 'If you see someone being followed or harassed, alert nearby people or security. Community vigilance is the most effective deterrent to crime.'
  },
]

const appTips = [
  {
    step: '01',
    title: 'Report Only What You Witness',
    desc: 'Submit reports based on incidents you personally witnessed or have direct knowledge of. Unverified rumours harm community trust and can mislead responders.'
  },
  {
    step: '02',
    title: 'Your Identity Is Never Stored',
    desc: 'RedFlag does not collect your name, phone number, IP address, or device identifiers. Reports are submitted through an anonymous pipeline — we cannot trace back to you.'
  },
  {
    step: '03',
    title: 'Metadata Is Stripped From Files',
    desc: 'Any photos or videos you attach are automatically stripped of GPS coordinates and device metadata before being stored. You cannot accidentally reveal your location through evidence.'
  },
  {
    step: '04',
    title: 'Do Not Report While in Danger',
    desc: 'If you are in immediate danger, call 112 first. Only file a report once you are in a safe location. Your safety comes before the report.'
  },
  {
    step: '05',
    title: 'Be Specific About Location',
    desc: 'Provide the neighbourhood, nearest landmark, or building name. Vague locations make it harder for authorities to respond. You are not sharing your own location — only the incident site.'
  },
  {
    step: '06',
    title: 'Save Your Reference ID',
    desc: 'After submitting, you\'ll receive a reference ID. Save it to track your report\'s status in the community feed. No account or login is ever needed.'
  },
]

const Safety = () => {
  return (
    <div>
      <Header />
      <main className="safety-main">

        <div className="safety-hero">
          <div className="safety-eyebrow">Safety Guidelines</div>
          <h1 className="safety-title">Stay Safe. <span>Stay Informed.</span></h1>
          <p className="safety-subtitle">
            Practical guidance for staying safe in your community and using RedFlag responsibly.
          </p>
        </div>

        <section className="safety-section">
          <div className="section-label">General Safety</div>
          <h2 className="section-heading">Personal Safety in Public</h2>
          <p className="section-subheading">Everyday habits that significantly reduce your risk.</p>
          <div className="tips-grid">
            {generalTips.map((tip) => (
              <div className="tip-card" key={tip.title}>
                <div className="tip-icon">{tip.icon}</div>
                <h3>{tip.title}</h3>
                <p>{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="safety-section safety-section--alt">
          <div className="section-label">Using RedFlag</div>
          <h2 className="section-heading">How to Report Safely</h2>
          <p className="section-subheading">What you should know before and after submitting a report.</p>
          <div className="steps-list">
            {appTips.map((tip) => (
              <div className="step-card" key={tip.step}>
                <div className="step-number">{tip.step}</div>
                <div className="step-body">
                  <h3>{tip.title}</h3>
                  <p>{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="safety-cta">
          <p>Ready to make your community safer?</p>
          <a href="/report" className="safety-cta-btn">Submit a Report</a>
        </div>

      </main>
    </div>
  )
}

export default Safety
