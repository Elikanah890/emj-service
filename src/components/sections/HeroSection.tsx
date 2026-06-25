import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Shield, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';

const trustBadges = [
  { icon: CheckCircle, color: 'text-green-400', label: 'Verified Business' },
  { icon: Users, color: 'text-secondary-gold', label: '500+ Trusted Clients' },
  { icon: Shield, color: 'text-blue-400', label: 'Government Documentation' },
];

const heroStats = [
  { value: '500+', label: 'Events Decorated', highlight: false },
  { value: '1000+', label: 'Documents Processed', highlight: false },
  { value: '98%', label: 'Client Satisfaction', highlight: true },
];

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center bg-[#0A1628] overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-[-15%] right-[-10%] w-[500px] lg:w-[700px] h-[500px] lg:h-[700px] bg-secondary-gold/6 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-blue-500/6 rounded-full blur-[120px]" />

      <div className="relative w-full py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20 max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px]">
          <div className="max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 lg:py-2.5 mb-5 sm:mb-6 lg:mb-8 xl:mb-10"
            >
              <Sparkles size={14} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-secondary-gold flex-shrink-0" />
              <span className="text-white/90 font-medium text-xs sm:text-sm lg:text-base whitespace-nowrap">{t('hero.badge')}</span>
            </motion.div>

            {/* Headline — guaranteed single-line per phrase */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif font-bold leading-[1.05] tracking-tight mb-5 sm:mb-6 lg:mb-8 xl:mb-10"
            >
              {/* Line 1: Transforming Celebrations — ONE LINE always */}
              <span className="block text-secondary-gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl whitespace-nowrap">
                Transforming Celebrations
              </span>
              {/* Line 2: & Simplifying Vehicle Documentation — ONE LINE always */}
              <span className="block text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl whitespace-nowrap mt-2 sm:mt-3">
                &amp; Simplifying Vehicle Documentation
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-white/80 leading-relaxed mb-5 sm:mb-6 lg:mb-8 xl:mb-10 text-sm sm:text-base lg:text-lg xl:text-xl max-w-2xl lg:max-w-3xl xl:max-w-4xl"
            >
              <span className="block sm:hidden">
                Elegant event decoration and professional vehicle documentation across Tanzania.
                We transform celebrations with creativity and handle your paperwork with precision
                — so you don't have to.
              </span>
              <span className="hidden sm:block md:hidden">
                Elegant event decoration and professional vehicle documentation across Tanzania.
                We transform celebrations with creativity and handle your paperwork with precision
                — so you don't have to. From intimate weddings to grand corporate events, we bring
                your vision to life.
              </span>
              <span className="hidden md:block">
                Elegant event decoration and professional vehicle documentation across Tanzania.
                We transform celebrations with creativity and handle your paperwork with precision
                — so you don't have to. From intimate weddings to grand corporate events, we bring
                your vision to life with stunning decorations that leave lasting impressions. On
                the vehicle side, we navigate the complexities of registration, ownership transfers,
                and license processing with speed and accuracy. Every detail matters, and we take
                pride in making your experience seamless from start to finish.
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-10 xl:mb-12"
            >
              <Button
                to="/services"
                variant="gold"
                size="lg"
                icon={<ArrowRight size={18} />}
                className="w-full sm:w-auto px-6 sm:px-8 lg:px-10"
              >
                Explore Services
              </Button>
              <Button
                external
                to="https://wa.me/255692216777"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-6 sm:px-8 lg:px-10"
              >
                WhatsApp Us
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-10 lg:mb-12 xl:mb-14"
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-1.5 sm:gap-2 lg:gap-2.5 bg-white/[0.07] backdrop-blur-sm px-2.5 sm:px-3.5 lg:px-4.5 py-2 sm:py-2.5 lg:py-3 rounded-full border border-white/[0.12] whitespace-nowrap"
                >
                  <badge.icon size={14} className={`flex-shrink-0 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ${badge.color}`} />
                  <span className="text-white/80 font-medium text-xs sm:text-sm lg:text-base">{badge.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-5 sm:pt-6 lg:pt-8 xl:pt-10 border-t border-white/[0.1]"
            >
              <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
                {heroStats.map((stat, i) => (
                  <div key={i}>
                    <div className={`font-sans font-bold leading-none text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl ${stat.highlight ? 'text-secondary-gold' : 'text-white'}`}>
                      {stat.value}
                    </div>
                    <div className="font-sans font-medium text-white/50 text-xs sm:text-sm lg:text-base mt-1 sm:mt-1.5 lg:mt-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-10 xl:left-16 z-10"
      >
        <div className="w-4 h-6 sm:w-5 sm:h-8 lg:w-6 lg:h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-1.5 sm:w-1.5 sm:h-2 lg:h-2.5 bg-white/40 rounded-full mt-1.5 sm:mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
