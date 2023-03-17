import React from 'react'

import logoFooter from '../../assets/logo_footer.svg'
import '../../styles/css/footer.css'

function Footer() {
  return (
    <footer className="footerStyle">
      <img src={logoFooter} alt="Logo Kasa" />
      <p className="copyright">© 2020 Kasa.All rights reserved</p>
    </footer>
  )
}

export default Footer
