import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import ClientForm from './components/ClientForm'
import FreelanceForm from './components/FreelanceForm'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Router>
        <Header/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/survey/" element={<Survey/>} />
              <Route path="/ClientForm" element={<ClientForm/>}/>
              <Route path="/FreelanceForm" element={<FreelanceForm/>}/>
          </Routes>
        </Router>
  </React.StrictMode>,
document.getElementById('root')
)
 
