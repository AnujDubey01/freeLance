import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gym-black pt-20 pb-10 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        
        {/* Brand */}
        <div className="md:w-1/3">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-gym-red rounded-sm transform rotate-45 flex items-center justify-center">
              <div className="w-2 h-2 bg-gym-black transform -rotate-45" />
            </div>
            <span className="font-heading text-xl tracking-widest text-white uppercase">IRONFORGE</span>
          </Link>
          <p className="text-gray-400 font-body text-sm max-w-xs">
            Premium fitness and performance center dedicated to helping you achieve your physical potential.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-12 md:w-1/3">
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-heading tracking-widest uppercase text-sm mb-2">Explore</h4>
            <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm font-body">About</Link>
            <Link to="/programs" className="text-gray-400 hover:text-white transition-colors text-sm font-body">Programs</Link>
            <Link to="/trainers" className="text-gray-400 hover:text-white transition-colors text-sm font-body">Coaches</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-heading tracking-widest uppercase text-sm mb-2">Connect</h4>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-body">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-body">Twitter</a>
            <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm font-body">Contact</Link>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
        <p className="text-gray-500 font-body text-xs">
          &copy; {new Date().getFullYear()} Ironforge Fitness. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs font-body">Privacy Policy</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs font-body">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
