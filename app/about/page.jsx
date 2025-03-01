'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const faqData = [
  { question: 'What is OLabs?', answer: 'OLabs hosts virtual lab experiments for students in Physical, Chemical, and Biological sciences, aligned with NCERT/CBSE and State Board syllabus.' },
  { question: 'How does OLabs work?', answer: 'It uses interactive simulations, animations, and mathematical techniques to create an engaging lab experience.' },
  { question: 'How much does it cost?', answer: 'OLabs is free for registered schools.' },
  { question: 'What subjects are covered?', answer: 'Physical, Chemical, and Biological sciences for classes 9-12, along with Mathematics and English lessons for classes 9-10.' }
];

export default function OLabs() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        className="text-center py-20 px-5"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 animate-pulse">OLabs - The Future of Virtual Labs</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Experience interactive and futuristic lab simulations accessible anytime, anywhere.
        </p>
      </motion.section>
      
      {/* Features Section */}
      <motion.section 
        className="py-16 px-8 bg-gray-800 transition-all hover:bg-gray-700 rounded-xl shadow-lg m-5"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-purple-400">Key Features</h2>
        <ul className="mt-6 space-y-4 text-gray-300">
          <li className="flex items-center"><span className="text-green-400 mr-2">✔</span> Aligned with NCERT/CBSE syllabus</li>
          <li className="flex items-center"><span className="text-green-400 mr-2">✔</span> Interactive animations & simulations</li>
          <li className="flex items-center"><span className="text-green-400 mr-2">✔</span> Accessible anytime, anywhere</li>
          <li className="flex items-center"><span className="text-green-400 mr-2">✔</span> Free access for registered schools</li>
        </ul>
      </motion.section>

      {/* FAQ Section */}
      <motion.section className="py-16 px-8">
        <h2 className="text-3xl font-semibold text-cyan-400 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 rounded-xl shadow-lg p-5 cursor-pointer transition-all hover:bg-gray-700"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl text-purple-400 flex justify-between items-center">
                {faq.question} 
                <span className="text-cyan-400">{activeIndex === index ? '-' : '+'}</span>
              </h3>
              {activeIndex === index && (
                <motion.p 
                  className="mt-3 text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>
      
      {/* Footer */}
      <footer className="text-center py-6 mt-10 bg-gray-900 text-gray-400 text-sm">
        Developed by Amrita Vishwa Vidyapeetham & CDAC Mumbai | Funded by MeitY
      </footer>
    </div>
  );
}
