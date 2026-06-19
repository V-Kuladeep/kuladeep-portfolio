import React from 'react';
import { Mail, MapPin, Phone, ExternalLink, GraduationCap, Download } from 'lucide-react';
import { Linkedin } from './SocialIcons';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Years Experience', value: '4+', color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)' },
  { label: 'Projects Delivered', value: '10+', color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
  { label: 'Tech Stacks', value: '15+', color: '#3b82f6', bg: 'rgba(59,130,246,0.1)' },
];

const languages = [
  { lang: 'English', level: 'Full Professional Proficiency' },
  { lang: 'Telugu', level: 'Full Professional Proficiency' },
  { lang: 'Tamil', level: 'Intermediate Proficiency' },
  { lang: 'Hindi', level: 'Limited Proficiency' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, delay },
});

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#080b11' }}>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'rgba(139,92,246,0.05)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2 {...fadeUp()} className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white">
            About <span style={{ color: '#8b5cf6' }}>Me</span>
          </motion.h2>
          <motion.div {...fadeUp(0.2)} className="h-1 rounded-full mx-auto" style={{ width: 80, background: '#8b5cf6' }} />
          <motion.p {...fadeUp(0.1)} className="mt-4 max-w-2xl mx-auto" style={{ color: '#9ca3af' }}>
            Passionate engineer who turns complex requirements into elegant digital solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* ── Profile Card ── */}
          <motion.div {...fadeUp()} className="lg:col-span-4 flex justify-center">
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1 rounded-2xl opacity-60 blur-sm group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: 'linear-gradient(135deg, #8b5cf6, #818cf8, #10b981)' }} />
              <div className="relative card-glass p-7 rounded-2xl flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5 shadow-xl text-2xl font-black text-white"
                  style={{ backgroundImage: 'linear-gradient(135deg, #8b5cf6, #10b981)' }}>
                  KV
                </div>
                <h3 className="text-xl font-bold text-white mb-0.5">Kuladeep V</h3>
                <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#8b5cf6' }}>
                  Full Stack Developer
                </p>
                <div className="w-full space-y-2 border-t pt-4 text-left text-xs" style={{ borderColor: 'rgba(255,255,255,0.05)', color: '#9ca3af' }}>
                  {[
                    { label: 'Location', val: 'Tirupati, AP, India' },
                    { label: 'Email', val: 'kuladeep14june@gmail.com' },
                    { label: 'Education', val: 'B.Tech – Civil Engineering' },
                    { label: 'College', val: 'Siddharth Institute of Engg & Tech' },
                    { label: 'CGPA', val: '8.54 (2018 – 2021)' },
                  ].map(({ label, val }) => (
                    <div key={label} className="flex justify-between gap-2">
                      <span className="font-semibold shrink-0" style={{ color: '#6b7280' }}>{label}:</span>
                      <span className="text-right">{val}</span>
                    </div>
                  ))}
                </div>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/kuladeep-v-6ba443239/" target="_blank" rel="noopener noreferrer"
                  className="mt-5 flex items-center gap-2 text-xs font-semibold transition-colors"
                  style={{ color: '#8b5cf6' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#6d28d9'}
                  onMouseLeave={e => e.currentTarget.style.color = '#8b5cf6'}
                >
                  <Linkedin size={14} />
                  linkedin.com/in/kuladeep-v-6ba443239
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── Right Content ── */}
          <div className="lg:col-span-8 space-y-8">

            {/* Bio */}
            <motion.div {...fadeUp(0.1)} className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Who I Am</h3>
              <p className="leading-relaxed" style={{ color: '#d1d5db' }}>
                Experienced Full Stack Developer with <strong className="text-white">4 years of experience</strong> building
                scalable cloud-based web apps. I specialize in responsive UIs using{' '}
                <strong className="text-white">Angular and React.js</strong>, backend services with{' '}
                <strong className="text-white">Node.js</strong>, and database optimization across{' '}
                <strong className="text-white">MySQL, MongoDB, and MSSQL</strong>.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
                Based in <strong className="text-white">Bangalore, Karnataka, India</strong> (willing to relocate). I have delivered enterprise-grade
                applications including Healthcare Management Systems, HRMS platforms, ETL data pipelines, and
                real-time analytics dashboards for organisations across diverse industries.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <motion.div key={s.label} {...fadeUp(0.15 + i * 0.08)}
                  className="card-glass p-4 rounded-xl flex flex-col items-center text-center border border-white/5 hover:border-purple-500/20 transition-all duration-300">
                  <span className="text-2xl sm:text-3xl font-black text-white">{s.value}</span>
                  <span className="text-[10px] sm:text-xs mt-1 font-medium leading-tight" style={{ color: '#9ca3af' }}>{s.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact info chips */}
            <motion.div {...fadeUp(0.25)} className="flex flex-wrap gap-3">
              {[
                { icon: <Mail className="h-4 w-4" />, text: 'kuladeep14june@gmail.com', href: 'mailto:kuladeep14june@gmail.com' },
                { icon: <Phone className="h-4 w-4" />, text: '+91 79811 82324', href: 'tel:+917981182324' },
                { icon: <MapPin className="h-4 w-4" />, text: 'Bangalore, Karnataka, India (Willing to relocate)', href: null },
              ].map(({ icon, text, href }) => {
                const cls = "flex items-center gap-2 text-sm px-4 py-2 rounded-xl card-glass border border-white/5 transition-colors";
                return href ? (
                  <a key={text} href={href} className={cls + " hover:border-purple-500/20"} style={{ color: '#d1d5db' }}>{icon}{text}</a>
                ) : (
                  <span key={text} className={cls} style={{ color: '#d1d5db' }}>{icon}{text}</span>
                );
              })}
            </motion.div>

            {/* Languages */}
            <motion.div {...fadeUp(0.3)}>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: '#9ca3af' }}>
                <GraduationCap className="h-4 w-4" style={{ color: '#8b5cf6' }} />
                Languages
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {languages.map(({ lang, level }) => (
                  <div key={lang} className="card-glass p-3 rounded-xl border border-white/5 text-center">
                    <p className="text-sm font-bold text-white">{lang}</p>
                    <p className="text-[10px] mt-0.5" style={{ color: '#6b7280' }}>{level}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Download CV */}
            <motion.div {...fadeUp(0.35)}>
              <a href="/Kuladeep_V_FullStack_Developer_4Y.pdf" download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                style={{ backgroundImage: 'linear-gradient(to right, #8b5cf6, #6366f1)', color: '#fff' }}>
                <Download className="h-4 w-4" />
                Download CV / Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
