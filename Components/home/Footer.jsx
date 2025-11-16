import React from "react";
import { GraduationCap, Mail, Phone, MapPin, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">OrthoXcel</h3>
                <p className="text-sm text-slate-400">Medical Education Excellence</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Advancing orthopaedic care through world-class clinical expertise and comprehensive medical education. 
              Led by Mr. Mohamed Hashem, FRCS T&O, serving medical professionals worldwide.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.youtube.com/@mohamedahashem5629/videos" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#courses" className="text-slate-400 hover:text-white transition-colors">Courses</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#gallery" className="text-slate-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:Contact@OrthoXcel.co.uk" className="text-slate-400 hover:text-white transition-colors">
                  Contact@OrthoXcel.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+441753520986" className="text-slate-400 hover:text-white transition-colors">
                  +44 1753 520986
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Slough, Berkshire<br />United Kingdom
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} OrthoXcel. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
