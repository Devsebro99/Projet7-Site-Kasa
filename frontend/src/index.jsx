import './styles/css/normalize/normalize.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './layouts/header/Header'
import Footer from './layouts/footer/Footer'
import Error from './layouts/error/Error'
import Logement from './pages/logement/Logement'
import Accueil from './pages/accueil/Accueil'
import Apropos from './pages/apropos/Apropos'

import './styles/css/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <div className="pageStyle">
        <Header />
        <Routes>
          <Route exact path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/logement" element={<Logement />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
)
