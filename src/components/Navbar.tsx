import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, HelpCircle, Sparkles, Download, Linkedin, Instagram, Github } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Academic', href: '#academic' },
    { name: 'Quiz Legacy', href: '#quiz-legacy' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
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
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-cyber-dark/60 backdrop-blur-xl border-b border-quode-cyan/10' 
          : 'bg-transparent'
      }`}
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-quode-cyan/5 via-transparent to-quode-magenta/5 opacity-0 hover:opacity-100 transition-opacity duration-700" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`nav-particle-${i}`}
            className="absolute w-1 h-1 bg-quode-cyan/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: '50%',
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* QUODE Logo - More Subtle */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 relative group"
          >
            {/* Subtle Logo Icon */}
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="relative w-10 h-10 rounded-lg bg-gradient-to-r from-quode-cyan/20 to-quode-magenta/20 backdrop-blur-sm border border-quode-cyan/20 p-0.5"
            >
              <div className="w-full h-full bg-cyber-dark/80 rounded-lg flex items-center justify-center relative overflow-hidden">
                <span className="text-quode-cyan font-orbitron font-bold text-sm relative z-10">Q</span>
                
                {/* Micro Animated Icons */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute top-0.5 right-0.5"
                >
                  <HelpCircle className="w-1.5 h-1.5 text-quode-cyan/60" />
                </motion.div>
                <motion.div
                  animate={{ 
                    rotate: [360, 0],
                    scale: [1, 0.6, 1]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute bottom-0.5 left-0.5"
                >
                  <Code className="w-1.5 h-1.5 text-quode-magenta/60" />
                </motion.div>
              </div>
            </motion.div>

            {/* Subtle QUODE Text */}
            <div className="flex flex-col">
              <motion.span
                whileHover={{ scale: 1.02 }}
                className="font-orbitron font-bold text-lg bg-gradient-to-r from-quode-cyan/80 to-quode-magenta/80 bg-clip-text text-transparent relative"
              >
                QUODE
                
                {/* Very Subtle Shimmer */}
                <motion.div
                  animate={{ x: [-50, 100] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "linear",
                    repeatDelay: 3
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </motion.span>
              <span className="text-xs text-gray-500 font-inter -mt-0.5 opacity-60">
                questions • code
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation - More Invisible */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  color: '#00FFFF',
                  textShadow: '0 0 8px rgba(0, 255, 255, 0.6)'
                }}
                className="text-gray-400/80 hover:text-quode-cyan transition-all duration-300 font-medium text-sm relative group"
              >
                {item.name}
                
                {/* Subtle Hover Underline */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-quode-cyan/60 to-quode-magenta/60"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Micro Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-quode-cyan/5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"
                />
              </motion.a>
            ))}
            
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.2,
                    y: -2,
                    boxShadow: '0 0 15px rgba(0, 255, 255, 0.4)'
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-8 h-8 rounded-full bg-gradient-to-r from-${social.color}-500/20 to-quode-cyan/20 backdrop-blur-sm border border-${social.color}-400/30 hover:border-${social.color}-400/60 flex items-center justify-center transition-all duration-300`}
                >
                  <social.icon className={`w-4 h-4 text-${social.color}-400 hover:text-${social.color}-300`} />
                </motion.a>
              ))}
            </div>
            
            {/* Resume Button with Google Drive Link */}
            <motion.a
              href="https://drive.google.com/file/d/1O-1Z5Nam4pGDFfxr8CEOXuJjPXVcCanM/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-quode-cyan/20 to-quode-magenta/20 backdrop-blur-sm border border-quode-cyan/30 hover:border-quode-cyan/50 px-5 py-2 rounded-lg font-orbitron font-medium text-quode-cyan/90 hover:text-quode-cyan transition-all duration-300 text-sm relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </span>
              
              {/* Subtle Animated Background */}
              <motion.div
                animate={{ 
                  background: [
                    'linear-gradient(45deg, rgba(0,255,255,0.1), rgba(255,0,255,0.1))',
                    'linear-gradient(45deg, rgba(255,0,255,0.1), rgba(0,255,255,0.1))',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.a>
          </div>

          {/* Mobile Menu Button - More Subtle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-cyber-gray/20 backdrop-blur-sm border border-quode-cyan/20 hover:border-quode-cyan/40 transition-colors duration-300"
          >
            {isMobileMenuOpen ? 
              <X size={20} className="text-quode-cyan/80" /> : 
              <Menu size={20} className="text-quode-cyan/80" />
            }
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu - More Subtle */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cyber-dark/90 backdrop-blur-xl border-t border-quode-cyan/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-400/80 hover:text-quode-cyan transition-colors duration-300 font-medium py-2 border-b border-gray-700/30 hover:border-quode-cyan/20"
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex justify-center space-x-4 pt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: navItems.length * 0.1 + index * 0.1 }}
                    className={`w-10 h-10 rounded-full bg-gradient-to-r from-${social.color}-500/20 to-quode-cyan/20 backdrop-blur-sm border border-${social.color}-400/30 flex items-center justify-center`}
                  >
                    <social.icon className={`w-5 h-5 text-${social.color}-400`} />
                  </motion.a>
                ))}
              </div>
              
              <motion.a
                href="https://drive.google.com/file/d/1O-1Z5Nam4pGDFfxr8CEOXuJjPXVcCanM/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: (navItems.length + socialLinks.length) * 0.1 }}
                className="w-full bg-gradient-to-r from-quode-cyan/20 to-quode-magenta/20 backdrop-blur-sm border border-quode-cyan/30 px-4 py-3 rounded-lg font-orbitron font-medium text-quode-cyan/90 mt-4 flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;