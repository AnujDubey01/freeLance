import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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
    { name: 'Programs', href: '/programs' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Trainers', href: '/trainers' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-gym-black/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50 relative">
          <div className="w-8 h-8 bg-gym-red rounded-sm transform rotate-45 flex items-center justify-center">
             <div className="w-3 h-3 bg-gym-black transform -rotate-45" />
          </div>
          <span className="font-heading text-2xl tracking-widest text-white">IRONFORGE</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={`text-sm font-semibold tracking-wider uppercase transition-colors ${location.pathname === link.href ? 'text-gym-red' : 'text-gray-300 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gym-red animate-pulse"></span>
            <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">75/100 Spots Left</span>
          </div>
          <Link to="/contact" className="bg-gym-red text-white px-6 py-3 font-heading tracking-widest uppercase hover:bg-white hover:text-gym-black transition-colors duration-300">
            Join Today
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-50 relative p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-gym-black z-40 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-3xl font-heading tracking-widest transition-colors ${location.pathname === link.href ? 'text-gym-red' : 'text-white hover:text-gym-red'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              onClick={() => setMobileMenuOpen(false)} 
              className="mt-8 bg-gym-red text-white px-8 py-4 font-heading tracking-widest text-xl uppercase"
            >
              Join Today
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
