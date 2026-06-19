import React, { useState, useEffect } from 'react';
import { Mail, ArrowRight, Code, Download } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { motion } from 'framer-motion';

const roles = [
  'Full Stack Developer',
  'Angular & React Engineer',
  'Node.js Backend Developer',
  'Cloud App Builder',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
      style={{ backgroundColor: '#080b11' }}
    >
      {/* Ambient Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px] animate-pulse-glow" style={{ background: 'rgba(139,92,246,0.12)' }} />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full blur-[120px] animate-pulse-glow" style={{ background: 'rgba(16,185,129,0.10)', animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

        {/* ── Left: Text ── */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">

          {/* Available badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 mx-auto lg:mx-0 w-fit border"
              style={{ background: 'rgba(139,92,246,0.1)', color: '#8b5cf6', borderColor: 'rgba(139,92,246,0.25)' }}>
              <span className="h-1.5 w-1.5 rounded-full animate-ping" style={{ background: '#8b5cf6' }} />
              Open to Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-3 text-white"
          >
            Hi, I'm{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #8b5cf6, #818cf8, #10b981)' }}>
              Kuladeep V
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg sm:text-xl font-semibold mb-2"
            style={{ color: '#8b5cf6' }}
          >
            Full Stack Developer
          </motion.p>

          {/* Cycling roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="h-10 flex items-center justify-center lg:justify-start mb-4"
          >
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="text-base sm:text-lg font-medium"
              style={{ color: '#9ca3af' }}
            >
              {roles[roleIndex]}
            </motion.span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg leading-relaxed max-w-xl mb-8 mx-auto lg:mx-0"
            style={{ color: '#9ca3af' }}
          >
            Building scalable cloud-based web applications with{' '}
            <span className="font-semibold text-white">React, Angular</span> &amp;{' '}
            <span className="font-semibold text-white">Node.js</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
          >
            <a
              href="#projects"
              onClick={(e) => scrollTo(e, '#projects')}
              id="hero-view-work-btn"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              style={{ background: '#8b5cf6', color: '#fff' }}
              onMouseEnter={e => e.currentTarget.style.background = '#6d28d9'}
              onMouseLeave={e => e.currentTarget.style.background = '#8b5cf6'}
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/resume.pdf"
              download
              id="hero-download-resume-btn"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold border transition-all duration-300 transform hover:-translate-y-0.5"
              style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.12)', color: '#fff' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center lg:justify-start gap-5"
            style={{ color: '#6b7280' }}
          >
            <span className="text-xs uppercase tracking-wider font-semibold">Find me on:</span>
            <div className="flex gap-3">
              {[
                { href: 'https://github.com/V-Kuladeep', Icon: Github, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/kuladeep-v-6ba443239/', Icon: Linkedin, label: 'LinkedIn' },
                { href: 'mailto:kuladeep14june@gmail.com', Icon: Mail, label: 'Email' },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer" aria-label={label}
                  className="p-1.5 rounded-lg transition-colors"
                  style={{ color: '#6b7280' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#8b5cf6'}
                  onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Right: Code Card ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center w-full relative"
        >
          <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl relative z-10 animate-float card-glass border border-white/5">
            {/* Window chrome */}
            <div className="px-4 py-3 flex items-center justify-between border-b border-white/5" style={{ background: 'rgba(8,11,17,0.85)' }}>
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full" style={{ background: 'rgba(239,68,68,0.8)' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: 'rgba(234,179,8,0.8)' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: 'rgba(34,197,94,0.8)' }} />
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono" style={{ color: '#6b7280' }}>
                <Code className="h-3.5 w-3.5" style={{ color: '#8b5cf6' }} />
                kuladeep.js
              </div>
              <div className="w-10" />
            </div>
            {/* Code body */}
            <div className="p-5 font-mono text-xs text-left overflow-x-auto leading-relaxed" style={{ background: 'rgba(11,15,25,0.8)', color: '#d1d5db' }}>
              <p><span style={{ color: '#f472b6' }}>const</span> developer <span style={{ color: '#f472b6' }}>=</span> {'{'}</p>
              <p className="pl-4"><span style={{ color: '#9ca3af' }}>name:</span> <span style={{ color: '#34d399' }}>'Kuladeep V'</span>,</p>
              <p className="pl-4"><span style={{ color: '#9ca3af' }}>role:</span> <span style={{ color: '#34d399' }}>'Full Stack Developer'</span>,</p>
              <p className="pl-4"><span style={{ color: '#9ca3af' }}>experience:</span> <span style={{ color: '#fbbf24' }}>'4 Years'</span>,</p>
              <p className="pl-4"><span style={{ color: '#9ca3af' }}>frontend:</span> [<span style={{ color: '#34d399' }}>'Angular'</span>, <span style={{ color: '#34d399' }}>'React'</span>],</p>
              <p className="pl-4"><span style={{ color: '#9ca3af' }}>backend:</span> [<span style={{ color: '#34d399' }}>'Node.js'</span>, <span style={{ color: '#34d399' }}>'Express'</span>],</p>
              <p className="pl-4"><span style={{ color: '#9ca3af' }}>database:</span> [<span style={{ color: '#34d399' }}>'MySQL'</span>, <span style={{ color: '#34d399' }}>'MongoDB'</span>],</p>
              <p className="pl-4"><span style={{ color: '#9ca3af' }}>cloud:</span> [<span style={{ color: '#34d399' }}>'AWS Lambda'</span>, <span style={{ color: '#34d399' }}>'S3'</span>],</p>
              <p className="pl-4"><span style={{ color: '#9ca3af' }}>location:</span> <span style={{ color: '#34d399' }}>'Bangalore, Karnataka, India'</span>,</p>
              <p className="pl-4"><span style={{ color: '#9ca3af' }}>willingToRelocate:</span> <span style={{ color: '#f472b6' }}>true</span>,</p>
              <p className="pl-4"><span style={{ color: '#9ca3af' }}>hireable:</span> <span style={{ color: '#f472b6' }}>true</span>,</p>
              <p>{'};'}</p>
              <br />
              <p style={{ color: '#6b7280' }}>// Let's build something great!</p>
              <p><span style={{ color: '#f472b6' }}>export default</span> developer;</p>
            </div>
          </div>
          <div className="absolute w-72 h-72 rounded-full border pointer-events-none -z-0"
            style={{ borderColor: 'rgba(139,92,246,0.15)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        </motion.div>
      </div>
    </section>
  );
}
