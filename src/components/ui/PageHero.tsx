import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle: string;
  bgColor?: string;
  textColor?: string;
  subtitleColor?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  bgColor = 'bg-secondary-navy dark:bg-gray-950',
  textColor = 'text-white',
  subtitleColor = 'text-gray-300',
}) => {
  return (
    <section className={`pt-28 sm:pt-32 pb-16 sm:pb-20 ${bgColor}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold ${textColor} mb-4 sm:mb-6`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className={`text-base sm:text-xl ${subtitleColor}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
