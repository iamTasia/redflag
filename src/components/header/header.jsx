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
          <NavLink to="/confirmation" className='nav-link'>Confirmation</NavLink>
        </div>
      </nav>
      <div className='right'>
        <Link to="/report" className='cta-button'>Report Incident</Link>
      </div>
    </header>
  )
}

export default Header
