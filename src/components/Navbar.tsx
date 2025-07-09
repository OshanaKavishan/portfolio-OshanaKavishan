import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const { pathname } = useLocation();
  const links = ['/', '/about', '/experience', '/projects', '/contact'];

  const getLabel = (path: string) => {
    const map: any = {
      '/': 'Home',
      '/about': 'About',
      '/experience': 'Experience',
      '/projects': 'Projects',
      '/contact': 'Contact',
    };
    return map[path];
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Oshana Kavishan
        </div>
        <div className="hidden md:flex space-x-8">
          {links.map((path) => (
            <Link
              key={path}
              to={path}
              className={`capitalize transition-all duration-300 hover:text-purple-400 ${pathname === path ? 'text-purple-400' : 'text-white/80'}`}
            >
              {getLabel(path)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
