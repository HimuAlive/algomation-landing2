import { FaCube, FaPlayCircle, FaMobileAlt, FaChalkboardTeacher } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    title: "3D Visual Learning",
    desc: "Watch how algorithms work in real-time 3D space.",
    icon: <FaCube className="text-3xl text-primary" />
  },
  {
    title: "Step-by-Step Animations",
    desc: "Pause, rewind, and break down each algorithm step.",
    icon: <FaPlayCircle className="text-3xl text-primary" />
  },
  {
    title: "Responsive & Lightweight",
    desc: "Works across devices without heavy load.",
    icon: <FaMobileAlt className="text-3xl text-primary" />
  },
  {
    title: "Teacher Friendly",
    desc: "Perfect for classroom explanations & demos.",
    icon: <FaChalkboardTeacher className="text-3xl text-primary" />
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function FeatureSection() {
  return (
    <section className="px-6 py-16 bg-background text-text">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-header text-primary text-center mb-12">
          Powerful Features for Learners & Educators
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex gap-4 items-start hover:shadow-lg transition"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div>{feature.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-text">{feature.title}</h3>
                <p className="text-sm text-text-muted mt-1">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-12"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <button className="bg-accent text-white font-semibold px-6 py-3 rounded-full hover:bg-primary-700 transition">
            Explore Animations
          </button>
        </motion.div>
      </div>
    </section>
  );
}