import React from "react";
import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    { number: "18+", label: "Years of Experience", suffix: "" },
    { number: "1000+", label: "Students Trained", suffix: "" },
    { number: "50+", label: "Courses Created", suffix: "" },
    { number: "4.9", label: "Student Rating", suffix: "/5" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center text-white"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-blue-100 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
