import React from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Sophisticated Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Subtle Grid Pattern */}
      <motion.div 
        animate={{
          opacity: [0.02, 0.05, 0.02]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Floating Geometric Elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`geo-${i}`}
          className="absolute border border-blue-400/20 rounded-lg"
          style={{
            left: `${15 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
            width: `${40 + i * 8}px`,
            height: `${40 + i * 8}px`,
            transform: i % 2 === 0 ? 'rotate(45deg)' : 'rotate(0deg)'
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 20 + i * 3,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear"
          }}
        />
      ))}

      {/* Ambient Light Orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${20 + i * 20}%`,
            top: `${30 + (i % 2) * 40}%`,
            width: `${120 + i * 30}px`,
            height: `${120 + i * 30}px`,
            background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(59, 130, 246, 0.08)' : 'rgba(147, 51, 234, 0.08)'} 0%, transparent 70%)`,
            filter: 'blur(40px)'
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Subtle Energy Lines */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px opacity-20"
          style={{
            left: '0%',
            top: `${25 + i * 20}%`,
            width: '100%',
            background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? '#3B82F6' : '#8B5CF6'}, transparent)`
          }}
          animate={{
            opacity: [0, 0.4, 0],
            scaleX: [0, 1, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;