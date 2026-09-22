import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gym-black/60 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-gym-black via-transparent to-gym-black/80 z-10" />
        <img 
          src={heroBg} 
          alt="Premium Gym Interior" 
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block bg-gym-red px-3 py-1 mb-6"
        >
          <span className="font-heading tracking-widest text-sm text-white uppercase">
            Premium Fitness & Performance
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-heading text-white leading-[0.9] tracking-tight uppercase mb-8"
        >
          Train Hard.<br />
          Move Better.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            Live Stronger.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl text-gray-300 text-lg md:text-xl font-body mb-10"
        >
          Build strength, improve performance, and become part of a community committed to progress in our state-of-the-art facility.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <a href="#join" className="group relative bg-gym-red text-white px-10 py-5 font-heading tracking-widest uppercase text-xl overflow-hidden text-center">
            <span className="relative z-10">Join Today &rarr;</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
            <span className="absolute inset-0 flex items-center justify-center text-gym-black z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-heading tracking-widest uppercase text-xl">
              Join Today &rarr;
            </span>
          </a>
          <a href="#about" className="flex items-center justify-center px-10 py-5 border border-white/20 text-white font-heading tracking-widest uppercase text-xl hover:bg-white/10 transition-colors">
            Explore the Gym &darr;
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/50 to-white overflow-hidden relative">
          <motion.div 
            animate={{ y: [0, 64] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-gym-red absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
