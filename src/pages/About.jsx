
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function About() {
  return (
    <div className="px-6 pt-12 pb-4 md:py-20 max-w-4xl mx-auto space-y-16 md:space-y-24">
      <section>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight break-words">Professional problem-solver.<br/><span className="text-amber-400">Renaissance man. Renaissance results may vary.</span></h2>
        <div className="space-y-8 text-slate-300 leading-relaxed text-lg font-light max-w-2xl">
          <p>I've spent 20+ years in technical support and customer service, solving problems for people who are usually already frustrated by the time they call. I like that work. Troubleshooting access, training a new hire, or untangling a process nobody remembers the reason for anymore: that's where I do my best work.</p>
          <p>I've worked across enterprise SaaS platforms, identity and access management, mobile app support, and high-volume customer care. I've been fully remote since 2019, and I'm good at it.</p>
          <p>On the side, I write books: nonfiction about companies and events that get forgotten once the news cycle moves on, fiction under the pen name Lars C. Hallene, plus AI-parody novels and a coloring book, because apparently one genre wasn't enough.</p>
          <p>I also design merch under Bad Decisions and build Android apps under Blueprint Kit, because sitting still was never really an option. As if that wasn't enough, I'm a movie buff with a standing seat on a podcast panel that debates whether certain films qualify as art or something considerably less flattering. I'll leave it at that.</p>
          <p className="italic font-medium text-white text-base border-l-2 border-amber-500/40 pl-6">The resume says Charles. The rest of the world says Chuck. Both are correct; one is more fun at parties. Either way, 20+ years of experience is in there.</p>
        </div>
      </section>

      <section>
        <ScrollReveal className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6 gap-6">
            <h3 className="text-3xl font-serif font-bold text-white">Resume Highlights</h3>
            <a href="/Chuck_Ackerman_Resume.pdf" target="_blank" rel="noreferrer" className="btn-primary" download="Chuck_Ackerman_Resume.pdf">Download Full Resume (PDF)</a>
        </ScrollReveal>
        
        <div className="space-y-10">
          <div className="pb-10 border-b border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-2 gap-2">
              <h4 className="text-2xl font-bold text-white">Technical Support Specialist</h4>
              <span className="text-sm font-bold text-amber-400 whitespace-nowrap">2019 – Present</span>
            </div>
            <p className="text-sm text-slate-400 font-bold mb-4">Element Fleet Management &bull; Remote</p>
            <p className="text-slate-300 text-lg font-light leading-relaxed max-w-2xl">Handle high-volume inbound support calls through a multi-line call system, manage account provisioning and access permissions, and conduct quality assurance reviews for a four-person team. Deliver monthly training webinars and support the company's mobile app for Android and iOS.</p>
          </div>

          <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-2 gap-2">
              <h4 className="text-2xl font-bold text-white">Customer Support Consultant</h4>
              <span className="text-sm font-bold text-slate-400 whitespace-nowrap">2004 – 2019</span>
            </div>
            <p className="text-sm text-slate-400 font-bold mb-4">Element Fleet Management</p>
            <p className="text-slate-300 text-lg font-light leading-relaxed max-w-2xl">Served as primary phone support for customers dealing with accidents, roadside incidents, and vehicle repairs, auditing repair estimates and claims documentation for accuracy. Also helped shape the design of the company's original BlackBerry mobile app.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
