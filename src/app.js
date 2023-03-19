import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import About from './components/about';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import './App.css'

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="React-Portfolio/" element={<About />} />
        <Route path="React-Portfolio/portfolio" element={<Portfolio />} />
        <Route path="React-Portfolio/resume" element={<Resume />} />
        <Route path="React-Portfolio/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;