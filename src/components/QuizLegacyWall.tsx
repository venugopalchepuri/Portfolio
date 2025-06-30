import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Medal, Award, Star, Crown, Target, Calendar, MapPin, ExternalLink, X, ArrowRight } from 'lucide-react';

const QuizLegacyWall = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const achievements = [
    {
      id: 1,
      title: 'INDIA TODAY YOUNG MASTERS QUIZ',
      position: '🥇 National Champion',
      category: 'National',
      tier: 'NATIONAL',
      prize: '₹1,00,000 + 75% Scholarship',
      date: 'March 2021',
      location: 'New Delhi',
      description: 'National level quiz conducted by Amrita University and INDIA Today with participation of 10,000+ schools across India. After 6 intense rounds of quizzing, we secured the national first position and received 75% scholarship at Amrita Coimbatore, robotic kits, and hampers.',
      icon: Crown,
      color: 'yellow-400',
      image: 'https://quiz-portal-five.vercel.app/images/youngmasters.jpg',
      highlights: ['10,000+ schools participated', 'National Championship', '75% scholarship awarded', 'Robotic kits & hampers'],
      story: 'A defining moment in my quiz journey - competing against the brightest young minds from across the nation and emerging victorious.',
      prestige: 'LEGENDARY'
    },
    {
      id: 2,
      title: 'INDIAN NAVY THINQ',
      position: '🏅 National Finalist (5th Position)',
      category: 'National',
      tier: 'NATIONAL LEVEL',
      prize: 'Navy Crest + ₹10 Lakh Trip + Arabian Sea Sail',
      date: 'August 2022',
      location: 'INS Vikramaditya (5 States)',
      description: 'Indian Navy conducted the THINQ quiz on INS Vikramaditya. Nearly 20,000 teams participated across India. We qualified to the top 16 and secured the 5th position nationally. Received the Navy Crest, met the Navy Chief, and got a 10-day trip worth ₹10 lakh plus one day sail in Arabian Sea.',
      icon: Medal,
      color: 'blue-400',
      image: 'https://quiz-portal-five.vercel.app/images/image00223.jpeg',
      highlights: ['20,000+ teams nationwide', 'Top 16 qualification', 'Met Navy Chief', 'Arabian Sea sailing experience'],
      story: 'An incredible experience meeting the Indian Navy Chief and sailing in the Arabian Sea - where knowledge met adventure.',
      prestige: 'ELITE'
    },
    {
      id: 3,
      title: 'Beating the Retreat Ceremony',
      position: '🏛️ Presidential Invitation',
      category: 'Presidential',
      tier: 'PRESIDENTIAL',
      prize: 'National Honor',
      date: 'January 2024',
      location: 'Rashtrapati Bhavan, New Delhi',
      description: 'Special invitation to the Presidential ceremony at Rashtrapati Bhavan for outstanding achievements in quiz competitions. This represents the highest recognition for quiz excellence at the national level.',
      icon: Crown,
      color: 'purple-400',
      image: 'https://quiz-portal-five.vercel.app/images/defense.jpeg',
      highlights: ['Presidential invitation', 'Rashtrapati Bhavan ceremony', 'National recognition', 'Historic honor'],
      story: 'The pinnacle of recognition - being honored at the Presidential level for quiz excellence.',
      prestige: 'LEGENDARY'
    },
    {
      id: 4,
      title: 'FIT INDIA QUIZ 2022',
      position: '🥈 State Runner-Up',
      category: 'National',
      tier: 'NATIONAL',
      prize: '₹1,10,000',
      date: 'November 2022',
      location: 'Hyderabad',
      description: 'Conducted by the Sports Ministry of India, this national-level quiz focused on fitness, sports, and health awareness. Secured state runner-up position among thousands of participants nationwide.',
      icon: Star,
      color: 'green-400',
      image: 'https://quiz-portal-five.vercel.app/images/FIT%20INDIA.jpeg',
      highlights: ['Sports Ministry of India', 'State runner-up', 'Health & fitness focus', 'National recognition'],
      story: 'Proving excellence in sports knowledge while promoting fitness awareness across the nation.',
      prestige: 'ELITE'
    },
    {
      id: 5,
      title: 'TATA CRUCIBLE CAMPUS QUIZ',
      position: '🥉 Zonal 3rd Position',
      category: 'Corporate',
      tier: 'NATIONAL',
      prize: '₹20,000',
      date: 'February 2025',
      location: 'Chandigarh (Chitkara University)',
      description: '3rd position out of 3 lakh students nationwide. Youngest finalist representing Bennett University at Chitkara University finals. One of India\'s most prestigious corporate quiz competitions.',
      icon: Award,
      color: 'pink-400',
      image: 'https://quiz-portal-five.vercel.app/images/tata.jpg',
      highlights: ['3 lakh+ participants', 'Youngest finalist', 'Corporate excellence', 'Bennett University representative'],
      story: 'Standing among corporate giants as the youngest finalist in India\'s premier business quiz.',
      prestige: 'CHAMPION'
    },
    {
      id: 6,
      title: 'Quiz on the Beach (TAPMI)',
      position: '🥈 Silver Medal',
      category: 'Inter-College',
      tier: 'NATIONAL',
      prize: '₹80,000',
      date: 'January 2024',
      location: 'Manipal',
      description: 'Prestigious inter-college quiz at TAPMI business school with unique beach-side venue. Competed against top business schools and management institutes across India.',
      icon: Trophy,
      color: 'orange-400',
      image: 'https://quiz-portal-five.vercel.app/images/IMG_20230405_141859_796.jpg',
      highlights: ['Beach venue', 'Business focus', 'Premier B-school', 'Management excellence'],
      story: 'A unique quiz experience combining academic excellence with a beautiful coastal setting.',
      prestige: 'CHAMPION'
    }
  ];

  const getPrestigeColor = (prestige) => {
    switch (prestige) {
      case 'LEGENDARY': return 'from-yellow-400 via-orange-500 to-red-500';
      case 'ELITE': return 'from-blue-400 via-purple-500 to-pink-500';
      case 'CHAMPION': return 'from-green-400 via-blue-500 to-purple-500';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <section id="quiz-legacy" className="py-20 relative overflow-hidden">
      {/* MINIMAL PROUD BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Elegant Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        
        {/* Subtle Pride Rays */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(ellipse at 50% 0%, rgba(255, 215, 0, 0.08) 0%, transparent 70%)',
              'radial-gradient(ellipse at 50% 0%, rgba(255, 215, 0, 0.12) 0%, transparent 70%)',
              'radial-gradient(ellipse at 50% 0%, rgba(255, 215, 0, 0.08) 0%, transparent 70%)'
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />

        {/* Gentle Golden Particles - Only 8 */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`golden-${i}`}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-60"
            style={{
              left: `${20 + i * 10}%`,
              top: `${10 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Proud Achievement Rays - Only 3 */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`ray-${i}`}
            className="absolute w-px h-32 opacity-20"
            style={{
              left: `${30 + i * 20}%`,
              top: '10%',
              background: 'linear-gradient(to bottom, rgba(255, 215, 0, 0.6), transparent)',
              transformOrigin: 'top center'
            }}
            animate={{
              scaleY: [0.5, 1, 0.5],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 215, 0, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 215, 0, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* TITLE WITH PRIDE */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-7xl font-space font-bold mb-6 relative"
          >
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              QUIZ LEGACY
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              HALL OF FAME
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto font-light mb-8"
          >
            🏆 WHERE LEGENDS ARE BORN AND CHAMPIONS ARE CELEBRATED 🎖️
          </motion.p>

          {/* Portfolio Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8"
          >
            <motion.a
              href="https://quiz-portal-five.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border-2 border-yellow-400/40 hover:border-yellow-400/60 rounded-xl px-6 py-3 text-yellow-400 font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              <Trophy className="w-5 h-5" />
              <span>View Complete Quiz Portfolio</span>
              <ArrowRight className="w-5 h-5" />
              <ExternalLink className="w-4 h-4" />
            </motion.a>
            <p className="text-gray-400 text-sm mt-2">
              100+ achievements • Complete quiz journey • Detailed stories
            </p>
          </motion.div>

          {/* Simple Divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: '300px' } : {}}
            transition={{ duration: 1.5, delay: 1 }}
            className="h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onClick={() => setSelectedAchievement(achievement)}
              className="h-[450px] bg-gradient-to-br from-slate-900/90 via-slate-800/95 to-slate-900/90 backdrop-blur-sm border border-yellow-400/30 rounded-2xl overflow-hidden hover:border-yellow-400/60 transition-all duration-300 cursor-pointer group relative shadow-xl"
            >
              {/* Prestige Badge */}
              <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${getPrestigeColor(achievement.prestige)} rounded-full text-xs font-bold text-white backdrop-blur-sm z-10`}>
                {achievement.prestige}
              </div>

              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
                
                {/* Position Badge */}
                <div className="absolute top-4 right-4 text-3xl">
                  {achievement.position.split(' ')[0]}
                </div>

                {/* Trophy Icon */}
                <div className="absolute bottom-4 left-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-14 h-14 rounded-full bg-gradient-to-r from-${achievement.color} to-yellow-400 flex items-center justify-center shadow-lg border-2 border-white/30`}
                  >
                    <achievement.icon className="w-7 h-7 text-white" />
                  </motion.div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm line-clamp-2">
                  {achievement.description}
                </p>

                {/* Details */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Achievement:</span>
                    <span className="text-yellow-400 font-semibold text-sm">{achievement.position}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Prize:</span>
                    <span className="text-green-400 font-semibold text-sm">{achievement.prize}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Date:</span>
                    <span className="text-blue-400 text-sm">{achievement.date}</span>
                  </div>
                </div>
              </div>

              {/* Simple Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedAchievement && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAchievement(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-yellow-400/40 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl z-10"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="p-6">
                  {/* Hero Image */}
                  <div className="w-full h-64 rounded-xl overflow-hidden mb-6 relative">
                    <img 
                      src={selectedAchievement.image} 
                      alt={selectedAchievement.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {selectedAchievement.title}
                      </h3>
                      <p className="text-yellow-400 text-xl font-bold">{selectedAchievement.position}</p>
                    </div>
                  </div>

                  {/* Story */}
                  <div className="bg-yellow-400/10 rounded-xl p-6 mb-6 border border-yellow-400/20">
                    <h4 className="text-xl font-bold text-yellow-400 mb-3">Champion's Story</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedAchievement.story}
                    </p>
                  </div>

                  {/* Details Grid */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-slate-800/40 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-blue-400 mb-4">Competition Details</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-blue-400" />
                          <span className="text-gray-300">{selectedAchievement.date}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">{selectedAchievement.location}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Trophy className="w-5 h-5 text-purple-400" />
                          <span className="text-green-400 font-bold">{selectedAchievement.prize}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-800/40 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-purple-400 mb-4">Key Highlights</h4>
                      <ul className="space-y-2">
                        {selectedAchievement.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                            <span className="text-gray-300 text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedAchievement(null)}
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 rounded-xl font-bold text-black hover:shadow-lg transition-all duration-300"
                  >
                    Close Details
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { label: 'Total Victories', value: '100+', icon: Trophy, color: 'yellow-400' },
            { label: 'Prize Money', value: '₹5L+', icon: Medal, color: 'green-400' },
            { label: 'Championships', value: '25+', icon: Target, color: 'blue-400' },
            { label: 'Recognition', value: 'Presidential', icon: Crown, color: 'purple-400' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-6 text-center hover:border-yellow-400/40 transition-all duration-300"
            >
              <stat.icon className={`w-10 h-10 text-${stat.color} mx-auto mb-3`} />
              <div className={`text-2xl font-bold text-${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* PORTFOLIO CALL TO ACTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center bg-gradient-to-r from-yellow-400/10 via-orange-500/10 to-red-500/10 border border-yellow-400/30 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to see my complete quiz journey?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            This is just a glimpse! My complete quiz portfolio contains 100+ achievements, 
            detailed competition stories, newspaper mentions, and the full journey from 
            first quiz to Presidential recognition.
          </p>
          <motion.a
            href="https://quiz-portal-five.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-4 rounded-xl font-bold text-black hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300"
          >
            <Trophy className="w-6 h-6" />
            <span>Explore Complete Quiz Portfolio</span>
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default QuizLegacyWall;