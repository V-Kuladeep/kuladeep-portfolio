import React from 'react';
import { ArrowUp, Mail, Terminal } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t py-12"
      style={{ backgroundColor: '#080b11', borderColor: 'rgba(255,255,255,0.05)' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">

        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg border" style={{ background: 'rgba(139,92,246,0.1)', borderColor: 'rgba(139,92,246,0.2)' }}>
            <Terminal className="h-4 w-4" style={{ color: '#8b5cf6' }} />
          </div>
          <span className="text-lg font-bold tracking-wider text-white">
            Kuladeep<span style={{ color: '#8b5cf6' }}>.V</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-sm">
          {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((s) => (
            <a key={s} href={`#${s}`} onClick={(e) => scrollTo(e, `#${s}`)}
              className="capitalize transition-colors"
              style={{ color: '#6b7280' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}>
              {s}
            </a>
          ))}
        </div>

        {/* Socials + back to top */}
        <div className="flex items-center gap-3">
          {[
            { href: 'https://github.com/V-Kuladeep', Icon: Github, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/kuladeep-v-6ba443239/', Icon: Linkedin, label: 'LinkedIn' },
            { href: 'mailto:kuladeep14june@gmail.com', Icon: Mail, label: 'Email' },
          ].map(({ href, Icon, label }) => (
            <a key={label} href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer" aria-label={label}
              className="p-2 rounded-xl border transition-all"
              style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.06)', color: '#6b7280' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#6b7280'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}>
              <Icon size={16} />
            </a>
          ))}
          <button onClick={scrollToTop} aria-label="Scroll to top"
            className="p-2 rounded-xl border transition-all duration-300 cursor-pointer"
            style={{ background: 'rgba(139,92,246,0.1)', borderColor: 'rgba(139,92,246,0.2)', color: '#8b5cf6' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#8b5cf6'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(139,92,246,0.1)'; e.currentTarget.style.color = '#8b5cf6'; }}>
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t text-center text-xs relative z-10"
        style={{ borderColor: 'rgba(255,255,255,0.05)', color: '#4b5563' }}>
        © {new Date().getFullYear()} Kuladeep V — Full Stack Developer &bull; Tirupati, AP, India &bull; Built with React JS &amp; Tailwind CSS v4
      </div>
    </footer>
  );
}
