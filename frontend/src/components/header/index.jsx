import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 68px;
  max-width: 1240px;
  background-color: #blue;
  margin: 40px 100px;
`
const LogoStyle = styled.img`
  border: 2px solid black;
  height: 63px;
  width: 210.32px;
`
const Nav = styled.nav`
  align-content: center;
  justify-content: center;
  height: 34px;
  width: 309;
`

const MenuStyle = styled.ul`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: right;
  height: 34px;
  width: 309;
  margin: 0px;
`

const Liste = styled.li`
  list-style-type: none;
`

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
    <HeaderStyle>
      <LogoStyle src="../../assets/logo.png" alt="Logo Kasa" />
      <Nav>
        <MenuStyle>
          <Liste>
            <StyledLink to="/">Accueil</StyledLink>
          </Liste>
          <Liste>
            <StyledLink to="/apropos">A propos</StyledLink>
          </Liste>
        </MenuStyle>
      </Nav>
    </HeaderStyle>
  )
}

export default Header
