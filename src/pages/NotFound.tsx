import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Phone } from 'lucide-react';
import { aboutData } from '../data/about';
import { useLanguage } from '../context/LanguageContext';

const NotFound: React.FC = () => {
  const { t } = useLanguage();
  const phoneNumber = aboutData.phone.replace(/\D/g, '');

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">
      <div className="text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-8xl sm:text-9xl font-serif font-bold text-secondary-gold">404</h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-navy dark:text-white mt-4">
            {t('notfound.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-base sm:text-lg">
            {t('notfound.subtitle')}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] bg-secondary-gold hover:bg-secondary-darkGold text-white rounded-lg transition-colors font-medium"
            >
              <Home className="h-5 w-5 mr-2" />
              {t('notfound.home')}
            </Link>
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium"
            >
              <Phone className="h-5 w-5 mr-2" />
              {t('notfound.contact')}
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default NotFound;
