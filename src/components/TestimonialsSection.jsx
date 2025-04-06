"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import Button from "./UI/Button";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager at TechFlow",
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "CTO at InnovateSphere",
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 4,
  },
  {
    name: "Emily Watson",
    role: "Operations Director at CloudScale",
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 5,
  },
];

const fadeIn = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: { opacity: 1, rotateY: 0, transition: { duration: 0.6 } },
};

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-6 py-20 bg-background text-text">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-header text-primary mb-6">
          What Our Users Say
        </h2>
        <p className="text-muted mb-12 max-w-xl mx-auto">
          Honest words from learners, developers, and professionals who’ve explored AlgoMation.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative bg-white dark:bg-muted border border-border shadow-xl rounded-3xl p-6 text-left flex flex-col animate-flip-in"
            >
              <div className="absolute text-primary text-[100px] top-4 left-6 opacity-10">“</div>
              <div className="z-10">
                <p className="text-lg mb-4 text-black dark:text-white italic leading-relaxed">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={t.src}
                    alt={t.name}
                    className="rounded-full h-16 w-16 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-primary-900 dark:text-white">
                      {t.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                    <div className="flex gap-1 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < t.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="default">Share Your Experience</Button>

          <Button variant="outline">See More Reviews</Button>
        </div>
      </div>
    </section>
  );
}


