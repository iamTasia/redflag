import React from 'react'
import './header.css'
import { assets } from '../../assets/assets'
import { Link, NavLink } from 'react-router'

const Header = () => {
  return (
    <header className='header'>
      <div className='leftside'>
        <Link to="/" className='logo'>
          <img src={assets.redflagLogo} alt="RedFlag home" />
        </Link>
      </div>
      <nav className='middle'>
        <div className='sections'>
          <NavLink to="/feed" className='nav-link'>Community Feed</NavLink>
          <NavLink to="/safety" className='nav-link'>Safety Guidelines</NavLink>
          <NavLink to="/emergency" className='nav-link'>Emergency Contacts</NavLink>
        </div>
      </nav>
      <div className='right'>
        <Link to="/report" className='cta-button'>Report Incident</Link>
      </div>
    </header>
  )
}

export default Header
