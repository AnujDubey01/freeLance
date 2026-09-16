import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

const Appointment = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    setStatus('loading');
    try {
      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to book appointment');

      setStatus('success');
      reset();
      
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
      
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
      setStatus('error');
      
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  return (
    <section id="appointment" className="py-32 bg-secondary text-primary">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div className="flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-5xl md:text-7xl font-heading font-bold uppercase leading-[0.9] tracking-tighter mb-8"
          >
            Let's <br />
            Take Care <br />
            Of Your <br />
            <span className="text-accent italic font-light">Smile.</span>
          </motion.h2>
          <p className="text-primary/70 font-light text-lg max-w-sm">
            Fill out the form to request an appointment. Our team will contact you shortly to confirm your visit.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-primary text-secondary p-8 md:p-12"
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center text-center h-full min-h-[400px] space-y-6"
              >
                <div className="text-accent">
                  <CheckCircle2 size={80} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-heading uppercase">Request Sent</h3>
                <p className="text-secondary/70 font-light">
                  Thank you! We've received your request and will be in touch very soon.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {status === 'error' && (
                  <div className="bg-red-500/20 text-red-200 p-4 flex items-center space-x-3 mb-6">
                    <AlertCircle size={20} />
                    <span className="text-sm">{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-secondary/60">Name</label>
                    <input 
                      {...register('name', { required: true })}
                      className="w-full bg-transparent border-b border-secondary/30 pb-2 focus:outline-none focus:border-accent transition-colors text-secondary"
                      placeholder="Jane Doe"
                    />
                    {errors.name && <span className="text-red-400 text-xs">Name is required</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-secondary/60">Phone</label>
                    <input 
                      {...register('phone', { required: true })}
                      className="w-full bg-transparent border-b border-secondary/30 pb-2 focus:outline-none focus:border-accent transition-colors text-secondary"
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && <span className="text-red-400 text-xs">Phone is required</span>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-secondary/60">Email</label>
                  <input 
                    type="email"
                    {...register('email', { required: true })}
                    className="w-full bg-transparent border-b border-secondary/30 pb-2 focus:outline-none focus:border-accent transition-colors text-secondary"
                    placeholder="jane@example.com"
                  />
                  {errors.email && <span className="text-red-400 text-xs">Email is required</span>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-secondary/60">Service</label>
                  <select 
                    {...register('service', { required: true })}
                    className="w-full bg-transparent border-b border-secondary/30 pb-2 focus:outline-none focus:border-accent transition-colors text-secondary appearance-none cursor-pointer"
                  >
                    <option value="" className="text-primary">Select a service...</option>
                    <option value="General Dentistry" className="text-primary">General Dentistry</option>
                    <option value="Cleaning" className="text-primary">Dental Cleaning</option>
                    <option value="Cosmetic" className="text-primary">Cosmetic Dentistry</option>
                    <option value="Other" className="text-primary">Other</option>
                  </select>
                  {errors.service && <span className="text-red-400 text-xs">Please select a service</span>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-secondary/60">Preferred Date</label>
                    <input 
                      type="date"
                      {...register('date', { required: true })}
                      className="w-full bg-transparent border-b border-secondary/30 pb-2 focus:outline-none focus:border-accent transition-colors text-secondary [color-scheme:dark]"
                    />
                    {errors.date && <span className="text-red-400 text-xs">Date is required</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-secondary/60">Preferred Time</label>
                    <select 
                      {...register('time', { required: true })}
                      className="w-full bg-transparent border-b border-secondary/30 pb-2 focus:outline-none focus:border-accent transition-colors text-secondary appearance-none cursor-pointer"
                    >
                      <option value="" className="text-primary">Select time...</option>
                      <option value="Morning" className="text-primary">Morning (9AM - 12PM)</option>
                      <option value="Afternoon" className="text-primary">Afternoon (12PM - 4PM)</option>
                      <option value="Evening" className="text-primary">Evening (4PM - 7PM)</option>
                    </select>
                    {errors.time && <span className="text-red-400 text-xs">Time is required</span>}
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-accent text-secondary py-5 uppercase tracking-wider text-sm font-bold hover:bg-secondary hover:text-primary transition-colors duration-300 mt-8 flex justify-center items-center"
                >
                  {status === 'loading' ? <Loader2 className="animate-spin" size={20} /> : 'Request Appointment →'}
                </button>

              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Appointment;
