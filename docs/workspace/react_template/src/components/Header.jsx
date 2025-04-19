// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', text: 'About' },
    { path: '/services', text: 'Services' },
    { path: '/portfolio', text: 'Selected Work' },
    { path: '/contact', text: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-ivory border-b border-sand sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-serif text-2xl font-semibold text-coffee">
            Maison Adrian
          </Link>

          <div className="flex items-center">
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8 mr-6">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    isActive(link.path)
                      ? 'text-coffee font-medium'
                      : 'text-mocha hover:text-coffee'
                  } transition-colors`}
                >
                  {link.text}
                </Link>
              ))}
            </div>
            
            {/* CTA Button */}
            <a 
              href="mailto:maisonadrian@gmx.de" 
              className="hidden md:block bg-coffee hover:bg-charcoal text-ivory px-4 py-2 rounded-md font-medium transition-colors duration-200"
            >
              Let's work together
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6 text-mocha" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block ${
                  isActive(link.path)
                    ? 'text-coffee font-medium'
                    : 'text-mocha hover:text-coffee'
                } transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
            <a 
              href="mailto:maisonadrian@gmx.de" 
              className="block mt-6 bg-coffee hover:bg-charcoal text-ivory px-4 py-2 rounded-md font-medium text-center transition-colors duration-200"
            >
              Let's work together
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;