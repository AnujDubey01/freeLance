import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/details.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isDarkHeader = location.pathname === '/' || location.pathname === '/gallery';
  const isTransparentAndDark = isDarkHeader && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${isScrolled ? 'bg-secondary/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="z-50 relative flex items-center group cursor-pointer">
            <img src={logo} alt="Dr. Dhwani's Dental Clinic" className={`h-12 md:h-16 object-contain transition-all duration-500 group-hover:scale-105 ${isTransparentAndDark ? 'brightness-0 invert' : ''}`} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
            <div className={`text-2xl md:text-3xl font-heading font-bold tracking-tight hidden ${isTransparentAndDark ? 'text-secondary' : 'text-primary'}`}>
              DR. DHWANI'S
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-base font-semibold uppercase tracking-widest relative group transition-colors duration-300 ${isTransparentAndDark ? 'text-secondary hover:text-champagne' : 'text-primary hover:text-accent'}`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isTransparentAndDark ? 'bg-champagne' : 'bg-accent'}`}></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <a href="/#appointment" className={`inline-block px-8 py-4 text-base font-bold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer ${isTransparentAndDark
                ? 'bg-secondary text-primary hover:bg-champagne hover:text-primary'
                : 'bg-primary text-secondary hover:bg-accent hover:text-white'
              }`}>
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden z-50 relative ${isTransparentAndDark || isMobileMenuOpen ? 'text-secondary' : 'text-primary'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-primary z-40 flex flex-col justify-center items-center text-secondary"
          >
            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link
                    to={link.href}
                    className="text-4xl font-heading uppercase tracking-widest hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 + 0.3 }}
                className="mt-8 bg-accent text-secondary px-8 py-4 text-sm uppercase tracking-wider"
              >
                Book Appointment
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
