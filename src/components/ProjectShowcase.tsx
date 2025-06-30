import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Play, 
  Award, 
  Users, 
  Calendar,
  Target,
  Zap,
  Leaf,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Star,
  Trophy,
  Code,
  Sparkles
} from 'lucide-react';

const ProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [showcaseMode, setShowcaseMode] = useState('vertical'); // 'vertical', 'horizontal', 'carousel'
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

const projects = [
  {
    id: 1,
    title: 'News Mosaic',
    tagline: 'Beyond headlines — embracing perspectives',
    category: 'AI + Media',
    problem: 'News consumption today is fragmented and biased, making it hard for readers to get a balanced view.',
    solution: 'Built an AI-integrated platform that identifies media bias, categorizes news in real time, and presents multiple perspectives with clarity.',
    image: 'https://media.licdn.com/dms/image/v2/D4E22AQGIyZw00ASoKQ/feedshare-shrink_800/B4EZerp3WUHYAk-/0/1750931569559?e=1753920000&v=beta&t=smN5PrlJ0YvgvSDYMeVHHjjobhu5tYD_50RsdNgLOwQ',
    mockup: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=compress&cs=tinysrgb&w=800',
    techStack: [
      { name: 'React.js', icon: '⚛️', color: 'blue' },
      { name: 'TypeScript', icon: '🔷', color: 'blue' },
      { name: 'Tailwind CSS', icon: '🎨', color: 'teal' },
      { name: 'Supabase', icon: '🧩', color: 'emerald' },
      { name: 'Axios', icon: '🌐', color: 'gray' },
      { name: 'GNews API', icon: '📰', color: 'red' }
    ],
    features: [
      'AI-powered media bias detection (Left | Center | Right)',
      'Live news feed categorized by domain (Tech, Politics, World)',
      'Sleek and responsive UI crafted with Tailwind',
      'Real-time search and filter with API fallback mechanisms',
      'Custom modular frontend architecture',
      'Dark mode and future multilingual support (coming soon)'
    ],
    impact: {
      title: 'Live Deployed Application',
      description: 'Empowering informed media consumption in the AI era',
      metrics: ['1,000+ stories daily', '100% mobile-optimized', 'Fast API fallback engine']
    },
    demo: 'https://news-mosaic.vercel.app/',
    github: 'https://github.com/venugopalchepuri/NewsMosaic',
    theme: {
      primary: 'slate',
      secondary: 'indigo',
      accent: 'rose',
      emoji: '🗞️',
      particles: ['🧠', '📰', '🔍', '🌍']
    }
  },
  {
    id: 2,
    title: 'Roam Ready',
    tagline: 'Your Ultimate Travel Companion',
    category: 'Lifestyle & Travel',
    problem: 'Planning travel is often overwhelming with disconnected tools and last-minute chaos.',
    solution: 'Developed an all-in-one travel planner with checklists, currency converter, guides, and itinerary planner — all in a smooth UI.',
    image: 'Gemini_Generated_Image_6xynuo6xynuo6xyn.png',
    mockup: '',
    techStack: [
      { name: 'React.js', icon: '⚛️', color: 'blue' },
      { name: 'Tailwind CSS', icon: '🌈', color: 'cyan' },
      { name: 'Vite', icon: '⚡', color: 'yellow' },
      { name: 'Chart.js', icon: '📊', color: 'red' }
    ],
    features: [
      'Travel checklist to never forget essentials',
      'Live currency converter for any country',
      'Guides for destinations with smart recommendations',
      'Day-wise travel planner to schedule your trip',
      'Minimal UI with offline-first support'
    ],
    impact: {
      title: 'Hackathon Project',
      description: 'Built during end-sem exams to solve a real-life travel pain point',
      metrics: ['Deployed on Vercel', 'Used by 50+ students', 'Zero UI bugs post-launch']
    },
    demo: 'https://roam-ready-delta.vercel.app/',
    github: 'https://github.com/venugopalchepuri/Roam-Ready',
    theme: {
      primary: 'sky',
      secondary: 'cyan',
      accent: 'yellow',
      emoji: '✈️',
      particles: ['🌍', '🧳', '📌', '🗺️']
    }
  },
  {
    id: 3,
    title: 'Crave-AI',
    tagline: 'Mood-Based Food Discovery Engine',
    category: 'AI + FoodTech',
    problem: 'People often spend too much time deciding what to eat and end up picking the same dishes.',
    solution: 'Designed an AI-based recommendation system that suggests food based on mood, weather, time, and budget.',
    image: 'Gemini_Generated_Image_vak73wvak73wvak7.png',
    mockup: 'https://media.licdn.com/dms/image/v2/D5622AQFi22II8gDN0g/feedshare-shrink_800/B56ZafDLQYGoAg-/0/1746425135221?e=1753920000&v=beta&t=8PzUgrhZfPnTOfAnrDzksj83-rxbDpHhpaiY046I-78',
    techStack: [
      { name: 'React.js', icon: '⚛️', color: 'blue' },
      { name: 'Framer Motion', icon: '🎬', color: 'pink' },
      { name: 'Tailwind CSS', icon: '🌀', color: 'cyan' },
      { name: 'LocalStorage', icon: '💾', color: 'gray' }
    ],
    features: [
      'Real-time mood, weather, and budget-based suggestions',
      '"CraveScore" — a custom score matching your vibe',
      'Split bill calculator',
      'Glassmorphism UI with animated, mood-reactive backgrounds',
      'Lightweight and fast — no external backend dependencies'
    ],
    impact: {
      title: 'Social Product Prototype',
      description: 'Helps users discover new food choices based on their emotions',
      metrics: ['200+ test users', 'Positive feedback from food bloggers', 'Zomato-Swiggy collaboration ready']
    },
    demo: 'https://crave-ai.vercel.app/',
    github: 'https://github.com/venugopalchepuri/crave-final',
    theme: {
      primary: 'pink',
      secondary: 'purple',
      accent: 'orange',
      emoji: '🍕',
      particles: ['🍔', '🌮', '🍜', '🍩']
    }
  }
];

  const currentProject = projects[activeProject];

  // Vertical Scroll Showcase Component
  const VerticalShowcase = () => (
    <div className="space-y-32">
      {projects.map((project, index) => (
        <ProjectSection key={project.id} project={project} index={index} />
      ))}
    </div>
  );

  // Horizontal Scroll Showcase Component
  const HorizontalShowcase = () => {
    const scrollRef = useRef(null);
    
    return (
      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-8 pb-8"
          style={{ scrollBehavior: 'smooth' }}
        >
          {projects.map((project, index) => (
            <div key={project.id} className="min-w-full snap-center">
              <ProjectSection project={project} index={index} />
            </div>
          ))}
        </div>
        
        {/* Horizontal Navigation */}
        <div className="flex justify-center space-x-4 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const element = scrollRef.current;
                element.scrollTo({ left: index * element.offsetWidth, behavior: 'smooth' });
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeProject ? 'bg-cyan-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  // Carousel Showcase Component
  const CarouselShowcase = () => (
    <div className="relative">
      <ProjectSection project={currentProject} index={activeProject} />
      
      {/* Carousel Controls */}
      <div className="flex justify-between items-center mt-12">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setActiveProject(prev => prev > 0 ? prev - 1 : projects.length - 1)}
          className="flex items-center space-x-2 bg-cyber-gray/50 backdrop-blur-sm border border-gray-600 hover:border-cyan-400/50 rounded-xl px-6 py-3 text-white transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Previous</span>
        </motion.button>

        <div className="flex space-x-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === activeProject 
                  ? 'bg-cyan-400 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setActiveProject(prev => prev < projects.length - 1 ? prev + 1 : 0)}
          className="flex items-center space-x-2 bg-cyber-gray/50 backdrop-blur-sm border border-gray-600 hover:border-cyan-400/50 rounded-xl px-6 py-3 text-white transition-all duration-300"
        >
          <span>Next</span>
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Dynamic Background Based on Active Project */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 bg-gradient-to-br from-${currentProject.theme.primary}-950/20 via-slate-900 to-${currentProject.theme.secondary}-950/20 transition-all duration-1000`} />
        
        {/* Floating Theme Particles */}
        {currentProject.theme.particles.map((particle, i) => (
          <motion.div
            key={`${currentProject.id}-particle-${i}`}
            className="absolute text-4xl opacity-10"
            style={{
              left: `${20 + i * 20}%`,
              top: `${10 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          >
            {particle}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-space font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
              Project Stories
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Each project is a journey of innovation, problem-solving, and impact
          </p>

          {/* Showcase Mode Selector */}
          <div className="flex justify-center space-x-4 mb-8">
            {[
              { mode: 'vertical', label: 'Story Flow', icon: '📜' },
              { mode: 'horizontal', label: 'Slide Show', icon: '🎬' },
              { mode: 'carousel', label: 'Focus Mode', icon: '🎯' }
            ].map(({ mode, label, icon }) => (
              <motion.button
                key={mode}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowcaseMode(mode)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  showcaseMode === mode
                    ? 'bg-cyan-400/20 border-2 border-cyan-400/50 text-cyan-400'
                    : 'bg-gray-700/30 border-2 border-gray-600/50 text-gray-300 hover:border-cyan-400/30'
                }`}
              >
                <span>{icon}</span>
                <span className="text-sm font-medium">{label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Dynamic Showcase Rendering */}
        <div ref={containerRef}>
          {showcaseMode === 'vertical' && <VerticalShowcase />}
          {showcaseMode === 'horizontal' && <HorizontalShowcase />}
          {showcaseMode === 'carousel' && <CarouselShowcase />}
        </div>
      </div>
    </section>
  );
};

// Individual Project Section Component
const ProjectSection = ({ project, index }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.3 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={sectionRef}
      style={{ opacity }}
      className="min-h-screen flex items-center relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y }}
          className={`absolute inset-0 bg-gradient-to-br from-${project.theme.primary}-500/5 to-${project.theme.secondary}-500/5 rounded-3xl`}
        />
      </div>

      <div className="w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side - Visual Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Project Image/Mockup */}
          <div className="relative group">
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating Project Icon */}
              <div className="absolute top-6 left-6">
                <div className={`w-16 h-16 rounded-full bg-${project.theme.primary}-500/20 backdrop-blur-sm border border-${project.theme.primary}-400/50 flex items-center justify-center text-3xl`}>
                  {project.theme.emoji}
                </div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
              >
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
                  >
                    <Play className="w-6 h-6 text-white" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-3 mt-6"
            >
              {project.techStack.map((tech, techIndex) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1 + techIndex * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`flex items-center space-x-2 px-3 py-2 bg-${tech.color}-500/20 border border-${tech.color}-400/50 rounded-full backdrop-blur-sm`}
                >
                  <span className="text-lg">{tech.icon}</span>
                  <span className={`text-${tech.color}-300 font-medium text-sm`}>{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          {/* Project Header */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className={`inline-flex items-center space-x-2 px-4 py-2 bg-${project.theme.primary}-500/20 border border-${project.theme.primary}-400/50 rounded-full mb-4`}
            >
              <Sparkles className={`w-4 h-4 text-${project.theme.primary}-400`} />
              <span className={`text-${project.theme.primary}-300 font-medium text-sm`}>{project.category}</span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              {project.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className={`text-xl text-${project.theme.primary}-300 font-medium mb-6`}
            >
              {project.tagline}
            </motion.p>
          </div>

          {/* Problem & Solution */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-red-500/10 border border-red-400/30 rounded-xl p-6"
            >
              <h4 className="text-red-300 font-semibold mb-3 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                The Challenge
              </h4>
              <p className="text-gray-300 leading-relaxed">{project.problem}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className={`bg-${project.theme.primary}-500/10 border border-${project.theme.primary}-400/30 rounded-xl p-6`}
            >
              <h4 className={`text-${project.theme.primary}-300 font-semibold mb-3 flex items-center`}>
                <Zap className="w-5 h-5 mr-2" />
                The Solution
              </h4>
              <p className="text-gray-300 leading-relaxed">{project.solution}</p>
            </motion.div>
          </div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="bg-cyber-gray/30 backdrop-blur-sm border border-gray-600/50 rounded-xl p-6"
          >
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-400" />
              Key Features
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, featureIndex) => (
                <motion.div
                  key={featureIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.2 + featureIndex * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className={`w-2 h-2 bg-${project.theme.primary}-400 rounded-full mt-2 flex-shrink-0`} />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Impact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-400/30 rounded-xl p-6"
          >
            <h4 className="text-yellow-300 font-semibold mb-3 flex items-center">
              <Trophy className="w-5 h-5 mr-2" />
              {project.impact.title}
            </h4>
            <p className="text-gray-300 mb-4">{project.impact.description}</p>
            <div className="flex flex-wrap gap-4">
              {project.impact.metrics.map((metric, metricIndex) => (
                <div key={metricIndex} className="bg-yellow-500/20 border border-yellow-400/50 rounded-lg px-3 py-1">
                  <span className="text-yellow-300 font-medium text-sm">{metric}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex space-x-4"
          >
            <motion.a
              href={project.demo}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-${project.theme.primary}-500 to-${project.theme.secondary}-500 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-${project.theme.primary}-500/25 transition-all duration-300`}
            >
              <Play className="w-5 h-5" />
              <span>Live Demo</span>
            </motion.a>
            
            <motion.a
              href={project.github}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-3 bg-cyber-gray/50 backdrop-blur-sm border border-gray-600 hover:border-cyan-400/50 rounded-xl font-semibold text-white transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              <span>View Code</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectShowcase;