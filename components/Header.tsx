import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from 'figma:asset/fcb7f2317bb54ddde4974ba13fc628b2eea0c16c.png';

interface HeaderProps {
  onNavigate: (page: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-end items-center text-sm">
          <div className="flex items-center space-x-2 sm:space-x-6">
            <a href="https://westprint.wetransfer.com/" target="_blank" rel="noopener noreferrer">
              <button className="bg-teal-500 text-white px-2 py-1.5 sm:px-4 sm:py-2 rounded-md hover:bg-teal-600 transition-all duration-300 hover:shadow-lg text-xs sm:text-sm">
                UPLOAD FILE
              </button>
            </a>
            <div className="text-gray-600 text-xs sm:text-sm hidden sm:block">
              <div className="hover:text-teal-500 transition-colors duration-200">Anaheim, CA</div>
              <div className="hover:text-teal-600 transition-colors duration-200">(949) 749-4024</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button onClick={() => onNavigate('home')} className="flex items-center">
              <img src={logo} alt="Westprint Logo" className="h-10 sm:h-12 w-auto" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-4 text-sm">
              <button onClick={() => onNavigate('home')} className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">HOME</button>
              <button onClick={() => onNavigate('services')} className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">SERVICES</button>
              <button onClick={() => onNavigate('industries')} className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">INDUSTRIES WE SERVE</button>
              <a href="https://www.promoplace.com/westprint" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">ORDER PROMOTIONAL</a>
              <button onClick={() => onNavigate('about')} className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">ABOUT</button>
              <button onClick={() => onNavigate('contact')} className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">CONTACT</button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-gray-700 hover:text-cyan-600 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-gray-200 bg-white">
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1 text-sm">
              <button 
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-teal-50 hover:text-cyan-600 rounded-lg transition-all font-medium"
              >
                HOME
              </button>
              
              <button 
                onClick={() => {
                  onNavigate('services');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-teal-50 hover:text-cyan-600 rounded-lg transition-all font-medium"
              >
                SERVICES
              </button>
              
              <button 
                onClick={() => {
                  onNavigate('industries');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-teal-50 hover:text-cyan-600 rounded-lg transition-all font-medium"
              >
                INDUSTRIES WE SERVE
              </button>
              
              <a 
                href="https://www.promoplace.com/westprint"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-teal-50 hover:text-cyan-600 rounded-lg transition-all font-medium"
              >
                ORDER PROMOTIONAL
              </a>
              
              <button 
                onClick={() => {
                  onNavigate('about');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-teal-50 hover:text-cyan-600 rounded-lg transition-all font-medium"
              >
                ABOUT
              </button>
              
              <button 
                onClick={() => {
                  onNavigate('contact');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-teal-50 hover:text-cyan-600 rounded-lg transition-all font-medium"
              >
                CONTACT
              </button>
              
              <div className="mt-4 pt-4 border-t border-gray-200 px-4 space-y-2">
                <p className="text-sm text-gray-600">📍 Anaheim, CA</p>
                <p className="text-sm text-gray-600">📞 (949) 749-4024</p>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
