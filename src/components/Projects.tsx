import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code, Zap, Leaf, BarChart3, Play, Eye } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Virtual Herbal Garden Website',
      description: 'Smart India Hackathon winning project - Digital platform for traditional herbal medicine knowledge',
      image: 'https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'AI/ML'],
      github: '#',
      demo: '#',
      category: 'Web Development',
      icon: Leaf,
      color: 'neon-green',
      features: [
        'AI-powered plant identification',
        'Traditional medicine database',
        'Interactive 3D garden visualization',
        'Multi-language support',
        'Expert consultation system'
      ],
      impact: 'Winner of Smart India Hackathon 2023',
      useCase: 'Digitizing traditional herbal knowledge for modern healthcare'
    },
    {
      id: 2,
      title: 'News Mosaic - Bias Detection',
      description: 'AI-powered news analysis platform that detects bias and provides balanced perspectives',
      image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'TensorFlow', 'React', 'Flask', 'NLP'],
      github: '#',
      demo: '#',
      category: 'AI/ML',
      icon: BarChart3,
      color: 'neon-blue',
      features: [
        'Real-time bias detection',
        'Sentiment analysis',
        'Source credibility scoring',
        'Alternative perspective suggestions',
        'Interactive bias visualization'
      ],
      impact: 'Featured in tech conference presentation',
      useCase: 'Promoting media literacy and balanced news consumption'
    },
    {
      id: 3,
      title: 'Digital Circuit Simulator',
      description: 'Advanced Verilog-based circuit simulation and verification platform using Icarus Verilog',
      image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Verilog', 'C++', 'Python', 'GTKWave', 'SystemVerilog'],
      github: '#',
      demo: '#',
      category: 'Hardware Design',
      icon: Zap,
      color: 'neon-purple',
      features: [
        'Complex circuit simulation',
        'Waveform analysis',
        'Automated testing framework',
        'Performance optimization',
        'Educational tutorials'
      ],
      impact: 'Used by 100+ students for learning',
      useCase: 'Educational tool for digital design learning'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative solutions from hackathons to real-world applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                rotateX: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-cyber-gray/30 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-neon-blue/50 transition-all duration-300 cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent" />
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 bg-${project.color}/20 border border-${project.color}/50 rounded-full text-sm font-medium text-${project.color}`}>
                  {project.category}
                </div>

                {/* Project Icon */}
                <div className="absolute top-4 right-4">
                  <project.icon className={`w-8 h-8 text-${project.color}`} />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-cyber-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-neon-blue/20 border border-neon-blue/50 rounded-full hover:bg-neon-blue/30 transition-all duration-300"
                    >
                      <Eye className="w-5 h-5 text-neon-blue" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-neon-green/20 border border-neon-green/50 rounded-full hover:bg-neon-green/30 transition-all duration-300"
                    >
                      <Play className="w-5 h-5 text-neon-green" />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-cyber-light/50 border border-gray-600 rounded text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-neon-blue/20 border border-neon-blue/50 rounded text-xs text-neon-blue">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-cyber-light/50 hover:bg-neon-blue/20 border border-gray-600 hover:border-neon-blue/50 rounded-lg transition-all duration-300 flex-1 justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-neon-blue/20 hover:bg-neon-blue/30 border border-neon-blue/50 rounded-lg transition-all duration-300 flex-1 justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </motion.a>
                </div>
              </div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-${project.color}/5 to-transparent`} />
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0, rotateY: -30 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.5, opacity: 0, rotateY: 30 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-cyber-gray/90 backdrop-blur-md border border-neon-blue/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-${selectedProject.color} to-neon-purple flex items-center justify-center`}>
                        <selectedProject.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                        <p className={`text-${selectedProject.color} font-medium`}>{selectedProject.category}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-white p-2 text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  {/* Project Image */}
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />

                  {/* Description */}
                  <p className="text-gray-300 text-lg mb-6">{selectedProject.description}</p>

                  {/* Use Case & Impact */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-cyber-light/30 rounded-lg p-4">
                      <h4 className="font-semibold text-neon-blue mb-2">Use Case</h4>
                      <p className="text-gray-300 text-sm">{selectedProject.useCase}</p>
                    </div>
                    <div className="bg-cyber-light/30 rounded-lg p-4">
                      <h4 className="font-semibold text-neon-green mb-2">Impact</h4>
                      <p className="text-gray-300 text-sm">{selectedProject.impact}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-4">Key Features</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-neon-blue rounded-full" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-neon-blue/20 border border-neon-blue/50 rounded-full text-sm text-neon-blue"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={selectedProject.github}
                      className="flex items-center space-x-2 px-6 py-3 bg-cyber-light hover:bg-neon-blue/20 border border-gray-600 hover:border-neon-blue/50 rounded-lg transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                    <a
                      href={selectedProject.demo}
                      className="flex items-center space-x-2 px-6 py-3 bg-neon-blue/20 hover:bg-neon-blue/30 border border-neon-blue/50 rounded-lg transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;