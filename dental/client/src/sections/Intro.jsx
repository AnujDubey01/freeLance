import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <section id="about" className="py-32 bg-secondary text-primary relative z-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center">
        
        {/* Main Headline */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold uppercase leading-[0.9] tracking-tighter"
          >
            More <br /> Than A <br />
            <span className="text-accent italic font-light">Dental</span> <br />
            Visit.
          </motion.h2>
        </div>

        {/* Supporting Copy */}
        <div className="flex flex-col space-y-8 max-w-md ml-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="text-lg md:text-2xl font-light leading-relaxed"
          >
            Thoughtful dentistry, modern technology, and a comfortable environment — designed around every patient.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="text-primary/70 text-base md:text-lg"
          >
            We believe that visiting the dentist shouldn't be a source of anxiety. Our premium facilities and expert care ensure a relaxing experience that prioritizes your comfort and health above all else.
          </motion.p>
        </div>

      </div>
    </section>
  );
};

export default Intro;
