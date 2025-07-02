import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  Mail,
  Github,
  Linkedin,
  Code,
  Palette,
  Video,
  User,
  Briefcase,
  FolderOpen,
  Send,
  Database,
  Smartphone,
  Globe,
  Sun,
  Moon,
} from 'lucide-react';
import toast from 'react-hot-toast';





const ModernPortfolio = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Inside your ModernPortfolio component:
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation (optional)
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all fields");
      return;
    }

    // Show success notification
    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    frontend: [
      { name: 'HTML', level: 85 },
      { name: 'CSS', level: 75 },
      { name: 'JavaScript', level: 70 },
      { name: 'React', level: 75 },
      { name: 'Next.js', level: 70 },
      { name: 'TypeScript', level: 65 },
      { name: 'Tailwind CSS', level: 70 },
      { name: 'Responsive Design', level: 80 }
    ],
    backend: [
      { name: 'Node.js', level: 60 },
      { name: 'Express.js', level: 60 },
      { name: 'MongoDB', level: 65 },
      { name: 'Supabase', level: 65 },
      { name: 'Git & GitHub', level: 75 },
      { name: 'Cloudinary', level: 65 },
      { name: 'Vercel', level: 70 }
    ],
    mobileDevelopment: [
      { name: 'React Native', level: 70 },
      { name: 'Expo', level: 65 },
      { name: 'Cloudinary (Images)', level: 60 }
    ],
    videoEditing: [
      { name: 'Filmora', level: 80 },
      { name: 'After Effects', level: 60 },
      { name: 'Premiere Pro', level: 85 }
    ],
    design: [
      { name: 'Photoshop', level: 85 },
      { name: 'CorelDraw', level: 80 },
      { name: 'Illustrator', level: 75 }
    ]
  };


  const projects = [
    {
      title: 'Ultimate Gadgets Mobile App',
      description: 'A complete cross-platform solution for buying and browsing gadgets built with React Native, Expo, Zustand, and Supabase.',
      tech: ['React Native', 'Expo', 'Zustand', 'Supabase'],
      image: '/screenshots/mobile.png',
      githubUrl: 'https://github.com/OshanaKavishan/gadgets-app-react-native.git'
    },
    {
      title: 'Fullstack Mobile & Web E-Commerce App',
      description: 'Mobile shopping app built with React Native and Supabase, plus a powerful admin dashboard with Next.js.',
      tech: ['React Native', 'Next.js', 'Supabase'],
      image: '/screenshots/admin.png',
      githubUrl: 'https://github.com/OshanaKavishan/gadgets-shop-admin.git'
    },
    {
      title: 'Forever — Modern Clothing E-Commerce Platform',
      description: 'Full-featured e-commerce platform with frontend, admin, secure auth, payments, and responsive UI.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'MongoDB', 'Node.js', 'Express', 'Cloudinary', 'Stripe', 'JWT'],
      image: '/screenshots/forever.png',
      demo: 'https://ecommerce-website-frontend-azure.vercel.app',
      githubUrl: 'https://github.com/OshanaKavishan/ecommerce-website.git'
    },
    {
      title: 'Food Recipe Website',
      description: 'A simple and user-friendly food recipe app built using HTML, CSS, and JavaScript.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: '/screenshots/foodtips.png',
      demo: 'https://food-recipe-tips-web.vercel.app',
      githubUrl: 'https://github.com/OshanaKavishan/food-recipe-tips-web.git'
    },
    {
      title: 'Simply Recipes',
      description: 'A clean and simple React + Vite web app featuring delicious Sri Lankan recipes.',
      tech: ['React', 'Vite', 'JavaScript', 'React Router DOM', 'CSS'],
      image: '/screenshots/simplyrecipe.png',
      githubUrl: 'https://github.com/OshanaKavishan/Simple-Recipe-Website.git'
    },
    {
      title: 'Library Management System',
      description: 'Desktop app for book issuance, returns, and member tracking built with Java Swing and MySQL.',
      tech: ['Java', 'Java Swing', 'MySQL', 'NetBeans'],
      image: '/screenshots/library.png',
      githubUrl: 'https://github.com/OshanaKavishan/Library-Management-System.git'
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10 dark:bg-gray-900/80 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Oshana Kavishan
          </div>
          <div className="hidden md:flex space-x-8">
            {['profile', 'about', 'experience', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 hover:text-purple-400 ${activeSection === section ? 'text-purple-400' : 'text-white/80 dark:text-gray-300'
                  }`}
              >
                {section === 'experience' ? 'Experience' : section}
              </button>
            ))}
          </div>
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="ml-4 p-2 rounded-full bg-white/20 hover:bg-white/30 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-gray-200" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="profile" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className={`text-center transform transition-all duration-1000 ${isVisible.profile ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative mb-8">
            <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 animate-pulse relative overflow-hidden">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <img
                  src="/profile.png"
                  alt="Profile"
                  className="w-full h-full mt-1 mb-1 object-cover scale-150 rounded-full "
                />
              </div>
            </div>



            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Available for Work
              </div>
            </div>
          </div>

          <p className="text-purple-300 text-lg mb-4">Hello, I'm</p>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Oshana Kavishan
          </h1>
          <p className="text-2xl text-gray-300 mb-8">Web Development | React | Next | Mobile Development</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/my-cv.pdf"
              download="OshanaKavishan_CV.pdf"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25 text-center"
            >
              Download CV
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-black transition-all duration-300"
            >
              Let's Connect
            </button>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ChevronDown size={32} className="text-purple-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 transform ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
          >
            <p className="text-purple-300 text-lg mb-4">Get To Know More</p>
            <h2 className="text-5xl font-bold mb-8">About Me</h2>
          </div>

          {/* Content Grid */}
          <div
            className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 transform ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 overflow-hidden">
                <img
                  src="/about.jpg"
                  alt="About Profile"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Details */}
            <div className="space-y-8">
              {/* Cards */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <Briefcase size={32} className="text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-1">Experience</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    1+ years <br /> Computer Instructor
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <User size={32} className="text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-1">Education</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Student <br /> HNDIT – SLIATE Kandy
                  </p>
                </div>
              </div>

              {/* Bio */}
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  I'm currently pursuing a Diploma in Information and Communication Technology (ICT). I'm a reliable team player with a friendly personality and a positive communication style. I enjoy collaborating, learning continuously, and adapting to new challenges. Whether working in a team or independently, I'm always motivated to deliver high-quality results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 transform ${isVisible.experience ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
          >
            <p className="text-purple-300 text-lg mb-4">Explore My</p>
            <h2 className="text-5xl font-bold mb-8">Skills & Experience</h2>
          </div>

          {/* Grouped Skills */}
          <div className="space-y-12">
            {[
              {
                label: 'Frontend Development',
                icon: <Code className="text-purple-400 mb-4" size={28} />,
                color: 'from-purple-500 to-pink-500',
                skills: skills.frontend,
              },
              {
                label: 'Backend & Tools',
                icon: <Database className="text-teal-400 mb-4" size={28} />,
                color: 'from-teal-500 to-cyan-500',
                skills: skills.backend,
              },
              {
                label: 'Mobile Development',
                icon: <Smartphone className="text-blue-400 mb-4" size={28} />,
                color: 'from-blue-500 to-indigo-500',
                skills: skills.mobileDevelopment,
              },
              {
                label: 'Video Editing',
                icon: <Video className="text-yellow-400 mb-4" size={28} />,
                color: 'from-yellow-400 to-orange-400',
                skills: skills.videoEditing,
              },
              {
                label: 'Graphic Design',
                icon: <Palette className="text-pink-400 mb-4" size={28} />,
                color: 'from-pink-500 to-rose-500',
                skills: skills.design,
              },
            ].map(({ label, icon, color, skills }, groupIndex) => (
              <div key={groupIndex}>
                <div className="flex items-center mb-6 space-x-3">
                  {icon}
                  <h3 className="text-2xl font-semibold">{label}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className={`bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 transition-all duration-700 transform hover:bg-white/10 ${isVisible.experience ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                        }`}
                      style={{ transitionDelay: `${index * 60}ms` }}
                      title={`${skill.name}: ${skill.level}% proficiency`}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-sm font-semibold text-purple-300">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-in-out`}
                          style={{ width: isVisible.experience ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-purple-300 text-lg mb-4">Browse My Recent</p>
            <h2 className="text-5xl font-bold mb-8">Projects</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 ${isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="aspect-video bg-black overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-2"
                      >
                        <Globe size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-2"
                      >
                        <Github size={16} />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-purple-300 text-lg mb-4">Get In Touch</p>
            <h2 className="text-5xl font-bold mb-8">Contact Me</h2>
          </div>

          <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transform transition-all duration-1000 delay-300 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </div>

              <div className="flex flex-col justify-center space-y-8">
                <div className="text-center">
                  <p className="text-2xl mb-6">Let's connect on social media</p>
                  <div className="flex justify-center space-x-6">
                    <a
                      href="https://www.linkedin.com/in/oshana-kavishan-9ab10b23b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/10 rounded-full hover:bg-purple-500/20 transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="https://github.com/OshanaKavishan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/10 rounded-full hover:bg-purple-500/20 transition-all duration-300 hover:scale-110"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href="mailto:oshanakavishansilva@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/10 rounded-full hover:bg-purple-500/20 transition-all duration-300 hover:scale-110"
                    >
                      <Mail size={24} />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <nav className="flex justify-center flex-wrap gap-6 mb-6">
            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm md:text-base font-medium"
                aria-label={`Scroll to ${item}`}
              >
                {item}
              </button>
            ))}
          </nav>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Oshana Kavishan Silva. All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default ModernPortfolio;