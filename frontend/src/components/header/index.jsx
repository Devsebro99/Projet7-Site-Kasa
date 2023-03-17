import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import myImage from '../../assets/logo_header.svg'
import '../../styles/css/header.css'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ff6060;
  font-size: 24px;
  padding: 20px;
  height: 34px;
  width: 136px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

function Header() {
  return (
    <div className="kasaHead">
      <img src={myImage} alt="Logo Kasa" />
      <nav className="kasaHead-nav">
        <ul className="kasaHead-menu">
          <li className="kasaHead-liste">
            <StyledLink to="/">Accueil</StyledLink>
          </li>
          <li className="kasaHead-liste">
            <StyledLink to="/apropos">A propos</StyledLink>
          </li>
          <li className="kasaHead-liste">
            <StyledLink to="/error">Error404</StyledLink>
          </li>
          <li className="kasaHead-liste">
            <StyledLink to="/logement">Logement</StyledLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
