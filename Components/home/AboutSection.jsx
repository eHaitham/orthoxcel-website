"use client";

import React from "react";
import { Card, CardContent } from "../ui/card.jsx";
import { Award, Briefcase, GraduationCap, Heart, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const credentials = [
    "MD, FRCS T&O, AFACS, FEBOT",
    "RCS Faculty Member",
    "JCIE & OTS Research Member",
    "18+ Years Experience"
  ];

  const expertise = [
    { icon: Briefcase, title: "Consultant Surgeon", desc: "Specializing in Foot & Ankle Surgery" },
    { icon: GraduationCap, title: "Medical Educator", desc: "RCS Faculty & ATLS Course Director" },
    { icon: Award, title: "Academic Leader", desc: "Medical School Examiner & JCIE Member" },
    { icon: Heart, title: "SAS Advocate", desc: "RCS SAS Forum Committee Member" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full text-blue-800 mb-6">
            <Award className="w-5 h-5" />
            <span className="text-sm font-semibold">About Our Expert</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
            Meet <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Mr. Mohamed Hashem</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Distinguished Consultant Orthopaedic Surgeon and leading medical educator, combining 18+ years of clinical excellence
            with a passion for advancing orthopaedic education worldwide.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Professional Photo & Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Professional Headshot */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                <img
                  src="https://cdn.soloist.ai/5b108897-265a-4117-91d4-883b47d77226/f256d57c-27eb-4718-8b6f-622cdcf6c551_1040x1040.webp"
                  alt="Mr. Mohamed Hashem - FRCS T&O Consultant Surgeon and Medical Educator"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Floating Credentials Badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-xl">
                  FRCS T&O
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-1">1000+</div>
                <div className="text-sm text-slate-600">Students Trained</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl font-bold text-teal-500 mb-1">50+</div>
                <div className="text-sm text-slate-600">Countries Reached</div>
              </div>
            </div>
          </motion.div>

          {/* Professional Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Main Bio */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-blue-600" />
                Consultant Orthopaedic Surgeon
              </h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                Mr. Mohamed Hashem is a distinguished consultant orthopaedic surgeon with over 18 years of experience
                across multiple healthcare systems. Specialising in foot and ankle surgery, he combines clinical expertise
                with a strong passion for medical education and leadership.
              </p>

              {/* Professional Credentials */}
              <div className="space-y-3">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{credential}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Educational Leadership */}
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-blue-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-blue-600 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Educational Leadership</h4>
                  <p className="text-slate-700 mb-4">
                    As an experienced medical educator, Mr. Hashem serves as faculty with the Royal College of Surgeons (RCS),
                    an ATLS Course Director, and an examiner at multiple UK medical schools.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">RCS Faculty Member</span>
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">ATLS Director</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Medical Examiner</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Research & Advocacy */}
            <Card className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-slate-600 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Research & Advocacy</h4>
                  <p className="text-slate-700 mb-4">
                    Mr. Hashem is actively involved in national training and examination processes as a member of the
                    Joint Committee on Intercollegiate Examinations (JCIE) and contributes to academic development through
                    his role in the Orthopaedic Trauma Society (OTS) research committee.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm font-medium">JCIE Member</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">OTS Research</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Areas of Expertise Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Areas of Expertise</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive expertise spanning clinical practice, medical education, and professional advocacy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 hover:shadow-2xl transition-all duration-300 bg-white border-2 hover:border-blue-200 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SAS Doctor Advocacy Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600 text-white border-0 shadow-2xl">
            <div className="text-center">
              <Heart className="w-16 h-16 mx-auto mb-6 text-white" />
              <h4 className="text-3xl font-bold mb-4">SAS Doctor Advocacy & Support</h4>
              <p className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed">
                As a committed advocate for the professional development of SAS and non-training grade doctors,
                Mr. Hashem serves on the RCS SAS Forum committee, supporting career progression, representation,
                and recognition within the surgical community. Join our community of dedicated healthcare professionals.
              </p>
              <div className="mt-8">
                <button className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Join Our Community
                </button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
