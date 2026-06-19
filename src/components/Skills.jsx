import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiAngular, SiReact, SiJavascript, SiTypescript,
  SiHtml5, SiBootstrap, SiMui,
  SiNodedotjs, SiExpress,
  SiMysql, SiMongodb,
  SiSnowflake,
  SiJest, SiPostman,
  SiGit, SiGithub, SiBitbucket, SiJira, SiClickup,
  SiTalend,
} from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';
import { FaCss3, FaAws } from 'react-icons/fa';
import { DiMsqlServer } from 'react-icons/di';

// Custom Power BI icon as react-icons doesn't have SiPowerbi in this version
const SiPowerbi = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <rect x="2" y="14" width="4" height="8" rx="0.5" fill="#E6AD12" />
    <rect x="8" y="9" width="4" height="13" rx="0.5" fill="#F2C811" />
    <rect x="14" y="3" width="4" height="19" rx="0.5" fill="#FFF100" />
  </svg>
);

const categories = [
  {
    title: 'Frontend',
    color: '#8b5cf6',
    border: 'rgba(139,92,246,0.3)',
    glow: 'rgba(139,92,246,0.15)',
    skills: [
      { name: 'AngularJS', icon: SiAngular, color: '#DD0031' },
      { name: 'ReactJS', icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3, color: '#1572B6' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
      { name: 'Material UI', icon: SiMui, color: '#007FFF' },
    ],
  },
  {
    title: 'Backend',
    color: '#10b981',
    border: 'rgba(16,185,129,0.3)',
    glow: 'rgba(16,185,129,0.15)',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
      { name: 'Microservices', icon: VscServerProcess, color: '#10b981' },
    ],
  },
  {
    title: 'Database',
    color: '#f59e0b',
    border: 'rgba(245,158,11,0.3)',
    glow: 'rgba(245,158,11,0.15)',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MS-SQL', icon: DiMsqlServer, color: '#CC2927' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    title: 'Cloud',
    color: '#3b82f6',
    border: 'rgba(59,130,246,0.3)',
    glow: 'rgba(59,130,246,0.15)',
    skills: [
      { name: 'AWS Lambda', icon: FaAws, color: '#FF9900' },
      { name: 'AWS S3', icon: FaAws, color: '#FF9900' },
    ],
  },
  {
    title: 'ETL & BI',
    color: '#ec4899',
    border: 'rgba(236,72,153,0.3)',
    glow: 'rgba(236,72,153,0.15)',
    skills: [
      { name: 'Talend', icon: SiTalend, color: '#FF6D00' },
      { name: 'Snowflake', icon: SiSnowflake, color: '#29B5E8' },
      { name: 'Power BI', icon: SiPowerbi, color: '#F2C811' },
    ],
  },
  {
    title: 'Testing',
    color: '#06b6d4',
    border: 'rgba(6,182,212,0.3)',
    glow: 'rgba(6,182,212,0.15)',
    skills: [
      { name: 'Jest', icon: SiJest, color: '#C21325' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ],
  },
  {
    title: 'Tools',
    color: '#a78bfa',
    border: 'rgba(167,139,250,0.3)',
    glow: 'rgba(167,139,250,0.15)',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'Bitbucket', icon: SiBitbucket, color: '#0052CC' },
      { name: 'JIRA', icon: SiJira, color: '#0052CC' },
      { name: 'ClickUp', icon: SiClickup, color: '#7B68EE' },
    ],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, delay },
});

function SkillIcon({ name, icon: Icon, color, glow }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center group">
      <motion.div
        className="w-14 h-14 rounded-2xl flex items-center justify-center cursor-default transition-all duration-300 border"
        style={{
          background: hovered ? `${color}1a` : 'rgba(255,255,255,0.04)',
          borderColor: hovered ? color : 'rgba(255,255,255,0.07)',
          boxShadow: hovered ? `0 0 18px 2px ${glow}` : 'none',
          transform: hovered ? 'translateY(-4px) scale(1.1)' : 'translateY(0) scale(1)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Icon size={28} color={hovered ? color : '#9ca3af'} style={{ transition: 'color 0.25s' }} />
      </motion.div>

      {/* Tooltip */}
      <div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-lg text-[10px] font-semibold whitespace-nowrap pointer-events-none transition-all duration-200 z-20"
        style={{
          background: 'rgba(17,24,39,0.95)',
          border: '1px solid rgba(255,255,255,0.08)',
          color: '#f9fafb',
          opacity: hovered ? 1 : 0,
          transform: `translateX(-50%) translateY(${hovered ? '0' : '-4px'})`,
        }}
      >
        {name}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#080b11' }}>
      <div
        className="absolute left-0 top-1/3 w-72 h-72 rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'rgba(16,185,129,0.05)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            {...fadeUp()}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white"
          >
            Skills &amp; <span style={{ color: '#8b5cf6' }}>Expertise</span>
          </motion.h2>
          <motion.div
            {...fadeUp(0.2)}
            className="h-1 rounded-full mx-auto"
            style={{ width: 80, background: '#8b5cf6' }}
          />
          <motion.p
            {...fadeUp(0.1)}
            className="mt-4 max-w-2xl mx-auto"
            style={{ color: '#9ca3af' }}
          >
            Hover over any icon to see the technology name.
          </motion.p>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              {...fadeUp(ci * 0.07)}
              className="card-glass rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: 'rgba(255,255,255,0.05)' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = cat.border)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)')}
            >
              {/* Category label */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: cat.color }} />
                <h3
                  className="text-sm font-bold uppercase tracking-wider"
                  style={{ color: cat.color }}
                >
                  {cat.title}
                </h3>
              </div>

              {/* Icon grid — extra bottom padding so tooltips don't clip */}
              <div className="flex flex-wrap gap-3 pb-4">
                {cat.skills.map((skill) => (
                  <SkillIcon
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    color={skill.color}
                    glow={cat.glow}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
