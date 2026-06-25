import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import PageHero from '../components/ui/PageHero';
import { aboutData } from '../data/about';
import LocationMap from '../components/sections/LocationMap';
import CallToAction from '../components/sections/CallToAction';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main>
      <PageHero
        title={t('about.heading')}
        subtitle={t('about.subheading')}
      />

      {/* Company History */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/logo.jpeg"
                alt="Company History"
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>

            <div>
              <SectionHeading title="Our Story" subtitle="The journey of EMJ SERVICE" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  {t('about.story')}
                </p>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  Our journey has been marked by a commitment to excellence, innovative solutions, and a deep
                  understanding of our clients' needs. We've built our reputation on reliability, quality, and
                  professionalism in everything we do.
                </p>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Today, EMJ SERVICE continues to grow and evolve, always maintaining the core values and
                  dedication to customer satisfaction that have defined us from the beginning.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Mission, Vision & Values"
            subtitle="What drives us every day"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
            <motion.div
              className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-secondary-navy dark:text-white mb-4">Our Mission</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{aboutData.mission}</p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-secondary-navy dark:text-white mb-4">Our Vision</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{aboutData.vision}</p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-secondary-navy dark:text-white mb-4">{t('about.values')}</h3>
              <ul className="text-sm sm:text-base text-gray-600 dark:text-gray-300 space-y-2">
                {aboutData.values.map((value, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-secondary-gold mr-2">•</span>
                    {value}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Meet Our Founder"
              subtitle="The visionary behind EMJ SERVICE"
              centered
            />

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 inline-block rounded-full overflow-hidden border-4 border-secondary-gold p-1">
                <img
                  src="/logo.jpeg"
                  alt={aboutData.founder}
                  className="w-36 h-36 sm:w-48 sm:h-48 rounded-full object-cover"
                />
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-secondary-navy dark:text-white mb-2">{aboutData.founder}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">{t('about.founder.role')}</p>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{t('about.founder.bio1')}</p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{t('about.founder.bio2')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <LocationMap />
      <CallToAction />
    </main>
  );
};

export default About;
