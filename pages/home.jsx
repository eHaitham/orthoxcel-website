import React from "react";
import { Button } from "../Components/ui/button.jsx";
import { GraduationCap } from "lucide-react";

import HeroSection from "../Components/home/HeroSection.jsx";
import StatsSection from "../Components/home/StatsSection.jsx";
import ServicesGrid from "../Components/home/ServicesGrid.jsx";
import CoursesSection from "../Components/home/CoursesSection.jsx";
import AboutSection from "../Components/home/AboutSection.jsx";
import GallerySection from "../Components/home/GallerySection.jsx";
import TestimonialsSection from "../Components/home/TestimonialsSection.jsx";
import ContactSection from "../Components/home/ContactSection.jsx";
import Footer from "../Components/home/Footer.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Floating Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-teal-700 bg-clip-text text-transparent">
                  OrthoXcel
                </h1>
                <p className="text-xs text-slate-600">Medical Education Excellence</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#courses" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Courses</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#gallery" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Gallery</a>
              <a href="#contact">
                <Button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 shadow-lg">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Bar */}
      <StatsSection />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Courses Section */}
      <CoursesSection />

      {/* About Section */}
      <AboutSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
