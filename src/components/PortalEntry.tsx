import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Zap, Code, Brain, Trophy, Target } from 'lucide-react';

const PortalEntry = ({ onComplete }) => {
  const [phase, setPhase] = useState('intro'); // 'intro', 'portal-opening', 'entering', 'complete'
  const [portalCharge, setPortalCharge] = useState(0);
  const [touched, setTouched] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  // Mouse tracking for portal charging
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
      
      if (phase === 'intro' && !touched) {
        // Gradually charge portal based on mouse movement
        setPortalCharge(prev => Math.min(prev + 0.5, 100));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [phase, touched]);

  // Auto-advance when portal is fully charged
  useEffect(() => {
    if (portalCharge >= 100 && phase === 'intro') {
      setTimeout(() => {
        setPhase('portal-opening');
      }, 500);
    }
  }, [portalCharge, phase]);

  const handlePortalTouch = () => {
    if (phase === 'portal-opening') {
      setTouched(true);
      setPhase('entering');
      
      // Complete the portal entry sequence
      setTimeout(() => {
        setPhase('complete');
        setTimeout(() => {
          onComplete();
        }, 1000);
      }, 3000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden cursor-none"
    >
      {/* DIMENSIONAL BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base Cosmic Gradient */}
        <motion.div 
          animate={{
            background: [
              'radial-gradient(ellipse at center, rgba(0, 20, 40, 0.8) 0%, rgba(0, 0, 0, 1) 60%)',
              'radial-gradient(ellipse at center, rgba(20, 0, 40, 0.8) 0%, rgba(0, 0, 0, 1) 60%)',
              'radial-gradient(ellipse at center, rgba(0, 40, 20, 0.8) 0%, rgba(0, 0, 0, 1) 60%)',
              'radial-gradient(ellipse at center, rgba(0, 20, 40, 0.8) 0%, rgba(0, 0, 0, 1) 60%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />

        {/* Dimensional Grid */}
        <motion.div 
          animate={{
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(45deg, rgba(255, 0, 255, 0.2) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(255, 0, 255, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px, 40px 40px, 80px 80px, 80px 80px',
          }}
        />

        {/* Floating Dimensional Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`dimension-particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 8 + 3,
              height: Math.random() * 8 + 3,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(${
                Math.random() > 0.6 ? '0, 255, 255' : 
                Math.random() > 0.3 ? '255, 0, 255' : 
                '255, 255, 255'
              }, ${Math.random() * 0.8 + 0.3})`
            }}
            animate={{
              y: [0, -Math.random() * 300 - 100],
              x: [0, Math.random() * 200 - 100],
              opacity: [0, 1, 0],
              scale: [0.5, 2, 0.5],
              rotate: [0, Math.random() * 720]
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Mystical Symbols */}
        {[...Array(12)].map((_, i) => {
          const symbols = ['⟡', '◊', '△', '▽', '◯', '⬟'];
          const symbol = symbols[i % symbols.length];
          
          return (
            <motion.div
              key={`symbol-${i}`}
              className="absolute text-3xl opacity-20 text-cyan-400"
              style={{
                left: `${15 + (i * 8)}%`,
                top: `${20 + (i % 4) * 20}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [0.8, 1.5, 0.8],
                opacity: [0.1, 0.4, 0.1]
              }}
              transition={{
                duration: 12 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut"
              }}
            >
              {symbol}
            </motion.div>
          );
        })}

        {/* Mouse Cursor Glow */}
        <motion.div
          style={{
            left: mousePosition.x + '%',
            top: mousePosition.y + '%'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* MAIN PORTAL CONTENT */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          {phase === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 1.5 }}
              className="text-center space-y-12"
            >
              {/* Portal Ring */}
              <div className="relative">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-80 h-80 rounded-full border-4 border-cyan-400/30 relative"
                >
                  {/* Portal Charge Progress */}
                  <motion.div
                    style={{
                      background: `conic-gradient(from 0deg, 
                        rgba(0, 255, 255, 0.8) 0%, 
                        rgba(0, 255, 255, 0.8) ${portalCharge}%, 
                        transparent ${portalCharge}%, 
                        transparent 100%)`
                    }}
                    className="absolute inset-0 rounded-full"
                  />
                  
                  {/* Inner Portal Glow */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.8, 1.1, 0.8]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-8 rounded-full bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-cyan-400/20 backdrop-blur-sm"
                  />

                  {/* Portal Center */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-20 rounded-full bg-gradient-to-r from-cyan-400/40 to-purple-400/40 backdrop-blur-md flex items-center justify-center"
                  >
                    <motion.div
                      animate={{ rotate: [0, -360] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="text-6xl"
                    >
                      ⟡
                    </motion.div>
                  </motion.div>

                  {/* Orbiting Elements */}
                  {[Brain, Code, Trophy, Target, Zap, Sparkles].map((Icon, i) => (
                    <motion.div
                      key={i}
                      animate={{ rotate: [0, 360] }}
                      transition={{ 
                        duration: 10 + i * 2, 
                        repeat: Infinity, 
                        ease: "linear",
                        delay: i * 0.5
                      }}
                      className="absolute inset-0"
                    >
                      <div 
                        className="absolute w-8 h-8 text-cyan-400"
                        style={{
                          top: '10px',
                          left: '50%',
                          transform: 'translateX(-50%)'
                        }}
                      >
                        <Icon className="w-full h-full" />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Portal Charge Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
                >
                  <div className="text-center">
                    <div className="text-cyan-400 font-orbitron font-bold text-lg mb-2">
                      Portal Charge: {Math.round(portalCharge)}%
                    </div>
                    <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        style={{ width: `${portalCharge}%` }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Intro Text */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="space-y-6"
              >
                <motion.h1
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(0, 255, 255, 0.8)',
                      '0 0 40px rgba(255, 0, 255, 0.8)',
                      '0 0 20px rgba(0, 255, 255, 0.8)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-4xl md:text-6xl font-orbitron font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent"
                >
                  Beyond the screen...
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="text-xl text-gray-300 font-light"
                >
                  lies your true world
                </motion.p>

                {portalCharge < 100 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="text-lg text-cyan-300 font-medium"
                  >
                    Move your cursor to charge the portal...
                  </motion.p>
                )}
              </motion.div>
            </motion.div>
          )}

          {phase === 'portal-opening' && (
            <motion.div
              key="portal-opening"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-center space-y-12"
            >
              {/* Fully Charged Portal */}
              <div className="relative">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                    scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-80 h-80 rounded-full border-4 border-cyan-400 relative cursor-pointer"
                  onClick={handlePortalTouch}
                >
                  {/* Fully Charged Ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 opacity-80" />
                  
                  {/* Pulsing Center */}
                  <motion.div
                    animate={{
                      scale: [0.8, 1.3, 0.8],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute inset-8 rounded-full bg-gradient-to-r from-cyan-400/60 via-white/40 to-purple-400/60 backdrop-blur-md flex items-center justify-center"
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, -360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity }
                      }}
                      className="text-8xl text-white"
                    >
                      ⟡
                    </motion.div>
                  </motion.div>

                  {/* Energy Waves */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 2.5],
                        opacity: [0.8, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeOut"
                      }}
                      className="absolute inset-0 rounded-full border-2 border-cyan-400/60"
                    />
                  ))}
                </motion.div>
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-6"
              >
                <motion.h2
                  animate={{
                    scale: [1, 1.05, 1],
                    textShadow: [
                      '0 0 30px rgba(0, 255, 255, 1)',
                      '0 0 50px rgba(255, 0, 255, 1)',
                      '0 0 30px rgba(0, 255, 255, 1)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-5xl md:text-7xl font-orbitron font-black text-cyan-400"
                >
                  🔮 Touch to Begin
                </motion.h2>
                
                <motion.p
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-2xl text-purple-300 font-medium"
                >
                  ✦ Tap to Enter the Parallel Portal
                </motion.p>
              </motion.div>
            </motion.div>
          )}

          {phase === 'entering' && (
            <motion.div
              key="entering"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              {/* Portal Warp Effect */}
              <motion.div
                animate={{
                  scale: [1, 50],
                  rotate: [0, 720],
                  opacity: [1, 0]
                }}
                transition={{ duration: 3, ease: "easeIn" }}
                className="w-80 h-80 rounded-full bg-gradient-to-r from-cyan-400 via-white to-purple-400 mx-auto"
              />

              {/* Screen Shake Effect */}
              <motion.div
                animate={{
                  x: [0, -10, 10, -10, 10, 0],
                  y: [0, 5, -5, 5, -5, 0]
                }}
                transition={{ duration: 0.5, repeat: 6 }}
                className="absolute inset-0 pointer-events-none"
              />

              {/* Warp Lines */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scaleX: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.05,
                    ease: "easeOut"
                  }}
                  className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                  style={{ top: `${i * 5}%` }}
                />
              ))}
            </motion.div>
          )}

          {phase === 'complete' && (
            <motion.div
              key="complete"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 2 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <motion.div
                animate={{
                  textShadow: [
                    '0 0 40px rgba(255, 255, 255, 1)',
                    '0 0 80px rgba(0, 255, 255, 1)',
                    '0 0 40px rgba(255, 255, 255, 1)'
                  ]
                }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-6xl md:text-8xl font-orbitron font-black text-white"
              >
                WELCOME
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Sound Effect Visualization */}
      {phase === 'entering' && (
        <motion.div
          animate={{
            scale: [1, 3, 1],
            opacity: [0.8, 0.2, 0.8]
          }}
          transition={{ duration: 1, repeat: 3 }}
          className="absolute inset-0 border-8 border-cyan-400/50 rounded-full"
        />
      )}
    </motion.div>
  );
};

export default PortalEntry;