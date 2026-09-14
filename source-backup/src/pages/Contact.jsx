
import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    const formData = new FormData(form);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      const result = await res.json();
      if (result.success) {
        setStatus('sent');
        form.reset();
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <div className="px-6 pt-6 pb-4 md:pt-10 md:pb-6 max-w-3xl mx-auto">
      <header className="mb-8 text-center">
        <h2 className="text-5xl font-serif font-bold text-white mb-4">Send Chuck a Message</h2>
        <p className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-6">Get in touch</p>
        <p className="text-slate-300 text-lg font-light">Whether you're a reader, a recruiter, or just someone who has something to say — the form below goes straight to Chuck. He reads everything. <strong className="text-yellow-500 font-bold">EVERYTHING.</strong></p>
      </header>

      <div>
        <form onSubmit={handleSubmit} className="space-y-8">
          <input type="hidden" name="access_key" value="1cce5250-1111-4df0-ae93-50a180876dcb" />
          <input type="hidden" name="subject" value="New message from chuckackerman.net contact form" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Your Name</label>
              <div className="field-spin-border rounded-xl">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                <input type="text" id="name" name="name" placeholder="First and last name" required className="w-full bg-slate-950 rounded-xl pl-12 pr-5 py-4 text-white focus:outline-none focus:ring-1 focus:ring-amber-500 focus:shadow-[0_0_20px_-4px_rgba(245,158,11,0.4)] transition-all" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Your Email Address</label>
              <div className="field-spin-border rounded-xl">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <input type="email" id="email" name="email" placeholder="you@example.com" required className="w-full bg-slate-950 rounded-xl pl-12 pr-5 py-4 text-white focus:outline-none focus:ring-1 focus:ring-amber-500 focus:shadow-[0_0_20px_-4px_rgba(245,158,11,0.4)] transition-all" />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="reason" className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Reason for contact</label>
            <div className="field-spin-border rounded-xl">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              <select id="reason" name="reason" required defaultValue="" className="w-full bg-slate-950 rounded-xl pl-12 pr-5 py-4 text-white focus:outline-none focus:ring-1 focus:ring-amber-500 focus:shadow-[0_0_20px_-4px_rgba(245,158,11,0.4)] transition-all appearance-none cursor-pointer">
                <option value="" disabled className="bg-slate-900">Select a reason...</option>
                <option value="Call Audit" className="bg-slate-900">5-Star Call Audit inquiry</option>
                <option value="Professional Inquiry" className="bg-slate-900">Professional &amp; business inquiry</option>
                <option value="Book Question" className="bg-slate-900">Question about a book</option>
                <option value="Feedback" className="bg-slate-900">Feedback</option>
                <option value="Fan Mail" className="bg-slate-900">Fan mail</option>
                <option value="Lars Hallene Fiction" className="bg-slate-900">Question about Lars C. Hallene / fiction</option>
                <option value="Other" className="bg-slate-900">Something else</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Your Message</label>
            <div className="field-spin-border rounded-xl">
              <textarea id="message" name="message" rows="6" placeholder="Say whatever's on your mind..." required className="block w-full bg-slate-950 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-1 focus:ring-amber-500 focus:shadow-[0_0_20px_-4px_rgba(245,158,11,0.4)] transition-all resize-y"></textarea>
            </div>
          </div>

          {status === 'error' && (
            <p className="text-red-400 bg-red-900/20 p-4 rounded-lg border border-red-900">Something went wrong sending your message. Please try again in a moment.</p>
          )}

          <button type="submit" disabled={status === 'sending' || status === 'sent'} className="w-full btn-primary text-xl disabled:opacity-60 disabled:cursor-not-allowed">
            {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent ✓' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}
