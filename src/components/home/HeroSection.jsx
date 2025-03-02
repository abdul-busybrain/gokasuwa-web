import { Button } from "../ui/button";

function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center py-16">
      <h1 className="text-4xl font-bold">Start Selling Today!</h1>
      <p className="text-gray-600 mt-2">
        Join Gokasuwa and connect with buyers & sellers in Kano.
      </p>
      <Button className="mt-4">Get Started</Button>
    </section>
  );
}

export default HeroSection;
