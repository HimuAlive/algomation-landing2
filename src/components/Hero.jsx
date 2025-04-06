export default function Hero() {
  return (
    <section className="bg-background text-text h-screen flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-5xl md:text-6xl font-header text-primary mb-4">
        Algorithms through Animation
      </h2>
      <p className="text-2xl font-body max-w-xl">
        Visualize complex algorithms in an interactive and intuitive 3D environment.
      </p>
      <button className="mt-6 px-6 py-3 bg-accent text-white font-body text-lg rounded hover:opacity-90 transition">
        Get Started
      </button>
    </section>
  );
}