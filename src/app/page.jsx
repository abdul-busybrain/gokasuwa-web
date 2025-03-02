import Header from "../components/global/Header";
import FeaturesSection from "../components/home/FeaturesSection";
import FooterSection from "../components/home/FooterSection";
import HeroSection from "../components/home/HeroSection";
import HowSection from "../components/home/HowSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

function Home() {
  return (
    <>
      <Header />
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
