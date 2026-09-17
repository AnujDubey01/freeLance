import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import precisionImg from '../assets/precision.jpg';

const FeaturedService = () => {
  return (
    <section className="py-32 bg-secondary text-primary">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="order-2 lg:order-1 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="aspect-[4/5] w-full bg-slate-800 relative overflow-hidden shadow-2xl rounded-sm"
          >
            <img 
              src={precisionImg} 
              alt="Advanced Digital Dentistry" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 rounded-full blur-3xl -z-10"></div>
        </div>

        <div className="order-1 lg:order-2 flex flex-col justify-center space-y-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-4xl md:text-6xl font-heading font-bold uppercase leading-[0.9] tracking-tighter"
          >
            Precision <br />
            <span className="text-accent italic font-light">Meets</span> <br />
            Comfort.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="text-lg md:text-xl font-light text-primary/80 max-w-md leading-relaxed"
          >
            We leverage advanced digital dentistry to provide treatments that are not only highly effective, but minimally invasive and completely pain-free.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/services" 
              className="inline-flex items-center space-x-2 text-accent uppercase tracking-wider text-sm font-bold hover:text-primary transition-colors duration-300 border-b border-accent pb-1 w-fit"
            >
              <span>Explore Treatment</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedService;
