import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import NewsletterSignup from '../components/NewsletterSignup';
import DockRow from '../components/DockRow';
import ScrollReveal from '../components/ScrollReveal';
import { fetchBlogPosts } from '../lib/blogFeed';
import { books } from '../data';

export default function Home() {
  const [latestPost, setLatestPost] = useState(null);
  const [loadingPost, setLoadingPost] = useState(true);
  const heroWrapRef = useRef(null);
  const heroTextRef = useRef(null);

  const latestBooks = [
    { label: "Fiction", book: books.find(b => b.category === 'fiction') },
    { label: "Non-Fiction", book: books.find(b => b.category === 'non-fiction') },
    { label: "AI Parody", book: books.find(b => b.category === 'parody') },
    { label: "Activity", book: books.find(b => b.category === 'coloring') }
  ].filter(item => item.book);

  useEffect(() => {
    // Typewriter effect, then fly the name up into the nav logo and collapse the hero
    const el = document.getElementById('hero-typing');
    if (!el || el.textContent) return;

    // Revisiting Home after the fly-up already ran leaves the nav logo at
    // inline opacity:1 (gsap set it directly, which outlives this
    // component's unmount and overrides the opacity-0 class below). Clear
    // it so the logo hides again while the hero retypes.
    const navLogo = document.querySelector('nav a[href="/"]');
    if (navLogo) gsap.set(navLogo, { clearProps: 'opacity' });

    const text = 'Chuck Ackerman';
    let i = 0;
    let timeoutId;
    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        timeoutId = setTimeout(type, 90 + Math.random() * 40);
      } else {
        timeoutId = setTimeout(flyToNav, 700);
      }
    }
    timeoutId = setTimeout(type, 400);

    function flyToNav() {
      const navLogo = document.querySelector('nav a[href="/"]');
      const heroText = heroTextRef.current;
      const heroWrap = heroWrapRef.current;
      if (!navLogo || !heroText || !heroWrap) return;

      const navRect = navLogo.getBoundingClientRect();
      const heroRect = heroText.getBoundingClientRect();
      const scale = navRect.height / heroRect.height;
      const deltaX = (navRect.left + navRect.width / 2) - (heroRect.left + heroRect.width / 2);
      const deltaY = (navRect.top + navRect.height / 2) - (heroRect.top + heroRect.height / 2);

      gsap.to(heroText, {
        x: deltaX,
        y: deltaY,
        scale,
        duration: 0.9,
        ease: 'power2.inOut'
      });
      gsap.to(heroText, {
        opacity: 0,
        duration: 0.3,
        delay: 0.6,
        ease: 'power1.in'
      });
      gsap.to(navLogo, {
        opacity: 1,
        duration: 0.3,
        delay: 0.6,
        ease: 'power1.in'
      });
      gsap.to(heroWrap, {
        height: 0,
        opacity: 0,
        marginTop: 0,
        marginBottom: 0,
        duration: 0.9,
        ease: 'power2.inOut',
        delay: 0.15,
        overwrite: true
      });
    }

    // Fetch latest blog post
    fetchBlogPosts({ maxResults: 1 })
      .then(posts => {
        if (posts.length > 0) setLatestPost(posts[0]);
      })
      .catch(e => console.error(e))
      .finally(() => setLoadingPost(false));

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
    <div className="px-6 max-w-7xl mx-auto space-y-12 md:space-y-20">
      
      <div className="space-y-8 md:space-y-10">
        <div ref={heroWrapRef} className="overflow-hidden">
          <div className="pt-10 pb-10 text-center mt-8">
            <div className="flex flex-col items-center px-4 md:px-8">
              <h1 ref={heroTextRef} className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tight">
                <span id="hero-typing"></span>
              </h1>
            </div>
          </div>
        </div>

        <section className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">Professional problem-solver.<br/><span className="text-amber-400">Renaissance man. Renaissance results may vary.</span></h2>
            <p className="text-slate-300 text-xl leading-relaxed font-light max-w-2xl">
              20+ years in technical support and customer service, solving problems for people who are usually frustrated before they ever reach out. Outside of that, I write books across four genres, sit on a movie podcast panel, build Android apps under Blueprint Kit, and run a merch line of shirts and gear.
            </p>
            <Link to="/about" className="btn-primary mt-4">Read Full Bio & Resume</Link>
          </div>
        </section>
      </div>

      {/* AT A GLANCE — unified tile grid replacing the old stack of look-alike sections */}
      <div className="space-y-8 md:space-y-10">
      <section className="space-y-8">
        <ScrollReveal>
          <h2 className="text-3xl font-serif font-bold text-white text-center">Everything, At a Glance</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Latest Writing — large tile */}
          <div className="md:col-span-2 glass-card p-8 md:p-10 relative overflow-hidden group flex flex-col">
            <p className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4">Latest Writing</p>
            {loadingPost ? (
              <p className="text-amber-400 animate-pulse">Loading latest post...</p>
            ) : latestPost ? (
              <div className="space-y-4 flex-grow flex flex-col">
                <time className="text-amber-400 font-bold tracking-wider text-xs uppercase block">
                  {new Date(latestPost.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
                <h3 className="text-2xl font-serif font-bold text-white">{latestPost.title}</h3>
                <p className="text-slate-300 leading-relaxed italic flex-grow max-w-lg">
                  {getPreviewText(latestPost.content || latestPost.description)}
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link to="/blog" className="btn-primary text-sm py-2 px-5">Read full post</Link>
                  <Link to="/blog" className="btn-outline text-sm py-2 px-5">See all posts</Link>
                </div>
                <div className="pt-4 mt-2 border-t border-white/10 max-w-sm">
                  <NewsletterSignup compact />
                </div>
              </div>
            ) : (
              <p className="text-slate-400">No posts available.</p>
            )}
          </div>

          {/* Books — tall tile */}
          <div className="flex flex-col">
            <p className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4">Books</p>
            <div className="grid grid-cols-2 gap-4 flex-grow">
              {latestBooks.map((item, index) => (
                <a key={index} href={item.book.link} target="_blank" rel="noreferrer" className="flex flex-col items-center text-center group">
                  <div className="w-full aspect-[2/3] flex items-center justify-center mb-2">
                    <img src={item.book.cover} alt={item.book.title} className="max-w-full max-h-full shadow-xl shadow-black/60 rounded-sm transform group-hover:-translate-y-1 transition-transform duration-300 object-contain" />
                  </div>
                  <p className="text-slate-400 text-xs group-hover:text-amber-400 transition-colors">{item.label}</p>
                </a>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              <Link to="/books" className="text-amber-400 font-bold hover:text-white transition-colors uppercase tracking-widest text-xs">View All Books</Link>
              <p className="text-slate-400 text-xs">
                <em>As an Amazon Associate, I earn from qualifying purchases.</em>
              </p>
            </div>
          </div>

        </div>

        <DockRow className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">

          {/* Shop */}
          <a href="https://bad-decisions.dashery.com/" target="_blank" rel="noreferrer" className="group block text-center">
            <div className="dock-icon w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden shadow-lg border border-white/10 transition-transform duration-150 ease-out" style={{ transformOrigin: 'bottom center' }}>
              <img src="/bdicon.png" alt="Bad Decisions Designs" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-serif font-bold text-white text-base group-hover:text-amber-400 transition-colors mb-1">Bad Decisions Designs</h3>
            <p className="text-slate-400 text-xs">Apparel &amp; merch</p>
          </a>

          {/* Podcast */}
          <Link to="/podcast" className="group block text-center">
            <div className="dock-icon w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden shadow-lg border border-white/10 transition-transform duration-150 ease-out" style={{ transformOrigin: 'bottom center' }}>
              <img src="/spotifygreen.png" alt="Art or Fart on Spotify" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-serif font-bold text-white text-base group-hover:text-amber-400 transition-colors mb-1">Art or Fart</h3>
            <p className="text-slate-400 text-xs">A roundtable movie podcast, occasionally saying things we probably shouldn't</p>
          </Link>

          {/* Software */}
          <a href="https://play.google.com/store/apps/dev?id=8344010299119094363" target="_blank" rel="noreferrer" className="group block text-center">
            <div className="dock-icon w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden shadow-lg border border-white/10 transition-transform duration-150 ease-out" style={{ transformOrigin: 'bottom center' }}>
              <img src="/bpkicon.png" alt="Blueprint Kit" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-serif font-bold text-white text-base group-hover:text-amber-400 transition-colors mb-1">Blueprint Kit Software</h3>
            <p className="text-slate-400 text-xs">Android apps, no subscriptions</p>
          </a>

          {/* Call Audit */}
          <Link to="/audit" className="group block text-center">
            <div className="dock-icon w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden shadow-lg border border-white/10 transition-transform duration-150 ease-out" style={{ transformOrigin: 'bottom center' }}>
              <img src="/5starphoneicon.png" alt="5-Star Call Audit" className="w-full h-full object-cover scale-[1.45]" />
            </div>
            <h3 className="font-serif font-bold text-white text-base group-hover:text-amber-400 transition-colors mb-1">5-Star Call Audit</h3>
            <p className="text-slate-400 text-xs">A written review of your customer service calls</p>
          </Link>

          {/* Amazon */}
          <a href="https://amazon.com/author/chuckackerman" target="_blank" rel="noreferrer" className="group block text-center">
            <div className="dock-icon w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden shadow-lg border border-white/10 transition-transform duration-150 ease-out" style={{ transformOrigin: 'bottom center' }}>
              <img src="/amazonlogo.png" alt="Amazon" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-serif font-bold text-white text-base group-hover:text-amber-400 transition-colors mb-1">Amazon</h3>
            <p className="text-slate-400 text-xs">Author page &amp; all my books</p>
          </a>

        </DockRow>
      </section>

      <section className="relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none"></div>
        <ScrollReveal className="text-center mb-8 relative z-10">
          <h2 className="text-3xl font-serif font-bold text-white">Let's connect</h2>
        </ScrollReveal>
        <DockRow className="flex justify-center gap-16 relative z-10">
          <a href="https://www.linkedin.com/in/chuck-ackerman/" target="_blank" rel="noreferrer" className="group block text-center">
            <div className="dock-icon w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden shadow-lg border border-white/10 transition-transform duration-150 ease-out" style={{ transformOrigin: 'bottom center' }}>
              <img src="/linkedin.png" alt="LinkedIn" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-serif font-bold text-white text-base group-hover:text-amber-400 transition-colors mb-1">LinkedIn</h3>
            <p className="text-slate-400 text-xs">Connect professionally</p>
          </a>
          <Link to="/contact" className="group block text-center">
            <div className="dock-icon w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden shadow-lg border border-white/10 transition-transform duration-150 ease-out" style={{ transformOrigin: 'bottom center' }}>
              <img src="/contactme.png" alt="Send a Message" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-serif font-bold text-white text-base group-hover:text-amber-400 transition-colors mb-1">Send a Message</h3>
            <p className="text-slate-400 text-xs">Questions, feedback &amp; opportunities</p>
          </Link>
        </DockRow>
      </section>
      </div>

    </div>
  );
}
