import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { useRef } from 'react';

import clinicImg from '../assets/high_end_bright_modern_aesthetic_dental_clinic_interior_for_a_website_landing.png';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-primary flex items-center pt-20">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply z-10" />
        <img src={clinicImg} alt="Clinic Interior" className="w-full h-full object-cover" onError={(e) => e.target.style.display='none'} />
        <div className="absolute inset-0 w-full h-full bg-slate-800 -z-10" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-20 h-full">
        
        {/* Main Typography */}
        <div className="col-span-1 lg:col-span-8 flex flex-col justify-end">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="text-secondary text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] font-heading font-bold uppercase tracking-tighter"
          >
            Crafting <br />
            <span className="text-accent italic font-light tracking-normal">Healthier</span> <br />
            Smiles.
          </motion.h1>
        </div>

        {/* Supporting Details */}
        <div className="col-span-1 lg:col-span-4 flex flex-col justify-end space-y-8 lg:mb-4">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-secondary/80 text-lg md:text-xl font-light"
          >
            Dr. Dhwani's Dental Clinic
            <br />
            Modern dentistry with a patient-first approach.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center space-x-6"
          >
            <a href="#appointment" className="group flex items-center space-x-4 bg-primary text-secondary px-8 py-5 hover:bg-accent transition-colors duration-300 w-fit">
              <span className="text-sm font-bold uppercase tracking-widest">Book Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center space-x-4 pt-6 border-t border-secondary/20"
          >
            <div className="flex items-center space-x-1 text-accent">
              <Star size={20} fill="currentColor" />
              <span className="text-secondary font-bold text-xl ml-2">4.8</span>
            </div>
            <div className="text-secondary/60 text-sm uppercase tracking-wide leading-tight">
              Google Rating <br /> 279+ Reviews
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
