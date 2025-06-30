import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Medal, Star, Crown, Target } from 'lucide-react';

const QuizWall = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      id: 1,
      title: 'National Quiz Championship',
      category: 'National',
      prize: '₹50,000',
      rank: '1st',
      year: '2024',
      level: 'Presidential',
      icon: Crown,
      color: 'neon-blue',
      size: 'large'
    },
    {
      id: 2,
      title: 'Inter-University Science Quiz',
      category: 'Inter-University',
      prize: '₹25,000',
      rank: '2nd',
      year: '2023',
      level: 'National',
      icon: Trophy,
      color: 'neon-green',
      size: 'medium'
    },
    {
      id: 3,
      title: 'Tech Quiz Olympiad',
      category: 'International',
      prize: '₹75,000',
      rank: '1st',
      year: '2023',
      level: 'Global',
      icon: Medal,
      color: 'neon-purple',
      size: 'large'
    },
    {
      id: 4,
      title: 'Campus Quiz Masters',
      category: 'Campus',
      prize: '₹10,000',
      rank: '1st',
      year: '2022',
      level: 'University',
      icon: Award,
      color: 'neon-blue',
      size: 'small'
    },
    {
      id: 5,
      title: 'State Knowledge Bowl',
      category: 'State',
      prize: '₹30,000',
      rank: '1st',
      year: '2023',
      level: 'State',
      icon: Star,
      color: 'neon-green',
      size: 'medium'
    },
    {
      id: 6,
      title: 'Digital India Quiz',
      category: 'Government',
      prize: '₹40,000',
      rank: '2nd',
      year: '2024',
      level: 'National',
      icon: Target,
      color: 'neon-purple',
      size: 'medium'
    }
  ];

  const getSizeClasses = (size) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2 h-80';
      case 'medium':
        return 'h-48';
      case 'small':
        return 'h-32';
      default:
        return 'h-40';
    }
  };

  const getCategoryTag = (category, level) => {
    const tags = {
      'National': { bg: 'bg-neon-blue/20', border: 'border-neon-blue/50', text: 'text-neon-blue', emoji: '🏆' },
      'International': { bg: 'bg-neon-purple/20', border: 'border-neon-purple/50', text: 'text-neon-purple', emoji: '🌐' },
      'Campus': { bg: 'bg-neon-green/20', border: 'border-neon-green/50', text: 'text-neon-green', emoji: '🎓' },
      'Inter-University': { bg: 'bg-neon-blue/20', border: 'border-neon-blue/50', text: 'text-neon-blue', emoji: '🏛️' },
      'State': { bg: 'bg-neon-green/20', border: 'border-neon-green/50', text: 'text-neon-green', emoji: '🏆' },
      'Government': { bg: 'bg-neon-purple/20', border: 'border-neon-purple/50', text: 'text-neon-purple', emoji: '💰' }
    };
    return tags[category] || tags['National'];
  };

  return (
    <section id="quiz-wall" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          {/* Background Photo with Trophy Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-neon-blue to-neon-green rounded-full flex items-center justify-center">
              <span className="text-6xl">VC</span>
            </div>
            <Trophy className="absolute top-2 right-1/2 transform translate-x-1/2 w-16 h-16 text-neon-green opacity-20" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent relative z-10">
            Quiz Champions Wall
          </h2>
          <div className="relative z-10">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              From first quiz to Presidential invite — my quiz legacy
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-neon-green to-neon-blue mx-auto rounded-full mb-8" />
          </div>
        </motion.div>

        {/* Timeline Ribbon */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 overflow-x-auto"
        >
          <div className="flex space-x-8 min-w-max pb-4">
            {['2022', '2023', '2024'].map((year, index) => (
              <div key={year} className="flex items-center space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-neon-blue rounded-full mb-2" />
                  <span className="text-neon-blue font-semibold">{year}</span>
                </div>
                {index < 2 && <div className="w-16 h-0.5 bg-gradient-to-r from-neon-blue to-neon-green mt-2" />}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-min">
          {achievements.map((achievement, index) => {
            const tag = getCategoryTag(achievement.category, achievement.level);
            const IconComponent = achievement.icon;
            
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
                className={`${getSizeClasses(achievement.size)} bg-cyber-gray/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-${achievement.color}/50 transition-all duration-300 cursor-pointer group relative overflow-hidden`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${achievement.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Category Tag */}
                <div className={`inline-flex items-center space-x-1 ${tag.bg} ${tag.border} border rounded-full px-3 py-1 text-xs font-medium ${tag.text} mb-4`}>
                  <span>{tag.emoji}</span>
                  <span>{achievement.level}</span>
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-${achievement.color} to-neon-purple flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className={`text-lg font-semibold text-white mb-2 group-hover:text-${achievement.color} transition-colors duration-300`}>
                    {achievement.title}
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Rank</span>
                      <span className={`text-${achievement.color} font-bold`}>{achievement.rank}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Prize</span>
                      <span className="text-neon-green font-semibold">{achievement.prize}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Year</span>
                      <span className="text-white font-medium">{achievement.year}</span>
                    </div>
                  </div>
                </div>

                {/* Floating Trophy Animation */}
                <motion.div
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                >
                  <Trophy className={`w-8 h-8 text-${achievement.color}`} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Total Wins', value: '15+', icon: Trophy, color: 'neon-blue' },
            { label: 'Prize Money', value: '₹2.3L+', icon: Medal, color: 'neon-green' },
            { label: 'Years Active', value: '3+', icon: Star, color: 'neon-purple' },
            { label: 'Competitions', value: '25+', icon: Target, color: 'neon-blue' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="bg-cyber-gray/20 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-neon-blue/50 transition-all duration-300"
            >
              <stat.icon className={`w-8 h-8 text-${stat.color} mx-auto mb-3`} />
              <div className={`text-2xl font-bold text-${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QuizWall;