import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import About from './components/about';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import './App.css'
import 'https://kit.fontawesome.com/8056713976.js'

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;