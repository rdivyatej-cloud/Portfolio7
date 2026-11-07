import React, { useState } from 'react';
import { PERSONAL_INFO, CONTACT_REASONS } from '../data/content';
import { Mail, Send, CheckCircle2, Copy, Check, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [selectedReason, setSelectedReason] = useState(CONTACT_REASONS[0].id);
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const reasonObj = CONTACT_REASONS.find((r) => r.id === selectedReason) || CONTACT_REASONS[0];
    const subject = encodeURIComponent(`${reasonObj.subjectPrefix} ${reasonObj.label} - from ${name || 'Inquirer'}`);
    
    let bodyContent = `Hi Divyatej,\n\n${message}\n\n`;
    if (name) bodyContent += `Best regards,\n${name}\n`;
    if (senderEmail) bodyContent += `Email: ${senderEmail}\n`;
    bodyContent += `Category: ${reasonObj.label}\n`;

    const body = encodeURIComponent(bodyContent);
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    // Open mail client
    window.location.href = mailtoUrl;

    // Show confirmation modal
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#14110f] py-24 sm:py-32 border-t border-white/5 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#ccff00]/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context & Direct Contact */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#ccff00] mb-3">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Inquiries &amp; Opportunities</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f4f0eb] leading-tight">
                Let's build something reliable together.
              </h2>
              <p className="mt-4 text-base font-mono text-[#9e9891] leading-relaxed">
                Seeking backend and AI engineering roles. Whether you have an internship opening, a high-throughput backend architecture to design, or an AI prototype to scale, let's talk.
              </p>
            </div>

            {/* Direct Email Card with One-Click Copy */}
            <div className="p-6 rounded-2xl bg-[#181512] border border-white/10 space-y-4">
              <span className="text-xs font-mono text-[#6e6761] uppercase tracking-wider block">
                Direct Email Channel
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#ccff00]" />
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-sm sm:text-base font-semibold text-[#f4f0eb] hover:text-[#ccff00] transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/10 text-[#d8d3cc] hover:text-white border border-white/5 transition-all cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#ccff00]" />
                      <span className="text-[#ccff00]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#9e9891]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Availability Pill */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs font-mono text-[#9e9891]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccff00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ccff00]"></span>
              </span>
              <span>{PERSONAL_INFO.availability}</span>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-10 bg-[#181512] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. What do you need? Selector */}
                <div className="space-y-3">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#9e9891]">
                    What do you need? <span className="text-[#ccff00]">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {CONTACT_REASONS.map((reason) => {
                      const isSelected = selectedReason === reason.id;
                      return (
                        <button
                          key={reason.id}
                          type="button"
                          onClick={() => setSelectedReason(reason.id)}
                          className={`px-4 py-3 rounded-xl text-left text-xs font-mono transition-all duration-200 border cursor-pointer ${
                            isSelected
                              ? 'bg-[#ccff00]/10 border-[#ccff00] text-[#f4f0eb] shadow-[0_0_15px_rgba(204,255,0,0.15)]'
                              : 'bg-white/[0.02] border-white/5 text-[#9e9891] hover:text-[#f4f0eb] hover:bg-white/[0.05]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{reason.label}</span>
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Name & Optional Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-[#9e9891]">
                      Your Name <span className="text-[#ccff00]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Chen"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] text-sm text-[#f4f0eb] placeholder-[#6e6761] font-mono outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-[#9e9891]">
                      Your Email (Optional)
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] text-sm text-[#f4f0eb] placeholder-[#6e6761] font-mono outline-none transition-all"
                    />
                  </div>
                </div>

                {/* 3. Message */}
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-[#9e9891]">
                    Message <span className="text-[#ccff00]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about the role, team, technical challenge or project timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] text-sm text-[#f4f0eb] placeholder-[#6e6761] font-mono outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-sm font-mono font-semibold bg-[#ccff00] text-[#14110f] hover:bg-[#d9ff33] hover:shadow-[0_0_30px_rgba(204,255,0,0.35)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email Client</span>
                </button>
              </form>

              {/* Confirmation Notice ("Almost there") */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="mt-6 p-5 rounded-2xl bg-[#ccff00]/10 border border-[#ccff00]/30 space-y-2"
                  >
                    <div className="flex items-center gap-2 text-sm font-mono font-bold text-[#ccff00]">
                      <CheckCircle2 className="w-5 h-5 text-[#ccff00]" />
                      <span>Almost there!</span>
                    </div>
                    <p className="text-xs font-mono text-[#d8d3cc] leading-relaxed">
                      Your default mail application has been prompted with your pre-filled message to <strong className="text-[#f4f0eb]">{PERSONAL_INFO.email}</strong>.
                    </p>
                    <p className="text-[11px] font-mono text-[#9e9891]">
                      Didn't open? Click <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#ccff00] underline underline-offset-2">here to launch manually</a> or copy the address directly above.
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
