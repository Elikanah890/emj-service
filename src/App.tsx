import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import DecorationServices from './pages/services/DecorationServices';
import VehicleServices from './pages/services/VehicleServices';
import DrivingLicenseServices from './pages/services/DrivingLicenseServices';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/decoration" element={<DecorationServices />} />
            <Route path="/services/vehicles" element={<VehicleServices />} />
            <Route path="/services/driving-license" element={<DrivingLicenseServices />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;