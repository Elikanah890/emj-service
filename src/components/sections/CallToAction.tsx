import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-secondary-navy py-16">
      <div className="container mx-auto px-4">
        <div className="rounded-lg bg-gradient-to-r from-secondary-navy to-secondary-darkNavy p-10 lg:p-16 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-gold/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary-gold/10 rounded-full translate-y-1/3 -translate-x-1/3"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Ready to Transform Your Next Event or Simplify Your Vehicle Services?
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Contact us today to discuss your needs and discover how EMJ SERVICE can help you with professional event decoration and comprehensive vehicle registration services.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button 
                to="/contact" 
                size="lg" 
                icon={<ArrowRight />}
              >
                Contact Us Now
              </Button>
              <Button 
                external
                to="https://web.whatsapp.com/"
                size="lg" 
                variant="outline"
              >
                WhatsApp Us
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;