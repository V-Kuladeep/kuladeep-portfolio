import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Background shading on scroll
      setScrolled(window.scrollY > 20);

      // Section tracker for active indicator
      const scrollPosition = window.scrollY + 100;
      for (const item of navigation) {
        const target = document.querySelector(item.href);
        if (target) {
          const top = target.offsetTop;
          const height = target.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href.replace('#', ''));
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href.replace('#', ''));
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glassmorphism shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 p-2 rounded-lg border border-primary/20">
            <Terminal className="h-5 w-5 text-primary" />
          </div>
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="text-xl font-bold tracking-wider bg-gradient-to-r from-white via-gray-100 to-primary bg-clip-text text-transparent hover:opacity-90 transition-opacity"
          >
            Kuladeep<span className="text-primary font-black">.V</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                      isActive ? 'text-primary' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            Hire Me
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-400 hover:text-white focus:outline-none p-1.5 rounded-lg hover:bg-white/5"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glassmorphism border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {navigation.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`block px-3 py-2 rounded-lg text-base font-medium transition-all ${
                      isActive
                        ? 'bg-primary/15 text-primary border-l-4 border-primary pl-4'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-white/5 px-3">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white font-semibold shadow-lg hover:bg-primary-dark transition-all duration-300"
                >
                  Hire Me
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
