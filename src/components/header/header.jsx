import React from 'react'
import './header.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className='header'>
      <div className='leftside'>
        <div className='logo'>
            <img src={assets.siren}/>
            <p>Red Alert</p>
        </div>
      </div>
      <div className='middle'>
        <div className='sections'>
            <Link to ="/"><button className='nav-link'>Landing</button></Link>
            <Link to ="/report"><button className='nav-link'>Report form</button></Link>
            <Link to ="/feed"><button className='nav-link'>Community Feed</button></Link>
            <Link to ="/confirmation"><button className='nav-link'>Confirmation</button></Link>
        </div>
      </div>
      <div className='right'>
        <button className='cta-button'>Report Incident</button>
      </div>
    </div>
  )
}

export default Header
