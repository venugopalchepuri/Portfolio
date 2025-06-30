import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DimensionalPulse = ({ onComplete }) => {
  const [phase, setPhase] = useState('intro'); // 'intro', 'transition', 'complete'
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  // Mouse tracking for subtle effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    const handleTouch = (e) => {
      const touch = e.touches[0];
      const x = (touch.clientX / window.innerWidth) * 100;
      const y = (touch.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouch);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouch);
    };
  }, []);

  // Handle click anywhere to enter
  const handleClick = () => {
    if (phase === 'intro') {
      setPhase('transition');
      
      // Complete sequence
      setTimeout(() => {
        setPhase('complete');
        setTimeout(() => {
          onComplete();
        }, 1000);
      }, 2500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClick}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden cursor-pointer"
      style={{
        background: 'linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 50%, #2a1a3e 100%)'
      }}
    >
      {/* CLEAN COSMIC BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dynamic Gradient Base */}
        <motion.div 
          animate={{
            background: [
              'radial-gradient(ellipse at center, rgba(30, 20, 60, 0.4) 0%, rgba(10, 10, 26, 1) 70%)',
              'radial-gradient(ellipse at center, rgba(60, 20, 80, 0.4) 0%, rgba(10, 10, 26, 1) 70%)',
              'radial-gradient(ellipse at center, rgba(20, 60, 80, 0.4) 0%, rgba(10, 10, 26, 1) 70%)',
              'radial-gradient(ellipse at center, rgba(30, 20, 60, 0.4) 0%, rgba(10, 10, 26, 1) 70%)'
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />

        {/* Subtle Grid Pattern */}
        <motion.div 
          animate={{
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(100, 200, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100, 200, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Minimal Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(${
                Math.random() > 0.5 ? '100, 200, 255' : '200, 100, 255'
              }, ${Math.random() * 0.6 + 0.3})`
            }}
            animate={{
              y: [0, -Math.random() * 200 - 100],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Subtle Cursor Glow */}
        <motion.div
          style={{
            left: mousePosition.x + '%',
            top: mousePosition.y + '%'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          {/* INTRO PHASE - Simple and Clean */}
          {phase === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-center space-y-12"
            >
              {/* Simple Pulsating Portal */}
              <div className="relative">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="w-80 h-80 rounded-full border-2 border-cyan-400/50 relative mx-auto"
                >
                  {/* Gentle Rotating Ring */}
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-purple-400/30"
                  />

                  {/* Inner Glow */}
                  <motion.div
                    animate={{
                      opacity: [0.4, 0.8, 0.4],
                      scale: [0.9, 1.05, 0.9]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute inset-8 rounded-full bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-cyan-400/20 backdrop-blur-sm"
                  />

                  {/* Center Portal */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-20 rounded-full bg-gradient-to-r from-cyan-400/30 to-purple-400/30 backdrop-blur-md flex items-center justify-center"
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="text-6xl text-cyan-300"
                    >
                      ⟡
                    </motion.div>
                  </motion.div>

                  {/* Subtle Ripples */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 2.5],
                        opacity: [0.6, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 1,
                        ease: "easeOut"
                      }}
                      className="absolute inset-0 rounded-full border border-cyan-400/40"
                    />
                  ))}
                </motion.div>
              </div>

              {/* Simple Text */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="space-y-8"
              >
                <motion.h1
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(100, 200, 255, 0.8)',
                      '0 0 30px rgba(200, 100, 255, 0.8)',
                      '0 0 20px rgba(100, 200, 255, 0.8)'
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6"
                >
                  Reality is overrated.
                </motion.h1>

                <motion.h2
                  animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-2xl md:text-4xl font-orbitron font-bold text-cyan-300"
                >
                  Click anywhere to enter the Parallel Universe
                </motion.h2>
                
                <motion.p
                  animate={{ 
                    opacity: [0.6, 1, 0.6],
                    y: [0, -3, 0]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="text-lg text-purple-300 font-light"
                >
                  ✦ Your journey beyond the screen awaits ✦
                </motion.p>
              </motion.div>
            </motion.div>
          )}

          {/* TRANSITION PHASE - Portal Warp */}
          {phase === 'transition' && (
            <motion.div
              key="transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              {/* Screen Shake Effect */}
              <motion.div
                animate={{
                  x: [0, -6, 6, -4, 4, -2, 2, 0],
                  y: [0, 3, -3, 2, -2, 1, -1, 0],
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-full h-full flex items-center justify-center"
              >
                {/* Portal Explosion */}
                <motion.div
                  animate={{
                    scale: [1, 20],
                    rotate: [0, 180],
                    opacity: [1, 0.8, 0]
                  }}
                  transition={{ duration: 2.5, ease: "easeIn" }}
                  className="w-80 h-80 rounded-full bg-gradient-to-r from-cyan-400 via-white to-purple-400 mx-auto"
                />

                {/* Warp Lines */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scaleX: [0, 1.5, 0],
                      opacity: [0, 0.8, 0],
                      skewX: [0, 10, -10, 0]
                    }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.08,
                      ease: "easeOut"
                    }}
                    className="absolute w-full h-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    style={{ top: `${i * 8}%` }}
                  />
                ))}
              </motion.div>

              {/* Flash of Light */}
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 4, 6]
                }}
                transition={{ duration: 1.2, delay: 1.5 }}
                className="absolute inset-0 bg-white"
              />
            </motion.div>
          )}

          {/* COMPLETE PHASE */}
          {phase === 'complete' && (
            <motion.div
              key="complete"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 2 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center"
            >
              <motion.div
                animate={{
                  textShadow: [
                    '0 0 40px rgba(255, 255, 255, 1)',
                    '0 0 60px rgba(100, 200, 255, 1)',
                    '0 0 40px rgba(255, 255, 255, 1)'
                  ]
                }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-4xl md:text-6xl font-orbitron font-black text-white"
              >
                WELCOME
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Click Indicator */}
      {phase === 'intro' && (
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <div className="text-cyan-400 text-sm font-medium">
            Click anywhere to continue
          </div>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-2xl mt-2"
          >
            ↓
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default DimensionalPulse;