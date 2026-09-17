import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-secondary pt-16 pb-8 border-t border-secondary/10">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-secondary/20 pt-16 mb-16">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-heading font-bold text-xl mb-6">DR. DHWANI'S</h3>
            <p className="text-secondary/60 text-sm max-w-xs leading-relaxed">
              Premium dental care tailored for your comfort and health.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest text-secondary/40 font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-secondary/80">
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#doctor" className="hover:text-accent transition-colors">Doctor</a></li>
              <li><a href="#clinic" className="hover:text-accent transition-colors">Clinic</a></li>
              <li><a href="#reviews" className="hover:text-accent transition-colors">Reviews</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest text-secondary/40 font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-secondary/80">
              <li>09510841844</li>
              <li>Gotri - Bhayli Rd, Vadodara</li>
              <li><a href="#appointment" className="text-accent hover:text-white transition-colors">Book Appointment</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-secondary/20 pt-8 text-xs text-secondary/40 font-light space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Dr. Dhwani's Dental Clinic. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
