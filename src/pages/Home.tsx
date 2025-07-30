import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Heart, Star, Download, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedAnimals from '../components/AnimatedAnimals';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  icon: React.ComponentType<any>;
  velocity: { x: number; y: number };
}

interface MousePosition {
  x: number;
  y: number;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  // Memoize profile texts to avoid recreating on every render
  const profileTexts = useMemo(() => [
    "Full Stack Developer",
    "React Specialist", 
    "Mobile App Creator",
    "UI/UX Enthusiast",
    "Problem Solver"
  ], []);

  const [currentText, setCurrentText] = useState(0);

  // Use useCallback to prevent unnecessary re-renders
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  // Enhanced particle system with physics
  const createParticle = useCallback((): Particle => {
    const icons = [Sparkles, Heart, Star];
    return {
      id: Date.now() + Math.random(),
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 50,
      size: Math.random() * 3 + 2,
      opacity: Math.random() * 0.4 + 0.2,
      icon: icons[Math.floor(Math.random() * icons.length)],
      velocity: {
        x: (Math.random() - 0.5) * 2,
        y: -(Math.random() * 2 + 1)
      }
    };
  }, []);

  // Animate particles with physics
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          x: particle.x + particle.velocity.x,
          y: particle.y + particle.velocity.y,
          opacity: Math.max(0, particle.opacity - 0.01)
        })).filter(particle => particle.y > -50 && particle.opacity > 0)
      );
    };

    const animationFrame = requestAnimationFrame(function animate() {
      animateParticles();
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Enhanced effects with cleanup
  useEffect(() => {
    setIsVisible(true);
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Improved particle creation with better performance
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => {
        const newParticle = createParticle();
        return [...prev.slice(-15), newParticle]; // Limit particles for better performance
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [createParticle]);

  // Enhanced text cycling with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % profileTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [profileTexts.length]);

  // Enhanced navigation with better UX
  const NavButton = ({ direction, destination, label }: { 
    direction: 'left' | 'right'; 
    destination: string; 
    label: string; 
  }) => (
    <button
      onClick={() => navigate(destination)}
      className={`fixed ${direction === 'left' ? 'left-6' : 'right-6'} top-1/2 transform -translate-y-1/2 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-110 group z-50 shadow-2xl hover:shadow-purple-500/20`}
      aria-label={`Go to ${label} Page`}
    >
      {direction === 'left' ? (
        <ChevronLeft size={24} className="text-white/80 group-hover:text-white transition-colors" />
      ) : (
        <ChevronRight size={24} className="text-white/80 group-hover:text-white transition-colors" />
      )}
      <div className={`absolute -top-12 ${direction === 'left' ? 'left-1/2 transform -translate-x-1/2' : 'right-1/2 transform translate-x-1/2'} px-3 py-2 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap`}>
        {label}
      </div>
    </button>
  );

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 text-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_70%)]" />
      
      <AnimatedAnimals />
      
      {/* Enhanced Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {particles.map(particle => {
          const Icon = particle.icon;
          return (
            <div
              key={particle.id}
              className="absolute transition-all duration-100"
              style={{
                left: particle.x,
                top: particle.y,
                opacity: particle.opacity,
                transform: `scale(${particle.size / 4})`,
                filter: 'blur(0.5px)'
              }}
            >
              <Icon size={16} className="text-purple-400" />
            </div>
          );
        })}
      </div>

      {/* Enhanced Mouse Follower */}
      <div
        className="fixed w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 pointer-events-none z-50 transition-all duration-150 opacity-50 mix-blend-screen"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          filter: 'blur(8px)',
          transform: 'translate3d(0, 0, 0)'
        }}
      />

      {/* Navigation Buttons */}
      {/* <NavButton direction="left" destination="/contact" label="Contact" />
      <NavButton direction="right" destination="/about" label="About" /> */}

      {/* Enhanced Profile Section */}
      <div className={`relative mb-8 group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-20 animate-pulse group-hover:opacity-30 transition-opacity duration-500" />
        <div className="relative w-72 h-72 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-900/50 via-black/50 to-pink-900/50 backdrop-blur-sm flex items-center justify-center">
            <img
              src="/profile.png"
              alt="Oshana Kavishan - Full Stack Developer"
              className="w-64 h-64 object-cover scale-125 rounded-full hover:scale-130 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-green-500/25 transition-all duration-300">
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-200 rounded-full animate-pulse" />
              Available for Work
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced Text Content */}
      <div className={`relative z-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="text-purple-300 text-xl mb-6 animate-fade-in">Hello, I'm</p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
          Oshana Kavishan
        </h1>
        <div className="h-20 mb-8 flex items-center justify-center">
          <p className="text-2xl md:text-3xl text-gray-300 transition-all duration-500 transform">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
              {profileTexts[currentText]}
            </span>
          </p>
        </div>
        
        {/* Enhanced Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a
            href="/OshanaKavishanCV.pdf"
            download="OshanaKavishan_CV.pdf"
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-semibold overflow-hidden hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 border border-purple-500/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              <Download size={20} className="group-hover:animate-bounce" />
              Download CV
            </span>
          </a>
          <button
            onClick={() => navigate('/contact')}
            className="group px-8 py-4 border-2 border-purple-400/50 rounded-2xl font-semibold hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 backdrop-blur-sm"
          >
            <span className="flex items-center gap-2">
              <Mail size={20} className="group-hover:animate-pulse" />
              Let's Connect
            </span>
          </button>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce opacity-30" style={{ animationDelay: '0s' }}>
        <div className="w-4 h-4 bg-purple-500 rounded-full blur-sm" />
      </div>
      <div className="absolute top-40 right-16 animate-bounce opacity-30" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-6 bg-pink-500 rounded-full blur-sm" />
      </div>
      <div className="absolute bottom-32 left-20 animate-bounce opacity-30" style={{ animationDelay: '2s' }}>
        <div className="w-3 h-3 bg-cyan-500 rounded-full blur-sm" />
      </div>
      <div className="absolute bottom-20 right-10 animate-bounce opacity-30" style={{ animationDelay: '0.5s' }}>
        <div className="w-5 h-5 bg-yellow-500 rounded-full blur-sm" />
      </div>
    </section>
  );
};

export default Home;
