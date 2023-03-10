import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

import Header from './components/header'
import Footer from './components/footer'
import Error from './components/error'

import Logement from './pages/logement'

const Accueil = lazy(() => import('./pages/accueil'))
const Apropos = lazy(() => import('./pages/apropos'))

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Montserrat', Helvetica, sans-serif;
    }
`
const PageStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 1095px;
  width: 1240px;
  border: 2px solid black;
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <PageStyle>
        <GlobalStyle />
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Accueil />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/logement" element={<Logement />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
        <Footer />
      </PageStyle>
    </Router>
  </React.StrictMode>
)
