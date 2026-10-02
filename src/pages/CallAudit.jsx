import React from 'react';
import { callAuditTiers } from '../data';
import CountUp from '../components/CountUp';
import ScrollReveal from '../components/ScrollReveal';

export default function CallAudit() {
  return (
    <div className="px-6 pt-6 pb-4 md:pt-10 md:pb-16 max-w-6xl mx-auto">
      <div className="text-center space-y-6 mb-10 md:mb-14 relative">
        <h2 className="text-5xl font-serif font-bold text-white relative z-10 tracking-tight">5-Star Call Audit</h2>
        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-light relative z-10">
          I listen to your recorded customer service calls and send back a written report: what's working, what's costing you customers, and how to fix it. Backed by <CountUp end={20} suffix="+" className="text-amber-400 font-bold" /> years actually doing this job, not consulting on it from the outside.
        </p>
      </div>

      <ScrollReveal className="text-center mb-10">
        <h3 className="text-3xl font-serif font-bold text-white">Choose Your Audit</h3>
        <p className="text-slate-400 mt-3">All options include a detailed written report. No hidden fees.</p>
      </ScrollReveal>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto items-start">
        {callAuditTiers.map((tier, index) => (
          <a key={index} href={tier.link} target="_blank" rel="noopener noreferrer" className={`rounded-2xl p-8 flex flex-col border transition-all duration-300 hover:-translate-y-1 ${tier.popular ? 'border-amber-500 bg-slate-900/60 hover:border-amber-400' : 'border-white/10 bg-slate-900/30 hover:border-white/20 hover:bg-slate-900/50'}`}>
            <h3 className="text-xl font-bold uppercase tracking-widest text-slate-400 mb-4 text-center">{tier.name}</h3>
            {tier.popular && (
              <div className="mb-4 self-center bg-amber-500 text-slate-950 text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">Most Popular</div>
            )}
            <div className="text-6xl font-serif font-bold text-white mb-6 text-center">{tier.price}</div>
            <p className="text-slate-300 leading-relaxed text-lg mb-8 text-center">{tier.description}</p>

            <ul className="mb-8 space-y-4">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <span className="text-amber-500 font-bold">
                    {feature.startsWith('+') ? '+' : '✓'}
                  </span>
                  <span>{feature.startsWith('+') ? feature.substring(1).trim() : feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <span className={`w-full ${tier.popular ? 'btn-primary' : 'btn-outline'}`}>Book on Fiverr</span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 mb-4 max-w-md mx-auto text-center border-t border-slate-800/60 pt-8">
        <p className="text-slate-400 text-sm">
          <strong>Important Note:</strong> To avoid conflicts of interest, I cannot offer this service to Fleet Management companies at this time.
        </p>
      </div>
    </div>
  );
}
