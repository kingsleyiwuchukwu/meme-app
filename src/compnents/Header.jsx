import React from 'react'
import logo from '../assets/images/logo.png'

const Header = () => {
  return (

    <header className='head-container navbar'>
        <div className='header'>
        <img src= {logo} alt="logo" className='navbar-logo' />
        <h2 className='logo-title'>Meme generator</h2>
        </div>
        <h3 className='logo-subtitle'> React Course - Have fun</h3>
        
        
    </header>
  )
}

export default Header