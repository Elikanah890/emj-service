import { motion } from 'framer-motion';
import { PartyPopper, Car, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const servicesPreview = [
  {
    icon: PartyPopper,
    iconBg: 'bg-orange-100 dark:bg-orange-500/20',
    iconColor: 'text-orange-600 dark:text-orange-400',
    titleKey: 'services.decoration.title',
    descKey: 'services.decoration.desc',
    to: '/services/decoration',
  },
  {
    icon: Car,
    iconBg: 'bg-amber-100 dark:bg-amber-500/20',
    iconColor: 'text-amber-600 dark:text-amber-400',
    titleKey: 'services.vehicles.title',
    descKey: 'services.vehicles.desc',
    to: '/services/vehicles',
  },
  {
    icon: FileText,
    iconBg: 'bg-green-100 dark:bg-green-500/20',
    iconColor: 'text-green-600 dark:text-green-400',
    titleKey: 'services.license.title',
    descKey: 'services.license.desc',
    to: '/services/driving-license',
  },
];

const ServicePreview: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 -mt-3 xs:-mt-5 sm:-mt-8 lg:-mt-10 pb-6 xs:pb-8 sm:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {servicesPreview.map((service, index) => (
            <motion.div
              key={service.to}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to={service.to}
                className="group block bg-white dark:bg-gray-900 rounded-2xl p-5 sm:p-6 lg:p-7 shadow-xl border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 ${service.iconBg} ${service.iconColor} rounded-xl mb-4 sm:mb-5`}>
                  <service.icon size={24} />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {t(service.descKey)}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePreview;
