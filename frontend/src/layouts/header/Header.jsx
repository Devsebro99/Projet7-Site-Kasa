import React from 'react'
import { Link } from 'react-router-dom'

import myImage from '../../assets/logo_header.svg'
import './header.css'

function Header() {
  return (
    <div className="kasaHead">
      <img className="kasaHead_img" src={myImage} alt="Logo Kasa" />
      <nav className="kasaHead-nav">
        <ul className="kasaHead-menu">
          <li className="kasaHead-liste">
            <Link to="/" className="kasaHead_style">
              Accueil
            </Link>
          </li>
          <li className="kasaHead-liste">
            <Link to="/apropos" className="kasaHead_style">
              A propos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
