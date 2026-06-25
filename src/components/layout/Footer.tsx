import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import Logo from '../ui/Logo';
import { aboutData } from '../../data/about';
import { useLanguage } from '../../context/LanguageContext';

const footerLinks = [
  { to: '/services/decoration', key: 'services.dropdown.decoration' },
  { to: '/services/vehicles', key: 'services.dropdown.vehicles' },
  { to: '/services/driving-license', key: 'services.dropdown.license' },
] as const;

const quickLinks = [
  { to: '/', key: 'footer.home' },
  { to: '/about', key: 'footer.aboutUs' },
  { to: '/contact', key: 'footer.contact' },
] as const;

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1628] dark:bg-gray-950 text-white pt-14 sm:pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Logo className="h-10 w-auto" />
              <span className="ml-2 font-serif text-xl font-bold text-secondary-gold">EMJ SERVICE</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">{t('footer.description')}</p>
            <div className="flex items-center gap-3">
              <a
                href={aboutData.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="h-9 w-9 rounded-full bg-secondary-gold/15 hover:bg-secondary-gold text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Phone size={17} />
              </a>
              <a
                href={aboutData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Facebook size={17} />
              </a>
              <a
                href={aboutData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram size={17} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {footerLinks.map(({ to, key }) => (
                <li key={to}>
                  <Link to={to} className="text-gray-400 hover:text-secondary-gold transition-colors text-sm">{t(key)}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ to, key }) => (
                <li key={to}>
                  <Link to={to} className="text-gray-400 hover:text-secondary-gold transition-colors text-sm">{t(key)}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{t('footer.contactUs')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm">
                <MapPin size={15} className="text-secondary-gold mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">{aboutData.location.country}</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Phone size={15} className="text-secondary-gold flex-shrink-0" />
                <a href={`tel:${aboutData.phone}`} className="text-gray-400 hover:text-secondary-gold transition-colors">{aboutData.phone}</a>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Mail size={15} className="text-secondary-gold flex-shrink-0" />
                <a href={`mailto:${aboutData.email}`} className="text-gray-400 hover:text-secondary-gold transition-colors">{aboutData.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-xs sm:text-sm">
          <p>&copy; {year} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
