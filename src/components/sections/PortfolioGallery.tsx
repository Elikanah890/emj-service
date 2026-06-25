import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import { useLanguage } from '../../context/LanguageContext';

const portfolioItems = [
  { src: '/dec1.png', title: 'Wedding Decoration', category: 'Weddings', alt: 'Professional wedding decoration setup by EMJ SERVICE in Tanzania' },
  { src: '/dec2.png', title: 'Graduation Ceremony', category: 'Graduations', alt: 'Graduation ceremony decoration by EMJ SERVICE Tanzania' },
  { src: '/dec3.png', title: 'Birthday Party Setup', category: 'Birthdays', alt: 'Beautiful birthday party decoration by EMJ SERVICE Tanzania' },
  { src: '/dec4.png', title: 'Corporate Event', category: 'Corporate', alt: 'Professional corporate event decoration by EMJ SERVICE Tanzania' },
  { src: '/dec5.png', title: 'Baby Shower Decor', category: 'Baby Showers', alt: 'Creative baby shower decoration by EMJ SERVICE Tanzania' },
  { src: '/dec6.png', title: 'Religious Celebration', category: 'Religious Events', alt: 'Religious event decoration by EMJ SERVICE Tanzania' },
];

const PortfolioGallery: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Work"
          subtitle="See our recent events and transformations"
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.src}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <img
                src={item.src}
                alt={item.alt}
                title={item.title}
                loading="lazy"
                width="600"
                height="400"
                className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <span className="inline-block bg-secondary-gold text-white text-xs px-2 py-0.5 rounded-full mb-1.5 font-medium">
                  {item.category}
                </span>
                <h4 className="text-white font-semibold text-sm sm:text-base">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Link
            to="/services/decoration"
            className="inline-flex items-center gap-2 bg-secondary-gold hover:bg-secondary-darkGold text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors shadow-md shadow-secondary-gold/25"
          >
            View All Events
            <span className="ml-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
