import { motion } from 'framer-motion';
import SectionHeading from '../../components/ui/SectionHeading';
import PageHero from '../../components/ui/PageHero';
import CallToAction from '../../components/sections/CallToAction';
import { drivingLicenseServices } from '../../data/services';
import { useLanguage } from '../../context/LanguageContext';

const DrivingLicenseServices: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main>
      <PageHero
        title={t('license.heading')}
        subtitle={t('license.subheading')}
        bgColor="bg-vehicle-license"
        textColor="text-white"
        subtitleColor="text-green-50"
      />

      {/* License Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t('license.heading')}
            subtitle="Comprehensive services for obtaining and managing your driving license"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {drivingLicenseServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-xl shadow-md border-t-4 border-vehicle-license"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-secondary-navy dark:text-white mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                  {t('license.assistance').replace('{service}', service.title.toLowerCase())}
                </p>
                <a
                  href={`/services/driving-license/${service.id}`}
                  className="inline-block text-sm sm:text-base text-vehicle-license hover:text-green-700 font-medium transition-colors"
                >
                  Learn more →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t('license.processHeading')}
            subtitle={t('license.processSubheading')}
            centered
          />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 sm:w-1 bg-vehicle-license" />

              {[
                { num: 1, titleKey: 'license.step1.title', descKey: 'license.step1.desc' },
                { num: 2, titleKey: 'license.step2.title', descKey: 'license.step2.desc' },
                { num: 3, titleKey: 'license.step3.title', descKey: 'license.step3.desc' },
                { num: 4, titleKey: 'license.step4.title', descKey: 'license.step4.desc' },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  className="relative z-10 mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-vehicle-license text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold">
                      {step.num}
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-900 p-5 sm:p-6 rounded-xl shadow-md max-w-lg mx-auto">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-secondary-navy dark:text-white mb-2">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      {t(step.descKey)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
};

export default DrivingLicenseServices;
