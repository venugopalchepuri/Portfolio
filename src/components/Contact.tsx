import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Download, Linkedin, Github, Twitter, FileText } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate, discuss opportunities, or just have a great conversation?
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-cyber-gray/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-neon-blue/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center space-x-3">
              <Send className="w-8 h-8 text-neon-blue" />
              <span>Send Message</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cyber-light/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cyber-light/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cyber-light/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-cyber-light/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all duration-300 resize-none"
                  placeholder="Tell me about your project, idea, or just say hello!"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-neon-blue to-neon-purple px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Floating Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Profile Card */}
            <div className="bg-cyber-gray/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:border-neon-blue/30 transition-all duration-300">
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green p-1 animate-glow">
                  <div className="w-full h-full rounded-full overflow-hidden bg-cyber-gray">
                    <img 
                      src="/public/WhatsApp Image 2025-06-26 at 16.10.51_6fa4e578.jpg"
                      alt="Venugopal Chepuri - Contact"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-neon-green rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">Venugopal Chepuri</h3>
              <p className="text-gray-300 mb-6">Available for opportunities</p>
              
              {/* Floating Action Buttons */}
              <div className="flex justify-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center space-x-2 bg-neon-green/20 hover:bg-neon-green/30 border border-neon-green/50 rounded-lg px-6 py-3 text-neon-green font-medium transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  <span>Resume</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center space-x-2 bg-neon-blue/20 hover:bg-neon-blue/30 border border-neon-blue/50 rounded-lg px-6 py-3 text-neon-blue font-medium transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Mail Me</span>
                </motion.button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-cyber-gray/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-neon-blue/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'venu.chepuri@email.com', href: 'mailto:venu.chepuri@email.com', color: 'neon-blue' },
                  { icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210', color: 'neon-green' },
                  { icon: MapPin, label: 'Location', value: 'Greater Noida, India', href: '#', color: 'neon-purple' }
                ].map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center space-x-4 p-4 bg-cyber-light/30 rounded-lg hover:bg-cyber-light/50 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-${contact.color} to-neon-purple flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{contact.label}</p>
                      <p className="text-white font-medium">{contact.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-cyber-gray/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-neon-blue/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-6">Follow Me</h3>
              
              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'neon-blue' },
                  { icon: Github, label: 'GitHub', href: '#', color: 'neon-green' },
                  { icon: Twitter, label: 'Twitter', href: '#', color: 'neon-purple' }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`w-12 h-12 rounded-full bg-gradient-to-r from-${social.color} to-neon-purple flex items-center justify-center hover:shadow-lg hover:shadow-${social.color}/25 transition-all duration-300`}
                  >
                    <social.icon className="w-6 h-6 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;