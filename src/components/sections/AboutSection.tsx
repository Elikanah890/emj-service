import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Star, Calendar, Award, PenTool, Users, Clock } from 'lucide-react';
import { aboutData } from '../../data/about';
import { useLanguage } from '../../context/LanguageContext';

const features = [
  { icon: Star, titleKey: 'about.features.quality', descKey: 'about.features.qualityDesc' },
  { icon: Calendar, titleKey: 'about.features.timely', descKey: 'about.features.timelyDesc' },
  { icon: Award, titleKey: 'about.features.experts', descKey: 'about.features.expertsDesc' },
  { icon: PenTool, titleKey: 'about.features.creative', descKey: 'about.features.creativeDesc' },
];

const stats = [
  { icon: Star, value: '5+', label: 'Years of Experience' },
  { icon: Users, value: '100+', label: 'Happy Clients' },
  { icon: Clock, value: '24/7', label: 'Support' },
];

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-6 xs:py-8 sm:py-14 lg:py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/logo.jpeg" alt="EMJ Service" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-secondary-gold text-white px-5 sm:px-6 py-4 sm:py-5 rounded-xl shadow-xl">
              <div className="text-2xl sm:text-3xl font-bold leading-none">5+</div>
              <div className="text-xs sm:text-sm uppercase tracking-wider mt-1 opacity-90">{t('about.stats.experience')}</div>
            </div>
          </motion.div>

          {/* Content side */}
          <div>
            <SectionHeading
              title={t('about.heading')}
              subtitle={t('about.subheading')}
            />

            <motion.p
              className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t('about.story')}
            </motion.p>

            {/* Stats mini-row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-white dark:bg-gray-900 rounded-xl p-3 sm:p-4 text-center shadow-sm border border-gray-100 dark:border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                >
                  <stat.icon size={18} className="text-secondary-gold mx-auto mb-1.5" />
                  <div className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}
                >
                  <div className="flex-shrink-0 h-9 w-9 rounded-lg bg-secondary-gold/10 flex items-center justify-center">
                    <feature.icon size={16} className="text-secondary-gold" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{t(feature.titleKey)}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{t(feature.descKey)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
