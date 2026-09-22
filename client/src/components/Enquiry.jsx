import { useState } from 'react';
import { motion } from 'framer-motion';

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: 'General Membership',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('http://localhost:5000/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', program: 'General Membership', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-gym-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        
        {/* Text */}
        <div className="md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-heading text-white tracking-tight uppercase leading-[0.85] mb-6">
              Ready<br />
              To Start?
            </h2>
            <p className="text-gray-400 font-body text-lg mb-8 max-w-md">
              Take the first step towards your goals. Fill out the form below and our team will contact you to discuss membership options.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-heading tracking-widest uppercase mb-1 text-sm">Location</h4>
                <p className="text-gray-400 font-body text-sm">123 Fitness Ave, Premium District, NY 10001</p>
              </div>
              <div>
                <h4 className="text-white font-heading tracking-widest uppercase mb-1 text-sm">Hours</h4>
                <p className="text-gray-400 font-body text-sm">Mon-Fri: 5am - 11pm | Sat-Sun: 7am - 9pm</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Form */}
        <div className="md:w-1/2">
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-white font-heading tracking-widest uppercase text-xs">Full Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-gym-red transition-colors font-body"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="phone" className="text-white font-heading tracking-widest uppercase text-xs">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-gym-red transition-colors font-body"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="email" className="text-white font-heading tracking-widest uppercase text-xs">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-gym-red transition-colors font-body"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="program" className="text-white font-heading tracking-widest uppercase text-xs">Interested In</label>
              <select 
                id="program" 
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="bg-gym-black border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-gym-red transition-colors font-body appearance-none"
              >
                <option value="General Membership">General Membership</option>
                <option value="Personal Training">Personal Training</option>
                <option value="Group Classes">Group Classes</option>
                <option value="Drop-in Pass">Drop-in Pass</option>
              </select>
            </div>

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="mt-6 bg-gym-red text-white px-8 py-4 font-heading tracking-widest uppercase hover:bg-white hover:text-gym-black transition-colors duration-300 disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Request Information'}
            </button>
            
            {status === 'success' && <p className="text-green-500 font-body text-sm mt-2">Your enquiry has been sent successfully!</p>}
            {status === 'error' && <p className="text-red-500 font-body text-sm mt-2">There was an error sending your enquiry. Please try again.</p>}
          </motion.form>
        </div>

      </div>
    </section>
  );
};

export default Enquiry;
