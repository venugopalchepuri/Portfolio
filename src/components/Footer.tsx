import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Code, HelpCircle, Zap, Download, Linkedin, Instagram, Github, MessageCircle } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quotes = [
    "Where questions meet code.",
    "Quiz champion. Code creator.",
    "Analytical mind. Creative solutions.",
    "QUODE: The perfect fusion.",
    "Building tomorrow's innovations."
  ];

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
    <footer className="relative bg-cyber-dark border-t border-quode-cyan/20">
      {/* QUODE Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-quode-cyan/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-quode-magenta/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating QUODE Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`footer-q-${i}`}
            className="absolute text-6xl font-orbitron font-bold text-quode-cyan/10"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          >
            Q
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* QUODE Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* Main QUODE Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center space-x-4 mb-6"
            >
              {/* Logo Icon */}
              <div className="relative w-16 h-16 rounded-xl bg-gradient-to-r from-quode-cyan to-quode-magenta p-0.5">
                <div className="w-full h-full bg-cyber-dark rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-quode-cyan/20 to-quode-magenta/20" />
                  <span className="text-white font-orbitron font-bold text-2xl relative z-10">Q</span>
                  
                  {/* Animated Icons */}
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1 right-1"
                  >
                    <HelpCircle className="w-3 h-3 text-quode-cyan opacity-60" />
                  </motion.div>
                  <motion.div
                    animate={{ rotate: [360, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-1 left-1"
                  >
                    <Code className="w-3 h-3 text-quode-magenta opacity-60" />
                  </motion.div>
                </div>
              </div>

              {/* QUODE Text */}
              <div className="flex flex-col">
                <span className="font-orbitron font-bold text-4xl bg-gradient-to-r from-quode-cyan to-quode-magenta bg-clip-text text-transparent">
                  QUODE
                </span>
                <span className="text-sm text-gray-400 font-inter -mt-1">
                  Where questions meet code
                </span>
              </div>
            </motion.div>

            {/* Typing Effect Carousel */}
            <div className="text-xl md:text-2xl font-light text-gray-300 mb-4">
              <motion.span
                key={quotes[0]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-block"
              >
                {quotes[0]}
              </motion.span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="ml-1 text-quode-cyan"
              >
                |
              </motion.span>
            </div>
          </motion.div>

          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-quode-cyan to-quode-magenta p-1 mx-auto mb-4 animate-pulse-glow">
              <div className="w-full h-full rounded-full overflow-hidden bg-cyber-dark">
                <img 
                  src="/public/WhatsApp Image 2025-06-26 at 15.33.37_724db8c1.jpg"
                  alt="Venugopal Chepuri - QUODE Creator"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Venugopal Chepuri</h3>
            <p className="text-gray-400">QUODE Creator & Innovation Architect</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Connect with me</h4>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    boxShadow: '0 0 25px rgba(0, 255, 255, 0.4)'
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 rounded-full bg-gradient-to-r from-${social.color}-500/20 to-quode-cyan/20 backdrop-blur-sm border border-${social.color}-400/40 hover:border-${social.color}-400/60 flex items-center justify-center transition-all duration-300 group`}
                >
                  <social.icon className={`w-6 h-6 text-${social.color}-400 group-hover:text-${social.color}-300`} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8 flex flex-col sm:flex-row justify-center gap-4"
          >
            {/* Resume Download Button */}
            <motion.a
              href="https://drive.google.com/file/d/1O-1Z5Nam4pGDFfxr8CEOXuJjPXVcCanM/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 25px rgba(0, 255, 255, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-quode-cyan/20 to-quode-magenta/20 backdrop-blur-sm border border-quode-cyan/40 hover:border-quode-cyan/60 rounded-xl px-6 py-3 text-quode-cyan font-semibold transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.a>

            {/* WhatsApp Contact Button */}
            <motion.a
              href="https://wa.link/1epj77"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 25px rgba(0, 255, 0, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500/20 to-green-400/20 backdrop-blur-sm border border-green-400/40 hover:border-green-400/60 rounded-xl px-6 py-3 text-green-400 font-semibold transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Send Message</span>
            </motion.a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8 mb-8 text-gray-400"
          >
            {['About', 'Projects', 'Quiz Legacy', 'Skills', 'Contact'].map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                whileHover={{ 
                  color: '#00FFFF',
                  textShadow: '0 0 8px rgba(0, 255, 255, 0.8)'
                }}
                className="hover:text-quode-cyan transition-all duration-300 font-medium"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>

          {/* QUODE Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 1, delay: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-quode-cyan to-quode-magenta to-transparent mx-auto mb-8 max-w-md"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm"
          >
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span>© {currentYear} QUODE by Venugopal Chepuri. Built with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and React</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Where questions meet code</span>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ 
                  scale: 1.1, 
                  y: -2,
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
                }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-quode-cyan to-quode-magenta flex items-center justify-center hover:shadow-lg transition-all duration-300"
              >
                <ArrowUp className="w-5 h-5 text-black" />
              </motion.button>
            </div>
          </motion.div>

          {/* QUODE Easter Egg */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute bottom-4 right-4 text-xs text-gray-600"
          >
            <span className="cursor-pointer font-orbitron" title="QUODE: The perfect fusion of Quiz and Code! 🚀">
              🧠 + 💻 = QUODE
            </span>
          </motion.div>
        </div>
      </div>

      {/* Floating QUODE Elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-2xl"
        >
          <HelpCircle className="w-8 h-8 text-quode-cyan" />
        </motion.div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          className="text-2xl"
        >
          <Code className="w-8 h-8 text-quode-magenta" />
        </motion.div>
      </div>
      <div className="absolute top-1/2 left-20 opacity-20">
        <motion.div
          animate={{ y: [0, -12, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          className="text-2xl"
        >
          <Zap className="w-8 h-8 text-quode-cyan" />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;