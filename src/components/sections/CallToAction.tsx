import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';

const CallToAction: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-6 xs:py-8 sm:py-14 lg:py-20 bg-secondary-navy dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="rounded-2xl bg-gradient-to-br from-secondary-darkNavy to-secondary-navy dark:from-gray-900 dark:to-gray-800 p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 w-80 h-80 bg-secondary-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-4 sm:mb-5"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t('cta.heading')}
            </motion.h2>

            <motion.p
              className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t('cta.subheading')}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button to="/contact" variant="gold" size="lg" icon={<ArrowRight size={18} />} className="w-full sm:w-auto">
                {t('cta.primary')}
              </Button>
              <Button external to="https://wa.me/255692216777" variant="outline" size="lg" className="w-full sm:w-auto">
                {t('cta.secondary')}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
