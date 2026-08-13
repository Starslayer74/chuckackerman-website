import React from 'react';

export default function Software() {
  return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">Blueprint Kit Software</h1>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
          The Android Development Lab. Tools and utilities designed for focused execution.
        </p>
      </div>

      <div className="glass-card p-10 md:p-14 border border-white/5 mb-20 relative overflow-hidden flex flex-col lg:flex-row gap-12 items-center">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="flex-1 relative z-10 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
            <img 
              src="/app-icon.png" 
              alt="Ultimate Wedding Planner Icon" 
              className="w-24 h-24 rounded-2xl shadow-2xl border border-white/10"
              onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=Icon" }}
            />
            <div>
              <h2 className="text-3xl font-serif font-bold text-white">Ultimate Wedding Planner</h2>
              <div className="flex items-center gap-2 mt-2">
                <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Available Now</span>
              </div>
            </div>
          </div>
          
          <div className="text-slate-300 space-y-4 leading-relaxed">
            <p className="font-medium text-amber-200">
              You're only getting married once. You shouldn't have to pay monthly for it.
            </p>
            <p>
              Ultimate Wedding Planner gives you everything you need in one place — guest management with seating charts, full budget and expense tracking, vendor coordination, task scheduling, ceremony timeline, and a gifts tracker.
            </p>
            <p>
              Your data never leaves your device. No cloud. No accounts. No data shared with vendors. Your wedding details belong to you.
            </p>
            <p>
              Free to try. Unlock full access forever for a one-time cost of $4.99. Users also receive an exclusive discount code for custom invitations and thank you cards through our Blueprint Kit Etsy shop.
            </p>
          </div>

          <div className="pt-6">
            <a 
              href="https://play.google.com/store/apps/details?id=com.blueprintkit.ultimateweddingplanner&pcampaignid=web_share" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary inline-flex items-center gap-3"
            >
              Get it on Google Play
            </a>
          </div>
        </div>

        <div className="flex-1 w-full relative z-10">
          <div className="grid grid-cols-3 gap-4">
            <img src="/screenshot1.png" alt="App Screenshot 1" className="rounded-2xl shadow-2xl border border-white/10 w-full object-cover" onError={(e) => { e.target.src = "https://via.placeholder.com/300x600?text=Screenshot+1" }} />
            <img src="/screenshot2.png" alt="App Screenshot 2" className="rounded-2xl shadow-2xl border border-white/10 w-full object-cover" onError={(e) => { e.target.src = "https://via.placeholder.com/300x600?text=Screenshot+2" }} />
            <img src="/screenshot3.png" alt="App Screenshot 3" className="rounded-2xl shadow-2xl border border-white/10 w-full object-cover" onError={(e) => { e.target.src = "https://via.placeholder.com/300x600?text=Screenshot+3" }} />
          </div>
        </div>
      </div>

      <div className="mt-32">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-serif font-bold text-white">In Development</h3>
          <p className="text-slate-500 mt-2">More tools coming soon</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[1, 2].map((item) => (
            <div key={item} className="glass-card p-8 border border-white/5 opacity-60 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-slate-800/50 flex items-center justify-center mb-6 border border-white/5">
                <svg className="w-8 h-8 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-300 mb-2">Secret Project {item}</h4>
              <p className="text-slate-500 text-sm">Currently in active development at the Blueprint Kit labs.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
