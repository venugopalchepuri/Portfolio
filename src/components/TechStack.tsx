import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TechStack = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techCategories = [
    {
      title: 'Languages',
      icon: '💻',
      techs: [
        { name: 'Python', icon: '🐍', proficiency: 90, color: 'neon-green' },
        { name: 'JavaScript', icon: '⚡', proficiency: 85, color: 'neon-blue' },
        { name: 'Java', icon: '☕', proficiency: 80, color: 'neon-purple' },
        { name: 'C++', icon: '⚙️', proficiency: 75, color: 'neon-blue' },
        { name: 'Verilog', icon: '🔌', proficiency: 70, color: 'neon-green' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: '🛠️',
      techs: [
        { name: 'React', icon: '⚛️', proficiency: 90, color: 'neon-blue' },
        { name: 'Node.js', icon: '💚', proficiency: 85, color: 'neon-green' },
        { name: 'TensorFlow', icon: '🧠', proficiency: 80, color: 'neon-purple' },
        { name: 'Django', icon: '🌐', proficiency: 75, color: 'neon-green' },
        { name: 'Express', icon: '🚀', proficiency: 80, color: 'neon-blue' }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: '🔧',
      techs: [
        { name: 'Git', icon: '📝', proficiency: 90, color: 'neon-blue' },
        { name: 'Docker', icon: '🐳', proficiency: 70, color: 'neon-purple' },
        { name: 'AWS', icon: '☁️', proficiency: 75, color: 'neon-green' },
        { name: 'MongoDB', icon: '🍃', proficiency: 80, color: 'neon-green' },
        { name: 'PostgreSQL', icon: '🐘', proficiency: 85, color: 'neon-blue' }
      ]
    }
  ];

  const currentlyLearning = [
    { name: 'TypeScript', icon: '📘', color: 'neon-blue' },
    { name: 'GraphQL', icon: '📊', color: 'neon-purple' },
    { name: 'Kubernetes', icon: '☸️', color: 'neon-green' },
    { name: 'Rust', icon: '🦀', color: 'neon-purple' }
  ];

  return (
    <section id="tech-stack" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 bg-gradient-to-r from-neon-purple to-neon-green bg-clip-text text-transparent">
            Tech Arsenal
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="space-y-16">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-cyber-gray/20 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-neon-blue/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="text-4xl">{category.icon}</div>
                <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (techIndex * 0.1) }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-cyber-light/30 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:border-neon-blue/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <span className="font-semibold text-white group-hover:text-neon-blue transition-colors duration-300">
                          {tech.name}
                        </span>
                      </div>
                      <span className={`text-${tech.color} font-bold`}>
                        {tech.proficiency}%
                      </span>
                    </div>

                    {/* Proficiency Bar */}
                    <div className="relative h-2 bg-cyber-dark rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${tech.proficiency}%` } : {}}
                        transition={{ duration: 1.5, delay: (categoryIndex * 0.2) + (techIndex * 0.1) + 0.5 }}
                        className={`h-full bg-gradient-to-r from-${tech.color} to-neon-purple rounded-full`}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r from-${tech.color}/20 to-transparent animate-pulse`} />
                    </div>

                    {/* Hover Tooltip */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3">
                      <p className="text-xs text-gray-400">
                        Click to see where I've used this
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center justify-center space-x-3">
            <span>🌱</span>
            <span>Currently Learning</span>
            <span>🚀</span>
          </h3>

          {/* Horizontal Scrolling Ticker */}
          <div className="relative overflow-hidden py-4">
            <motion.div
              animate={{ x: [-100, -2000] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex space-x-8 whitespace-nowrap"
            >
              {[...currentlyLearning, ...currentlyLearning, ...currentlyLearning].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className={`flex items-center space-x-3 bg-${tech.color}/10 border border-${tech.color}/30 rounded-full px-6 py-3 hover:bg-${tech.color}/20 transition-all duration-300`}
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className={`font-medium text-${tech.color} text-lg`}>{tech.name}</span>
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Animal-themed Stack Hints */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <div className="flex justify-center space-x-8 text-4xl opacity-30">
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            >
              🐍
            </motion.span>
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              🐘
            </motion.span>
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              🐳
            </motion.span>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Python • PostgreSQL • Docker
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;