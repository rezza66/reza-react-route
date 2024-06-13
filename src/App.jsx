import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NavigationBar from './component/Navbar';
import Footer from './component/Footer';
import './App.css'

function App() {
  return (
    <Router>
      <div id="root">
        <NavigationBar />
        <div className="content">
          <Routes>
              <Route exact path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>         
        <Footer />
      </div>
    </Router>
  );
}

export default App;
