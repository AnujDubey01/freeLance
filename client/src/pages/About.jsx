import Introduction from '../components/Introduction';

const About = () => {
  return (
    <div className="pt-24 min-h-screen">
      <Introduction />
      
      {/* Additional Philosophy Section */}
      <section className="py-32 px-6 bg-gym-charcoal border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-6xl font-heading text-white uppercase tracking-wider mb-8">
            The Ironforge Standard
          </h3>
          <p className="text-gray-400 font-body text-lg leading-relaxed mb-6">
            We believe that fitness is not a hobby, but a foundational pillar of a strong, capable life. Our facility was designed from the ground up to eliminate distractions and provide the highest quality equipment for those serious about their training.
          </p>
          <p className="text-gray-400 font-body text-lg leading-relaxed">
            Whether your goal is to compete, to recover from injury, or simply to become the strongest version of yourself, our community and coaching staff are here to support that journey every single day.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
