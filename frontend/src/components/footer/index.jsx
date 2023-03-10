import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  color: #ffffff;
  maw-width: 1440px;
  height: 209px;
`
const TextStyle = styled.p`
Font size: 24px;
`

function Footer() {
  return (
    <FooterStyle>
      <img src="../../assets/Logo-Kasa.png" alt="Logo Kasa" />
      <TextStyle>© 2020 Kasa.All rights reserved</TextStyle>
    </FooterStyle>
  )
}

export default Footer
