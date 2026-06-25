import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { useLanguage } from '../../context/LanguageContext';

const testimonials = [
  { nameKey: 'testimonial.1.name', roleKey: 'testimonial.1.role', textKey: 'testimonial.1.text' },
  { nameKey: 'testimonial.2.name', roleKey: 'testimonial.2.role', textKey: 'testimonial.2.text' },
  { nameKey: 'testimonial.3.name', roleKey: 'testimonial.3.role', textKey: 'testimonial.3.text' },
];

const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-6 xs:py-8 sm:py-14 lg:py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading
          title={t('testimonials.heading')}
          subtitle={t('testimonials.subheading')}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 sm:mt-12">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-7 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow relative flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Quote size={28} className="text-secondary-gold/20 absolute top-4 right-4" />

              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-secondary-gold fill-current" />
                ))}
              </div>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-1 italic">
                "{t(item.textKey)}"
              </p>

              <div className="border-t border-gray-100 dark:border-gray-700 pt-4 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-secondary-gold/20 flex items-center justify-center text-secondary-gold font-bold text-sm">
                  {t(item.nameKey).charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">{t(item.nameKey)}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t(item.roleKey)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
