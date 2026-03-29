import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import './safe.css'

const STATS = [
  { target: 12480, suffix: '',    label: 'Reports Filed',    format: (n) => n.toLocaleString() },
  { target: 94,    suffix: '%',   label: 'Anonymous Rate',   format: (n) => n + '%' },
  { target: 3,     suffix: ' min',label: 'Avg. Submit Time', format: (n) => n + ' min' },
]

function useCountUp(target, duration = 1300, delay = 420) {
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (started.current) return
      started.current = true

      const startTime = performance.now()
      const tick = (now) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        // ease-out quart
        const eased = 1 - Math.pow(1 - progress, 4)
        setValue(Math.round(eased * target))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, delay)

    return () => clearTimeout(timer)
  }, [target, duration, delay])

  return value
}

const StatItem = ({ stat, delayOffset }) => {
  const count = useCountUp(stat.target, 1300, 420 + delayOffset)
  return (
    <div className='stat-item'>
      <h1>{stat.format(count)}</h1>
      <h4>{stat.label}</h4>
    </div>
  )
}

const Safe = () => {
  return (
    <div className='safe-div'>
      <div className='safe-1'>
        100% Anonymous · No Sign-Up Required
      </div>
      <div className='safe-2'>
        <p>See Something,</p>
        <h1><i><span>Flag</span></i> Something.</h1>
        <h2>Stay Safe.</h2>
      </div>
      <div className='safe-3'>
        <p>Report crimes, suspicious activity, and unsafe situations in your community — completely anonymously, in under 3 minutes.</p>
      </div>
      <div className='safe-buttons'>
        <Link to="/report" className='report'>Submit a Report</Link>
        <Link to="/feed" className='community'>View Community Feed</Link>
      </div>
      <div className='safe-4'>
        {STATS.map((stat, i) => (
          <StatItem key={stat.label} stat={stat} delayOffset={i * 80} />
        ))}
      </div>
    </div>
  )
}

export default Safe
