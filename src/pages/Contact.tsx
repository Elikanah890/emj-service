import PageHero from '../components/ui/PageHero';
import ContactSection from '../components/sections/ContactSection';
import LocationMap from '../components/sections/LocationMap';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main>
      <PageHero
        title={t('contact.heading')}
        subtitle={t('contact.subheading')}
      />

      <ContactSection />
      <LocationMap />
    </main>
  );
};

export default Contact;
