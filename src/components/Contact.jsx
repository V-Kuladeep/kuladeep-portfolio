import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { Linkedin } from './SocialIcons';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, delay },
});

const contactItems = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: 'Email',
    value: 'kuladeep14june@gmail.com',
    href: 'mailto:kuladeep14june@gmail.com',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.1)',
    border: 'rgba(139,92,246,0.2)',
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: 'Phone',
    value: '+91 79811 82324',
    href: 'tel:+917981182324',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.1)',
    border: 'rgba(16,185,129,0.2)',
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: 'Location',
    value: 'Bangalore, Karnataka, India (Willing to relocate)',
    href: null,
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.1)',
    border: 'rgba(59,130,246,0.2)',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    value: 'kuladeep-v-6ba443239',
    href: 'https://www.linkedin.com/in/kuladeep-v-6ba443239/',
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.1)',
    border: 'rgba(14,165,233,0.2)',
  },
  {
    icon: <Clock className="h-5 w-5" />,
    label: 'Availability',
    value: 'Mon – Fri, 9 AM – 6 PM IST',
    href: null,
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',
    border: 'rgba(245,158,11,0.2)',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const onChange = (ev) => {
    const { name, value } = ev.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSuccess(true); setForm({ name: '', email: '', message: '' }); }, 1500);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl text-sm text-white focus:outline-none transition-all duration-300 border ${
      errors[field]
        ? 'border-red-500/50 focus:border-red-500'
        : 'border-white/5 focus:border-purple-500'
    }`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#080b11' }}>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'rgba(16,185,129,0.05)' }} />
      <div className="absolute left-0 bottom-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'rgba(139,92,246,0.05)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 {...fadeUp()} className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white">
            Get In <span style={{ color: '#8b5cf6' }}>Touch</span>
          </motion.h2>
          <motion.div {...fadeUp(0.2)} className="h-1 rounded-full mx-auto" style={{ width: 80, background: '#8b5cf6' }} />
          <motion.p {...fadeUp(0.1)} className="mt-4 max-w-2xl mx-auto" style={{ color: '#9ca3af' }}>
            Have a project or opportunity in mind? I'd love to hear from you!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* ── Contact Info ── */}
          <motion.div {...fadeUp(0.1)} className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-white mb-5 text-center lg:text-left">Contact Information</h3>
            {contactItems.map(({ icon, label, value, href, color, bg, border }) => {
              const inner = (
                <div className="flex gap-4 p-4 card-glass rounded-xl border items-center transition-all duration-300"
                  style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = border}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
                >
                  <div className="p-3 rounded-lg border shrink-0" style={{ color, background: bg, borderColor: border }}>
                    {icon}
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs uppercase tracking-wider font-semibold block mb-0.5" style={{ color: '#6b7280' }}>{label}</span>
                    <span className="text-sm font-medium text-white break-all">{value}</span>
                  </div>
                </div>
              );
              return href ? <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{inner}</a> : <div key={label}>{inner}</div>;
            })}
          </motion.div>

          {/* ── Form ── */}
          <motion.div {...fadeUp(0.2)} className="lg:col-span-7">
            <div className="card-glass p-7 rounded-2xl border h-full" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
              <AnimatePresence mode="wait">
                {!success ? (
                  <motion.form key="form" onSubmit={onSubmit} className="space-y-5"
                    initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <h3 className="text-lg font-bold text-white mb-4">Send Me a Message</h3>

                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider block mb-1.5" style={{ color: '#9ca3af' }}>Your Name</label>
                      <input id="name" name="name" type="text" value={form.name} onChange={onChange}
                        placeholder="John Doe" className={inputClass('name')}
                        style={{ background: 'rgba(255,255,255,0.04)' }} />
                      {errors.name && <p className="mt-1 text-xs flex items-center gap-1" style={{ color: '#f87171' }}><AlertCircle className="h-3.5 w-3.5" />{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider block mb-1.5" style={{ color: '#9ca3af' }}>Your Email</label>
                      <input id="email" name="email" type="email" value={form.email} onChange={onChange}
                        placeholder="john@example.com" className={inputClass('email')}
                        style={{ background: 'rgba(255,255,255,0.04)' }} />
                      {errors.email && <p className="mt-1 text-xs flex items-center gap-1" style={{ color: '#f87171' }}><AlertCircle className="h-3.5 w-3.5" />{errors.email}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider block mb-1.5" style={{ color: '#9ca3af' }}>Message</label>
                      <textarea id="message" name="message" rows={5} value={form.message} onChange={onChange}
                        placeholder="Tell me about your project or opportunity..."
                        className={inputClass('message') + ' resize-none'}
                        style={{ background: 'rgba(255,255,255,0.04)' }} />
                      {errors.message && <p className="mt-1 text-xs flex items-center gap-1" style={{ color: '#f87171' }}><AlertCircle className="h-3.5 w-3.5" />{errors.message}</p>}
                    </div>

                    <button type="submit" disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 cursor-pointer"
                      style={{ background: '#8b5cf6', color: '#fff' }}
                      onMouseEnter={e => !submitting && (e.currentTarget.style.background = '#6d28d9')}
                      onMouseLeave={e => !submitting && (e.currentTarget.style.background = '#8b5cf6')}
                    >
                      {submitting ? (
                        <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Sending…</>
                      ) : (
                        <>Send Message <Send className="h-4 w-4" /></>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16">
                    <div className="p-4 rounded-full border mb-6" style={{ background: 'rgba(16,185,129,0.1)', borderColor: 'rgba(16,185,129,0.25)', color: '#10b981' }}>
                      <CheckCircle className="h-12 w-12" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-sm max-w-xs leading-relaxed mb-8" style={{ color: '#9ca3af' }}>
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                    <button onClick={() => setSuccess(false)} className="text-xs font-semibold px-4 py-2.5 rounded-xl border transition-all duration-300 cursor-pointer"
                      style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#d1d5db' }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
