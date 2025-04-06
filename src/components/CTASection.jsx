// CTASection.jsx
export default function CTASection() {
  return (
    <section className="bg-accent text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Explore AlgoMation?</h2>
        <p className="text-lg mb-8">
          Dive into interactive algorithm animations and enhance your understanding the fun way!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-accent px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
            Start Exploring
          </button>
          <button className="border border-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-accent transition">
            Join Our Community
          </button>
        </div>
      </div>
    </section>
  );
}