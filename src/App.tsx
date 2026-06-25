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
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/decoration" element={<DecorationServices />} />
        <Route path="/services/vehicles" element={<VehicleServices />} />
        <Route path="/services/driving-license" element={<DrivingLicenseServices />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
