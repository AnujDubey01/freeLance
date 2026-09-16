import { motion } from 'framer-motion';
import doctorImg from '../assets/Doctor.png';

const Doctor = () => {
  return (
    <section id="doctor" className="py-32 bg-secondary text-primary overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="flex flex-col justify-center space-y-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-5xl md:text-7xl font-heading font-bold uppercase leading-[0.9] tracking-tighter"
          >
            Meet <br />
            <span className="text-accent italic font-light">Dr. Dhwani <br/>Bhalavat</span>
          </motion.h2>
          
          <div className="space-y-6 max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            >
              <h3 className="text-xl font-bold uppercase tracking-wide">Dental Surgeon and Implantologist</h3>
              <p className="text-primary/70 mt-4 leading-relaxed font-light">
                Dedicated to providing compassionate and comprehensive dental care. Dr. Dhwani focuses on creating a comfortable environment where patients feel heard and valued.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            >
              <p className="text-primary/70 leading-relaxed font-light">
                With a commitment to ongoing education and modern techniques, every treatment is tailored to achieve the best possible outcomes for your long-term oral health.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="relative h-full flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="w-[80%] aspect-[3/4] bg-slate-300 relative z-10 overflow-hidden"
          >
            <img src={doctorImg} alt="Dr. Dhwani" className="w-full h-full object-cover" onError={(e) => e.target.style.display='none'} />
          </motion.div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/10 rounded-full blur-3xl -z-10"></div>
        </div>

      </div>
    </section>
  );
};

export default Doctor;
