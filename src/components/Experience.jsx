import { useState } from 'react';
import { Calendar, Briefcase, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'DALVKOT UTILITY ENTERPRISES PRIVATE LIMITED',
    location: 'Bangalore, Karnataka',
    period: '09/2025 – Present',
    type: 'Full-Time',
    color: '#8b5cf6',
    border: 'rgba(139,92,246,0.3)',
    highlights: [
      'Developed and maintained enterprise applications including CMS, HMS, and HRMS using Angular and Node.js, supporting patient management, payroll, attendance, billing, and reporting modules.',
      'Designed and implemented responsive frontend components, scalable backend services, and RESTful APIs following MVC architecture to improve application performance and maintainability.',
      'Delivered end-to-end development of key business modules, including appointment scheduling, patient records, employee management, payroll processing, and reporting solutions.',
      'Enhanced application performance through frontend optimization, API improvements, and efficient application design, ensuring a seamless user experience.',
      'Utilized Jira and Bitbucket in Agile development environments for sprint planning, code reviews, issue tracking, and release management.',
      'Collaborated with QA, DevOps, and cross-functional teams to support deployments, troubleshoot production issues, and deliver high-quality software solutions.',
    ],
    techs: ['Angular', 'Node.js', 'MySQL', 'JWT', 'RBAC', 'RESTful APIs', 'MVC', 'Jira', 'Bitbucket'],
  },
  {
    role: 'Cloud Developer',
    company: 'PARIPOORNA SOFTWARE (P) LIMITED',
    location: 'Chennai, Tamil Nadu  ',
    period: '06/2023 – 04/2025',
    type: 'Full-Time',
    color: '#10b981',
    border: 'rgba(16,185,129,0.3)',
    highlights: [
      'Developed dynamic, data-driven user interfaces using Angular, reusable components, and shared modules, improving application scalability and user experience.',
      'Built and maintained scalable RESTful APIs using Node.js and Express.js, and migrated legacy backend services from PHP to Node.js to enhance system performance and maintainability.',
      'Designed and optimized MySQL and MSSQL database solutions, including SQL queries and stored procedures, to support business-critical operations.',
      'Developed ETL pipelines using Talend and integrated Snowflake with Power BI to deliver real-time analytics, reporting, and business insights for a Loan Management System.',
      'Collaborated with cross-functional teams in Agile environments to deliver high-quality software solutions, troubleshoot production issues, and ensure timely project delivery.',
    ],
    techs: ['Angular', 'Node.js', 'Express.js', 'MySQL', 'MSSQL', 'Talend', 'Snowflake', 'Power BI', 'ETL'],
  },
  {
    role: 'Associate Software Engineer',
    company: 'TEST YANTRA SOFTWARE SOLUTIONS',
    location: 'Bangalore, Karnataka',
    period: '12/2021 – 05/2023',
    type: 'Full-Time',
    color: '#3b82f6',
    border: 'rgba(59,130,246,0.3)',
    highlights: [
      'Developed scalable backend services and RESTful APIs for insurance and appointment management systems using Node.js and Express.js.',
      'Designed and optimized MySQL database solutions, including schema design, SQL queries, and stored procedures.',
      'Integrated SendGrid and Slack APIs, automating notifications and communication workflows across applications.',
      'Implemented API documentation with Swagger UI and performed API validation and automated testing using Postman and Jest.',
      'Troubleshot production issues, enhanced React.js application stability, and delivered secure, high-performance healthcare solutions.',
    ],
    techs: ['Node.js', 'Express.js', 'MySQL', 'SendGrid', 'Slack API', 'Swagger UI', 'React.js', 'Postman', 'Jest'],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, delay },
});

export default function Experience() {
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="experience" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#080b11' }}>
      <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'rgba(139,92,246,0.05)' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 {...fadeUp()} className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white">
            Work <span style={{ color: '#8b5cf6' }}>Experience</span>
          </motion.h2>
          <motion.div {...fadeUp(0.2)} className="h-1 rounded-full mx-auto" style={{ width: 80, background: '#8b5cf6' }} />
          <motion.p {...fadeUp(0.1)} className="mt-4 max-w-2xl mx-auto" style={{ color: '#9ca3af' }}>
            My professional journey across enterprise software, cloud development, and backend engineering.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px" style={{ background: 'rgba(255,255,255,0.07)' }} />

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <motion.div key={exp.company} {...fadeUp(idx * 0.12)} className="relative">

                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                  viewport={{ once: true }} transition={{ delay: idx * 0.12 + 0.1 }}
                  className="hidden md:flex absolute left-6 -translate-x-1/2 w-9 h-9 rounded-full items-center justify-center z-10 shadow-lg border-2"
                  style={{ background: '#080b11', borderColor: exp.color, top: '1.5rem' }}
                >
                  <Briefcase className="h-4 w-4" style={{ color: exp.color }} />
                </motion.div>

                {/* Card */}
                <div className="md:ml-16 card-glass rounded-2xl border overflow-hidden transition-all duration-300"
                  style={{ borderColor: expanded === idx ? exp.border : 'rgba(255,255,255,0.05)' }}>

                  {/* Card header — clickable to expand */}
                  <button
                    className="w-full p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left cursor-pointer"
                    onClick={() => setExpanded(expanded === idx ? -1 : idx)}
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="inline-block w-2 h-2 rounded-full" style={{ background: exp.color }} />
                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: exp.color }}>
                          {exp.type}
                        </span>
                        <span className="flex items-center gap-1 text-xs ml-2" style={{ color: '#6b7280' }}>
                          <Calendar className="h-3 w-3" />
                          {exp.period}
                        </span>
                        {exp.location && (
                          <span className="flex items-center gap-1 text-xs ml-2" style={{ color: '#6b7280' }}>
                            <MapPin className="h-3.5 w-3.5" />
                            {exp.location}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-sm mt-0.5" style={{ color: '#9ca3af' }}>{exp.company}</p>
                    </div>
                    <div className="shrink-0" style={{ color: '#6b7280' }}>
                      {expanded === idx ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </div>
                  </button>

                  {/* Expandable body */}
                  <AnimatePresence initial={false}>
                    {expanded === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                          <ul className="space-y-2 mb-5 mt-4">
                            {exp.highlights.map((h) => (
                              <li key={h} className="flex gap-2 text-sm leading-relaxed" style={{ color: '#d1d5db' }}>
                                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: exp.color }} />
                                {h}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.techs.map((t) => (
                              <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded border"
                                style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.07)', color: '#9ca3af' }}>
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
