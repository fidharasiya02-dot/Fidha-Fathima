import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Copy, Check, Mail, MapPin, Sparkles, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import MagneticButton from './MagneticButton';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Collaboration',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      // Fire confetti celebration
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#3730A3', '#4F46E5', '#D92338', '#E9E6E3'],
        });
      } catch (err) {
        console.log(err);
      }
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-36 px-4 sm:px-6 lg:px-12 bg-canvas-light dark:bg-canvas-dark border-t border-borderMuted-light/60 dark:border-borderMuted-dark/60 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-baseline justify-between border-b border-borderMuted-light dark:border-borderMuted-dark pb-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm tracking-widest text-accent font-bold">06</span>
            <span className="font-sans font-bold text-xs uppercase tracking-widest text-ink-muted">
              INITIATE COLLABORATION
            </span>
          </div>
          <span className="font-mono text-xs uppercase text-ink-muted tracking-wider hidden sm:inline-block">
            DIRECT INBOX
          </span>
        </div>

        {/* Giant Headline */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-5xl sm:text-7xl lg:text-9xl uppercase tracking-tight text-ink-light dark:text-ink-dark leading-[0.88]"
          >
            LET'S WORK <br />
            <span className="text-accent italic font-serif lowercase">together.</span>
          </motion.h2>

          <p className="font-sans text-base sm:text-lg text-ink-muted dark:text-ink-darkMuted max-w-2xl mt-6">
            {portfolioData.contact.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Quick Copy Email Box */}
            <div className="p-8 rounded-3xl bg-card-light dark:bg-card-dark border border-borderMuted-light dark:border-borderMuted-dark">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold block mb-2">
                DIRECT EMAIL DISPATCH
              </span>
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-canvas-light dark:bg-canvas-dark border border-borderMuted-light/80 dark:border-borderMuted-dark/80 font-mono text-xs sm:text-sm text-ink-light dark:text-ink-dark">
                <span className="truncate">{portfolioData.personal.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-accent text-white hover:bg-accent-light transition-colors flex items-center gap-1 shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <p className="font-mono text-xs text-accent mt-2 animate-pulse">
                  ✓ Copied to clipboard!
                </p>
              )}
            </div>

            {/* Academic Office & Location */}
            <div className="p-8 rounded-3xl bg-card-light dark:bg-card-dark border border-borderMuted-light dark:border-borderMuted-dark space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-sans font-bold text-sm text-ink-light dark:text-ink-dark block">
                    Campus Address
                  </span>
                  <p className="font-sans text-xs text-ink-muted dark:text-ink-darkMuted leading-relaxed">
                    {portfolioData.contact.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-borderMuted-light/60 dark:border-borderMuted-dark/60 pt-4">
                <Sparkles className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-sans font-bold text-sm text-ink-light dark:text-ink-dark block">
                    Availability
                  </span>
                  <p className="font-sans text-xs text-ink-muted dark:text-ink-darkMuted">
                    {portfolioData.personal.statusBadge}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-card-light dark:bg-card-dark border border-borderMuted-light dark:border-borderMuted-dark shadow-sm">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-accent text-white mx-auto flex items-center justify-center mb-6 shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-sans font-extrabold text-3xl text-ink-light dark:text-ink-dark mb-2">
                    Message Dispatched!
                  </h3>
                  <p className="font-sans text-sm text-ink-muted dark:text-ink-darkMuted max-w-md mx-auto mb-6">
                    Thank you for reaching out to Fidha. Your inquiry has been received and will be answered promptly within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', subject: 'Project Collaboration', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-full border border-ink-light/20 dark:border-ink-dark/20 text-xs font-mono font-bold uppercase tracking-wider text-ink-light dark:text-ink-dark hover:border-accent"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name input */}
                    <div>
                      <label className="block font-sans font-bold text-xs uppercase tracking-wider text-ink-light dark:text-ink-dark mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-canvas-light dark:bg-canvas-dark border border-borderMuted-light dark:border-borderMuted-dark text-ink-light dark:text-ink-dark text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>

                    {/* Email input */}
                    <div>
                      <label className="block font-sans font-bold text-xs uppercase tracking-wider text-ink-light dark:text-ink-dark mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-canvas-light dark:bg-canvas-dark border border-borderMuted-light dark:border-borderMuted-dark text-ink-light dark:text-ink-dark text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject selector */}
                  <div>
                    <label className="block font-sans font-bold text-xs uppercase tracking-wider text-ink-light dark:text-ink-dark mb-2">
                      Inquiry Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-canvas-light dark:bg-canvas-dark border border-borderMuted-light dark:border-borderMuted-dark text-ink-light dark:text-ink-dark text-sm focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="Internship Opportunity">Internship Opportunity</option>
                      <option value="Project Collaboration">Project Collaboration</option>
                      <option value="Freelance Web Development">Freelance Web Development</option>
                      <option value="Editorial Design Commission">Editorial Design Commission</option>
                      <option value="General Conversation">Saying Hello from Thejus</option>
                    </select>
                  </div>

                  {/* Message textarea */}
                  <div>
                    <label className="block font-sans font-bold text-xs uppercase tracking-wider text-ink-light dark:text-ink-dark mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project, timeline, or idea..."
                      className="w-full px-4 py-3 rounded-xl bg-canvas-light dark:bg-canvas-dark border border-borderMuted-light dark:border-borderMuted-dark text-ink-light dark:text-ink-dark text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <MagneticButton className="w-full sm:w-auto">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-accent text-white font-sans font-bold text-xs uppercase tracking-widest hover:bg-accent-light transition-all shadow-md active:scale-95 disabled:opacity-50"
                    >
                      {status === 'submitting' ? (
                        <span>TRANSMITTING MESSAGE...</span>
                      ) : (
                        <>
                          <span>SEND INQUIRY TO FIDHA</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </MagneticButton>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

