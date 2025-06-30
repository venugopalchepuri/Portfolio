import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, CheckCircle, Award, Code, Zap, Trophy, Star, TrendingUp, Medal, Target } from 'lucide-react';

const AcademicAchievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      id: 1,
      title: '10th SSC Board',
      description: 'Successfully cleared secondary education with excellent academic performance',
      icon: Trophy,
      color: 'neon-blue',
      year: '2022',
      status: 'completed',
      percentage: '95.0%',
      grade: 'A+',
      subjects: ['Mathematics', 'Science', 'English', 'Social Studies'],
    },
    {
      id: 2,
      title: '12th HSC Board',
      description: 'Completed higher secondary with focus on Science stream (PCM)',
      icon: Star,
      color: 'neon-green',
      year: '2022-2024',
      status: 'completed',
      percentage: '97.0%',
      grade: 'A+',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'English'],
    },
    {
      id: 3,
      title: 'JEE Advanced Qualified',
      description: 'Successfully cleared one of India\'s toughest engineering entrance exams',
      icon: Medal,
      color: 'neon-purple',
      year: '2024',
      status: 'completed',
      rank: '5136',
      grade: 'Qualified',
      subjects: ['Physics', 'Chemistry', 'Mathematics'],
      achievement: 'National Level Qualification'
    },
    {
      id: 4,
      title: 'Bennett University CSE',
      description: 'Pursuing B.Tech in Computer Science Engineering ',
      icon: GraduationCap,
      color: 'neon-blue',
      year: '2024-2028',
      status: 'ongoing',
      percentage: '9.10 CGPA',
      grade: 'A+',
      subjects: ['DSA', 'OOPS', 'DBMS', 'OS', 'CN', 'AI/ML'],
    },
  ];

  const getStatusIcon = (status) => {
    if (status === 'completed') return <CheckCircle className="w-4 h-4 text-neon-green" />;
    if (status === 'ongoing') return <TrendingUp className="w-4 h-4 text-neon-blue animate-pulse" />;
    return <Target className="w-4 h-4 text-neon-purple" />;
  };

  const getGradeColor = (grade) => {
    if (grade === 'A+' || grade === 'Gold') return 'text-yellow-400';
    if (grade === 'A') return 'text-neon-green';
    if (grade === 'Qualified') return 'text-neon-blue';
    return 'text-gray-300';
  };

  return (
    <section id="academic" className="py-20 relative">
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
            Academic Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From school excellence to engineering mastery - my educational milestones with performance metrics
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-green opacity-30"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Node */}
                <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full border-4 border-cyber-dark z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="w-full h-full bg-neon-blue rounded-full animate-pulse"
                  />
                </div>

                {/* Content Container */}
                <div className={`flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  
                  {/* Achievement Card */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-cyber-gray/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-neon-blue/50 transition-all duration-300 group"
                    >
                      {/* Header with Icon and Status */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-${achievement.color} to-neon-purple flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                            <achievement.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-neon-blue transition-colors duration-300">
                                {achievement.title}
                              </h3>
                              {getStatusIcon(achievement.status)}
                            </div>
                            <p className="text-gray-300 text-sm md:text-base">{achievement.description}</p>
                          </div>
                        </div>
                      </div>

                      {/* Performance Metrics */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        {/* Percentage/Score */}
                        <div className="bg-cyber-light/30 rounded-lg p-3 text-center border border-gray-600/50">
                          <div className="text-xs text-gray-400 mb-1">Score</div>
                          <div className={`text-sm font-bold text-${achievement.color}`}>
                            {achievement.percentage}
                          </div>
                        </div>

                        {/* Rank */}
                        <div className="bg-cyber-light/30 rounded-lg p-3 text-center border border-gray-600/50">
                          <div className="text-xs text-gray-400 mb-1">Rank</div>
                          <div className="text-sm font-bold text-neon-green">
                            {achievement.rank}
                          </div>
                        </div>

                        {/* Grade */}
                        <div className="bg-cyber-light/30 rounded-lg p-3 text-center border border-gray-600/50">
                          <div className="text-xs text-gray-400 mb-1">Grade</div>
                          <div className={`text-sm font-bold ${getGradeColor(achievement.grade)}`}>
                            {achievement.grade}
                          </div>
                        </div>

                        {/* Year */}
                        <div className="bg-cyber-light/30 rounded-lg p-3 text-center border border-gray-600/50">
                          <div className="text-xs text-gray-400 mb-1">Year</div>
                          <div className="text-sm font-bold text-neon-purple">
                            {achievement.year}
                          </div>
                        </div>
                      </div>

                      {/* Achievement Badge */}
                      <div className="mb-4">
                        <div className={`inline-flex items-center px-3 py-1 bg-${achievement.color}/20 border border-${achievement.color}/50 rounded-full text-sm font-medium text-${achievement.color}`}>
                          <Star className="w-3 h-3 mr-1" />
                          {achievement.achievement}
                        </div>
                      </div>

                      {/* Key Subjects */}
                      <div>
                        <div className="text-xs text-gray-400 mb-2">Key Subjects/Skills:</div>
                        <div className="flex flex-wrap gap-1">
                          {achievement.subjects.map((subject, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-700/50 border border-gray-600/50 rounded text-xs text-gray-300"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Year Badge - Hidden on mobile, visible on desktop */}
                  <div className={`hidden md:block w-5/12 ${
                    index % 2 === 0 ? 'pl-8 text-left' : 'pr-8 text-right'
                  }`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                      className={`inline-block px-6 py-3 bg-cyber-light/50 border border-gray-600 rounded-xl ${
                        index % 2 === 0 ? '' : 'ml-auto'
                      }`}
                    >
                      <div className="text-2xl font-bold text-neon-blue mb-1">{achievement.year}</div>
                      <div className="text-gray-400 text-sm">Achievement Unlocked</div>
                      <div className={`text-xs text-${achievement.color} mt-1`}>
                        {achievement.percentage} • {achievement.rank}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Academic Years', value: '6+', color: 'neon-blue', icon: GraduationCap },
            { label: 'Average Performance', value: '90%+', color: 'neon-green', icon: TrendingUp },
            { label: 'Major Projects', value: '10+', color: 'neon-purple', icon: Code },
            { label: 'Certifications', value: '200+', color: 'neon-blue', icon: Award }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-cyber-gray/20 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-neon-blue/50 transition-all duration-300"
            >
              <stat.icon className={`w-8 h-8 text-${stat.color} mx-auto mb-3`} />
              <div className={`text-2xl md:text-3xl font-bold text-${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicAchievements;