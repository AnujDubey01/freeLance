import { motion } from 'framer-motion';
import clinicImg from '../assets/high_end_bright_modern_aesthetic_dental_clinic_interior_for_a_website_landing.png';
import clinicImg2 from '../assets/clinic2.png';

const Clinic = () => {
  return (
    <section id="clinic" className="py-32 bg-primary text-secondary overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold uppercase leading-[0.9] tracking-tighter"
          >
            A Space <br />
            Designed For <br />
            <span className="text-accent italic font-light">Comfort.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:h-[600px]">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-7 bg-slate-800 h-[300px] md:h-full relative overflow-hidden"
          >
             <img src={clinicImg} alt="Clinic Interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" onError={(e) => e.target.style.display='none'} />
          </motion.div>

          <div className="md:col-span-5 grid grid-rows-2 gap-8 h-full">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-700 h-[300px] md:h-full relative overflow-hidden"
            >
               <img src={clinicImg2} alt="Treatment Room" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" onError={(e) => e.target.style.display='none'} />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-slate-600 h-[300px] md:h-full relative overflow-hidden"
            >
               {/* Placeholder for Dental Chair/Equipment Image */}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Clinic;
