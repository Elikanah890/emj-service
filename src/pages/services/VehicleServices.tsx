import { motion } from 'framer-motion';
import SectionHeading from '../../components/ui/SectionHeading';
import PageHero from '../../components/ui/PageHero';
import ServiceCard from '../../components/ui/ServiceCard';
import CallToAction from '../../components/sections/CallToAction';
import { registeredVehicleServices, unregisteredVehicleServices } from '../../data/services';
import { useLanguage } from '../../context/LanguageContext';

const VehicleServices: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main>
      <PageHero
        title={t('vehicles.heading')}
        subtitle={t('vehicles.subheading')}
        bgColor="bg-vehicle-registered"
        textColor="text-white"
        subtitleColor="text-amber-50"
      />

      {/* Registered Vehicles */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t('vehicles.registeredHeading')}
            subtitle={t('vehicles.registeredSubheading')}
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {registeredVehicleServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                bgColor={service.bgColor}
                link={`/services/vehicles/registered/${service.id}`}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Unregistered Vehicles */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t('vehicles.unregisteredHeading')}
            subtitle={t('vehicles.unregisteredSubheading')}
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-12">
            {unregisteredVehicleServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                bgColor={service.bgColor}
                link={`/services/vehicles/unregistered/${service.id}`}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t('vehicles.processHeading')}
            subtitle={t('vehicles.processSubheading')}
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {[
              { num: 1, titleKey: 'vehicles.step1.title', descKey: 'vehicles.step1.desc' },
              { num: 2, titleKey: 'vehicles.step2.title', descKey: 'vehicles.step2.desc' },
              { num: 3, titleKey: 'vehicles.step3.title', descKey: 'vehicles.step3.desc' },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-vehicle-registered rounded-full text-white text-xl font-bold mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-secondary-navy dark:text-white mb-2 sm:mb-3">
                  {t(step.titleKey)}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  {t(step.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
};

export default VehicleServices;
