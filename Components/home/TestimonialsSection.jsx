import React from "react";
import { Card } from "../ui/card.jsx";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. L. McKee",
      role: "ST8 T&O",
      content: "I honestly can't thank the organizers enough for such a brilliant FRCS Orthopaedic Clinical Course. These two days were an absolute game changer for my preparation. The teaching was crystal clear, and the feedback was constructive but encouraging.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1559839734-49b21256e0bf?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Dr. R. Patel",
      role: "Registrar",
      content: "The course was excellent overall, and the faculty stood out for being not only highly knowledgeable but also incredibly friendly and approachable. The attention to detail was remarkable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Dr. S. Ahmed",
      role: "Consultant",
      content: "Very fruitful and scientific discussions. Excellent platform to keep updated, reviewing articles and participating positively. The journal club format is outstanding.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1594824475063-1b1a4e6a1e2a?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Dr. M. Thompson",
      role: "Fellow",
      content: "Overall was an excellent course environment and teaching. Friendly environment, and significant high-quality work been done. Highly recommend to all candidates.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Dr. A. Khan",
      role: "Senior Registrar",
      content: "Many thanks to all the organizers for their efforts, attention to detail, and the time they devoted to supporting us. The mock exams were particularly helpful.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Dr. E. Williams",
      role: "ST6 T&O",
      content: "The realistic clinical scenarios and expert feedback helped me gain confidence. The small group format allowed for personalized attention and meaningful learning.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1594824804732-ca8db723f8fa?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 mb-4">
            <Quote className="w-4 h-4" />
            <span className="text-sm font-medium">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hear from healthcare professionals who have benefited from our comprehensive educational programs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full p-8 hover:shadow-2xl transition-all duration-300 bg-white border-2 hover:border-blue-200">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
