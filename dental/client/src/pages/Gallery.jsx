import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Import all images
import g1 from '../assets/gallery1.jpg';
import g2 from '../assets/gallery2.jpg';
import g3 from '../assets/g2.jpg';
import g4 from '../assets/g3.jpg';
import g5 from '../assets/g4.jpg';
import g6 from '../assets/g5.jpg';
import g7 from '../assets/g6.jpg';
import g8 from '../assets/g7.jpg';
import g9 from '../assets/g8.jpg';
import mainClinic from '../assets/high_end_bright_modern_aesthetic_dental_clinic_interior_for_a_website_landing.png';
import clinic2 from '../assets/clinic2.png';

const images = [mainClinic, clinic2, g1, g2, g3, g4, g5, g6, g7, g8, g9];
const heroImages = [mainClinic, clinic2, g1, g2];

const Gallery = () => {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    // Calculate total scrollable width for bottom carousel
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }

    // Auto-play timer for hero carousel
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-32 pb-32 min-h-screen bg-primary text-secondary overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tighter mb-6">
            Inside the <span className="text-accent italic font-light">Clinic.</span>
          </h1>
          <p className="text-lg font-light text-secondary/70 max-w-xl">
            Take a visual tour of our premium facilities. We've designed every corner to evoke calmness, luxury, and safety. <br/> <br/>
            <span className="font-bold text-accent uppercase tracking-widest text-sm">Drag to explore &rarr;</span>
          </p>
        </motion.div>
      </div>

      {/* Hero Auto-Fading Carousel Box */}
      <div className="container mx-auto px-6 md:px-12 mb-32">
        <div className="relative w-full aspect-video md:aspect-[21/9] bg-slate-800 overflow-hidden rounded-sm shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentHero}
              src={heroImages[currentHero]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => e.target.style.display = 'none'}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-primary/20 pointer-events-none" />
          
          {/* Navigation Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
            {heroImages.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentHero(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === currentHero ? 'bg-accent w-10' : 'bg-secondary/50 hover:bg-secondary w-3'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Draggable Carousel */}
      <motion.div 
        ref={carouselRef} 
        className="cursor-grab active:cursor-grabbing overflow-hidden pl-6 md:pl-12"
      >
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }} 
          className="flex space-x-6 w-max"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          {images.map((img, index) => (
            <motion.div 
              key={index} 
              className="w-[300px] h-[400px] md:w-[450px] md:h-[600px] relative overflow-hidden group rounded-sm"
            >
              <img 
                src={img} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover pointer-events-none transition-transform duration-700 group-hover:scale-105" 
                onError={(e) => e.target.style.display = 'none'} 
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

    </div>
  );
};

export default Gallery;
