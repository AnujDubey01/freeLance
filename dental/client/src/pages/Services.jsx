import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-secondary text-primary">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tighter mb-8"
        >
          Our <span className="text-accent italic font-light">Services.</span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl text-lg font-light leading-relaxed"
        >
          <p>A comprehensive list of dental treatments and services will be placed here soon.</p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
