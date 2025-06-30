import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ChevronDown, Trophy, Brain, Star, Medal, Award, Crown, Target, Sparkles, ExternalLink, Github, Linkedin, Instagram } from 'lucide-react';

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const changingWords = [
    "a coder.",
    "a quizzer.",
    "a creator.",
    "an innovator.",
    "an SDE in progress.",
    "a tech explorer.",
    "a problem solver.",
    "a champion.",
    "an achiever.",
    "building legacy.",
    "writing code.",
    "breaking questions.",
    "crafting solutions.",
    "dreaming in logic.",
    "wired for impact.",
  ];

  // Mouse tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Word rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % changingWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [changingWords.length]);

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/venugopal-chepuri-b4899a223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      icon: Linkedin,
      color: 'blue'
    },
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/chepuri_venugopal/',
      icon: Instagram,
      color: 'pink'
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com/venugopalchepuri',
      icon: Github,
      color: 'gray'
    }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      {/* CLEAN BACKGROUND SYSTEM */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Elegant Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

        {/* Minimal Particle System - Only 25 particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(${
                Math.random() > 0.5 ? '0, 255, 255' : '255, 0, 255'
              }, ${Math.random() * 0.3 + 0.2})`
            }}
            animate={{
              y: [0, -Math.random() * 150 - 75],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 0.5, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Subtle Grid Pattern */}
        <motion.div 
          animate={{
            opacity: [0.01, 0.02, 0.01]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px',
          }}
        />

        {/* Minimal Floating Symbols - Only 6 */}
        {[...Array(6)].map((_, i) => {
          const symbols = ['🏆', '💻', '⚡', '🎯', '🧠', '⭐'];
          const symbol = symbols[i % symbols.length];
          
          return (
            <motion.div
              key={`symbol-${i}`}
              className="absolute text-xl opacity-8"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -Math.random() * 80 - 40],
                opacity: [0, 0.15, 0],
                rotate: [0, Math.random() * 180],
                scale: [0.8, 1.1, 0.8]
              }}
              transition={{
                duration: Math.random() * 25 + 20,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            >
              {symbol}
            </motion.div>
          );
        })}
      </div>

      {/* MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mt-8"
      >
        {/* NAME INTRODUCTION */}
        <motion.div className="mb-10">
          <motion.h1
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.5, 
              type: "spring", 
              stiffness: 100,
              delay: 1.5
            }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space font-black mb-6 relative leading-tight"
          >
            <span className="block text-gray-400 text-lg sm:text-xl md:text-2xl font-light mb-3 tracking-wide">
              Hello, I'm
            </span>
            
            {/* GLOWING NAME */}
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent relative inline-block"
              whileHover={{ scale: 1.02 }}
            >
              Venugopal Chepuri
              
              {/* Subtle Glow */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 25px rgba(0, 255, 255, 0.2)',
                    '0 0 40px rgba(255, 0, 255, 0.2)',
                    '0 0 25px rgba(0, 255, 255, 0.2)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-2xl blur-xl opacity-50"
              />
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* CIRCULAR PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            delay: 2.5, 
            duration: 1.2, 
            type: "spring", 
            stiffness: 100 
          }}
          className="mb-10 flex justify-center"
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className="relative w-44 h-44 md:w-52 md:h-52 lg:w-60 lg:h-60"
          >
            {/* Subtle Border Glow */}
            <motion.div
              animate={{
                background: [
                  'conic-gradient(from 0deg, #00FFFF, #FF00FF, #00FFFF)',
                  'conic-gradient(from 360deg, #00FFFF, #FF00FF, #00FFFF)'
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1 rounded-full opacity-30 blur-sm"
            />

            {/* Photo Container */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-xl"
            >
              <img 
                src="WhatsApp Image 2025-06-26 at 16.10.51_6fa4e578.jpg"
                alt="Venugopal Chepuri - Coding Prodigy & Quiz Legend"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* TAGLINE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="mb-10"
        >
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-space font-bold h-14 flex items-center justify-center mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mr-3">
              I'm
            </span>
            <motion.span
              key={currentWordIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            >
              {changingWords[currentWordIndex]}
            </motion.span>
          </div>

          {/* Inspirational Quote */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/20 rounded-xl p-4 max-w-2xl mx-auto"
          >
            <blockquote className="text-white font-medium italic text-base md:text-lg">
              "Knowledge should not just be gained — it should be built upon, tested, and transformed into impact."
            </blockquote>
          </motion.div>
        </motion.div>

        {/* ENHANCED CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
        >
          {/* Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1O-1Z5Nam4pGDFfxr8CEOXuJjPXVcCanM/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 25px rgba(0, 255, 255, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-space font-bold text-base text-white transition-all duration-300 relative overflow-hidden group"
          >
            <span className="flex items-center gap-2 relative z-10">
              <Download className="w-5 h-5" />
              Download Resume
            </span>
            
            {/* Animated Background */}
            <motion.div
              animate={{ 
                background: [
                  'linear-gradient(45deg, rgba(0,255,255,0.2), rgba(255,0,255,0.2))',
                  'linear-gradient(45deg, rgba(255,0,255,0.2), rgba(0,255,255,0.2))',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.a>
          
          {/* Quiz Portal Button */}
          <motion.a
            href="https://quiz-portal-five.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              borderColor: '#FFD700'
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border-2 border-yellow-500/50 rounded-xl font-space font-bold text-base text-white hover:bg-yellow-500/10 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group"
          >
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span>Quiz Portal</span>
            <ExternalLink className="w-4 h-4" />
            
            {/* Hover Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.a>
        </motion.div>

        {/* SOCIAL LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 1 }}
          className="flex justify-center space-x-6 mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 4.2 + index * 0.1 }}
              whileHover={{ 
                scale: 1.2, 
                y: -5,
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)'
              }}
              whileTap={{ scale: 0.9 }}
              className={`w-12 h-12 rounded-full bg-gradient-to-r from-${social.color}-500/20 to-cyan-400/20 backdrop-blur-sm border border-${social.color}-400/40 hover:border-${social.color}-400/60 flex items-center justify-center transition-all duration-300 group`}
            >
              <social.icon className={`w-6 h-6 text-${social.color}-400 group-hover:text-${social.color}-300`} />
            </motion.a>
          ))}
        </motion.div>

        {/* CONTACT BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.5, duration: 1 }}
          className="mb-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              borderColor: '#00FFFF'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-purple-500/50 rounded-xl font-space font-bold text-lg text-white hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
          >
            <Mail className="w-5 h-5" />
            Let's Connect
          </motion.button>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}
          className="flex flex-col items-center cursor-pointer group"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-cyan-400/70 mb-3 font-space font-medium tracking-wider text-sm"
          >
            Scroll to explore
          </motion.span>
          
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            className="flex flex-col items-center space-y-1"
          >
            <ChevronDown className="w-6 h-6 text-cyan-400/70 group-hover:text-purple-400 transition-colors duration-300" />
            <motion.div
              animate={{ 
                height: [12, 20, 12],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* SUBTLE CURSOR GLOW */}
      <motion.div
        style={{
          left: mousePosition.x + '%',
          top: mousePosition.y + '%'
        }}
        className="absolute w-20 h-20 bg-cyan-400/3 rounded-full blur-2xl pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
      />
    </section>
  );
};

export default Hero;