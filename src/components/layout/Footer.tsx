import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from '../ui/Logo';
import { aboutData } from '../../data/about';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Logo className="h-12 w-auto text-white" />
              <span className="ml-2 font-serif text-xl font-bold text-secondary-gold">EMJ SERVICE</span>
            </div>
            <p className="text-gray-300 mb-4">
              Professional event decoration and vehicle registration services in Tanzania.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-secondary-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-secondary-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-secondary-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-semibold text-secondary-gold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/decoration" className="text-gray-300 hover:text-white transition-colors">
                  Event Decoration
                </Link>
              </li>
              <li>
                <Link to="/services/vehicles" className="text-gray-300 hover:text-white transition-colors">
                  Vehicle Registration
                </Link>
              </li>
              <li>
                <Link to="/services/driving-license" className="text-gray-300 hover:text-white transition-colors">
                  Driving License
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-secondary-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-secondary-gold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-secondary-gold mt-1 mr-2" />
                <span>{aboutData.location.country}</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-secondary-gold mr-2" />
                <a href={`tel:${aboutData.phone}`} className="hover:text-secondary-gold transition-colors">
                  {aboutData.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-secondary-gold mr-2" />
                <a href={`mailto:${aboutData.email}`} className="hover:text-secondary-gold transition-colors">
                  {aboutData.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} EMJ SERVICE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;