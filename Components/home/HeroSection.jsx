import React from "react";
import { Button } from "../ui/button.jsx";
import { ArrowRight, Play, Star, Award, Users, Globe, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A2463' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-transparent to-teal-600/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            >
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">FRCS T&O Consultant Surgeon</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Elevating
                <span className="block bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Orthopaedic
                </span>
                <span className="block text-white">Excellence</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                Join 1000+ medical professionals worldwide in advancing orthopaedic education through
                expert-led training, clinical insights, and innovative learning solutions by FRCS T&O surgeon
                <span className="font-semibold text-white"> Mr. Mohamed Hashem</span>.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm bg-white/10"
                onClick={() => window.open('https://www.youtube.com/@mohamedahashem5629/videos', '_blank')}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Free Content
              </Button>
            </motion.div>

            {/* Key Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2 mx-auto">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-sm text-slate-400">Doctors Trained</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2 mx-auto">
                  <Globe className="w-6 h-6 text-teal-400" />
                </div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-slate-400">Countries</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2 mx-auto">
                  <BookOpen className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold text-white">18+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Professional Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Floating Elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <Star className="w-8 h-8 text-white" />
            </div>

            {/* Main Professional Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
              <div className="relative bg-white p-3 rounded-3xl shadow-2xl">
                <img
                  src="https://cdn.soloist.ai/5b108897-265a-4117-91d4-883b47d77226/e41062c2-5005-48fe-8952-68fc7fdc8fa0_1040x1040.webp"
                  alt="OrthoXcel FRCS Clinical Course - Professional Orthopaedic Education"
                  className="w-full h-96 md:h-[500px] object-cover rounded-2xl"
                />

                {/* Professional Badge Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-slate-700">Available for Consultation</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Mr. Mohamed Hashem</h3>
                    <p className="text-sm text-slate-600 mb-3">FRCS T&O • Consultant Orthopaedic Surgeon</p>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">18+ Years Experience</span>
                      <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-medium">RCS Faculty</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center mt-8 space-x-6"
            >
              <div className="flex items-center gap-2 text-white/80">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Board Certified</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm">International Recognition</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span className="text-sm">Published Researcher</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
