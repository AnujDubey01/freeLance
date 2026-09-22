import { motion } from 'framer-motion';

const trainersList = [
  {
    name: 'Marcus Vance',
    role: 'Head Strength Coach',
    desc: 'Former competitive powerlifter with 10 years of coaching experience specializing in raw strength development.'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Functional Performance',
    desc: 'Expert in high-intensity interval training, agility, and sports conditioning for athletes of all levels.'
  },
  {
    name: 'David Chen',
    role: 'Mobility & Rehab',
    desc: 'Certified physical therapist focusing on injury prevention, recovery protocols, and joint longevity.'
  }
];

const Trainers = () => {
  return (
    <div className="pt-24 min-h-screen bg-gym-black">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-heading text-white uppercase tracking-wider mb-6">
              The Coaches
            </h1>
            <p className="text-gray-400 font-body text-xl max-w-2xl mx-auto">
              Our coaching staff isn't here to count your reps. They are here to educate, correct, and push you beyond your perceived limits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainersList.map((trainer, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gym-charcoal border border-white/5 overflow-hidden group"
              >
                <div className="aspect-[3/4] bg-gym-black relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gym-black z-10 opacity-50 group-hover:opacity-0 transition-opacity duration-300" />
                  <span className="font-heading text-6xl text-white/10 absolute uppercase tracking-widest">{trainer.name.split(' ')[0]}</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-heading text-white uppercase mb-1">{trainer.name}</h3>
                  <p className="text-gym-red font-heading tracking-widest uppercase text-sm mb-4">{trainer.role}</p>
                  <p className="text-gray-400 font-body text-sm leading-relaxed">{trainer.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainers;
