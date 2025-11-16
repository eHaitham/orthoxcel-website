import React, { useState } from "react";
import { motion } from "framer-motion";
import { Camera, ZoomIn, X } from "lucide-react";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryItems = [
    // OrthoXcel Courses & Events
    {
      id: 1,
      category: 'education',
      title: 'OrthoXcel FRCS Viva and Clinical Course',
      description: 'Comprehensive FRCS preparation with viva practice and clinical scenarios',
      image: 'https://cdn.soloist.ai/5b108897-265a-4117-91d4-883b47d77226/e41062c2-5005-48fe-8952-68fc7fdc8fa0_1040x1040.webp',
      type: 'image'
    },
    {
      id: 2,
      category: 'education',
      title: 'EOA-BEOS Monthly Journal Club',
      description: 'Scientific discussions and evidence-based learning sessions',
      image: 'https://cdn.soloist.ai/5b108897-265a-4117-91d4-883b47d77226/05a5fc02-07a2-4395-bc33-babf62b90b81_1040x1040.webp',
      type: 'image'
    },
    {
      id: 3,
      category: 'surgery',
      title: 'Foot and Ankle Review Course',
      description: 'Advanced surgical techniques and case discussions',
      image: 'https://cdn.soloist.ai/5b108897-265a-4117-91d4-883b47d77226/d1b64ae9-b31e-4530-ae86-96ac4997bec7_1040x1040.webp',
      type: 'image'
    },
    {
      id: 4,
      category: 'education',
      title: 'FRCS Clinical Course September 2025',
      description: 'Intensive clinical skills training for FRCS candidates',
      image: 'https://cdn.soloist.ai/5b108897-265a-4117-91d4-883b47d77226/c6851636-372b-4dba-8815-4f0c9c0275d1_1040x1040.webp',
      type: 'image'
    },
    {
      id: 5,
      category: 'research',
      title: 'SICOT Annual Congress Madrid 2025',
      description: 'International orthopaedic conference presentations',
      image: 'https://cdn.soloist.ai/5b108897-265a-4117-91d4-883b47d77226/bddc9d49-2d45-4aea-b946-6e0b1284d680_1040x1040.webp',
      type: 'image'
    },
    {
      id: 6,
      category: 'research',
      title: 'Mr. Hashem Presenting Research',
      description: 'Academic presentations and research dissemination',
      image: 'https://cdn.soloist.ai/5b108897-265a-4117-91d4-883b47d77226/c80c55c1-f150-48be-88d6-36332ab1bb76_1040x1040.webp',
      type: 'image'
    },
    {
      id: 7,
      category: 'education',
      title: 'OrthoXcel FRCS Course',
      description: 'Structured FRCS Trauma & Orthopaedic preparation',
      image: 'https://cdn.soloist.ai/5b108897-265a-4117-91d4-883b47d77226/d48165ab-4194-4589-b626-d216d84aea55_1040x1040.webp',
      type: 'image'
    },
    {
      id: 8,
      category: 'research',
      title: 'BOA Congress Liverpool 2025',
      description: 'British Orthopaedic Association annual congress',
      image: 'https://cdn.soloist.ai/5b108897-265a-4117-91d4-883b47d77226/4b25d2a1-7d66-4d06-88ae-3fed3c3cd603_1040x1040.webp',
      type: 'image'
    },
    {
      id: 9,
      category: 'research',
      title: 'SICOT Annual Congress',
      description: 'International Society of Orthopaedic Surgery and Traumatology',
      image: 'https://cdn.soloist.ai/5b108897-265a-4117-91d4-883b47d77226/f0e7c30b-8958-4c64-82dd-a6aa973b1ba8_1040x1040.webp',
      type: 'image'
    }
  ];

  const categories = [
    { id: 'all', label: 'All', icon: '📸' },
    { id: 'surgery', label: 'Surgery', icon: '🔪' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'research', label: 'Research', icon: '🔬' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
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
            <Camera className="w-5 h-5" />
            <span className="text-sm font-semibold">Gallery</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
            Orthopaedic <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Excellence</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive collection of surgical procedures, educational content,
            patient care initiatives, and research achievements in orthopaedic medicine.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-slate-700 hover:bg-blue-50 hover:shadow-md'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>

                  {/* Type Indicator */}
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.category === 'surgery' ? 'bg-red-500 text-white' :
                    item.category === 'education' ? 'bg-blue-500 text-white' :
                    item.category === 'research' ? 'bg-purple-500 text-white' :
                    'bg-gray-500 text-white'
                  }`}>
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">9</div>
            <div className="text-sm text-slate-600">Gallery Images</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-teal-500 mb-2">6</div>
            <div className="text-sm text-slate-600">FRCS Courses</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-green-500 mb-2">3</div>
            <div className="text-sm text-slate-600">International Congresses</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-purple-500 mb-2">1000+</div>
            <div className="text-sm text-slate-600">Students Trained</div>
          </div>
        </motion.div>

        {/* Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-cover"
              />

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedImage.category === 'surgery' ? 'bg-red-100 text-red-800' :
                    selectedImage.category === 'education' ? 'bg-blue-100 text-blue-800' :
                    selectedImage.category === 'research' ? 'bg-purple-100 text-purple-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">{selectedImage.title}</h3>
                <p className="text-slate-600 mb-4">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
