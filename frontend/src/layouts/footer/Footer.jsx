import React from 'react'
import logoFooter from '../../assets/logo_footer.svg'
import './footer.css'

function Footer() {
  return (
    <footer className="footerStyle">
      <img classname="footerStyle_img" src={logoFooter} alt="Logo Kasa" />
      <p className="footerStyle_copyright">© 2020 Kasa.All rights reserved</p>
    </footer>
  )
}

export default Footer
