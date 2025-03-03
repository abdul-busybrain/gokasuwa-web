import FeaturesSection from "../components/home/Main/FeaturesSection";
import HeroSection from "../components/home/Main/HeroSection";
import HowSection from "../components/home/Main/HowSection";
import TestimonialsSection from "../components/home/Main/TestimonialsSection";
import FooterSection from "../components/home/Footer/FooterSection";

function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowSection />
        <TestimonialsSection />
      </main>
      <FooterSection />
    </>
  );
}

export default Home;
