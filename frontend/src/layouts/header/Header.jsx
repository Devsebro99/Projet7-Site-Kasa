import React from 'react'
import { Link } from 'react-router-dom'

import myImage from '../../assets/logo_header.svg'
import './header.css'

function Header() {
  return (
    <div className="kasaHead">
      <img className="kasaHead_img" src={myImage} alt="Logo Kasa" />
      <nav className="kasaHead-nav">
        <Link to="/" className="kasaHead_style">
          Accueil
        </Link>
        <Link to="/apropos" className="kasaHead_style">
          A propos
        </Link>
      </nav>
    </div>
  )
}

export default Header
