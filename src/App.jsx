import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './page/Home.jsx'
import Skill from './page/Skill.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
    <html data-theme="cupcake"></html>
     <Router>
      <Navbar className="navbar" />
      <Routes>
        <Route path="/" element={<Home className="home" />} />
        <Route path="/skill" element={<Skill className="skill" />} />
      </Routes>
      <Footer/>
    </Router>
    

    
      
    </>
  )
}

export default App
