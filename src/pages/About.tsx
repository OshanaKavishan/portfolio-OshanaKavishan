import React, { useState, useEffect } from 'react';
import { Briefcase, User, ChevronLeft, ChevronRight, Trophy, Code, Heart, Sparkles, Star, Award, Target, Zap, Users, BookOpen, Lightbulb } from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import AnimatedAnimals from '../components/AnimatedAnimals';

const About = () => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  type Particle = {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    icon: React.ComponentType<any>;
    velocity: { x: number; y: number };
  };

  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setIsVisible(true);

    // Auto-cycle through sections
    const interval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const createParticle = () => {
      const icons = [Sparkles, Heart, Star, Zap, Award, Target];
      const newParticle = {
        id: Date.now() + Math.random(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 2,
        opacity: Math.random() * 0.4 + 0.2,
        icon: icons[Math.floor(Math.random() * icons.length)],
        velocity: {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5
        }
      };
      setParticles(prev => [...prev.slice(-15), newParticle]);
    };

    const interval = setInterval(createParticle, 4000);
    return () => clearInterval(interval);
  }, []);

  const achievements = [
    { icon: <Trophy className="w-5 h-5" />, text: "Computer Instructor", color: "from-yellow-400 to-orange-400" },
    { icon: <Code className="w-5 h-5" />, text: "HNDIT Student", color: "from-blue-400 to-cyan-400" },
    { icon: <Heart className="w-5 h-5" />, text: "Team Player", color: "from-pink-400 to-rose-400" }
  ];

  const skills = [
    { name: "Leadership", level: 85, color: "from-purple-500 to-pink-500" },
    { name: "Communication", level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "Problem Solving", level: 88, color: "from-green-500 to-emerald-500" },
    { name: "Adaptability", level: 92, color: "from-orange-500 to-red-500" }
  ];

  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working together to achieve exceptional results",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Learning",
      description: "Continuously growing and adapting to new challenges",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Creating unique solutions with creative thinking",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {particles.map(particle => {
          const Icon = particle.icon;
          return (
            <div
              key={particle.id}
              className="absolute animate-pulse"
              style={{
                left: particle.x,
                top: particle.y,
                opacity: particle.opacity,
                transform: `translate(${particle.velocity.x * 100}px, ${particle.velocity.y * 100}px)`,
                transition: 'transform 8s linear'
              }}
            >
              <Icon size={particle.size * 4} className="text-purple-400/60" />
            </div>
          );
        })}
      </div>

      {/* Floating Navigation */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50">
        <button
          onClick={() => navigate('/')}
          className="group p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-full border border-white/20 hover:from-purple-600/40 hover:to-pink-600/40 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-110"
        >
          <ChevronLeft size={28} className="text-purple-300 group-hover:text-white transition-colors" />
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Home
          </div>
        </button>
      </div>

      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        <button
          onClick={() => navigate('/experience')}
          className="group p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-full border border-white/20 hover:from-purple-600/40 hover:to-pink-600/40 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-110"
        >
          <ChevronRight size={28} className="text-purple-300 group-hover:text-white transition-colors" />
          <div className="absolute -top-12 right-1/2 transform translate-x-1/2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Experience
          </div>
        </button>
      </div>

      <div className="relative pt-24 px-6 max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-lg font-semibold tracking-wide uppercase">
              Get To Know More
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            About Me
          </h1>

          {/* Floating Achievement Badges */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom-5`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`p-1 rounded-full bg-gradient-to-r ${achievement.color}`}>
                  {achievement.icon}
                </div>
                <span className="text-sm font-medium text-white">{achievement.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Enhanced Image Section */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 shadow-2xl">
              <div className="relative w-full h-80 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                  <div className="relative w-full h-80 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 overflow-hidden group hover:scale-105 transition-transform duration-300">
                    <img
                      src="/about.jpg"
                      alt="Oshana Kavishan - About Me"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">Oshana Kavishan</h3>
                      <p className="text-purple-200">Passionate Developer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                  <div className="text-2xl font-bold text-purple-300">1+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20">
                  <div className="text-2xl font-bold text-blue-300">HNDIT</div>
                  <div className="text-sm text-gray-300">Current Student</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Experience & Education Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-xl group-hover:from-purple-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                    <Briefcase size={24} className="text-purple-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-purple-300">Experience</h3>
                <p className="text-gray-300">1+ years as<br />Computer Instructor</p>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-pink-500/20 to-pink-600/20 rounded-xl group-hover:from-pink-500/30 group-hover:to-pink-600/30 transition-all duration-300">
                    <User size={24} className="text-pink-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-pink-300">Education</h3>
                <p className="text-gray-300">HNDIT Student<br />SLIATE Kandy</p>
              </div>
            </div>

            {/* Journey Section */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">My Journey</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm currently pursuing a <span className="text-purple-300 font-medium">Diploma in ICT</span> at SLIATE Kandy. As a passionate developer and reliable team player, I bring a friendly personality and positive communication style to every project. I thrive on collaboration, continuous learning, and adapting to new challenges while creating innovative solutions.
              </p>

              {/* Personality Traits */}
              <div className="flex flex-wrap gap-3 mb-6">
                {['Friendly', 'Reliable', 'Adaptable', 'Innovative', 'Collaborative', 'Passionate'].map((trait, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm text-purple-300 border border-purple-500/30 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Core Strengths</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 delay-${index * 100}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className={`mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              What Drives Me
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              The core values that guide my work and personal growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-xl group"
              >
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${value.color} w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 mb-12">
          <button
            onClick={() => navigate('/contact')}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Let's Connect</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;