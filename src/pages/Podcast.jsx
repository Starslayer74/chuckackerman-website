import React, { useEffect, useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Podcast() {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the RSS feed directly and parse it client-side.
    // Anchor.fm's feed sends permissive CORS headers, so no proxy/API is needed
    // (avoids the shared-quota failures the rss2json service was hitting).
    fetch('https://anchor.fm/s/10f2fe4cc/podcast/rss')
      .then(r => r.text())
      .then(text => {
        const xml = new DOMParser().parseFromString(text, 'text/xml');
        if (xml.querySelector('parsererror')) {
          throw new Error('Could not parse podcast feed');
        }
        const items = [...xml.querySelectorAll('item')].map(item => ({
          title: item.querySelector('title')?.textContent || '',
          pubDate: item.querySelector('pubDate')?.textContent || '',
          description: item.querySelector('description')?.textContent || '',
          enclosure: { link: item.querySelector('enclosure')?.getAttribute('url') || '' }
        }));
        setEpisodes(items);
        setLoading(false);
      })
      .catch(e => {
        setError(e.toString());
        setLoading(false);
      });
  }, []);

  // Format the pubDate reliably (standard RSS822 format, natively parseable)
  function formatDate(d) {
    if (!d) return '';
    return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  // Strip HTML and truncate for a short catalog-list synopsis
  function getPreviewText(html, maxLength = 180) {
    if (!html) return '';
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    const text = tmp.textContent || tmp.innerText || '';
    return text.length > maxLength ? text.slice(0, maxLength).trim() + '...' : text;
  }

  const latestEp = episodes.length > 0 ? episodes[0] : null;
  const catalogEps = episodes.length > 1 ? episodes.slice(1) : [];

  return (
    <div className="px-6 pt-6 pb-4 md:pt-10 md:pb-16 max-w-3xl mx-auto space-y-10">

      <header className="text-center space-y-4">
        <div className="inline-block px-4 py-1 rounded-full bg-red-900/30 border border-red-500/50 mb-2">
          <p className="text-red-400 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            NSFW / Explicit Content
          </p>
        </div>
        <h1 className="text-5xl font-serif font-bold text-white mb-4">Art or Fart</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          A roundtable movie podcast that occasionally says things we probably shouldn't. Join us as we debate whether cinema's most debated films are high art or just plain garbage.
        </p>
      </header>

      {/* Loading and Error States */}
      {loading && <p className="text-amber-400 animate-pulse text-center py-12">Fetching episode catalog...</p>}
      {error && <p className="text-red-400 text-center py-12 bg-red-900/20 rounded-xl border border-red-900">Error loading catalog: {error}</p>}
      {!loading && !error && episodes.length === 0 && (
         <p className="text-slate-400 text-center py-12">No episodes found.</p>
      )}

      {/* Latest Episode Block */}
      {!loading && !error && latestEp && (
        <section className="pt-4">
          <div className="space-y-6">
            <div>
              <p className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-2">Latest Episode</p>
              <p className="text-slate-400 text-sm mb-3">{formatDate(latestEp.pubDate)}</p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight">{latestEp.title}</h2>
            </div>

            {latestEp.enclosure && latestEp.enclosure.link && (
              <div className="w-full bg-slate-900/60 p-4 md:px-6 md:py-4 rounded-xl border border-white/5">
                <audio controls className="w-full [color-scheme:dark]" src={latestEp.enclosure.link}>
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}

            <div
              className="prose prose-invert prose-sm text-slate-300 mx-auto text-left md:text-center pt-6 border-t border-white/10 prose-a:text-amber-400 hover:prose-a:text-amber-300"
              dangerouslySetInnerHTML={{__html: latestEp.description}}
            />
          </div>

          <div className="pt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://open.spotify.com/show/1y1FeAZRezhuGNvMN1mxrC"
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex items-center gap-2 text-sm px-6 py-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.241 1.2zM20.16 9.6C16.44 7.38 9.54 7.2 5.58 8.4c-.6.18-1.2-.18-1.38-.78-.18-.6.18-1.2.78-1.38 4.68-1.38 12.18-1.14 16.5 1.44.54.3.72 1.02.42 1.56-.3.54-1.02.72-1.56.36z"/></svg>
              Open in Spotify
            </a>
            <a
              href="https://anchor.fm/s/10f2fe4cc/podcast/rss"
              target="_blank"
              rel="noreferrer"
              className="btn-outline inline-flex items-center gap-2 text-sm px-6 py-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 3a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
              Subscribe via RSS
            </a>
          </div>
        </section>
      )}

      {/* Full Episode Catalog */}
      {!loading && !error && catalogEps.length > 0 && (
        <section>
          <ScrollReveal><h2 className="text-3xl font-serif font-bold text-white text-center mb-8">All Episodes</h2></ScrollReveal>
          <div className="space-y-8 divide-y divide-white/5">
            {catalogEps.map((ep, index) => (
              <div key={index} className="pt-8 first:pt-0">
                <p className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-2">{formatDate(ep.pubDate)}</p>
                <h3 className="text-xl font-serif font-bold text-white leading-tight mb-3">{ep.title}</h3>
                {ep.description && (
                  <p className="text-slate-400 text-sm mb-4 max-w-xl">{getPreviewText(ep.description)}</p>
                )}
                {ep.enclosure && ep.enclosure.link && (
                  <audio controls className="w-full [color-scheme:dark]" src={ep.enclosure.link}>
                    Your browser does not support the audio element.
                  </audio>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
