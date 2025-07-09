import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const links = ['about', 'experience', 'projects', 'contact'];

  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-black/20 backdrop-blur-sm mt-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Navigation Links */}
        <nav className="flex justify-center flex-wrap gap-6 mb-6">
          {links.map((item) => (
            <Link
              key={item}
              to={`/${item}`}
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm md:text-base font-medium"
              aria-label={`Go to ${item} section`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.linkedin.com/in/oshana-kavishan-9ab10b23b"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-purple-500/20 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/OshanaKavishan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-purple-500/20 transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:oshanakavishansilva@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-purple-500/20 transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Oshana Kavishan Silva. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
