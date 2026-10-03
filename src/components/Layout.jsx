import React, { useState, useMemo, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import AnimatedGradient from './AnimatedGradient';
import SilkBackground from './SilkBackground';
import { momentsOfZen } from '../data';

function MenuIcon({ open }) {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      {open ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  );
}

const NAV_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/books', label: 'Books' },
  { to: '/shop', label: 'Shop' },
  { to: '/software', label: 'Software' },
  { to: '/audit', label: '5-Star Call Audit' },
  { to: '/blog', label: 'Blog' },
  { to: '/podcast', label: 'Podcast' },
  { to: '/contact', label: 'Contact' },
];

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);
  const zenLink = useMemo(() => momentsOfZen[Math.floor(Math.random() * momentsOfZen.length)], [location.pathname]);
  const isActive = (path) => location.pathname === path ? 'text-amber-400 font-bold' : 'text-slate-400 hover:text-white transition-colors';

  useEffect(() => {
    function handlePointerMove(e) {
      const btn = e.target.closest('.btn-primary, .btn-outline');
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      btn.style.setProperty('--x', `${e.clientX - rect.left}px`);
      btn.style.setProperty('--y', `${e.clientY - rect.top}px`);
    }
    document.addEventListener('pointermove', handlePointerMove);
    return () => document.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans relative z-10">

      {/* Premium Glassmorphism Navbar */}
      <AnimatedGradient className="sticky top-0 z-50 bg-slate-950/60 backdrop-blur-2xl border-b border-white/5 shadow-2xl">
        <nav className="max-w-7xl mx-auto px-6 py-4 relative z-10">
          <div className="flex justify-between items-center gap-4">
            <Link
              to="/"
              id="nav-logo"
              className={`text-2xl font-serif font-bold text-white tracking-tight hover:text-amber-400 transition-colors flex items-center gap-3 ${isHome ? 'opacity-0' : ''}`}
            >
              <img src="/chuck.jpg" alt="Chuck Ackerman" className="w-10 h-10 rounded-full border-2 border-slate-700 object-cover" />
              Chuck Ackerman
            </Link>
            <div className="hidden md:flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm uppercase tracking-widest font-medium">
              {NAV_LINKS.map(({ to, label }) => (
                <Link key={to} to={to} className={isActive(to)}>{label}</Link>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="md:hidden text-white p-2 -mr-2"
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden flex flex-col items-center gap-6 pt-6 pb-2 text-sm uppercase tracking-widest font-medium">
              {NAV_LINKS.map(({ to, label }) => (
                <Link key={to} to={to} className={isActive(to)} onClick={() => setMenuOpen(false)}>{label}</Link>
              ))}
            </div>
          )}
        </nav>
      </AnimatedGradient>

      <div className="overflow-x-hidden flex-grow flex flex-col w-full">
        {/* Main Content Area */}
        <main className="flex-grow w-full relative z-10">
          <SilkBackground />
          <Outlet />
        </main>

        {/* Footer */}
        <AnimatedGradient className="mt-4 border-t border-white/10 bg-slate-950/80 backdrop-blur-xl py-8">
          <footer className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4 text-center relative z-10">
            <div className="text-slate-400 text-sm space-y-1">
              <p>&copy; {new Date().getFullYear()} Chuck Ackerman</p>
              <p>Customer Service and Technical Support Professional, Author &amp; Designer</p>
              <p>Baltimore, MD</p>
            </div>
            <a href={zenLink} target="_blank" rel="noreferrer" className="mt-4 text-xs font-mono text-slate-600 hover:text-amber-500 transition-colors">
              &gt; click here for your moment of zen_
            </a>
          </footer>
        </AnimatedGradient>
      </div>
    </div>
  );
}
