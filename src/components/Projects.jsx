import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Users, Calendar, Database, BarChart3, UserCheck, GraduationCap, Truck, Terminal } from 'lucide-react';
import { Github } from './SocialIcons';

const projects = [
  {
    id: 1,
    title: 'Healthcare Management System (HMS)',
    category: 'Fullstack',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.25)',
    tech: ['Angular', 'Node.js', 'MySQL', 'Express.js', 'REST API', 'JWT'],
    description:
      'An end-to-end Healthcare Management System enabling patient registration, appointment scheduling, doctor management, billing, and reporting.',
    details:
      'The HMS manages patient records with full medical history tracking, multi-department appointment scheduling with conflict prevention, inpatient/outpatient billing, pharmacy stock management, doctor availability calendars, and automated reporting dashboards for hospital administrators.',
    preview: (
      <div className="w-full h-44 flex flex-col p-4 font-mono text-[9px] overflow-hidden"
        style={{ background: '#0a0e1a', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex items-center justify-between pb-2 mb-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-1.5"><UserCheck className="h-3 w-3" style={{ color: '#10b981' }} /><span className="font-bold text-white">HMS — Patient Portal</span></div>
          <span className="h-2 w-2 rounded-full" style={{ background: '#10b981' }} />
        </div>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[['Patients Today', '84', '#10b981'], ['Appointments', '62', '#8b5cf6'], ['Beds Available', '23', '#f59e0b']].map(([l, v, c]) => (
            <div key={l} className="p-2 rounded text-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <span className="block text-[7px]" style={{ color: '#6b7280' }}>{l}</span>
              <span className="font-black text-xs" style={{ color: c }}>{v}</span>
            </div>
          ))}
        </div>
        <div className="space-y-1">
          {[['John D.', 'Cardiology', '10:30'], ['Priya S.', 'Orthopedics', '11:00']].map(([name, dept, time]) => (
            <div key={name} className="flex justify-between items-center px-2 py-1 rounded text-[8px]" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <span className="text-white font-semibold">{name}</span>
              <span style={{ color: '#6b7280' }}>{dept}</span>
              <span style={{ color: '#34d399' }}>{time} AM</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Human Resource Management System (HRMS)',
    category: 'Fullstack',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.25)',
    tech: ['Angular', 'Express.js', 'Node.js', 'MySQL', 'JWT', 'REST API'],
    description:
      'A comprehensive Human Resource Management System built for enterprises — managing employees, payroll cycles, attendance tracking, billing, and role-based access control.',
    details:
      'The HRMS features modular architecture with dedicated modules for payroll processing (CTC, deductions, payslip generation), biometric attendance integration, leave management, employee onboarding, and financial billing reports. Backend APIs are secured with JWT authentication and implement full RBAC policy enforcement.',
    preview: (
      <div className="w-full h-44 flex flex-col p-4 font-mono text-[9px] overflow-hidden"
        style={{ background: '#0a0e1a', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex items-center justify-between pb-2 mb-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-1.5"><Users className="h-3 w-3" style={{ color: '#8b5cf6' }} /><span className="font-bold text-white">HRMS Dashboard</span></div>
          <span className="px-2 py-0.5 rounded text-[8px] font-bold" style={{ background: 'rgba(139,92,246,0.2)', color: '#8b5cf6' }}>Active</span>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          {[['Total Employees', '248', '#8b5cf6'], ['On Payroll', '241', '#10b981'], ['On Leave', '12', '#f59e0b'], ['Attendance', '96.2%', '#3b82f6']].map(([l, v, c]) => (
            <div key={l} className="p-2 rounded" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <span className="block" style={{ color: '#6b7280' }}>{l}</span>
              <span className="font-black text-sm" style={{ color: c }}>{v}</span>
            </div>
          ))}
        </div>
        <div className="text-[8px] rounded p-2 flex gap-3" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <span style={{ color: '#34d399' }}>✓ Payroll Run: June 2025</span>
          <span style={{ color: '#60a5fa' }}>✓ Attendance Sync: Live</span>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'College Management System (CMS)',
    category: 'Fullstack',
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.25)',
    tech: ['Angular', 'Node.js', 'Express.js', 'MySQL', 'REST API'],
    description:
      'A comprehensive academic administration portal for managing student records, course registries, department faculty allocations, and fee schedules.',
    details:
      'Features multi-role portals for students, faculty, and administrators. Supports course registration workflows, grade entry, class timetabling, attendance tracking, and automated generation of transcripts and reports.',
    preview: (
      <div className="w-full h-44 flex flex-col p-4 font-mono text-[9px] overflow-hidden"
        style={{ background: '#0a0e1a', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex items-center justify-between pb-2 mb-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-1.5"><GraduationCap className="h-3 w-3" style={{ color: '#3b82f6' }} /><span className="font-bold text-white">CMS Academic Portal</span></div>
          <span className="px-1.5 py-0.5 rounded text-[8px]" style={{ background: 'rgba(59,130,246,0.15)', color: '#3b82f6' }}>Term 2</span>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          {[['Enrolled Students', '1,840', '#3b82f6'], ['Active Courses', '42', '#10b981']].map(([l, v, c]) => (
            <div key={l} className="p-1.5 rounded" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <span className="block text-[7px]" style={{ color: '#6b7280' }}>{l}</span>
              <span className="font-black text-xs" style={{ color: c }}>{v}</span>
            </div>
          ))}
        </div>
        <div className="text-[8px] rounded p-2 flex flex-col gap-1.5" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <span style={{ color: '#9ca3af' }}>➔ Faculty Assignment: Completed</span>
          <span style={{ color: '#34d399' }}>✓ Automated GPA Calculator: Active</span>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Logistics Management',
    category: 'Fullstack',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.25)',
    tech: ['Ionic Angular', 'Node.js', 'Express.js', 'MS-SQL Server', 'REST API'],
    description:
      'A real-time logistics tracking and fleet management system built with Ionic Angular for hybrid cross-platform mobile access and MS-SQL Server.',
    details:
      'Integrates driver GPS tracking, route optimization, consignment dispatch workflows, instant delivery updates, automated invoice generation, and warehouse stock allocation charts.',
    preview: (
      <div className="w-full h-44 flex flex-col p-4 font-mono text-[9px] overflow-hidden"
        style={{ background: '#0a0e1a', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex items-center justify-between pb-2 mb-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-1.5"><Truck className="h-3 w-3" style={{ color: '#f59e0b' }} /><span className="font-bold text-white">Logistics Fleet Hub</span></div>
          <span className="px-2 py-0.5 rounded text-[8px]" style={{ background: 'rgba(245,158,11,0.15)', color: '#f59e0b' }}>Transit</span>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-2">
          {[['Active Fleet', '48', '#f59e0b'], ['In Transit', '32', '#3b82f6'], ['Delivered', '118', '#10b981']].map(([l, v, c]) => (
            <div key={l} className="p-1.5 rounded text-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <span className="block text-[7px]" style={{ color: '#6b7280' }}>{l}</span>
              <span className="font-black text-xs" style={{ color: c }}>{v}</span>
            </div>
          ))}
        </div>
        <div className="text-[8px] rounded p-2" style={{ background: 'rgba(255,255,255,0.03)', borderLeft: '2px solid #f59e0b' }}>
          <div className="flex justify-between font-semibold text-white"><span>Shipment #TRK-8492</span><span style={{ color: '#f59e0b' }}>Hub Dispatch</span></div>
          <span style={{ color: '#6b7280' }}>Route: Tirupati ➔ Bangalore (Eta: 4h 20m)</span>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: 'Banking System',
    category: 'ETL & BI',
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.08)',
    border: 'rgba(236,72,153,0.25)',
    tech: ['Talend Tool', 'Power BI', 'Snowflake', 'SQL', 'AWS S3', 'Data Warehouse'],
    description:
      'A modern Banking BI and ETL pipeline system enabling automated financial auditing, Snowflake data warehousing, and live portfolio dashboard reporting.',
    details:
      'The pipeline ingests raw banking transactions and ledger records via Talend ETL jobs, cleanses and processes them with financial validation rules, and stores them in Snowflake. Power BI dashboards connect directly to provide reporting on portfolio health, transaction volumes, assets under management, and deposit trends.',
    preview: (
      <div className="w-full h-44 flex flex-col p-4 font-mono text-[9px] overflow-hidden"
        style={{ background: '#0a0e1a', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex items-center justify-between pb-2 mb-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-1.5"><BarChart3 className="h-3 w-3" style={{ color: '#ec4899' }} /><span className="font-bold text-white">Banking System Dashboard</span></div>
          <span className="px-1.5 py-0.5 rounded text-[8px]" style={{ background: 'rgba(236,72,153,0.15)', color: '#ec4899' }}>Live ETL</span>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-2">
          {[['Assets Managed', '$42.8M', '#ec4899'], ['Transactions', '248K/day', '#10b981']].map(([l, v, c]) => (
            <div key={l} className="p-1.5 rounded" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <span className="block text-[7px]" style={{ color: '#6b7280' }}>{l}</span>
              <span className="font-black text-xs" style={{ color: c }}>{v}</span>
            </div>
          ))}
        </div>
        <div className="flex items-end gap-1 h-10">
          {[30, 45, 60, 50, 75, 90, 85, 95].map((h, i) => (
            <div key={i} className="w-full rounded-t" style={{ height: `${h}%`, background: i < 5 ? 'rgba(236,72,153,0.5)' : '#ec4899' }} />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: 'Social Networking & Matchmaking Application (Backend)',
    category: 'Backend',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.25)',
    tech: ['Node.js', 'Express.js', 'MySQL', 'REST API', 'Socket.io'],
    description:
      'A scalable matchmaking and social network API backend engine featuring real-time connection pooling, query optimization, and REST endpoints.',
    details:
      'Architected a custom user matchmaking algorithm, real-time message relays via Socket.io, connection pooling in MySQL to handle high concurrency, and secure session management with OAuth.',
    preview: (
      <div className="w-full h-44 flex flex-col p-4 font-mono text-[8px] overflow-hidden"
        style={{ background: '#0a0e1a', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#a7f3d0' }}>
        <div className="flex items-center justify-between pb-2 mb-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-1.5"><Terminal className="h-3 w-3" style={{ color: '#10b981' }} /><span className="font-bold text-white">Social API Backend Console</span></div>
          <span className="px-1.5 py-0.5 rounded text-[8px]" style={{ background: 'rgba(16,185,129,0.15)', color: '#10b981' }}>Port 5000</span>
        </div>
        <div className="space-y-1">
          <div><span className="text-gray-500">[2026-06-18 23:23]</span> <span style={{ color: '#38bdf8' }}>INFO</span> Matching algorithm triggered...</div>
          <div><span className="text-gray-500">[2026-06-18 23:23]</span> <span style={{ color: '#34d399' }}>SUCCESS</span> Found 24 match pairs in 12ms</div>
          <div><span className="text-gray-500">[2026-06-18 23:23]</span> <span style={{ color: '#fb7185' }}>DB</span> Connection Pool usage: 12/100</div>
          <div className="pt-1 text-gray-400">➔ GET /api/v1/users/matches - 200 OK - 8ms</div>
          <div className="text-gray-400">➔ POST /api/v1/chat/message - 201 Created - 15ms</div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: 'Appointment Booking System',
    category: 'Backend',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.08)',
    border: 'rgba(167,139,250,0.25)',
    tech: ['React.js', 'Node.js', 'MySQL', 'Microservices', 'Docker', 'REST API'],
    description:
      'A microservices schedules reserving and booking slots with concurrent validation, real-time notifications, and Docker deployment.',
    details:
      'Structured as decoupled microservices (Auth, Booking, Notifications, Reporting) interacting via clean REST APIs. Developed the responsive booking scheduling UI, caching slots to prevent double bookings during high concurrent traffic.',
    preview: (
      <div className="w-full h-44 flex flex-col p-4 font-mono text-[9px] overflow-hidden"
        style={{ background: '#0a0e1a', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex items-center justify-between pb-2 mb-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-1.5"><Calendar className="h-3 w-3" style={{ color: '#a78bfa' }} /><span className="font-bold text-white">Booking Service Console</span></div>
          <span className="px-1.5 py-0.5 rounded text-[8px]" style={{ background: 'rgba(167,139,250,0.15)', color: '#a78bfa' }}>Active</span>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-2">
          {[['Scheduled Slot', '142', '#a78bfa'], ['Service Instance', '04', '#10b981']].map(([l, v, c]) => (
            <div key={l} className="p-1 text-center rounded" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <span className="block text-[6.5px]" style={{ color: '#6b7280' }}>{l}</span>
              <span className="font-black text-xs" style={{ color: c }}>{v}</span>
            </div>
          ))}
        </div>
        <div className="space-y-1">
          {['Microservice [auth-srv] online', 'Microservice [booking-srv] online', 'Event Bus synced'].map((msg, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-[7.5px]" style={{ color: '#9ca3af' }}>
              <span className="h-1 w-1 rounded-full" style={{ background: '#10b981' }} />
              <span>{msg}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, delay },
});

export default function Projects() {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#080b11' }}>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'rgba(139,92,246,0.05)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 {...fadeUp()} className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white">
            Featured <span style={{ color: '#8b5cf6' }}>Projects</span>
          </motion.h2>
          <motion.div {...fadeUp(0.2)} className="h-1 rounded-full mx-auto" style={{ width: 80, background: '#8b5cf6' }} />
          <motion.p {...fadeUp(0.1)} className="mt-4 max-w-2xl mx-auto" style={{ color: '#9ca3af' }}>
            A curated selection of systems I've architected and delivered.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['All', 'Fullstack', 'Backend', 'ETL & BI'].map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className="px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-300 cursor-pointer"
              style={filter === f
                ? { background: '#8b5cf6', color: '#fff', borderColor: '#8b5cf6' }
                : { background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.07)', color: '#9ca3af' }
              }>
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id} layout
                initial={{ opacity: 0, scale: 0.93 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.93 }}
                transition={{ duration: 0.35 }}
                className="card-glass rounded-2xl overflow-hidden border flex flex-col cursor-pointer group transition-all duration-300"
                style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = p.border}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
                onClick={() => setActive(p)}
              >
                {/* Preview */}
                <div className="relative overflow-hidden">
                  {p.preview}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(8,11,17,0.75)' }}>
                    <span className="px-4 py-2 rounded-xl text-xs font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                      style={{ background: p.color, color: '#fff' }}>
                      View Details
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider" style={{ color: p.color }}>{p.category}</span>
                    <h3 className="text-lg font-bold text-white mt-1 mb-2 group-hover:transition-colors" style={{ '--tw-group-hover-color': p.color }}>
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed line-clamp-2 mb-4" style={{ color: '#9ca3af' }}>{p.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 4).map((t) => (
                      <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded border"
                        style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.07)', color: '#9ca3af' }}>
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 4 && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded border"
                        style={{ background: p.bg, borderColor: p.border, color: p.color }}>
                        +{p.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(8,11,17,0.92)', backdropFilter: 'blur(12px)' }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border"
              style={{ background: '#111827', borderColor: 'rgba(255,255,255,0.08)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 flex justify-between items-start border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: active.color }}>{active.category}</span>
                  <h3 className="text-2xl font-bold text-white mt-0.5">{active.title}</h3>
                </div>
                <button onClick={() => setActive(null)} className="p-1.5 rounded-lg transition-colors cursor-pointer"
                  style={{ color: '#6b7280' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
                <div className="rounded-xl overflow-hidden border" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>{active.preview}</div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Overview</h4>
                  <p className="text-sm leading-relaxed" style={{ color: '#d1d5db' }}>{active.description}</p>
                  <p className="text-sm leading-relaxed mt-2" style={{ color: '#9ca3af' }}>{active.details}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {active.tech.map((t) => (
                      <span key={t} className="text-xs font-semibold px-2.5 py-1 rounded-lg border"
                        style={{ background: active.bg, borderColor: active.border, color: active.color }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* <div className="p-5 border-t flex justify-end gap-3" style={{ borderColor: 'rgba(255,255,255,0.05)', background: 'rgba(8,11,17,0.5)' }}>
                <a href="https://github.com/V-Kuladeep" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl border transition-all"
                  style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#d1d5db' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#d1d5db'; }}>
                  <Github size={15} /> GitHub
                </a>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all"
                  style={{ background: active.color, color: '#fff' }}>
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              </div> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
