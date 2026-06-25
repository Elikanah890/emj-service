import { motion } from 'framer-motion';
import { PartyPopper, Car, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import { useLanguage } from '../../context/LanguageContext';

const servicesData = [
  {
    to: '/services/decoration',
    icon: PartyPopper,
    iconBg: 'bg-orange-50 dark:bg-orange-500/10',
    iconColor: 'text-orange-500',
    titleKey: 'services.decoration.title',
    descKey: 'services.decoration.desc',
    linkColor: 'text-orange-500 hover:text-orange-600',
  },
  {
    to: '/services/vehicles',
    icon: Car,
    iconBg: 'bg-amber-50 dark:bg-amber-500/10',
    iconColor: 'text-amber-500',
    titleKey: 'services.vehicles.title',
    descKey: 'services.vehicles.desc',
    linkColor: 'text-amber-500 hover:text-amber-600',
  },
  {
    to: '/services/driving-license',
    icon: FileText,
    iconBg: 'bg-green-50 dark:bg-green-500/10',
    iconColor: 'text-green-500',
    titleKey: 'services.license.title',
    descKey: 'services.license.desc',
    linkColor: 'text-green-500 hover:text-green-600',
  },
];

const ServicesOverview: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading
          title={t('services.heading')}
          subtitle={t('services.subheading')}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 sm:mt-12">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.to}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 ${service.iconBg} ${service.iconColor} rounded-xl mb-5 sm:mb-6`}>
                <service.icon size={24} className="sm:w-6 sm:h-6" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {t(service.titleKey)}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-6 flex-1">
                {t(service.descKey)}
              </p>

              {/* Link */}
              <Link
                to={service.to}
                className={`inline-flex items-center text-sm font-semibold ${service.linkColor} transition-colors group/link`}
              >
                Learn more
                <span className="ml-1.5 transition-transform group-hover/link:translate-x-1">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
