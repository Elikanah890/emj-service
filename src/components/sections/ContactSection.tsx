import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { aboutData } from '../../data/about';
import { useLanguage } from '../../context/LanguageContext';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialFormData: FormData = {
  firstName: '', lastName: '', email: '', phone: '', service: '', message: '',
};

const contactItems = [
  { icon: Phone, titleKey: 'contact.phone', labelKey: 'contact.phoneLabel', value: aboutData.phone, href: `tel:${aboutData.phone}` },
  { icon: Mail, titleKey: 'contact.email', labelKey: 'contact.emailLabel', value: aboutData.email, href: `mailto:${aboutData.email}` },
  { icon: MapPin, titleKey: 'contact.location', value: aboutData.location.country },
];

const serviceOptions = [
  ['', 'contact.serviceOption'],
  ['Event Decoration', 'contact.service.decoration'],
  ['Registered Vehicle Services', 'contact.service.registered'],
  ['Unregistered Vehicle Services', 'contact.service.unregistered'],
  ['Driving License', 'contact.service.license'],
];

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const phoneNumber = aboutData.phone.replace(/\D/g, '');
    const msg = encodeURIComponent(
      `*New Enquiry from EMJ SERVICE Website*%0A%0A` +
      `*Name:* ${formData.firstName} ${formData.lastName}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Service:* ${formData.service || 'Not specified'}%0A` +
      `*Message:* ${formData.message}`
    );

    window.open(`https://wa.me/${phoneNumber}?text=${msg}`, '_blank');
    setSubmitStatus('success');
    setFormData(initialFormData);
    setIsSubmitting(false);
  };

  const inputClass = 'w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-secondary-gold/50 focus:border-secondary-gold transition-colors';

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact info */}
          <div>
            <SectionHeading title={t('contact.heading')} subtitle={t('contact.subheading')} />

            <div className="space-y-5">
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <div className="flex-shrink-0 h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-secondary-gold/10 flex items-center justify-center">
                    <item.icon size={20} className="text-secondary-gold" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">{t(item.titleKey)}</h3>
                    {item.labelKey && <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">{t(item.labelKey)}</p>}
                    {item.href ? (
                      <a href={item.href} className="text-secondary-gold hover:underline font-medium text-sm">{item.value}</a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="pt-4"
              >
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-4">{t('contact.whatsappLabel')}</h3>
                <Button external to={aboutData.whatsapp} variant="whatsapp" size="lg" className="w-full sm:w-auto">
                  {t('hero.cta.secondary')}
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('contact.formTitle')}</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">{t('contact.firstName')}</label>
                    <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} required className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">{t('contact.lastName')}</label>
                    <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} required className={inputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">{t('contact.emailField')}</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">{t('contact.phoneField')}</label>
                  <input type="tel" id="phone" value={formData.phone} onChange={handleChange} required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">{t('contact.service')}</label>
                  <select id="service" value={formData.service} onChange={handleChange} className={inputClass}>
                    {serviceOptions.map(([val, key]) => (
                      <option key={val} value={val}>{t(key)}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">{t('contact.message')}</label>
                  <textarea id="message" rows={4} value={formData.message} onChange={handleChange} required className={`${inputClass} resize-none`} />
                </div>

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded-xl text-xs sm:text-sm">
                    <AlertCircle size={16} /><span>{t('contact.error')}</span>
                  </div>
                )}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 dark:bg-green-900/20 p-3 rounded-xl text-xs sm:text-sm">
                    <CheckCircle size={16} /><span>{t('contact.success')}</span>
                  </div>
                )}

                <Button variant="gold" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? t('contact.sending') : t('contact.submit')}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
