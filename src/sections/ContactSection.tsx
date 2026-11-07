import React, { useState } from 'react';
import { PERSONAL } from '../data/content';
import { Mail, Phone, Send, CheckCircle2, Copy, Check, MessageSquare, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { motion, AnimatePresence } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL.contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      return;
    }

    const emailSubject = encodeURIComponent(
      subject.trim() || `Portfolio Inquiry from ${name.trim()}`
    );
    const bodyContent = `Hi Divyatej,\n\n${message.trim()}\n\n---\nFrom: ${name.trim()}\nEmail: ${email.trim()}`;
    const mailtoUrl = `mailto:${PERSONAL.contact.email}?subject=${emailSubject}&body=${encodeURIComponent(bodyContent)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#09090b] py-24 sm:py-32 border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[350px] bg-[#00e5ff]/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#00e5ff] mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#ededed]">
            Have an interesting idea? Let's build it.
          </h2>
          <p className="mt-4 text-base sm:text-lg font-mono text-[#9e9e9e] leading-relaxed">
            I'm interested in opportunities involving backend engineering, AI engineering, and software development.
          </p>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Credentials & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-[#121215] border border-white/[0.08] space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#666666] block">
                Primary Direct Channel
              </span>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#00e5ff]" />
                  <a
                    href={`mailto:${PERSONAL.contact.email}`}
                    className="font-mono text-sm sm:text-base font-semibold text-[#ededed] hover:text-[#00e5ff] transition-colors"
                  >
                    {PERSONAL.contact.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/10 text-[#d4d4d8] hover:text-white border border-white/5 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-[#00e5ff]" /> : <Copy className="w-3 h-3 text-[#9e9e9e]" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="p-6 rounded-2xl bg-[#121215] border border-white/[0.08] space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#666666] block">
                Telephone &amp; WhatsApp
              </span>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#38bdf8]" />
                  <a
                    href={`tel:${PERSONAL.contact.phone.replace(/\s+/g, '')}`}
                    className="font-mono text-sm sm:text-base font-semibold text-[#ededed] hover:text-[#00e5ff] transition-colors"
                  >
                    {PERSONAL.contact.phone}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/10 text-[#d4d4d8] hover:text-white border border-white/5 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  {copiedPhone ? <Check className="w-3 h-3 text-[#00e5ff]" /> : <Copy className="w-3 h-3 text-[#9e9e9e]" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Social Network Cards */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={PERSONAL.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#121215] border border-white/[0.08] hover:border-[#00e5ff]/40 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-4">
                  <LinkedinIcon className="w-5 h-5 text-[#38bdf8]" />
                  <ExternalLink className="w-3.5 h-3.5 text-[#666666] group-hover:text-[#00e5ff] transition-colors" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#ededed] block">LinkedIn</span>
                  <span className="text-[11px] font-mono text-[#666666]">divyatej2007</span>
                </div>
              </a>

              <a
                href={PERSONAL.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#121215] border border-white/[0.08] hover:border-[#00e5ff]/40 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-4">
                  <GithubIcon className="w-5 h-5 text-[#ededed]" />
                  <ExternalLink className="w-3.5 h-3.5 text-[#666666] group-hover:text-[#00e5ff] transition-colors" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#ededed] block">GitHub</span>
                  <span className="text-[11px] font-mono text-[#666666]">rdivyatej-cloud</span>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Validated Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#121215] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="user-name" className="block text-xs font-mono uppercase tracking-wider text-[#9e9e9e]">
                      Your Name <span className="text-[#00e5ff]">*</span>
                    </label>
                    <input
                      id="user-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] text-sm text-[#ededed] placeholder-[#666666] font-mono outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="user-email" className="block text-xs font-mono uppercase tracking-wider text-[#9e9e9e]">
                      Your Email <span className="text-[#00e5ff]">*</span>
                    </label>
                    <input
                      id="user-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] text-sm text-[#ededed] placeholder-[#666666] font-mono outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="user-subject" className="block text-xs font-mono uppercase tracking-wider text-[#9e9e9e]">
                    Subject / Project Nature
                  </label>
                  <input
                    id="user-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Backend Internship Opportunity / Distributed System Architecture"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] text-sm text-[#ededed] placeholder-[#666666] font-mono outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="user-message" className="block text-xs font-mono uppercase tracking-wider text-[#9e9e9e]">
                    Message <span className="text-[#00e5ff]">*</span>
                  </label>
                  <textarea
                    id="user-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe the opportunity, engineering requirements, or technical idea..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] text-sm text-[#ededed] placeholder-[#666666] font-mono outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-sm font-mono font-semibold bg-[#00e5ff] text-[#09090b] hover:bg-[#33ebff] hover:shadow-[0_0_30px_rgba(0,229,255,0.35)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4 text-[#09090b]" />
                  <span>Send Message via Email Client</span>
                </button>
              </form>

              {/* Feedback Alert */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    className="mt-6 p-5 rounded-2xl bg-[#00e5ff]/10 border border-[#00e5ff]/30 space-y-2"
                  >
                    <div className="flex items-center gap-2 text-sm font-mono font-bold text-[#00e5ff]">
                      <CheckCircle2 className="w-5 h-5 text-[#00e5ff]" />
                      <span>Ready to Send!</span>
                    </div>
                    <p className="text-xs font-mono text-[#d4d4d8] leading-relaxed">
                      Your default email application has opened with your pre-filled inquiry addressed to <strong className="text-[#ededed]">{PERSONAL.contact.email}</strong>.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
