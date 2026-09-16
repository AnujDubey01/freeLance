import { motion } from 'framer-motion';

const Location = () => {
  return (
    <section className="py-32 bg-secondary text-primary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col space-y-12">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="text-5xl md:text-7xl font-heading font-bold uppercase leading-[0.9] tracking-tighter"
            >
              Come <br />
              <span className="text-accent italic font-light">Visit Us.</span>
            </motion.h2>

            <div className="space-y-8 max-w-md">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-xs uppercase tracking-widest text-primary/50 mb-2 font-bold">Address</h4>
                <p className="text-lg font-light leading-relaxed">
                  FF-04, The Imperia Complex, Besides Police Station, <br />
                  Gotri - Bhayli Rd, Gotri, <br />
                  Vadodara, Gujarat 390007
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="text-xs uppercase tracking-widest text-primary/50 mb-2 font-bold">Contact</h4>
                <p className="text-lg font-light leading-relaxed">
                  09510841844 <br />
                  hello@drdhwani.com
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="text-xs uppercase tracking-widest text-primary/50 mb-2 font-bold">Hours</h4>
                <p className="text-lg font-light leading-relaxed">
                  Mon - Sat: 10:00 AM - 1:00 PM  &nbsp;|&nbsp;  4:00 PM - 8:00 PM <br />
                  Sunday: Closed
                </p>
              </motion.div>
            </div>
            
            <motion.button 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="w-max text-accent font-bold uppercase tracking-wider text-sm border-b border-accent pb-1 hover:text-primary transition-colors"
            >
              Get Directions →
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800 h-[400px] md:h-auto relative overflow-hidden"
          >
            <iframe 
              src="https://www.google.com/maps?q=Dr.+Dhwani’s+Dental+Clinic,Gotri,Vadodara,Gujarat&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            ></iframe>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Location;
