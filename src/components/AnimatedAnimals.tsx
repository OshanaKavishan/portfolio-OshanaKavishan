import React, { useState, useEffect } from 'react';

type Animal = {
  id: number;
  svg: React.ReactNode;
  x: number;
  y: number;
  speed: number;
  direction: number;
};

const AnimatedAnimals = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);

  const animalSVGs = [
    // Cute Cat
    <svg viewBox="0 0 100 100" className="w-8 h-8 text-purple-400">
      <circle cx="50" cy="60" r="25" fill="currentColor" opacity="0.8"/>
      <circle cx="35" cy="45" r="8" fill="currentColor"/>
      <circle cx="65" cy="45" r="8" fill="currentColor"/>
      <circle cx="40" cy="50" r="2" fill="white"/>
      <circle cx="60" cy="50" r="2" fill="white"/>
      <path d="M45 65 Q50 70 55 65" stroke="white" strokeWidth="2" fill="none"/>
      <path d="M35 35 L30 25 L40 30 Z" fill="currentColor"/>
      <path d="M65 35 L70 25 L60 30 Z" fill="currentColor"/>
      <circle cx="50" cy="85" r="3" fill="currentColor"/>
      <ellipse cx="35" cy="85" rx="8" ry="4" fill="currentColor"/>
      <ellipse cx="65" cy="85" rx="8" ry="4" fill="currentColor"/>
    </svg>,
    
    // Playful Dog
    <svg viewBox="0 0 100 100" className="w-8 h-8 text-pink-400">
      <ellipse cx="50" cy="65" rx="20" ry="15" fill="currentColor" opacity="0.8"/>
      <circle cx="50" cy="45" r="15" fill="currentColor"/>
      <circle cx="43" cy="40" r="2" fill="white"/>
      <circle cx="57" cy="40" r="2" fill="white"/>
      <ellipse cx="50" cy="50" rx="3" ry="2" fill="white"/>
      <path d="M45 55 Q50 58 55 55" stroke="white" strokeWidth="2" fill="none"/>
      <ellipse cx="35" cy="38" rx="6" ry="10" fill="currentColor"/>
      <ellipse cx="65" cy="38" rx="6" ry="10" fill="currentColor"/>
      <path d="M65 60 Q75 65 70 75" stroke="currentColor" strokeWidth="3" fill="none"/>
      <circle cx="35" cy="80" r="4" fill="currentColor"/>
      <circle cx="65" cy="80" r="4" fill="currentColor"/>
    </svg>,
    
    // Cute Rabbit
    <svg viewBox="0 0 100 100" className="w-8 h-8 text-cyan-400">
      <ellipse cx="50" cy="70" rx="18" ry="12" fill="currentColor" opacity="0.8"/>
      <circle cx="50" cy="50" r="12" fill="currentColor"/>
      <ellipse cx="40" cy="25" rx="4" ry="15" fill="currentColor"/>
      <ellipse cx="60" cy="25" rx="4" ry="15" fill="currentColor"/>
      <circle cx="45" cy="45" r="1.5" fill="white"/>
      <circle cx="55" cy="45" r="1.5" fill="white"/>
      <circle cx="50" cy="52" r="1" fill="white"/>
      <path d="M47 55 Q50 57 53 55" stroke="white" strokeWidth="1" fill="none"/>
      <circle cx="45" cy="82" r="3" fill="currentColor"/>
      <circle cx="55" cy="82" r="3" fill="currentColor"/>
    </svg>,
    
    // Flying Bird
    <svg viewBox="0 0 100 100" className="w-8 h-8 text-yellow-400">
      <ellipse cx="50" cy="50" rx="15" ry="8" fill="currentColor" opacity="0.8"/>
      <circle cx="60" cy="45" r="8" fill="currentColor"/>
      <circle cx="65" cy="42" r="1" fill="white"/>
      <path d="M30 45 Q20 35 25 50 Q20 65 30 55" fill="currentColor"/>
      <path d="M70 45 Q80 35 75 50 Q80 65 70 55" fill="currentColor"/>
      <path d="M75 45 L85 40 L80 50 Z" fill="currentColor"/>
    </svg>
  ];

  useEffect(() => {
    const createAnimal = () => {
      const newAnimal = {
        id: Date.now() + Math.random(),
        svg: animalSVGs[Math.floor(Math.random() * animalSVGs.length)],
        x: -50,
        y: Math.random() * (window.innerHeight - 100),
        speed: 1 + Math.random() * 3,
        direction: Math.random() > 0.5 ? 1 : -1,
      };
      
      setAnimals(prev => [...prev, newAnimal]);
    };

    const interval = setInterval(createAnimal, 8000);
    
    // Create initial animals
    setTimeout(createAnimal, 2000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateAnimals = () => {
      setAnimals(prev => prev.map(animal => ({
        ...animal,
        x: animal.x + animal.speed * animal.direction
      })).filter(animal => animal.x < window.innerWidth + 50 && animal.x > -100));
    };

    const animationInterval = setInterval(animateAnimals, 50);
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {animals.map(animal => (
        <div
          key={animal.id}
          className="absolute transition-transform duration-100 animate-bounce"
          style={{
            left: `${animal.x}px`,
            top: `${animal.y}px`,
            transform: animal.direction === -1 ? 'scaleX(-1)' : 'scaleX(1)'
          }}
        >
          {animal.svg}
        </div>
      ))}
    </div>
  );
};

export default AnimatedAnimals;