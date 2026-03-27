import React from 'react'
import './header.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className='header'>
      <div className='leftside'>
        <Link to ="/">
          <div className='logo'>
            <img src={assets.siren}/>
            <p>Red Alert</p>
          </div>
        </Link>
      </div>
      <div className='middle'>
        <div className='sections'>
            <Link to ="/feed"><button className='nav-link'>Community Feed</button></Link>
            <Link to ="/confirmation"><button className='nav-link'>Confirmation</button></Link>
        </div>
      </div>
      <div className='right'>
        <Link to ="/report">
          <button className='cta-button'>Report Incident</button>
        </Link>
      </div>
    </div>
  )
}

export default Header
