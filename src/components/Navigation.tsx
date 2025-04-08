import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { services } from '../data/services';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export function Navigation({ isMenuOpen, setIsMenuOpen }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-us' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav 
      role="navigation" 
      aria-label="Main navigation"
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-navy shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-36">
          <Link to="/" className="flex items-center group">
            <img 
              src="/assets/logo.png" 
              alt="Campbell Attics Logo" 
              className="h-36 w-auto transition-transform duration-300 group-hover:scale-105" 
            />
            <span className="ml-3 text-2xl font-display font-bold text-white text-shadow">
              Campbell Attics
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white hover:text-brand-copper transition-colors duration-300
                           relative after:absolute after:bottom-0 after:left-0 after:w-full 
                           after:h-0.5 after:bg-brand-copper after:scale-x-0 
                           hover:after:scale-x-100 after:transition-transform after:duration-300
                           text-shadow"
                >
                  {item.name}
                </Link>
              ))}
              <div className="group dropdown">
                <Link 
                  to="/attic-storage-perth" 
                  className="text-white hover:text-brand-copper transition-colors duration-300 
                           flex items-center gap-1 text-shadow"
                >
                  Services
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </Link>
                <div className="dropdown-content" role="menu">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={service.cta.link}
                      className="dropdown-item p-6 flex items-start hover:bg-brand-dark-light"
                      role="menuitem"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-brand-copper/10 rounded-xl flex items-center justify-center">
                          <service.icon className="h-6 w-6 text-brand-copper" />
                        </div>
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                        <p className="text-white/80 mt-1 text-sm line-clamp-2">{service.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              to="/free-quote"
              className="btn-primary"
            >
              Get a Free Quote
            </Link>
          </div>

          <button 
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-brand-copper focus:ring-offset-2 p-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-brand-navy backdrop-blur-sm pt-20 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="container mx-auto px-6">
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white hover:text-brand-copper py-2 text-lg font-medium
                           transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/attic-storage-perth"
                className="text-white hover:text-brand-copper py-2 text-lg font-medium
                         transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/free-quote"
                className="btn-primary w-full justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Free Quote
              </Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}