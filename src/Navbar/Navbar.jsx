import './navbar.css'
import navbarLogo from './logo5.png'
import React, { useState } from 'react'
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <div className="main_navbar">
        <div className="navbar">
          <div className="logo-container">
            <img className="logo" src={navbarLogo} alt=" Shakti Stree" />
            <div className="toggle">
              <div className="menu-icon" onClick={toggleMenu}>
                <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
              </div>
            </div>
          </div>
          <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
            <li className="nav-btn" to="/">
              Home
            </li>
            <li className="nav-btn" to="/">
              About
            </li>
            <li className="nav-btn" to="/">
              Contact
            </li>
            <li className="nav-btn" to="/">
              Home
            </li>
            <li className="nav-btn" to="/">
              About
            </li>
            <li className="nav-btn" to="/">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
