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
    <section className="relative min-h-[85vh] sm:min-h-[90vh] bg-[#0A1628] overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-[-15%] right-[-10%] w-[500px] lg:w-[700px] h-[500px] lg:h-[700px] bg-secondary-gold/6 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-blue-500/6 rounded-full blur-[120px]" />

      {/* Content — starts just below fixed transparent header */}
      <div className="relative z-10 pt-14 sm:pt-16 lg:pt-20 pb-8 sm:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
          <div className="sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">

            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-5"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            >
              <Sparkles size={12} className="sm:w-3.5 sm:h-3.5 text-secondary-gold flex-shrink-0" />
              <span className="text-white/90 font-medium text-[10px] sm:text-xs whitespace-nowrap">{t('hero.badge')}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-serif font-bold leading-[1.1] tracking-tight mb-3 sm:mb-5"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="block text-secondary-gold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl sm:whitespace-nowrap">
                Transforming Celebrations
              </span>
              <span className="block text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl sm:whitespace-nowrap mt-1 sm:mt-2">
                &amp; Simplifying Vehicle Documentation
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="font-sans text-white/75 leading-relaxed mb-3 sm:mb-5 text-[13px] sm:text-sm md:text-base lg:text-lg max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="sm:hidden">Elegant event decoration & vehicle documentation across Tanzania. We transform celebrations with creativity and handle paperwork with precision.</span>
              <span className="hidden sm:block md:hidden">Elegant event decoration and professional vehicle documentation across Tanzania. We transform celebrations with creativity and handle your paperwork with precision — so you don&apos;t have to.</span>
              <span className="hidden md:block">Elegant event decoration and professional vehicle documentation across Tanzania. We transform celebrations with creativity and handle your paperwork with precision — so you don&apos;t have to. From intimate weddings to grand corporate events, we bring your vision to life with stunning decorations that leave lasting impressions. On the vehicle side, we navigate the complexities of registration, ownership transfers, and license processing with speed and accuracy.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3 sm:mb-5"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button to="/services" variant="gold" size="lg" icon={<ArrowRight size={16} />} className="w-full sm:w-auto text-sm sm:text-base">Explore Services</Button>
              <Button external to="https://wa.me/255692216777" variant="outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base">WhatsApp Us</Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            >
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-1 bg-white/[0.06] backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/10 whitespace-nowrap">
                  <badge.icon size={11} className={`flex-shrink-0 ${badge.color}`} />
                  <span className="text-white/70 font-medium text-[10px] sm:text-xs">{badge.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="pt-3 sm:pt-5 border-t border-white/[0.08]"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex flex-wrap gap-4 sm:gap-8 md:gap-12">
                {heroStats.map((stat, i) => (
                  <div key={i}>
                    <div className={`font-sans font-bold leading-none text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ${stat.highlight ? 'text-secondary-gold' : 'text-white'}`}>{stat.value}</div>
                    <div className="font-sans font-medium text-white/40 text-[10px] sm:text-xs mt-0.5">{stat.label}</div>
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
        className="absolute bottom-3 sm:bottom-5 left-4 sm:left-8 z-10"
      >
        <div className="w-3.5 h-5 sm:w-5 sm:h-8 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-1.5 sm:w-1.5 sm:h-2 bg-white/40 rounded-full mt-1 sm:mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
