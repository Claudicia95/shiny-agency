import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Freelances from './pages/Freelances'
import Results from './pages/Results'
import Error from './components/Error'
import Header from './components/Header'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
div {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
}
`


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Router>
      <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey/:questionNumber" element={<Survey />} />
          <Route path="/results" element={<Results />} />
          <Route path="/freelances" element={<Freelances />} />

          {/* La route générique doit être à la fin */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
  </React.StrictMode>
);
