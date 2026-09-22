import { motion } from 'framer-motion';

const facilitiesList = [
  {
    name: 'Free Weights Zone',
    desc: 'Fully equipped with dumbbells up to 150lbs, multiple squat racks, deadlift platforms, and calibrated plates.'
  },
  {
    name: 'Cardio Deck',
    desc: 'State-of-the-art treadmills, rowers, assault bikes, and stair climbers overlooking the gym floor.'
  },
  {
    name: 'Functional Turf',
    desc: 'A 30-meter indoor turf lane perfect for sled pushes, plyometrics, and agility drills.'
  },
  {
    name: 'Recovery Room',
    desc: 'Dedicated space featuring infrared saunas, cold plunge tubs, and massage therapy tools.'
  }
];

const Facilities = () => {
  return (
    <div className="pt-24 min-h-screen bg-gym-black">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading text-white uppercase tracking-wider mb-6">
              The Space
            </h1>
            <p className="text-gray-400 font-body text-xl max-w-2xl mb-16">
              Our 10,000 square foot facility is meticulously designed to optimize your training experience without the wait times of commercial gyms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilitiesList.map((facility, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gym-charcoal p-10 border border-white/5 hover:border-gym-red/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-gym-red/10 flex items-center justify-center mb-6 group-hover:bg-gym-red transition-colors">
                  <span className="font-heading text-gym-red text-xl group-hover:text-white">0{idx + 1}</span>
                </div>
                <h3 className="text-3xl font-heading text-white uppercase mb-4">{facility.name}</h3>
                <p className="text-gray-400 font-body leading-relaxed">{facility.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
