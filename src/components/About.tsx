import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, Trophy, Brain, Zap, Award, Target, Calendar, MapPin, Star, 
  BookOpen, Coffee, Music, Camera, Gamepad2, Lightbulb, Heart,
  Users, Globe, Rocket, Shield, ChevronRight, ExternalLink
} from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState('skills');

  const skills = [
    'C++', 'DSA', 'Java', 'Python',
    'React.js', 'Next.js', 'JavaScript', 'Tailwind CSS',
    'MySQL','Git & GitHub','Verilog (Icarus)','Figma', 'UI/UX Design',     
    'Hackathons', 'Problem Solving'
  ];

  const stats = [
    { number: '200+', label: 'Certificates', icon: Award, color: 'neon-blue' },
    { number: '20+', label: 'Newspaper Mentions', icon: Trophy, color: 'neon-green' },
    { number: '100+', label: 'Quiz Victories', icon: Target, color: 'neon-purple' },
    { number: '5+', label: 'Major Projects', icon: Code, color: 'neon-blue' }
  ];

  const quickFacts = [
    { icon: Calendar, label: 'Started Coding', value: '2024', color: 'neon-blue' },
    { icon: MapPin, label: 'Based in', value: 'Greater Noida', color: 'neon-green' },
    { icon: Star, label: 'Favorite Language', value: 'Python', color: 'neon-purple' },
    { icon: Zap, label: 'Current Focus', value: 'Full Stack', color: 'neon-blue' }
  ];

  const interests = [
    { icon: BookOpen, label: 'Reading', description: 'Tech blogs, sci-fi novels', color: 'neon-blue' },
    { icon: Coffee, label: 'Coffee', description: 'Fuel for late-night coding', color: 'neon-green' },
    { icon: Music, label: 'Music', description: 'Lo-fi beats while coding', color: 'neon-purple' },
    { icon: Camera, label: 'Photography', description: 'Capturing moments', color: 'neon-blue' },
    { icon: Gamepad2, label: 'Gaming', description: 'Strategy & puzzle games', color: 'neon-green' },
    { icon: Lightbulb, label: 'Innovation', description: 'Always thinking of new ideas', color: 'neon-purple' }
  ];

  const achievements = [
    { title: 'Presidential Recognition', description: 'Invited to Rashtrapati Bhavan', icon: Shield, color: 'neon-purple' },
    { title: 'INDIAN NAVY THINQ', description: 'Felicitated by Indian NAVY Cheif', icon: Trophy, color: 'neon-green' },
    { title: 'SPECTRA 2K24', description: 'National Quiz Champion', icon: Award, color: 'neon-blue' },
    { title: 'Olympic Quiz', description: 'International Gold Medal', icon: Star, color: 'neon-green' }
  ];

  const values = [
    { title: 'Continuous Learning', description: 'Always curious, always growing', icon: Brain, color: 'neon-blue' },
    { title: 'Problem Solving', description: 'Breaking complex challenges into solutions', icon: Lightbulb, color: 'neon-green' },
    { title: 'Innovation', description: 'Creating impact through technology', icon: Rocket, color: 'neon-purple' },
    { title: 'Community', description: 'Sharing knowledge and helping others', icon: Users, color: 'neon-blue' }
  ];

  const tabContent = {
    skills: {
      title: 'Skills & Technologies',
      icon: Brain,
      content: skills
    },
    interests: {
      title: 'Interests & Hobbies',
      icon: Heart,
      content: interests
    },
    achievements: {
      title: 'Key Achievements',
      icon: Trophy,
      content: achievements
    },
    values: {
      title: 'Core Values',
      icon: Star,
      content: values
    }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-stretch"
        >
          {/* Left Side - Enhanced Profile Card */}
          <div className="relative h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-cyber-gray/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-neon-blue/50 transition-all duration-300 h-full flex flex-col"
            >
              {/* Profile Header */}
              <div className="text-center mb-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple p-1 mx-auto mb-4 animate-glow">
                  <div className="w-full h-full rounded-full overflow-hidden bg-cyber-dark">
                    <img 
                      src="WhatsApp%20Image%202025-06-26%20at%2016.10.51_6fa4e578.jpg"
                      alt="Venugopal Chepuri - About"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.log('About image failed to load, trying alternative path');
                        e.target.src = "image.png"; // Fallback image
                      }}
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Venugopal Chepuri</h3>
                <p className="text-neon-blue font-medium mb-2">CSE Student & Quiz Champion</p>
                <div className="flex items-center justify-center space-x-2 text-neon-green text-sm">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                  <span>Available for opportunities</span>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Star className="w-5 h-5 text-neon-green mr-2" />
                  Quick Facts
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {quickFacts.map((fact, index) => (
                    <motion.div
                      key={fact.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-cyber-light/30 rounded-lg p-3 border border-gray-600/50 hover:border-neon-blue/50 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        <fact.icon className={`w-4 h-4 text-${fact.color}`} />
                        <span className="text-gray-400 text-xs">{fact.label}</span>
                      </div>
                      <div className={`text-${fact.color} font-semibold text-sm`}>
                        {fact.value}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Interactive Tabs */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {Object.entries(tabContent).map(([key, tab]) => (
                    <motion.button
                      key={key}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveTab(key)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                        activeTab === key
                          ? 'bg-neon-blue/20 border border-neon-blue/50 text-neon-blue'
                          : 'bg-cyber-light/30 border border-gray-600/50 text-gray-300 hover:border-neon-blue/30'
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{tab.title.split(' ')[0]}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Tab Content */}
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-cyber-light/20 rounded-lg p-4 border border-gray-600/30 min-h-[200px]"
                >
                  {(() => {
                    const IconComponent = tabContent[activeTab].icon;
                    return (
                      <h5 className="text-white font-semibold mb-3 flex items-center">
                        <IconComponent className="w-4 h-4 mr-2 text-neon-blue" />
                        {tabContent[activeTab].title}
                      </h5>
                    );
                  })()}
                  
                  {activeTab === 'skills' && (
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-2 py-1 bg-neon-blue/20 border border-neon-blue/50 rounded-full text-xs text-neon-blue hover:bg-neon-blue/30 transition-all duration-300 cursor-pointer"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  )}

                  {activeTab === 'interests' && (
                    <div className="space-y-3">
                      {interests.map((interest, index) => (
                        <motion.div
                          key={interest.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ x: 5 }}
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cyber-light/30 transition-all duration-300"
                        >
                          <interest.icon className={`w-5 h-5 text-${interest.color}`} />
                          <div>
                            <div className="text-white font-medium text-sm">{interest.label}</div>
                            <div className="text-gray-400 text-xs">{interest.description}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'achievements' && (
                    <div className="space-y-3">
                      {achievements.map((achievement, index) => (
                        <motion.div
                          key={achievement.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-cyber-light/30 transition-all duration-300 border border-gray-600/30"
                        >
                          <achievement.icon className={`w-5 h-5 text-${achievement.color} mt-0.5`} />
                          <div>
                            <div className="text-white font-medium text-sm">{achievement.title}</div>
                            <div className="text-gray-400 text-xs">{achievement.description}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'values' && (
                    <div className="space-y-3">
                      {values.map((value, index) => (
                        <motion.div
                          key={value.title}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-cyber-light/30 transition-all duration-300"
                        >
                          <value.icon className={`w-5 h-5 text-${value.color} mt-0.5`} />
                          <div>
                            <div className="text-white font-medium text-sm">{value.title}</div>
                            <div className="text-gray-400 text-xs">{value.description}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Achievement Stats */}
              <div className="grid grid-cols-2 gap-4 mt-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-cyber-light/50 rounded-lg p-4 text-center border border-gray-600 hover:border-neon-blue/50 transition-all duration-300 cursor-pointer"
                  >
                    <stat.icon className={`w-6 h-6 text-${stat.color} mx-auto mb-2`} />
                    <div className={`text-xl font-bold text-${stat.color} mb-1`}>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 2, delay: 0.8 + index * 0.2 }}
                      >
                        {stat.number}
                      </motion.span>
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Connect Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="mt-6 flex justify-center space-x-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-neon-blue/20 hover:bg-neon-blue/30 border border-neon-blue/50 rounded-lg transition-all duration-300 text-neon-blue text-sm"
                >
                  <Globe className="w-4 h-4" />
                  <span>Portfolio</span>
                  <ExternalLink className="w-3 h-3" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-neon-green/20 hover:bg-neon-green/30 border border-neon-green/50 rounded-lg transition-all duration-300 text-neon-green text-sm"
                >
                  <Trophy className="w-4 h-4" />
                  <span>Quiz Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Enhanced About Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 h-full flex flex-col"
          >
            <div className="flex-grow">
              <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm <span className="text-neon-blue font-bold">Venugopal Chepuri</span> — not just a Computer Science student at{' '}
                  <span className="text-neon-green font-semibold">Bennett University</span>, but a relentless problem solver, 
                  national quiz champion, and a creative mind on a mission.
                </p>
                
                <div className="bg-cyber-gray/20 border-l-4 border-neon-blue pl-6 py-4 rounded-r-lg">
                  <p className="text-white font-medium mb-2">
                    While others scroll, I <span className="text-neon-blue font-bold">Solve</span>.
                  </p>
                  <p className="text-white font-medium">
                    While most read the questions, I <span className="text-neon-green font-bold">Win with the answers</span>.
                  </p>
                </div>
                
                <p>
                  With over <span className="text-neon-purple font-bold">100+ quiz victories</span>, national podiums, 
                  and an ever-growing trophy wall, I bring the same sharp thinking into the world of code.
                </p>
                
                <p className="text-xl font-semibold text-neon-blue">
                  I build tech like I answer questions — with speed, precision, and vision.
                </p>
                
                <p>
                  From exploring <span className="text-neon-purple font-semibold">Full-Stack Development</span>, 
                  competing in <span className="text-neon-green font-semibold">hackathons</span>, to diving deep into{' '}
                  <span className="text-neon-blue font-semibold">GEN AI</span> and{' '}
                  <span className="text-neon-purple font-semibold">DSA</span>, I'm driven by one belief:
                </p>

                {/* Quote Block */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/30 rounded-xl p-6"
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-3xl">💡</span>
                    <blockquote className="text-white font-medium italic text-lg">
                      "Knowledge should not just be gained — it should be built upon, tested, and transformed into impact."
                    </blockquote>
                  </div>
                </motion.div>

                <div className="space-y-3">
                  <p className="text-white font-medium">
                    I don't just want to write code —
                  </p>
                  <p className="text-white font-medium">
                    I want to <span className="text-neon-blue font-bold">craft solutions</span>,{' '}
                    <span className="text-neon-green font-bold">create stories</span>, and leave a legacy 
                    across both screens and stage.
                  </p>
                </div>

                <div className="bg-cyber-gray/20 rounded-xl p-6 border border-neon-green/30">
                  <p className="text-neon-green font-bold text-xl mb-2">
                    This is my journey —
                  </p>
                  <p className="text-white">
                    built in logic, powered by curiosity, and guided by purpose.
                  </p>
                </div>

                {/* Additional Journey Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-cyber-gray/20 rounded-lg p-4 border border-neon-blue/30"
                  >
                    <h4 className="text-neon-blue font-semibold mb-2 flex items-center">
                      <Rocket className="w-4 h-4 mr-2" />
                      Current Mission
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Building full-stack applications while preparing for SDE roles at top tech companies.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-cyber-gray/20 rounded-lg p-4 border border-neon-green/30"
                  >
                    <h4 className="text-neon-green font-semibold mb-2 flex items-center">
                      <Target className="w-4 h-4 mr-2" />
                      Next Goal
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Contributing to open source projects and mentoring fellow developers.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Enhanced Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-auto">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-cyber-gray/20 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-neon-blue/50 transition-all duration-300 group"
              >
                <Code className="w-8 h-8 text-neon-blue mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-lg font-semibold text-white mb-2">Tech Enthusiast</h4>
                <p className="text-gray-400 text-sm mb-3">
                  Passionate about full-stack development, digital design, and emerging technologies.
                </p>
                <div className="flex items-center text-neon-blue text-xs">
                  <span>Explore Projects</span>
                  <ChevronRight className="w-3 h-3 ml-1" />
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-cyber-gray/20 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-neon-green/50 transition-all duration-300 group"
              >
                <Trophy className="w-8 h-8 text-neon-green mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-lg font-semibold text-white mb-2">Quiz Champion</h4>
                <p className="text-gray-400 text-sm mb-3">
                  Multiple national-level quiz wins and recognition at prestigious competitions.
                </p>
                <div className="flex items-center text-neon-green text-xs">
                  <span>View Achievements</span>
                  <ChevronRight className="w-3 h-3 ml-1" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;