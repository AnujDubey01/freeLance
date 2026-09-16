import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Reviews = () => {
  return (
    <section id="reviews" className="py-32 bg-primary text-secondary">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold uppercase leading-[0.9] tracking-tighter mb-16"
        >
          Heard <br />
          From Our <br />
          <span className="text-accent italic font-light">Patients.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center space-y-6"
        >
          <div className="flex items-center space-x-2 text-accent">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={32} fill="currentColor" />
            ))}
          </div>
          
          <div className="text-6xl md:text-8xl font-heading font-light">4.8</div>
          
          <p className="text-secondary/70 uppercase tracking-widest text-sm font-medium">
            Based on 279 Google Reviews
          </p>

          <button className="mt-8 border border-secondary/30 hover:border-accent text-secondary hover:text-accent px-8 py-4 uppercase tracking-wider text-sm transition-colors duration-300">
            View Google Reviews →
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Reviews;
