import React from 'react';

export default function Podcast() {
  return (
    <div className="px-6 pt-12 pb-4 md:py-20 max-w-5xl mx-auto space-y-16">
      
      <header className="text-center space-y-6">
        <div className="inline-block px-4 py-1 rounded-full bg-red-900/30 border border-red-500/50 mb-4">
          <p className="text-red-400 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            NSFW / Explicit Content
          </p>
        </div>
        <h1 className="text-5xl font-serif font-bold text-white mb-4">Art or Fart</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          A roundtable movie podcast that occasionally says things we probably shouldn't. Join us as we debate whether cinema's most debated films are high art or just plain garbage.
        </p>
        <div className="pt-4">
          <a 
            href="https://open.spotify.com/show/1y1FeAZRezhuGNvMN1mxrC" 
            target="_blank" 
            rel="noreferrer" 
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.241 1.2zM20.16 9.6C16.44 7.38 9.54 7.2 5.58 8.4c-.6.18-1.2-.18-1.38-.78-.18-.6.18-1.2.78-1.38 4.68-1.38 12.18-1.14 16.5 1.44.54.3.72 1.02.42 1.56-.3.54-1.02.72-1.56.36z"/></svg>
            Open in Spotify
          </a>
        </div>
      </header>

      <section className="glass-card p-6 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">Latest Episode</h2>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-black/50">
            <iframe 
              style={{ borderRadius: '12px' }} 
              src="https://open.spotify.com/embed/show/1y1FeAZRezhuGNvMN1mxrC?utm_source=generator&theme=0" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              title="Spotify Podcast Embed"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}
