
import React from 'react';

export default function Contact() {
  return (
    <div className="px-6 pt-12 pb-4 md:py-20 max-w-3xl mx-auto">
      <header className="mb-16 text-center">
        <p className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Get in touch</p>
        <h2 className="text-5xl font-serif font-bold text-white mb-6">Send Chuck a Message</h2>
        <p className="text-slate-300 text-lg font-light">Whether you're a reader, a recruiter, or just someone who has something to say — the form below goes straight to Chuck. He reads everything. <strong className="text-yellow-500 font-bold">EVERYTHING.</strong></p>
      </header>

      <div className="glass-card p-8 md:p-16">
        <form action="https://formspree.io/f/mqkrbzyj" method="POST" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Your Name</label>
              <input type="text" id="name" name="name" placeholder="First and last name" required className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all" />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Your Email Address</label>
              <input type="email" id="email" name="_replyto" placeholder="you@example.com" required className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all" />
            </div>
          </div>
          
          <div>
            <label htmlFor="reason" className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Reason for contact</label>
            <select id="reason" name="reason" required defaultValue="" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all appearance-none cursor-pointer">
              <option value="" disabled className="bg-slate-900">Select a reason...</option>
              <option value="Call Audit" className="bg-slate-900">Call Audit inquiry</option>
              <option value="Professional Inquiry" className="bg-slate-900">Professional &amp; business inquiry</option>
              <option value="Book Question" className="bg-slate-900">Question about a book</option>
              <option value="Feedback" className="bg-slate-900">Feedback</option>
              <option value="Fan Mail" className="bg-slate-900">Fan mail</option>
              <option value="Lars Hallene Fiction" className="bg-slate-900">Question about Lars C. Hallene / fiction</option>
              <option value="Other" className="bg-slate-900">Something else</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Your Message</label>
            <textarea id="message" name="message" rows="6" placeholder="Say whatever's on your mind..." required className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-y"></textarea>
          </div>
          
          <button type="submit" className="w-full btn-primary text-xl">Send Message</button>
        </form>
      </div>
    </div>
  );
}
