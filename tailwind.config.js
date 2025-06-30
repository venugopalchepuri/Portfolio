/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'space': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'neon-cyan': '#00FFFF',
        'neon-magenta': '#FF00FF',
        'neon-blue': '#00D4FF',
        'neon-green': '#00FF94',
        'neon-purple': '#8B5CF6',
        'cyber-dark': '#0A0A0F',
        'cyber-gray': '#1A1A2E',
        'cyber-light': '#16213E',
        'quode-cyan': '#00FFFF',
        'quode-magenta': '#FF00FF',
        'quode-gradient-start': '#00FFFF',
        'quode-gradient-end': '#FF00FF',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'particle': 'particle 20s linear infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 1s infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px #00FFFF' },
          'to': { boxShadow: '0 0 30px #00FFFF, 0 0 40px #FF00FF' },
        },
        particle: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) rotate(360deg)', opacity: '0' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: '#00FFFF' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'pulse-glow': {
          'from': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(255, 0, 255, 0.3)' },
          'to': { boxShadow: '0 0 40px rgba(0, 255, 255, 0.8), 0 0 60px rgba(255, 0, 255, 0.6)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cosmic': 'linear-gradient(135deg, #0A0A0F 0%, #1A1A2E 50%, #16213E 100%)',
        'quode-gradient': 'linear-gradient(135deg, #00FFFF 0%, #FF00FF 100%)',
        'quode-gradient-reverse': 'linear-gradient(135deg, #FF00FF 0%, #00FFFF 100%)',
      },
    },
  },
  plugins: [],
};