import { FaDownload, FaHeart, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const algorithms = [
  { title: "BubbleMation", desc: "Step-by-step 3D visualization of Bubble Sort." },
  { title: "MergeMation", desc: "Animated visual merge and conquer logic." },
  { title: "QuickMation", desc: "Witness partitioning with a dynamic touch." },
  { title: "HeapMation", desc: "See how heap trees turn into sorted arrays." },
  { title: "CountMation", desc: "Watch Counting Sort in a visual walkthrough." },
  { title: "InsertMation", desc: "Slide and place elements in insertion sort." }
];

const layout = [
  "col-span-2 row-span-2",
  "col-span-2",
  "col-span-2 row-span-1",
  "col-span-3 row-span-2",
  "col-span-3",
  "col-span-2 row-span-1",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AlgoBento() {
  return (
    <section className="px-6 py-12 bg-background text-text">
      <h2 className="text-3xl font-header text-primary mb-10 text-center">
        Explore Algorithm Animations
      </h2>

      <div className="grid grid-cols-6 auto-rows-[200px] gap-6">
        {algorithms.map((algo, index) => (
          <motion.div
            key={index}
            className={`bg-primary-300 backdrop-blur-md border border-white rounded-2xl p-5 flex flex-col gap-3 shadow-xl hover:scale-[1.02] transition ${layout[index]}`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl font-header text-primary-900">{algo.title}</h3>

            <div className="bg-white rounded-xl flex-grow flex items-center justify-center text-sm text-black">
              Preview Placeholder
            </div>

            <p className="text-sm font-body text-white">{algo.desc}</p>

            <div className="flex justify-between items-center text-white text-sm pt-2 border-t border-black mt-auto">
              <span className="flex items-center gap-1"><FaDownload className="text-slate-500"/> 1.2k</span>
              <span className="flex items-center gap-1"><FaHeart className="text-red-500"/> 340</span>
              <span className="flex items-center gap-1"><FaStar className="text-yellow-500"/> 4.5</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}