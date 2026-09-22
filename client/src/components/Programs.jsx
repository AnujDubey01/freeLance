import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const programs = [
  {
    id: '01',
    title: 'Strength Training',
    description: 'Build raw power and lean muscle with our specialized strength equipment and tailored lifting protocols.',
    color: '#E50914'
  },
  {
    id: '02',
    title: 'Functional Fitness',
    description: 'Improve your everyday movement patterns through high-intensity, multi-planar exercises.',
    color: '#ffffff'
  },
  {
    id: '03',
    title: 'Personal Training',
    description: 'Work 1-on-1 with elite coaches to achieve specific goals faster with customized programming.',
    color: '#888888'
  },
  {
    id: '04',
    title: 'Sports Conditioning',
    description: 'Enhance agility, speed, and endurance to perform at your peak in any athletic endeavor.',
    color: '#E50914'
  }
];

const Programs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="programs" className="py-32 px-6 bg-gym-charcoal border-y border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Title */}
        <div className="lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-32"
          >
            <h2 className="text-5xl md:text-7xl font-heading text-white tracking-tight uppercase leading-[0.85] mb-6">
              Train<br />
              With<br />
              Purpose.
            </h2>
            <p className="text-gray-400 font-body text-lg mb-8">
              Select a discipline that aligns with your goals. Our facility supports a wide range of training modalities.
            </p>
            <div className="relative w-full aspect-[4/3] overflow-hidden border border-white/5">
              <div className="absolute inset-0 bg-gym-black/20 z-10" />
              <img 
                src="/src/assets/featured-bg.jpg" 
                alt="Trainer guiding client" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Interactive List */}
        <div className="lg:w-2/3 flex flex-col">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="border-b border-white/10 py-8 relative group cursor-pointer"
            >
              {/* Background Highlight */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div 
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0 }}
                    className="absolute inset-0 bg-white/5 origin-top z-0"
                  />
                )}
              </AnimatePresence>

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 px-4">
                <div className="flex items-center gap-8">
                  <span className="font-heading text-2xl text-gray-600 group-hover:text-gym-red transition-colors duration-300">
                    {program.id}
                  </span>
                  <h3 className="font-heading text-3xl md:text-5xl text-white uppercase tracking-wide group-hover:translate-x-4 transition-transform duration-300">
                    {program.title}
                  </h3>
                </div>
                
                <div className="md:w-1/2 overflow-hidden h-0 group-hover:h-auto md:h-auto md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                  <p className="text-gray-400 font-body text-sm md:text-base leading-relaxed md:-translate-x-4 group-hover:translate-x-0 transition-transform duration-300">
                    {program.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Programs;
