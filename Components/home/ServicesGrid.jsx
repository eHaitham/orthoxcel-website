import React from "react";
import { Card } from "../ui/card.jsx";
import { Button } from "../ui/button.jsx";
import { Youtube, BookOpen, Users, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesGrid() {
  const services = [
    {
      icon: Youtube,
      title: "Educational YouTube Channel",
      description: "Free educational platform led by Mr. Mohamed Hashem with comprehensive tutorials, orientation sessions, and courses for healthcare professionals worldwide.",
      badge: "Free Access",
      color: "from-red-500 to-red-600",
      link: "https://www.youtube.com/@mohamedahashem5629/videos"
    },
    {
      icon: BookOpen,
      title: "FRCS Orientation Service",
      description: "Complete support platform guiding FRCS (T&O) candidates through every exam step - from orientation sessions to mock exams with expert feedback.",
      badge: "Comprehensive",
      color: "from-blue-500 to-blue-600",
      link: "#courses"
    },
    {
      icon: Users,
      title: "Foot & Ankle Patient Education",
      description: "Expert-led guidance for patients with foot and ankle conditions. Clear, reliable information on diagnosis, treatment options, and recovery.",
      badge: "Patient Care",
      color: "from-teal-500 to-teal-600",
      link: "#contact"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            World-Class Medical Education
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Three pillars of excellence: Expert clinical care, patient education, and comprehensive medical training
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full p-8 hover:shadow-2xl transition-all duration-300 group border-2 hover:border-blue-200 bg-white">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                    {service.badge}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors p-0"
                  onClick={() => window.location.href = service.link}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
