import HeroSection from '../components/sections/HeroSection';
import ServicePreview from '../components/sections/ServicePreview';
import PortfolioGallery from '../components/sections/PortfolioGallery';
import AboutSection from '../components/sections/AboutSection';
import ServicesOverview from '../components/sections/ServicesOverview';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';
import CallToAction from '../components/sections/CallToAction';

const Home: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <ServicePreview />
      <PortfolioGallery />
      <AboutSection />
      <ServicesOverview />
      <TestimonialsSection />
      <ContactSection />
      <CallToAction />
    </main>
  );
};

export default Home;
