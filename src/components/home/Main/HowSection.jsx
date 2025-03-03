function HowSection() {
  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-2xl font-bold text-center">How It Works</h2>
      <div className="flex justify-center gap-8 mt-6">
        {["Sign Up", "List Your Product", "Connect & Sell"].map(
          (step, index) => (
            <div key={index} className="text-center">
              <span className="block text-lg font-semibold">{step}</span>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default HowSection;
