// Projects.tsx
import React, { useState } from 'react';
import { Github, Globe, ChevronLeft, ChevronRight, Star, ExternalLink, Contact } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedAnimals from '../components/AnimatedAnimals';
import Experience from './Experience'

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubUrl?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: 'Ultimate Gadgets Mobile App',
    description: 'A cross-platform gadget shopping app built with React Native, Zustand, and Supabase.',
    tech: ['React Native', 'Expo', 'Zustand', 'Supabase'],
    image: '/screenshots/mobile.png',
    githubUrl: 'https://github.com/OshanaKavishan/gadgets-app-react-native.git',
  },
  {
    title: 'Fullstack Mobile & Web E-Commerce App',
    description: 'Mobile app built with React Native & Supabase, admin panel with Next.js.',
    tech: ['React Native', 'Next.js', 'Supabase'],
    image: '/screenshots/admin.png',
    githubUrl: 'https://github.com/OshanaKavishan/gadgets-shop-admin.git',
  },
  {
    title: 'Forever — Modern Clothing E-Commerce Platform',
    description: 'Full-featured clothing store with auth, payments, MongoDB, and admin panel.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'MongoDB', 'Node.js', 'Express', 'Cloudinary', 'Stripe', 'JWT'],
    image: '/screenshots/forever.png',
    demo: 'https://ecommerce-website-frontend-azure.vercel.app',
    githubUrl: 'https://github.com/OshanaKavishan/ecommerce-website.git',
  },
  {
    title: 'Food Recipe Website',
    description: 'Simple food recipe web app using HTML, CSS, JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/screenshots/foodtips.png',
    demo: 'https://food-recipe-tips-web.vercel.app',
    githubUrl: 'https://github.com/OshanaKavishan/food-recipe-tips-web.git',
  },
  {
    title: 'Simply Recipes',
    description: 'React + Vite Sri Lankan recipe app with filtering & animations.',
    tech: ['React', 'Vite', 'JavaScript', 'React Router DOM', 'CSS'],
    image: '/screenshots/simplyrecipe.png',
    githubUrl: 'https://github.com/OshanaKavishan/Simple-Recipe-Website.git',
  },
  {
    title: 'Library Management System',
    description: 'Java Swing & MySQL based system for book lending & returns.',
    tech: ['Java', 'Java Swing', 'MySQL', 'NetBeans'],
    image: '/screenshots/library.png',
    githubUrl: 'https://github.com/OshanaKavishan/Library-Management-System.git',
  },
];

const Projects = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('projects');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Ultimate Gadgets Mobile App',
      description: 'A cross-platform gadget shopping app built with React Native, featuring state management with Zustand and backend integration with Supabase.',
      tech: ['React Native', 'Expo', 'Zustand', 'Supabase', 'TypeScript'],
      image: '/screenshots/mobile.png',
      githubUrl: 'https://github.com/OshanaKavishan/gadgets-app-react-native.git',
      category: 'Mobile',
      featured: true,
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Fullstack E-Commerce Platform',
      description: 'Complete e-commerce solution with React Native mobile app and Next.js admin panel, integrated with Supabase for real-time data management.',
      tech: ['React Native', 'Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS'],
      image: '/screenshots/admin.png',
      githubUrl: 'https://github.com/OshanaKavishan/gadgets-shop-admin.git',
      category: 'Fullstack',
      featured: true,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Forever — Modern Clothing Store',
      description: 'Full-featured clothing e-commerce platform with authentication, payment processing, and comprehensive admin dashboard.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'MongoDB', 'Node.js', 'Express', 'Stripe', 'JWT'],
      image: '/screenshots/forever.png',
      demo: 'https://ecommerce-website-frontend-azure.vercel.app',
      githubUrl: 'https://github.com/OshanaKavishan/ecommerce-website.git',
      category: 'E-commerce',
      featured: true,
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Food Recipe Discovery',
      description: 'Interactive food recipe web application with search functionality and responsive design for food enthusiasts.',
      tech: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
      image: '/screenshots/foodtips.png',
      demo: 'https://food-recipe-tips-web.vercel.app',
      githubUrl: 'https://github.com/OshanaKavishan/food-recipe-tips-web.git',
      category: 'Web App',
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Simply Recipes',
      description: 'Beautiful Sri Lankan recipe application built with React, featuring smooth animations and advanced filtering capabilities.',
      tech: ['React', 'Vite', 'JavaScript', 'React Router', 'CSS3'],
      image: '/screenshots/simplyrecipe.png',
      githubUrl: 'https://github.com/OshanaKavishan/Simple-Recipe-Website.git',
      category: 'Web App',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Library Management System',
      description: 'Comprehensive library management solution built with Java Swing and MySQL for efficient book tracking and user management.',
      tech: ['Java', 'Java Swing', 'MySQL', 'NetBeans'],
      image: '/screenshots/library.png',
      githubUrl: 'https://github.com/OshanaKavishan/Library-Management-System.git',
      category: 'Desktop App',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  if (currentPage === 'experience') {
    return <Experience onNavigate={undefined} />;
  }

  if (currentPage === 'contact') {
    return <Contact />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <AnimatedAnimals />

      {/* Floating Navigation */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50">
        <button
          onClick={() => navigate('/experience')}
          className="group p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-full border border-white/20 hover:from-purple-600/40 hover:to-pink-600/40 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-110"
        >
          <ChevronLeft size={28} className="text-purple-300 group-hover:text-white transition-colors" />
        </button>
      </div>

      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        <button
          onClick={() => navigate('/contact')}
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
              My Portfolio
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mt-4 mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Showcasing innovative solutions and creative implementations across various technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${project.featured ? 'lg:col-span-2 xl:col-span-1' : ''
                }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${project.color} text-white shadow-lg`}>
                    {project.category}
                  </span>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30">
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <span className="text-xs font-semibold text-yellow-400">Featured</span>
                    </div>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                    >
                      <Globe size={16} />
                      <span>Live Demo</span>
                      <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-all duration-300 hover:scale-105 border border-white/20"
                    >
                      <Github size={16} />
                      <span>View Code</span>
                      <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>

              {/* Animated Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                style={{ padding: '2px' }}>
                <div className="w-full h-full bg-slate-900 rounded-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button
            onClick={() => navigate('/contact')} // ✅ Make sure to use `/contact`
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Let's Work Together</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
