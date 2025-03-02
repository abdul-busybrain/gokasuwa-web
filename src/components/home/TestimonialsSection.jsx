import { Card } from "@/components/ui/card";

function TestimonialsSection() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center">What Our Users Say</h2>
      <div className="flex justify-center mt-6">
        <Card className="p-4">"Great platform for local trading!"</Card>
      </div>
    </section>
  );
}

export default TestimonialsSection;
