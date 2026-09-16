import { motion } from 'framer-motion';

const features = [
  { id: '01', text: 'Personalized Care' },
  { id: '02', text: 'Modern Dental Technology' },
  { id: '03', text: 'Comfort-First Experience' },
  { id: '04', text: 'Clean & Hygienic Environment' },
];

const WhyUs = () => {
  return (
    <section className="py-32 bg-primary text-secondary">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-4xl md:text-6xl font-heading font-bold uppercase leading-[0.9] tracking-tighter sticky top-32"
          >
            Why <br />
            Patients <br />
            <span className="text-accent italic font-light">Choose Us</span>
          </motion.h2>
        </div>

        <div className="lg:col-span-8 flex flex-col space-y-16 lg:mt-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col space-y-4"
            >
              <span className="text-accent font-medium text-lg">{feature.id}</span>
              <h3 className="text-3xl md:text-5xl font-heading font-light uppercase tracking-tight border-b border-secondary/20 pb-8">
                {feature.text}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;
