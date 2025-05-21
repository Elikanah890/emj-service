import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ServicesOverview from '../components/sections/ServicesOverview';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';
import CallToAction from '../components/sections/CallToAction';

const Home: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <AboutSection />
      <ContactSection />
      <CallToAction />
    </main>
  );
};

export default Home;