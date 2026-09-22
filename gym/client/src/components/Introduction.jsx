import { motion } from 'framer-motion';

const Introduction = () => {
  return (
    <section id="about" className="py-32 px-6 bg-gym-black relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-8 items-center">
        
        {/* Left: Text Content */}
        <div className="flex-1 w-full relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading text-white tracking-tight uppercase leading-[0.85] mb-8">
              More<br />
              Than<br />
              <span className="text-gym-red">A Gym.</span>
            </h2>
            <p className="text-gray-400 font-body text-xl md:text-2xl max-w-lg leading-relaxed">
              A space built for focused training, meaningful progress, and a stronger everyday life.
            </p>
            
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 max-w-lg">
              <div>
                <h4 className="text-white font-heading text-3xl mb-2 tracking-wide">01</h4>
                <p className="text-gray-400 font-body text-sm uppercase tracking-wider font-semibold">Premium Facilities</p>
              </div>
              <div>
                <h4 className="text-white font-heading text-3xl mb-2 tracking-wide">02</h4>
                <p className="text-gray-400 font-body text-sm uppercase tracking-wider font-semibold">Expert Coaching</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Abstract/Image representation */}
        <div className="flex-1 w-full relative aspect-square md:aspect-auto md:h-[600px] flex justify-end items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-4/5 h-full relative overflow-hidden flex items-center justify-center border border-white/5 group"
          >
            <div className="absolute inset-0 bg-gym-black/40 z-10 transition-opacity duration-500 group-hover:opacity-0" />
            <img 
              src="/src/assets/intro-bg.jpg" 
              alt="Person lifting heavy barbell" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Introduction;
