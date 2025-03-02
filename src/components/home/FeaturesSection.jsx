import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function FeaturesSection() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center">Featured Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 px-4">
        {[1, 2, 3].map((item) => (
          <Card key={item}>
            <CardContent className="p-4">Product {item}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
