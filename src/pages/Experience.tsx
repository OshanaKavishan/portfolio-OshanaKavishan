import React, { useState, useEffect } from 'react';
import {
    Code, Database, Smartphone, Video, Palette,
    ChevronLeft, ChevronRight, Star
} from 'lucide-react';

import AnimatedAnimals from '../components/AnimatedAnimals';
import { useNavigate } from 'react-router-dom';

// Experience Component
const Experience = ({ onNavigate }) => {
    const navigate = useNavigate();
    const [visibleCards, setVisibleCards] = useState(new Set());

    const skills = {
        frontend: [
            { name: 'HTML', level: 85, icon: '🌐' },
            { name: 'CSS', level: 75, icon: '🎨' },
            { name: 'JavaScript', level: 70, icon: '⚡' },
            { name: 'React', level: 75, icon: '⚛️' },
            { name: 'Next.js', level: 70, icon: '🚀' },
            { name: 'TypeScript', level: 65, icon: '📘' },
            { name: 'Tailwind CSS', level: 70, icon: '💨' },
            { name: 'Responsive Design', level: 80, icon: '📱' }
        ],
        backend: [
            { name: 'Node.js', level: 60, icon: '🟢' },
            { name: 'Express.js', level: 60, icon: '🚂' },
            { name: 'MongoDB', level: 65, icon: '🍃' },
            { name: 'Supabase', level: 65, icon: '⚡' },
            { name: 'Git & GitHub', level: 75, icon: '📚' },
            { name: 'Cloudinary', level: 65, icon: '☁️' },
            { name: 'Vercel', level: 70, icon: '▲' }
        ],
        mobile: [
            { name: 'React Native', level: 70, icon: '📱' },
            { name: 'Expo', level: 65, icon: '🎯' },
            { name: 'Cloudinary (Images)', level: 60, icon: '🖼️' }
        ],
        video: [
            { name: 'Filmora', level: 80, icon: '🎬' },
            { name: 'After Effects', level: 60, icon: '✨' },
            { name: 'Premiere Pro', level: 85, icon: '🎞️' }
        ],
        design: [
            { name: 'Photoshop', level: 85, icon: '🖌️' },
            { name: 'CorelDraw', level: 80, icon: '🎨' },
            { name: 'Illustrator', level: 75, icon: '🖊️' }
        ]
    };

    const skillGroups = [
        {
            label: 'Frontend Development',
            icon: <Code size={32} />,
            color: 'from-purple-500 via-pink-500 to-red-500',
            skills: skills.frontend,
            bgGradient: 'from-purple-500/10 to-pink-500/10'
        },
        {
            label: 'Backend & Tools',
            icon: <Database size={32} />,
            color: 'from-teal-500 via-cyan-500 to-blue-500',
            skills: skills.backend,
            bgGradient: 'from-teal-500/10 to-cyan-500/10'
        },
        {
            label: 'Mobile Development',
            icon: <Smartphone size={32} />,
            color: 'from-blue-500 via-indigo-500 to-purple-500',
            skills: skills.mobile,
            bgGradient: 'from-blue-500/10 to-indigo-500/10'
        },
        {
            label: 'Video Editing',
            icon: <Video size={32} />,
            color: 'from-yellow-400 via-orange-400 to-red-400',
            skills: skills.video,
            bgGradient: 'from-yellow-400/10 to-orange-400/10'
        },
        {
            label: 'Graphic Design',
            icon: <Palette size={32} />,
            color: 'from-pink-500 via-rose-500 to-purple-500',
            skills: skills.design,
            bgGradient: 'from-pink-500/10 to-rose-500/10'
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleCards(prev => new Set([...prev, entry.target.id]));
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = document.querySelectorAll('.skill-card');
        cards.forEach(card => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
            <AnimatedAnimals />

            {/* Floating Navigation */}
            <div>
                {/* Left Fixed Navigation Button */}
                <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50">
                    <button
                        onClick={() => navigate('/about')} // ✅ Navigate to /about
                        className="group p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-full border border-white/20 hover:from-purple-600/40 hover:to-pink-600/40 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-110"
                    >
                        <ChevronLeft size={28} className="text-purple-300 group-hover:text-white transition-colors" />
                    </button>
                </div>
            </div>

            <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
                <button
                    onClick={() => navigate('/projects')}
                    className="group p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-full border border-white/20 hover:from-purple-600/40 hover:to-pink-600/40 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-110"
                >
                    <ChevronRight size={28} className="text-purple-300 group-hover:text-white transition-colors" />
                </button>
            </div>

            <div className="relative pt-24 px-6 max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <div className="inline-block">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-lg font-semibold tracking-wide uppercase">
                            Explore My Journey
                        </span>
                    </div>
                    <h1 className="text-6xl md:text-7xl font-bold mt-4 mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                        Skills & Experience
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Crafting digital experiences with passion and precision across multiple technologies
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="space-y-16">
                    {skillGroups.map(({ label, icon, color, skills, bgGradient }, groupIndex) => (
                        <div key={groupIndex} className="group">
                            {/* Section Header */}
                            <div className="flex items-center justify-center mb-12">
                                <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl">
                                    <div className={`p-3 rounded-xl bg-gradient-to-r ${color} shadow-lg`}>
                                        {icon}
                                    </div>
                                    <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                        {label}
                                    </h2>
                                </div>
                            </div>

                            {/* Skills Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {skills.map((skill, index) => (
                                    <div
                                        key={skill.name}
                                        id={`skill-${groupIndex}-${index}`}
                                        className={`skill-card group/card relative overflow-hidden rounded-2xl bg-gradient-to-br ${bgGradient} backdrop-blur-lg border border-white/20 p-6 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${visibleCards.has(`skill-${groupIndex}-${index}`) ? 'animate-in slide-in-from-bottom-4 fade-in duration-700' : 'opacity-0'
                                            }`}
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        {/* Animated Background */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-pink-600/5 to-purple-600/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

                                        {/* Skill Header */}
                                        <div className="relative z-10 flex items-center justify-between mb-4">
                                            <div className="flex items-center space-x-3">
                                                <span className="text-2xl">{skill.icon}</span>
                                                <h3 className="font-semibold text-lg text-white">{skill.name}</h3>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Star size={16} className="text-yellow-400 fill-current" />
                                                <span className="text-sm font-bold text-purple-300">{skill.level}%</span>
                                            </div>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="relative">
                                            <div className="h-3 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                                                <div
                                                    className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                                                    style={{
                                                        width: visibleCards.has(`skill-${groupIndex}-${index}`) ? `${skill.level}%` : '0%'
                                                    }}
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-full" />
                                        </div>

                                        {/* Floating Orbs */}
                                        <div className="absolute top-2 right-2 w-4 h-4 bg-purple-400/30 rounded-full blur-sm group-hover/card:bg-purple-400/50 transition-colors duration-300" />
                                        <div className="absolute bottom-2 left-2 w-3 h-3 bg-pink-400/30 rounded-full blur-sm group-hover/card:bg-pink-400/50 transition-colors duration-300" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-20 mb-12">
                    <button
                        onClick={() => navigate('/projects')} // ✅ Navigates to Projects page
                        className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center space-x-2">
                            <span>View My Projects</span>
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Experience;