import { motion } from 'framer-motion';
import SectionHeading from '../../components/ui/SectionHeading';
import PageHero from '../../components/ui/PageHero';
import ServiceCard from '../../components/ui/ServiceCard';
import CallToAction from '../../components/sections/CallToAction';
import { decorationServices } from '../../data/services';
import { useLanguage } from '../../context/LanguageContext';

const DecorationServices: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main>
      <PageHero
        title={t('decoration.heading')}
        subtitle={t('decoration.subheading')}
        bgColor="bg-decoration-primary"
        textColor="text-white"
        subtitleColor="text-decoration-light"
      />

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t('decoration.heading')}
            subtitle="Professional decoration services for all types of events and celebrations"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {decorationServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                link={`/services/decoration/${service.id}`}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t('decoration.processHeading')}
            subtitle={t('decoration.processSubheading')}
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12">
            {[
              { num: 1, titleKey: 'decoration.step1.title', descKey: 'decoration.step1.desc' },
              { num: 2, titleKey: 'decoration.step2.title', descKey: 'decoration.step2.desc' },
              { num: 3, titleKey: 'decoration.step3.title', descKey: 'decoration.step3.desc' },
              { num: 4, titleKey: 'decoration.step4.title', descKey: 'decoration.step4.desc' },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-decoration-primary rounded-full text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-secondary-navy dark:text-white mb-2">
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

export default DecorationServices;
