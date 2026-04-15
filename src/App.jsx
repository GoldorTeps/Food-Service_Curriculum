import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import Contenido from './pages/sections/Contenido'
import Campanas from './pages/sections/Campanas'
import Video from './pages/sections/Video'
import Editorial from './pages/sections/Editorial'
import IAWeb from './pages/sections/IAWeb'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contenido" element={<Contenido />} />
            <Route path="/campanas" element={<Campanas />} />
            <Route path="/video" element={<Video />} />
            <Route path="/editorial" element={<Editorial />} />
            <Route path="/ia-web" element={<IAWeb />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/caso/:category/:slug" element={<CaseStudy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
