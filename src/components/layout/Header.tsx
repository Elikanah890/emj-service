import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo className="h-12 w-auto" />
          <span className={`ml-2 font-serif text-xl font-bold ${isScrolled ? 'text-secondary-navy' : 'text-white'}`}>
            EMJ SERVICE
          </span>
        </Link>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks isScrolled={isScrolled} />
          <a 
            href="tel:+255692216777" 
            className="flex items-center gap-2 bg-secondary-gold hover:bg-secondary-darkGold text-white px-4 py-2 rounded-full transition-colors"
          >
            <Phone size={18} />
            <span>+255 692 216 777</span>
          </a>
        </nav>
        
        {/* Mobile menu toggle */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-secondary-navy"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <NavLinks isMobile={true} isScrolled={true} />
              <a 
                href="tel:+255692216777" 
                className="flex items-center justify-center gap-2 bg-secondary-gold text-white px-4 py-2 rounded-full"
              >
                <Phone size={18} />
                <span>+255 692 216 777</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinksProps {
  isMobile?: boolean;
  isScrolled: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ isMobile = false, isScrolled }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const textColor = isScrolled ? 'text-secondary-navy' : 'text-white';
  
  return (
    <>
      <Link to="/" className={`${textColor} hover:text-secondary-gold transition-colors font-medium`}>
        Home
      </Link>
      
      <div className="relative">
        <button 
          onClick={() => setServicesOpen(!servicesOpen)}
          className={`flex items-center ${textColor} hover:text-secondary-gold transition-colors font-medium`}
        >
          Services <ChevronDown size={16} className="ml-1" />
        </button>
        
        {servicesOpen && (
          <div className={`absolute ${isMobile ? 'relative' : 'mt-2 left-0'} bg-white shadow-md rounded-md overflow-hidden w-64 z-50`}>
            <Link 
              to="/services/decoration" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary-gold hover:text-white transition-colors"
            >
              Event Decoration
            </Link>
            <Link 
              to="/services/vehicles" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary-gold hover:text-white transition-colors"
            >
              Vehicle Registration
            </Link>
            <Link 
              to="/services/driving-license" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary-gold hover:text-white transition-colors"
            >
              Driving License
            </Link>
          </div>
        )}
      </div>
      
      <Link to="/about" className={`${textColor} hover:text-secondary-gold transition-colors font-medium`}>
        About
      </Link>
      
      <Link to="/contact" className={`${textColor} hover:text-secondary-gold transition-colors font-medium`}>
        Contact
      </Link>
    </>
  );
};

export default Header;