import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedGradient from '../components/AnimatedGradient';
import NewsletterSignup from '../components/NewsletterSignup';
import { books, shopItems } from '../data';

export default function Home() {
  const [latestPost, setLatestPost] = useState(null);
  const [loadingPost, setLoadingPost] = useState(true);

  useEffect(() => {
    // Typewriter effect
    const el = document.getElementById('hero-typing');
    if (!el || el.textContent) return;
    const text = 'Chuck Ackerman';
    let i = 0;
    let timeoutId;
    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        timeoutId = setTimeout(type, 90 + Math.random() * 40);
      }
    }
    timeoutId = setTimeout(type, 400);

    // Fetch latest blog post
    const feedUrl = encodeURIComponent('https://chuckackerman.blogspot.com/feeds/posts/default?alt=rss');
    const url = `https://api.rss2json.com/v1/api.json?rss_url=${feedUrl}&api_key=gdijogjiorta9rud0xljuzdvxu0xltgyqgzkhwjz&count=1&_=${Date.now()}`;
    
    fetch(url)
      .then(r => r.json())
      .then(data => {
        if (data.status === 'ok' && data.items?.length > 0) {
          setLatestPost(data.items[0]);
        }
        setLoadingPost(false);
      })
      .catch(e => {
        console.error(e);
        setLoadingPost(false);
      });

    return () => clearTimeout(timeoutId);
  }, []);

  // Utility to extract a clean preview from HTML content
  const getPreviewText = (htmlContent) => {
    if (!htmlContent) return '';
    const tmp = document.createElement('DIV');
    tmp.innerHTML = htmlContent;
    const text = tmp.textContent || tmp.innerText || '';
    return text.length > 250 ? text.substring(0, 250) + '...' : text;
  };

  return (
    <div className="px-6 max-w-7xl mx-auto space-y-32 mb-32">
      
      <AnimatedGradient className="pt-12 pb-12 text-center relative rounded-3xl overflow-hidden mt-8 shadow-2xl border border-white/10">
        <div className="relative z-10 flex flex-col items-center px-4 md:px-8">
          <p className="text-sm font-bold tracking-[0.3em] text-amber-400 uppercase mb-8 drop-shadow-md">
            Customer Service and Technical Support Professional &bull; Author &bull; Designer
          </p>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 tracking-tight">
            <span id="hero-typing"></span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-12 drop-shadow-sm font-light">
            20+ years solving problems, supporting people, and making technology work the way it's supposed to. Also writes books, designs viral t-shirts and innovative digital products, and occasionally says things on a podcast that he probably shouldn't.
          </p>
        </div>
      </AnimatedGradient>

      <section className="glass-card p-12 md:p-20 flex flex-col md:flex-row gap-16 items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 blur-[80px] rounded-full"></div>
        <div className="flex-1 space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">Professional problem-solver.<br/><span className="text-amber-400">Accidental historian.</span></h2>
          <p className="text-slate-300 text-xl leading-relaxed font-light">I've spent 20+ years in technical support and customer service, helping people navigate complex systems and solving problems for users who are often frustrated before they ever reach out.</p>
          <Link to="/about" className="btn-primary mt-4">Read Full Bio & Resume</Link>
        </div>
      </section>

      {/* NEW BLOG SECTION */}
      <section className="space-y-12">
        <div className="text-center">
          <p className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Latest Writing</p>
          <h2 className="text-4xl font-serif font-bold text-white">The Chuck Stops Here</h2>
        </div>
        
        <div className="glass-card p-8 md:p-12 relative overflow-hidden group">
          {loadingPost ? (
             <p className="text-amber-400 animate-pulse text-center">Loading latest post...</p>
          ) : latestPost ? (
            <div className="space-y-6">
              <time className="text-amber-400 font-bold tracking-wider text-sm uppercase block">
                {new Date(latestPost.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
              <h3 className="text-3xl font-serif font-bold text-white">{latestPost.title}</h3>
              <p className="text-slate-300 text-lg leading-relaxed italic">
                {getPreviewText(latestPost.content || latestPost.description)}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Link to="/blog" className="btn-primary">Read full post</Link>
                <Link to="/blog" className="btn-outline">See all posts on the blog page</Link>
              </div>
            </div>
          ) : (
            <p className="text-slate-400 text-center">No posts available.</p>
          )}
        </div>
        
        <NewsletterSignup />
      </section>

      {/* BOOKS SECTION */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-serif font-bold text-white">Latest Releases</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="glass-card flex flex-col md:flex-row overflow-hidden group">
            <div className="w-full md:w-2/5 p-6 flex items-center justify-center bg-black/20 border-b md:border-b-0 md:border-r border-white/5">
               <img src={books[3].cover} alt={books[3].title} className="w-full max-w-[200px] shadow-2xl rounded-sm transform group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
              <p className="text-amber-400 font-bold uppercase tracking-widest text-xs mb-3">Fiction</p>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">{books[3].title}</h3>
              <p className="text-slate-400 mb-4 font-medium text-sm">By {books[3].author}</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">{books[3].description}</p>
              <div className="mt-auto">
                <a href={books[3].link} target="_blank" rel="noreferrer" className="btn-primary text-sm py-2 px-4">Get the Book</a>
              </div>
            </div>
          </div>

          <div className="glass-card flex flex-col md:flex-row overflow-hidden group">
            <div className="w-full md:w-2/5 p-6 flex items-center justify-center bg-black/20 border-b md:border-b-0 md:border-r border-white/5">
               <img src={books[0].cover} alt={books[0].title} className="w-full max-w-[200px] shadow-2xl rounded-sm transform group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
              <p className="text-amber-400 font-bold uppercase tracking-widest text-xs mb-3">Non-Fiction</p>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">{books[0].title}</h3>
              <p className="text-slate-400 mb-4 font-medium text-sm">By {books[0].author}</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">{books[0].description}</p>
              <div className="mt-auto">
                <a href={books[0].link} target="_blank" rel="noreferrer" className="btn-primary text-sm py-2 px-4">Get the Book</a>
              </div>
            </div>
          </div>

        </div>
        <div className="text-center mt-8">
          <Link to="/books" className="btn-outline">View All Books</Link>
        </div>
      </section>

      {/* SHOP SECTION */}
      <section className="space-y-12">
        <div className="text-center">
          <p className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Shop</p>
          <h2 className="text-4xl font-serif font-bold text-white">Things Chuck makes and sells</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {shopItems.slice(0, 2).map((item, index) => (
            <Link to={item.link} key={index} className="glass-card p-10 flex flex-col items-center text-center group hover:bg-slate-800/80 overflow-hidden">
              <div className="w-full h-48 mb-8 overflow-hidden rounded-xl bg-slate-900 border border-white/5 relative">
                {item.image ? (
                   <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                ) : (
                   <div className="w-full h-full flex items-center justify-center text-slate-700 font-serif text-4xl">?</div>
                )}
              </div>
              <h3 className="font-serif font-bold text-white text-3xl group-hover:text-amber-400 transition-colors mb-4">{item.title}</h3>
              <p className="text-slate-300 text-lg mb-8 flex-grow">{item.org}</p>
              <span className="text-amber-500 font-bold uppercase tracking-widest text-sm inline-flex items-center gap-2 mt-auto">
                View More <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/shop" className="btn-outline">View All Shop Items</Link>
        </div>
      </section>



      <section className="relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="text-center mb-16 relative z-10">
          <p className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Get in touch</p>
          <h2 className="text-4xl font-serif font-bold text-white">Let's connect</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
          <a href="https://www.linkedin.com/in/chuck-ackerman/" target="_blank" rel="noreferrer" className="glass-card p-6 sm:p-10 text-center hover:bg-slate-800/80">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">LinkedIn</p>
            <p className="text-lg sm:text-xl font-bold text-white break-all sm:break-words">linkedin.com/in/chuck-ackerman</p>
          </a>
          <a href="https://amazon.com/author/chuckackerman" target="_blank" rel="noreferrer" className="glass-card p-6 sm:p-10 text-center hover:bg-slate-800/80">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Amazon</p>
            <p className="text-lg sm:text-xl font-bold text-white break-all sm:break-words">amazon.com/author/chuckackerman</p>
          </a>
          <Link to="/contact" className="sm:col-span-2 glass-card p-6 sm:p-12 text-center bg-amber-900/20 hover:bg-amber-900/40 border-amber-500/30">
             <p className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-4">Send a message</p>
             <p className="text-xl sm:text-2xl font-serif font-bold text-white mb-6">Have a question, feedback, or opportunity to share?</p>
             <p className="btn-primary inline-flex text-center">Open contact form</p>
          </Link>
        </div>
      </section>

    </div>
  );
}
