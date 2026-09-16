import Hero from '../sections/Hero';
import Intro from '../sections/Intro';
import Services from '../sections/Services';
import FeaturedService from '../sections/FeaturedService';
import WhyUs from '../sections/WhyUs';
import Doctor from '../sections/Doctor';
import Clinic from '../sections/Clinic';
import Appointment from '../sections/Appointment';
import Reviews from '../sections/Reviews';
import Location from '../sections/Location';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main className="min-h-screen bg-secondary text-primary selection:bg-accent selection:text-secondary">
      <Hero />
      <Intro />
      <Services />
      <FeaturedService />
      <WhyUs />
      <Doctor />
      <Clinic />
      <Appointment />
      <Reviews />
      <Location />
      <Footer />
    </main>
  );
};

export default Home;
