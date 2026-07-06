
import React from 'react';

export default function About() {
  return (
    <div className="px-6 pt-12 pb-4 md:py-20 max-w-4xl mx-auto space-y-16 md:space-y-24">
      <section className="glass-card p-8 md:p-16">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight break-words">Professional problem-solver.<br/><span className="text-amber-400">Accidental historian.</span></h2>
        <div className="space-y-8 text-slate-300 leading-relaxed text-lg font-light">
          <p>I've spent 20+ years in technical support and customer service, helping people navigate complex systems and solving problems for users who are often frustrated before they ever reach out. I genuinely enjoy that challenge. Whether it's troubleshooting platform access, training a new user, or untangling a process that stopped making sense somewhere along the way — that's where I do my best work.</p>
          <p>My background spans enterprise SaaS platforms, identity and access management, mobile application support, and high-volume customer care environments. I've been fully remote since 2019 and thrive in distributed team settings.</p>
          <p>On the side, I write books. Nonfiction about the companies and events that shaped how we live, shop, and interact — the kind of stories that get quietly buried when a brand collapses or a trend fades out of the news cycle. Fiction has arrived — under the pen name Lars C. Hallene. Someone has to write it all down.</p>
          <p>Outside of work and writing, I'm a movie buff with a custom home theater setup and a standing seat on a podcast panel that debates whether certain films qualify as art or something considerably less flattering. I'll leave it at that.</p>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl mt-8">
            <p className="italic font-medium text-white text-base">The resume says Charles. The rest of the world says Chuck. Both are correct; one is more fun at parties. Either way, 20+ years of experience is in there.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6 gap-6">
            <h3 className="text-3xl font-serif font-bold text-white">Resume Highlights</h3>
            <a href="/Chuck_Ackerman_Resume.pdf" target="_blank" rel="noreferrer" className="btn-primary" download="Chuck_Ackerman_Resume.pdf">Download Full Resume (PDF)</a>
        </div>
        
        <div className="space-y-8 relative">
          <div className="absolute left-6 top-6 bottom-6 w-px bg-amber-500/30 hidden md:block"></div>
          
          <div className="glass-card p-6 md:p-10 md:ml-12 relative">
            <div className="absolute -left-[3.25rem] top-12 w-6 h-6 rounded-full bg-amber-500 border-4 border-slate-900 hidden md:block"></div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h4 className="text-2xl font-bold text-white">Technical Support Specialist</h4>
              <span className="text-sm font-bold tracking-widest uppercase text-amber-400 bg-amber-400/10 px-4 py-2 rounded-full mt-4 md:mt-0">2019 – Present</span>
            </div>
            <p className="text-sm uppercase tracking-widest text-slate-500 font-bold mb-6">Element Fleet Management &bull; Remote</p>
            <p className="text-slate-300 text-lg font-light leading-relaxed">Provide front-line technical and account support, managing user provisioning, password administration, and role-based access. Troubleshoot customer-facing mobile apps and deliver monthly training webinars for internal staff and external users.</p>
          </div>
          
          <div className="glass-card p-6 md:p-10 md:ml-12 relative opacity-80 hover:opacity-100 transition-opacity">
            <div className="absolute -left-[3.25rem] top-12 w-6 h-6 rounded-full bg-slate-700 border-4 border-slate-900 hidden md:block"></div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h4 className="text-2xl font-bold text-white">Customer Support Consultant</h4>
              <span className="text-sm font-bold tracking-widest uppercase text-slate-400 bg-slate-800 px-4 py-2 rounded-full mt-4 md:mt-0">2004 – 2019</span>
            </div>
            <p className="text-sm uppercase tracking-widest text-slate-500 font-bold mb-6">Element Fleet Management</p>
            <p className="text-slate-300 text-lg font-light leading-relaxed">Served as primary phone support contact, specializing in de-escalating stressful situations and coordinating next steps. Reviewed and audited repair estimates for accuracy and provided cross-functional customer care support.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
