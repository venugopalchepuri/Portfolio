import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      id: 1,
      title: 'Quizzing is Strategy, Not Memory',
      excerpt: 'Exploring the cognitive strategies behind competitive quizzing and how pattern recognition trumps rote learning.',
      image: 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Strategy',
      readTime: '8 min read',
      date: 'March 15, 2024',
      color: 'neon-blue',
      icon: '🧠'
    },
    {
      id: 2,
      title: 'Icarus Verilog & Me: Simulating Reality',
      excerpt: 'My journey with circuit simulation and how digital twins are reshaping hardware development.',
      image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Technology',
      readTime: '12 min read',
      date: 'February 28, 2024',
      color: 'neon-green',
      icon: '⚡'
    },
    {
      id: 3,
      title: 'Designing Lifelines with Purpose',
      excerpt: 'How Civic-AI projects at DRDO taught me that technology without purpose is just code.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Philosophy',
      readTime: '6 min read',
      date: 'January 20, 2024',
      color: 'neon-purple',
      icon: '🎯'
    },
    {
      id: 4,
      title: 'The Presidential Quiz Invitation',
      excerpt: 'Reflecting on representing India at the highest level and the responsibility that comes with recognition.',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Personal',
      readTime: '10 min read',
      date: 'December 10, 2023',
      color: 'neon-blue',
      icon: '🏛️'
    }
  ];

  return (
    <section id="blog" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
            Thoughts & Insights
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sharing experiences, learnings, and perspectives from my journey
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative bg-cyber-gray/30 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-neon-blue/50 transition-all duration-300 group">
            <div className="md:flex">
              <div className="md:w-1/2 relative overflow-hidden">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-dark/80 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className="text-2xl">{blogPosts[0].icon}</span>
                  <span className={`px-3 py-1 bg-${blogPosts[0].color}/20 border border-${blogPosts[0].color}/50 rounded-full text-sm font-medium text-${blogPosts[0].color}`}>
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className={`px-3 py-1 bg-${blogPosts[0].color}/20 border border-${blogPosts[0].color}/50 rounded-full text-sm font-medium text-${blogPosts[0].color}`}>
                    {blogPosts[0].category}
                  </span>
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors duration-300">
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-neon-blue/20 hover:bg-neon-blue/30 border border-neon-blue/50 rounded-lg px-6 py-3 text-neon-blue font-medium transition-all duration-300 w-fit"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-cyber-gray/30 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-neon-blue/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/60 to-transparent" />
                <div className="absolute top-4 right-4 text-2xl">{post.icon}</div>
                <div className={`absolute top-4 left-4 px-3 py-1 bg-${post.color}/20 border border-${post.color}/50 rounded-full text-sm font-medium text-${post.color}`}>
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-gray-400 text-sm">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-neon-blue text-sm font-medium group-hover:underline">
                    Read More
                  </span>
                  <ArrowRight className="w-4 h-4 text-neon-blue group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-cyber-gray/20 backdrop-blur-sm border border-neon-blue/20 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Want to discuss these ideas?
            </h3>
            <p className="text-gray-300 mb-6">
              I love engaging conversations about technology, strategy, and innovation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-neon-blue to-neon-purple px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300"
            >
              Start a Conversation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;