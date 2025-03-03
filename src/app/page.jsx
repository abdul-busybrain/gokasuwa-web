import FeaturesSection from "../components/home/Main/FeaturesSection";
import HeroSection from "../components/home/Main/HeroSection";
import HowSection from "../components/home/Main/HowSection";
import TestimonialsSection from "../components/home/Main/TestimonialsSection";
import FooterSection from "../components/home/Footer/FooterSection";
import Container from "@/components/Container";

function Home() {
  return (
    <>
      <main className="h-full">
        <Container>
          <div className="mb-6">
            <HeroSection />
            <FeaturesSection />
            <HowSection />
            <TestimonialsSection />
          </div>
        </Container>
      </main>
    </>
  );
}

export default Home;
