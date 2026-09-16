import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const servicesList = [
  { id: '01', name: 'General Dentistry' },
  { id: '02', name: 'Dental Cleaning' },
  { id: '03', name: 'Root Canal Treatment' },
  { id: '04', name: 'Wisdom Tooth Care' },
  { id: '05', name: 'Dental Fillings' },
  { id: '06', name: 'Teeth Whitening' },
  { id: '07', name: 'Crowns & Bridges' },
  { id: '08', name: 'Cosmetic Dentistry' },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="services" className="py-32 bg-primary text-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-heading font-bold uppercase mb-20 tracking-tighter"
        >
          Our <br /> <span className="text-accent italic font-light">Expertise</span>
        </motion.h2>

        <div className="border-t border-secondary/20">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-b border-secondary/20 py-8 md:py-12 cursor-pointer transition-colors duration-500 hover:bg-secondary/5"
            >
              <div className="flex items-center justify-between px-4 relative z-10">
                <div className="flex items-center space-x-6 md:space-x-12">
                  <span className="text-accent font-medium text-lg md:text-xl">{service.id}</span>
                  <h3 className="text-2xl md:text-5xl font-heading font-light uppercase tracking-tight group-hover:pl-4 transition-all duration-500">
                    {service.name}
                  </h3>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transform translate-x-[-20px] group-hover:translate-x-0 transition-all duration-500 text-accent">
                  <ArrowUpRight size={32} />
                </div>
              </div>

              {/* Hover Image Preview (Placeholder) */}
              <div 
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-slate-700 pointer-events-none z-0 transition-all duration-700 ease-out mix-blend-screen opacity-0 scale-95 ${
                  hoveredIndex === index ? 'opacity-20 scale-100' : ''
                }`}
              >
                {/* Place real images here later */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
