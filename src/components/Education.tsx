import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, ExternalLink, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      id: 1,
      institution: 'Bennett University',
      degree: 'B.Tech in Computer Science',
      duration: '2021 - 2025',
      location: 'Greater Noida, India',
      gpa: '8.5/10',
      logo: '🎓',
      color: 'neon-blue',
      highlights: [
        'Data Structures & Algorithms',
        'Machine Learning',
        'Software Engineering',
        'Computer Networks'
      ]
    }
  ];

  const internships = [
    {
      id: 1,
      organization: 'DRDO (Defence Research and Development Organisation)',
      position: 'Software Development Intern',
      duration: 'Summer 2023',
      location: 'New Delhi, India',
      logo: '🛡️',
      color: 'neon-green',
      description: 'Worked on Civic-AI projects for government transparency and citizen engagement',
      achievements: [
        'Developed AI-powered analytics dashboard',
        'Implemented citizen feedback system',
        'Contributed to 3 government projects'
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      title: 'Machine Learning Specialization',
      issuer: 'Coursera - Stanford University',
      date: '2023',
      logo: '🤖',
      color: 'neon-purple',
      credentialId: 'ABC123XYZ'
    },
    {
      id: 2,
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2023',
      logo: '☁️',
      color: 'neon-blue',
      credentialId: 'AWS-CCP-456'
    },
    {
      id: 3,
      title: 'Python for Data Science',
      issuer: 'NPTEL',
      date: '2022',
      logo: '🐍',
      color: 'neon-green',
      credentialId: 'NPTEL-PDS-789'
    },
    {
      id: 4,
      title: 'Digital India Quiz Champion',
      issuer: 'Government of India',
      date: '2024',
      logo: '🏆',
      color: 'neon-blue',
      credentialId: 'GOI-DIQ-2024'
    },
    {
      id: 5,
      title: 'Cybersecurity Fundamentals',
      issuer: 'Coursera - IBM',
      date: '2023',
      logo: '🔒',
      color: 'neon-purple',
      credentialId: 'IBM-CSF-101'
    },
    {
      id: 6,
      title: 'React Development',
      issuer: 'Meta',
      date: '2023',
      logo: '⚛️',
      color: 'neon-blue',
      credentialId: 'META-RD-456'
    }
  ];

  const hackathons = [
    {
      id: 1,
      name: 'Smart India Hackathon',
      position: 'Winner',
      year: '2023',
      logo: '🏅',
      color: 'neon-green'
    },
    {
      id: 2,
      name: 'HackBennett 2023',
      position: 'Runner-up',
      year: '2023',
      logo: '🥈',
      color: 'neon-blue'
    },
    {
      id: 3,
      name: 'CodeStorm National',
      position: 'Top 10',
      year: '2022',
      logo: '⚡',
      color: 'neon-purple'
    }
  ];

  return (
    <section id="education" className="py-20 relative">
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
            Education & Growth
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Academic excellence, professional experience, and continuous learning
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center space-x-3">
            <GraduationCap className="w-8 h-8 text-neon-blue" />
            <span>Education</span>
          </h3>

          {education.map((edu) => (
            <motion.div
              key={edu.id}
              whileHover={{ scale: 1.02 }}
              className="bg-cyber-gray/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-neon-blue/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <div className="text-4xl">{edu.logo}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">{edu.institution}</h4>
                    <p className="text-neon-blue font-medium">{edu.degree}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 text-gray-300 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300 mb-1">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="text-neon-green font-bold">GPA: {edu.gpa}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {edu.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="bg-cyber-light/30 border border-gray-600 rounded-lg px-3 py-2 text-sm text-gray-300 text-center"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Internships */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center space-x-3">
            <Award className="w-8 h-8 text-neon-green" />
            <span>Professional Experience</span>
          </h3>

          {internships.map((internship) => (
            <motion.div
              key={internship.id}
              whileHover={{ scale: 1.02 }}
              className="bg-cyber-gray/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-neon-green/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 md:mb-0">
                  <div className="text-4xl">{internship.logo}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">{internship.organization}</h4>
                    <p className="text-neon-green font-medium">{internship.position}</p>
                    <p className="text-gray-300 mt-2">{internship.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 text-gray-300 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>{internship.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span>{internship.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                {internship.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-green rounded-full" />
                    <span className="text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center space-x-3">
            <Award className="w-8 h-8 text-neon-purple" />
            <span>Certifications</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  rotateY: 15,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="bg-cyber-gray/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-neon-blue/50 transition-all duration-300 cursor-pointer group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{cert.logo}</div>
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-neon-blue transition-colors duration-300">
                    {cert.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">{cert.issuer}</p>
                  <div className="flex items-center justify-center space-x-2 text-gray-300 text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                  <div className="text-xs text-gray-500 bg-cyber-light/30 rounded px-2 py-1 inline-block">
                    ID: {cert.credentialId}
                  </div>
                </div>

                {/* Flip Effect Back */}
                <div className="absolute inset-0 bg-cyber-gray/90 backdrop-blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-neon-blue" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hackathons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center space-x-3">
            <Award className="w-8 h-8 text-neon-green" />
            <span>Hackathon Achievements</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={hackathon.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-cyber-gray/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-${hackathon.color}/50 transition-all duration-300 text-center`}
              >
                <div className="text-4xl mb-4">{hackathon.logo}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{hackathon.name}</h4>
                <p className={`text-${hackathon.color} font-medium mb-2`}>{hackathon.position}</p>
                <p className="text-gray-400 text-sm">{hackathon.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;