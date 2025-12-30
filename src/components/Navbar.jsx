import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        
        {/* Logo */}
        <NavLink to="/" className="logo">
          <img src={logo} alt="Lucky Battery Logo" />
        </NavLink>

        {/* Navigation */}
        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

      </div>
    </header>
  )
}

export default Navbar
