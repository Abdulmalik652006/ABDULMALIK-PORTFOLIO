import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Github, 
  Linkedin, 
  Sparkles, 
  Download,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending with a mailto trigger fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Abdul Malik,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.open(mailtoUrl, '_blank');
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono font-medium">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Interested in hiring an AI/ML Engineer or Data Engineer? Have an internship or full-time opportunity? Reach out directly.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Status Card */}
            <div className="glass-card rounded-2xl p-6 border-white/10 space-y-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
                <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wide uppercase">
                  Current Status
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">
                Actively Seeking AI/ML &amp; Data Engineering Roles
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Available for full-time opportunities starting upon graduation, pre-placement internships, and challenging engineering initiatives.
              </p>
            </div>

            {/* Email Card with 1-click Copy */}
            <div className="glass-card glass-card-hover rounded-2xl p-5 border-white/10 flex items-center justify-between gap-4 group">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono text-slate-400 uppercase">Email Address</p>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors shrink-0"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedType === 'email' ? (
                  <span className="flex items-center gap-1 text-xs text-emerald-400 font-mono">
                    <Check className="w-4 h-4" /> Copied
                  </span>
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card with 1-click Copy */}
            <div className="glass-card glass-card-hover rounded-2xl p-5 border-white/10 flex items-center justify-between gap-4 group">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono text-slate-400 uppercase">Phone / WhatsApp</p>
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors font-mono"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors shrink-0"
                title="Copy phone number to clipboard"
                aria-label="Copy phone number"
              >
                {copiedType === 'phone' ? (
                  <span className="flex items-center gap-1 text-xs text-emerald-400 font-mono">
                    <Check className="w-4 h-4" /> Copied
                  </span>
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card rounded-2xl p-5 border-white/10 flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400 uppercase">Location</p>
                <p className="text-sm font-semibold text-white">{personalInfo.location}</p>
              </div>
            </div>

            {/* Social Links Banner */}
            <div className="glass-card rounded-2xl p-5 border-white/10 flex items-center justify-between gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                <div className="p-2 rounded-lg bg-white/5 text-purple-400">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span>LinkedIn</span>
              </a>

              <div className="h-6 w-px bg-white/10" />

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                <div className="p-2 rounded-lg bg-white/5 text-cyan-400">
                  <Github className="w-4 h-4" />
                </div>
                <span>GitHub</span>
              </a>

              <div className="h-6 w-px bg-white/10" />

              <a
                href={personalInfo.resumePath}
                download="Abdul_Malik_B_J_Resume.pdf"
                className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <div className="p-2 rounded-lg bg-white/5 text-blue-400">
                  <Download className="w-4 h-4" />
                </div>
                <span>Resume</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border-white/10 space-y-6">
              
              <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Send a Message</h3>
                  <p className="text-xs text-slate-400 font-mono">Replies typically within 24 hours</p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Prepared!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your email client is opening with your formatted message to <strong>{personalInfo.email}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0d101b] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0d101b] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Subject *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Interview Inquiry / Collaboration"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0d101b] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Message *</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe the opportunity, role requirements, or project..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0d101b] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-lg shadow-purple-600/30 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

