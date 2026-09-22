import { motion } from 'framer-motion';
import { Star, Award, Shield, Users, Quote } from 'lucide-react';
import doctorImg from '../assets/Doctor.png';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-secondary text-primary overflow-hidden">
      
      {/* Header Section */}
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold uppercase tracking-tighter leading-[0.9] mb-8">
            The Standard of <br/>
            <span className="text-accent italic font-light">Excellence.</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-primary/70 max-w-2xl mx-auto">
            Welcome to Dr. Dhwani's Dental Clinic. We believe in merging state-of-the-art technology with compassionate, patient-first care to deliver an unparalleled dental experience.
          </p>
        </motion.div>
      </section>

      {/* Doctor Profile Section */}
      <section className="container mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <div className="relative h-full flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              className="w-[80%] md:w-[70%] aspect-[3/4] bg-slate-300 relative z-10 overflow-hidden shadow-2xl"
            >
              <img src={doctorImg} alt="Dr. Dhwani Bhalavat" className="w-full h-full object-cover" />
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/10 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tighter mb-2">
                Dr. Dhwani Bhalavat
              </h2>
              <h3 className="text-xl font-bold uppercase tracking-widest text-accent">Dental Surgeon & Implantologist</h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg font-light leading-relaxed text-primary/80"
            >
              With a deep passion for restoring smiles and building patient confidence, Dr. Dhwani brings years of specialized experience in dental surgery and implantology. 
              Her philosophy is rooted in minimally invasive techniques and creating a stress-free environment for every patient that walks through the door.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg font-light leading-relaxed text-primary/80"
            >
              Whether it's a routine checkup, a complex implant procedure, or a complete smile makeover, Dr. Dhwani ensures that every treatment plan is highly personalized, transparent, and executed with the utmost precision.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-6 pt-6 border-t border-primary/10"
            >
              <div>
                <h4 className="text-3xl font-heading font-bold mb-1">5+</h4>
                <p className="text-xs uppercase tracking-widest text-primary/50 font-bold">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-heading font-bold mb-1">1000+</h4>
                <p className="text-xs uppercase tracking-widest text-primary/50 font-bold">Happy Patients</p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Patient Reviews Section */}
      <section className="container mx-auto px-6 md:px-12 mb-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter mb-6"
          >
            Patient <span className="text-accent italic font-light">Stories.</span>
          </motion.h2>
          <p className="text-primary/60 font-light text-lg">Real experiences from those who trust us with their smiles.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Review 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-primary/5 relative group hover:shadow-md transition-shadow duration-300"
          >
            <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/5 group-hover:text-accent/10 transition-colors duration-300" />
            <div className="flex space-x-1 mb-6 text-accent">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
            </div>
            <p className="text-primary/80 font-light leading-relaxed mb-8 relative z-10 text-sm md:text-base">
              "I recently underwent a root canal treatment at Dr. Dhwani’s Dental Clinic, and I had a very positive experience. Dr. Dhwani is extremely professional, knowledgeable, and caring. She explained the entire procedure clearly and made sure I was comfortable throughout the treatment. The treatment was completed very smoothly, and I am really happy with the results. The clinic is clean, well-maintained, and the staff is also very friendly and helpful. I truly appreciate Dr. Dhwani’s patience, expertise, and gentle approach. I would highly recommend Dr. Dhwani’s Dental Clinic to anyone looking for excellent dental care. Thank you, Dr. Dhwani, for the wonderful treatment and care!"
            </p>
            <div>
              <h4 className="font-bold uppercase tracking-wider text-sm">Tejas Shah</h4>
            </div>
          </motion.div>

          {/* Review 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-primary/5 relative group hover:shadow-md transition-shadow duration-300"
          >
            <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/5 group-hover:text-accent/10 transition-colors duration-300" />
            <div className="flex space-x-1 mb-6 text-accent">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
            </div>
            <p className="text-primary/80 font-light leading-relaxed mb-8 relative z-10 text-sm md:text-base">
              "Got my wisdom tooth removed here and few other dental procedures. I was so scared initially but the doctor is very much friendly and helpful. She makes us understand the treatment first before jumping into it. My procedure was super quick and the doctor removed my wisdom tooth in like 15 minutes. The staff is friendly as well and clinic is neat and clean. Best doctor in town."
            </p>
            <div>
              <h4 className="font-bold uppercase tracking-wider text-sm">Archna Gupta</h4>
            </div>
          </motion.div>

          {/* Review 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-primary/5 relative group hover:shadow-md transition-shadow duration-300"
          >
            <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/5 group-hover:text-accent/10 transition-colors duration-300" />
            <div className="flex space-x-1 mb-6 text-accent">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
            </div>
            <p className="text-primary/80 font-light leading-relaxed mb-8 relative z-10 text-sm md:text-base">
              "Dr. Dhwani was really great! She quickly assessed my concern of a old chipped filling done by a previous dentist and fixed it. She informed me of all the things she was doing to to make sure I was comfortable throughout the process. She also took the time to quickly assess my remaining teeth to check that there weren’t any other red flags and I really appreciated this comprehensive approach to my dental care. I would highly recommend her for your dental needs."
            </p>
            <div>
              <h4 className="font-bold uppercase tracking-wider text-sm">Ananya Mehta</h4>
            </div>
          </motion.div>

          {/* Review 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-primary/5 relative group hover:shadow-md transition-shadow duration-300"
          >
            <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/5 group-hover:text-accent/10 transition-colors duration-300" />
            <div className="flex space-x-1 mb-6 text-accent">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
            </div>
            <p className="text-primary/80 font-light leading-relaxed mb-8 relative z-10 text-sm md:text-base">
              "I’m so glad I found Dr. Dhwani’s Dental Clinic in Vadodara—the care and precision during my checkup were outstanding, and the team was very prompt with follow ups and appointments."
            </p>
            <div>
              <h4 className="font-bold uppercase tracking-wider text-sm">Vishwa Raval</h4>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Ratings / Features Banner */}
      <section className="bg-primary text-secondary py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-accent">
                <Star size={32} />
              </div>
              <h4 className="text-xl font-heading font-bold">4.9/5 Rating</h4>
              <p className="text-sm font-light text-secondary/70">Top-rated clinic in Vadodara based on hundreds of genuine patient reviews.</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-accent">
                <Shield size={32} />
              </div>
              <h4 className="text-xl font-heading font-bold">Advanced Tech</h4>
              <p className="text-sm font-light text-secondary/70">Equipped with the latest dental technology for painless and precise treatments.</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-accent">
                <Award size={32} />
              </div>
              <h4 className="text-xl font-heading font-bold">Certified Experts</h4>
              <p className="text-sm font-light text-secondary/70">Highly qualified team adhering to strict international hygiene standards.</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-accent">
                <Users size={32} />
              </div>
              <h4 className="text-xl font-heading font-bold">Patient First</h4>
              <p className="text-sm font-light text-secondary/70">A relaxing, anxiety-free environment designed completely around your comfort.</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
