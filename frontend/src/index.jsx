import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/header'
import Footer from './components/footer'
import Error from './components/error'
import Logement from './pages/logement'

import './styles/css/index.css'

const Accueil = lazy(() => import('./pages/accueil'))
const Apropos = lazy(() => import('./pages/apropos'))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <div className="pageStyle">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Accueil />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/logement" element={<Logement />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Suspense>
      </div>
    </Router>
  </React.StrictMode>
)
