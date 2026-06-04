import React from 'react';
import { Link } from 'react-router-dom';
import { callAuditTiers } from '../data';

export default function CallAudit() {
  return (
    <div className="px-6 py-20 max-w-6xl mx-auto">
      <div className="text-center space-y-8 mb-24 relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-600/20 blur-[120px] rounded-full pointer-events-none"></div>
        <span className="text-7xl block mb-8 relative z-10">📞</span>
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-white relative z-10 tracking-tight">Customer Service Call Audit</h2>
        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-light relative z-10">
          I listen to your recorded customer service calls and deliver a written report on exactly what's working, what's costing you customers, and how to fix it — backed by 30 years of real-world experience.
        </p>
      </div>
      
      <div className="text-center mb-16">
        <h3 className="text-3xl font-serif font-bold text-white">Choose Your Audit</h3>
        <p className="text-slate-400 mt-4">Both options include a detailed written report. No hidden fees.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-24 items-start">
        {callAuditTiers.map((tier, index) => (
          <div key={index} className={`glass-card p-10 flex flex-col ${tier.popular ? 'border-amber-500/50 shadow-amber-900/30 shadow-2xl scale-105 z-10 relative bg-slate-900/80' : 'bg-slate-900/40 mt-4'}`}>
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-700 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg">Most Popular</div>
            )}
            <h3 className="text-xl font-bold uppercase tracking-widest text-slate-400 mb-4 text-center">{tier.name}</h3>
            <div className="text-6xl font-serif font-bold text-white mb-6 text-center">{tier.price}</div>
            <p className="text-slate-300 leading-relaxed text-lg mb-8 text-center">{tier.description}</p>
            
            <ul className="mb-10 space-y-4">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <span className={feature.startsWith('+') ? "text-amber-500 font-bold" : "text-amber-500 font-bold"}>
                    {feature.startsWith('+') ? '+' : '✓'}
                  </span>
                  <span>{feature.startsWith('+') ? feature.substring(1).trim() : feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <a href={tier.link} className={`w-full ${tier.popular ? 'btn-primary' : 'btn-outline'}`}>Book this Audit</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
