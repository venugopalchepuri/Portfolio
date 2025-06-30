import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Database, 
  Settings, 
  Palette, 
  Video,
  Terminal,
  Globe,
  Cpu,
  Zap,
  Layers,
  GitBranch,
  Cloud,
  Figma,
  Camera
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', icon: '🐍', proficiency: 90, color: 'neon-green' },
        { name: 'C', icon: '⚙️', proficiency: 85, color: 'neon-blue' },
        { name: 'C++', icon: '🔧', proficiency: 80, color: 'neon-purple' },
        { name: 'Java', icon: '☕', proficiency: 85, color: 'neon-blue' },
        { name: 'JavaScript', icon: '⚡', proficiency: 88, color: 'neon-green' },
        { name: 'TypeScript', icon: '📘', proficiency: 75, color: 'neon-blue' },
        { name: 'Verilog', icon: '🔌', proficiency: 60, color: 'neon-purple', level: 'Beginner' }
      ]
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      skills: [
        { name: 'HTML5', icon: '🌐', proficiency: 95, color: 'neon-blue' },
        { name: 'CSS3', icon: '🎨', proficiency: 90, color: 'neon-green' },
        { name: 'Tailwind CSS', icon: '💨', proficiency: 85, color: 'neon-purple' },
        { name: 'REST APIs', icon: '🔗', proficiency: 80, color: 'neon-blue' }
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MySQL', icon: '🐬', proficiency: 85, color: 'neon-blue' },
        { name: 'PostgreSQL', icon: '🐘', proficiency: 80, color: 'neon-green' },
        { name: 'Supabase', icon: '⚡', proficiency: 75, color: 'neon-purple' },
        { name: 'Firebase', icon: '🔥', proficiency: 70, color: 'neon-blue' },
        { name: 'InfluxDB', icon: '📊', proficiency: 50, color: 'neon-green', level: 'Beginner' }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: Settings,
      skills: [
        { name: 'Git', icon: '📝', proficiency: 90, color: 'neon-blue' },
        { name: 'GitHub', icon: '🐙', proficiency: 88, color: 'neon-green' },
        { name: 'VS Code', icon: '💻', proficiency: 95, color: 'neon-purple' },
        { name: 'Postman', icon: '📮', proficiency: 80, color: 'neon-blue' },
        { name: 'Vercel', icon: '▲', proficiency: 75, color: 'neon-green' },
        { name: 'Netlify', icon: '🌐', proficiency: 75, color: 'neon-purple' },
        { name: 'Replit', icon: '🔄', proficiency: 70, color: 'neon-blue' },
        { name: 'Google Colab', icon: '📓', proficiency: 85, color: 'neon-green' }
      ]
    },
    {
      title: 'Design & Creative',
      icon: Palette,
      skills: [
        { name: 'Figma', icon: '🎨', proficiency: 80, color: 'neon-purple' },
        { name: 'Canva', icon: '🖌️', proficiency: 85, color: 'neon-blue' },
        { name: 'Adobe Express', icon: '🎭', proficiency: 75, color: 'neon-green' },
        { name: 'LaTeX', icon: '📄', proficiency: 70, color: 'neon-purple' },
        { name: 'PowerPoint', icon: '📊', proficiency: 90, color: 'neon-blue' },
        { name: 'Web Design', icon: '🌟', proficiency: 85, color: 'neon-green' },
        { name: 'UI/UX', icon: '✨', proficiency: 75, color: 'neon-purple' }
      ]
    },
    {
      title: 'Multimedia',
      icon: Video,
      skills: [
        { name: 'Jupyter Notebook', icon: '📔', proficiency: 88, color: 'neon-blue' },
        { name: 'Cameras', icon: '📷', proficiency: 80, color: 'neon-green' },
        { name: 'Videography', icon: '🎬', proficiency: 75, color: 'neon-purple' },
        { name: 'Multimedia Editing', icon: '🎞️', proficiency: 70, color: 'neon-blue' },
        { name: 'Social Media Content', icon: '📱', proficiency: 85, color: 'neon-green' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Glowing Radial Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-128 h-128 bg-neon-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Animated Lines */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-8">
            {/* Left Animated Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '200px' } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-px bg-gradient-to-r from-transparent to-neon-blue"
            />
            
            {/* Title with Glowing Border */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mx-8 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-green rounded-2xl blur-sm opacity-75 animate-glow"></div>
              <h2 className="relative text-4xl md:text-6xl font-space font-bold px-8 py-4 bg-cyber-dark rounded-2xl border-2 border-neon-blue/50">
                <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green bg-clip-text text-transparent">
                  Skills
                </span>
              </h2>
            </motion.div>

            {/* Right Animated Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '200px' } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-px bg-gradient-to-l from-transparent to-neon-purple"
            />
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Futuristic tech arsenal for building tomorrow's solutions
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="relative"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center animate-glow">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-neon-blue/50 to-transparent"></div>
              </div>

              {/* Skills Cards Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                    animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      y: -10,
                      rotateY: 10,
                      transition: { duration: 0.3 }
                    }}
                    className="group relative bg-cyber-gray/20 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-neon-blue/50 transition-all duration-300 cursor-pointer"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Glowing Border on Hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    
                    {/* Soft Shadow */}
                    <div className="absolute inset-0 rounded-2xl bg-cyber-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 blur-lg"></div>

                    {/* Content */}
                    <div className="relative z-10 text-center">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl mb-4 group-hover:drop-shadow-lg"
                      >
                        {skill.icon}
                      </motion.div>

                      {/* Skill Name */}
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-neon-blue transition-colors duration-300">
                        {skill.name}
                      </h4>

                      {/* Beginner Badge */}
                      {skill.level && (
                        <div className="inline-block px-2 py-1 bg-neon-purple/20 border border-neon-purple/50 rounded-full text-xs text-neon-purple mb-3">
                          {skill.level}
                        </div>
                      )}

                      {/* Proficiency Bar */}
                      <div className="relative h-2 bg-cyber-dark rounded-full overflow-hidden mb-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.proficiency}%` } : {}}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                            ease: "easeOut"
                          }}
                          className={`h-full bg-gradient-to-r from-${skill.color} to-neon-purple rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </motion.div>
                      </div>

                      {/* Proficiency Percentage */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1 }}
                        className={`text-sm font-bold text-${skill.color}`}
                      >
                        {skill.proficiency}%
                      </motion.div>
                    </div>

                    {/* Floating Glow Effect */}
                    <motion.div
                      animate={{ 
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        delay: skillIndex * 0.5
                      }}
                      className={`absolute -top-1 -right-1 w-3 h-3 bg-${skill.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cyberpunk Background Elements */}
        <div className="absolute top-20 left-20 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 border-2 border-neon-blue rounded-full"
          />
        </div>
        <div className="absolute bottom-20 right-20 opacity-10">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 border-2 border-neon-purple"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;