import React from "react";
import { Card } from "../ui/card.jsx";
import { Button } from "../ui/button.jsx";
import { BookOpen, Users, Clock, Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CoursesSection() {
  const courses = [
    {
      title: "FRCS T&O Orientation Program",
      description: "Comprehensive preparation for FRCS (Tr & Orth) examination including theory, clinical, and viva components.",
      duration: "12 weeks",
      students: "50+",
      level: "Advanced",
      icon: Award
    },
    {
      title: "Foot & Ankle Surgery Masterclass",
      description: "Advanced surgical techniques and management strategies for complex foot and ankle conditions.",
      duration: "6 weeks",
      students: "30+",
      level: "Advanced",
      icon: BookOpen
    },
    {
      title: "Orthopaedic Basics for Junior Doctors",
      description: "Foundation course covering essential orthopaedic principles, examination techniques, and common conditions.",
      duration: "8 weeks",
      students: "100+",
      level: "Foundation",
      icon: Users
    }
  ];

  return (
    <section id="courses" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Educational Programs
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Structured courses designed to elevate your orthopaedic knowledge and surgical skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full p-8 hover:shadow-2xl transition-all duration-300 bg-white border-2 hover:border-blue-200">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                  <course.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {course.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center gap-4 mb-6 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                    {course.level} Level
                  </span>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600"
                  onClick={() => window.location.href = '#contact'}
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
