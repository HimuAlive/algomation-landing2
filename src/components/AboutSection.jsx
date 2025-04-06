import { motion } from "framer-motion";

const stats = [
  { label: "Algorithms", value: "60+" },
  { label: "Users", value: "55k+" },
  { label: "Likes", value: "230k+" }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AboutSection() {
  return (
    <section className="px-6 py-16 bg-background text-text">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Text Content */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-header text-primary">Why AlgoMation?</h2>

          <p className="font-body text-lg text-text">
            AlgoMation is your go-to educational platform to learn algorithms visually.
            Through animated 3D interactions, it turns abstract logic into engaging experiences.
          </p>

          <div className="space-y-2 text-sm text-text-muted">
            <p>• Algorithms are often too abstract and hard to visualize.</p>
            <p>• Most resources are either overly technical or static.</p>
            <p>• Students and teachers struggle to keep learning interactive.</p>
          </div>

          <div className="text-text text-sm">
            AlgoMation solves these with clear visuals, fun animations, and intuitive designs —
            perfect for both classroom and self-learning.
          </div>

          {/* Mini Stats */}
          <div className="flex gap-8 pt-4">
            {stats.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-primary">{item.value}</div>
                <div className="text-sm text-text-muted">{item.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-accent text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-primary-700 transition"
          >
            Explore Visuals
          </motion.button>
        </motion.div>

        {/* Image / Preview Box */}
        <motion.div
          className="rounded-2xl bg-primary-100 shadow-xl p-8 h-[300px] flex items-center justify-center text-primary-900 text-xl font-bold"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Preview Placeholder
        </motion.div>
      </div>
    </section>
  );
}