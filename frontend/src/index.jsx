import './styles/css/normalize/normalize.css'
import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './layouts/header/Header'
import Footer from './layouts/footer/Footer'

import './styles/css/index.css'

const Accueil = lazy(() => import('./pages/accueil/Accueil'))
const Apropos = lazy(() => import('./pages/apropos/Apropos'))
const Logement = lazy(() => import('./pages/logement/Logement'))
const Error = lazy(() => import('./layouts/error/Error'))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="pageStyle">
          <Header />
          <Routes>
            <Route exact path="/" element={<Accueil />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </Router>
  </React.StrictMode>
)
