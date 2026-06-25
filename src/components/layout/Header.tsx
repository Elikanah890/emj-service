import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Sun, Moon } from 'lucide-react';
import Logo from '../ui/Logo';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [location]);

  const navLinkClass = isScrolled
    ? 'text-gray-700 dark:text-gray-200 hover:text-secondary-gold dark:hover:text-secondary-gold'
    : 'text-white/90 hover:text-white';
  const toggleBtnClass = isScrolled
    ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
    : 'text-white/80 hover:bg-white/10';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-sm border-b border-gray-100 dark:border-gray-800 py-2'
          : 'bg-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo className="h-10 sm:h-11 w-auto" />
          <span className={`ml-2 font-serif text-lg sm:text-xl font-bold ${navLinkClass}`}>
            EMJ SERVICE
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center space-x-1">
          <Link to="/" className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${navLinkClass}`}>
            {t('nav.home')}
          </Link>

          <div className="relative group">
            <button className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${navLinkClass}`}>
              {t('nav.services')} <ChevronDown size={14} className="ml-1 opacity-70" />
            </button>
            <div className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
              {[
                ['/services/decoration', 'services.dropdown.decoration'],
                ['/services/vehicles', 'services.dropdown.vehicles'],
                ['/services/driving-license', 'services.dropdown.license'],
              ].map(([to, key]) => (
                <Link key={to} to={to} className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-secondary-gold hover:text-white dark:hover:text-white transition-colors">
                  {t(key)}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/about" className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${navLinkClass}`}>
            {t('nav.about')}
          </Link>
          <Link to="/contact" className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${navLinkClass}`}>
            {t('nav.contact')}
          </Link>
        </nav>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-2">
          <button onClick={toggleTheme} className={`p-2 rounded-lg transition-colors ${toggleBtnClass}`} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button onClick={toggleLang} className={`px-2.5 py-1.5 rounded-lg text-xs font-bold border transition-colors ${toggleBtnClass} border-current`}>
            {lang === 'en' ? 'SW' : 'EN'}
          </button>
          <a href="https://wa.me/255692216777" target="_blank" rel="noopener noreferrer" className="ml-2 inline-flex items-center gap-2 bg-secondary-gold hover:bg-secondary-darkGold text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-md shadow-secondary-gold/25">
            <Phone size={16} />
            <span>{t('nav.whatsapp')}</span>
          </a>
        </div>

        {/* Mobile toggles */}
        <div className="flex lg:hidden items-center gap-1.5">
          <button onClick={toggleTheme} className={`p-2 rounded-lg transition-colors ${toggleBtnClass}`} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button onClick={toggleLang} className={`px-2 py-1 rounded-lg text-xs font-bold border transition-colors ${toggleBtnClass} border-current`}>
            {lang === 'en' ? 'SW' : 'EN'}
          </button>
          <button onClick={toggleMenu} className={`p-2 ml-1 ${isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white'}`} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 shadow-lg">
          <div className="px-4 py-5 space-y-1">
            <Link to="/" className="block px-3 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium text-sm">
              {t('nav.home')}
            </Link>
            <Link to="/services/decoration" className="block px-3 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium text-sm">
              {t('services.dropdown.decoration')}
            </Link>
            <Link to="/services/vehicles" className="block px-3 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium text-sm">
              {t('services.dropdown.vehicles')}
            </Link>
            <Link to="/services/driving-license" className="block px-3 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium text-sm">
              {t('services.dropdown.license')}
            </Link>
            <Link to="/about" className="block px-3 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium text-sm">
              {t('nav.about')}
            </Link>
            <Link to="/contact" className="block px-3 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium text-sm">
              {t('nav.contact')}
            </Link>
            <a href="https://wa.me/255692216777" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-secondary-gold hover:bg-secondary-darkGold text-white px-4 py-3 rounded-full font-medium text-sm mt-3 min-h-[44px]">
              <Phone size={18} />
              <span>{t('nav.whatsapp')}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
