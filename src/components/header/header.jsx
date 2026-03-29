import React, { useEffect, useState, startTransition } from 'react'
import './header.css'
import { assets } from '../../assets/assets'
import { Link, NavLink, useLocation } from 'react-router'
import { useTheme } from '../../context/ThemeContext.jsx'

const MOBILE_NAV_QUERY = '(max-width: 768px)'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { resolvedDark, toggleTheme } = useTheme()

  useEffect(() => {
    startTransition(() => setMenuOpen(false))
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_NAV_QUERY)
    const onChange = () => {
      if (!mq.matches) setMenuOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const t = requestAnimationFrame(() => {
      document.querySelector('.nav-drawer a')?.focus()
    })
    return () => cancelAnimationFrame(t)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      {menuOpen && (
        <>
          <button
            type="button"
            className="nav-overlay"
            aria-label="Close menu"
            onClick={closeMenu}
          />
          <div
            id="mobile-nav-drawer"
            className="nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <nav className="nav-drawer-inner" aria-label="Mobile">
              <NavLink to="/feed" className="nav-drawer-link" onClick={closeMenu}>
                Community Feed
              </NavLink>
              <NavLink to="/safety" className="nav-drawer-link" onClick={closeMenu}>
                Safety Guidelines
              </NavLink>
              <NavLink to="/emergency" className="nav-drawer-link" onClick={closeMenu}>
                Emergency Contacts
              </NavLink>
              <Link to="/report" className="cta-button nav-drawer-cta" onClick={closeMenu}>
                Report Incident
              </Link>
            </nav>
          </div>
        </>
      )}
      <div className="header-bar">
        <div className="leftside">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src={assets.redflagLogo} alt="RedFlag home" />
          </Link>
        </div>
        <nav className="middle" aria-label="Main">
          <div className="sections">
            <NavLink to="/feed" className="nav-link">Community Feed</NavLink>
            <NavLink to="/safety" className="nav-link">Safety Guidelines</NavLink>
            <NavLink to="/emergency" className="nav-link">Emergency Contacts</NavLink>
          </div>
        </nav>
        <div className="right">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-pressed={resolvedDark}
            aria-label={resolvedDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {resolvedDark ? (
              <svg className="theme-toggle-icon" viewBox="0 0 24 24" width="22" height="22" aria-hidden>
                <circle cx="12" cy="12" r="5" fill="currentColor" />
                <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </g>
              </svg>
            ) : (
              <svg className="theme-toggle-icon" viewBox="0 0 24 24" width="22" height="22" aria-hidden>
                <path
                  fill="currentColor"
                  d="M21 14.5A8.5 8.5 0 0 1 9.5 3a8.5 8.5 0 1 0 11.5 11.5Z"
                />
              </svg>
            )}
          </button>
          <Link to="/report" className="cta-button header-cta-desktop">Report Incident</Link>
          <button
            type="button"
            className="nav-menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className={`nav-menu-bars${menuOpen ? ' is-open' : ''}`} aria-hidden>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
