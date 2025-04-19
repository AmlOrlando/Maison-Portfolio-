// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-cream border-t border-sand">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="font-serif text-xl text-coffee">
              Maison Adrian
            </Link>
            <p className="mt-2 text-sm text-mocha">
              Strategic copywriting for bold DTC brands
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="mb-4 md:mb-0">
              <h3 className="font-medium text-sm uppercase tracking-wider text-coffee mb-2">Services</h3>
              <div className="flex flex-col space-y-1">
                <Link to="/services" className="text-sm text-mocha hover:text-coffee transition-colors">Website Copy</Link>
                <Link to="/services" className="text-sm text-mocha hover:text-coffee transition-colors">Email Marketing</Link>
                <Link to="/services" className="text-sm text-mocha hover:text-coffee transition-colors">Brand Voice</Link>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-sm uppercase tracking-wider text-coffee mb-2">Connect</h3>
              <div className="flex flex-col space-y-1">
                <a
                  href="mailto:maisonadrian@gmx.de"
                  className="text-sm text-mocha hover:text-coffee transition-colors"
                >
                  Email
                </a>
                <a
                  href="https://instagram.com/Maison_Adrian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-mocha hover:text-coffee transition-colors"
                >
                  Instagram
                </a>
                <Link
                  to="/contact"
                  className="text-sm text-mocha hover:text-coffee transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-0 text-sm text-mocha">
            © {new Date().getFullYear()} Maison Adrian
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;