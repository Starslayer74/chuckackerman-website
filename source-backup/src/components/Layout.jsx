import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import AnimatedGradient from './AnimatedGradient';

export default function Layout() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'text-amber-400 font-bold' : 'text-slate-400 hover:text-white transition-colors';

  return (
    <div className="min-h-screen flex flex-col font-sans relative z-10">
      
      {/* Premium Glassmorphism Navbar */}
      <AnimatedGradient className="sticky top-0 z-50 bg-slate-950/60 backdrop-blur-2xl border-b border-white/5 shadow-2xl">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <Link to="/" className="text-2xl font-serif font-bold text-white tracking-tight hover:text-amber-400 transition-colors flex items-center gap-3">
            <img src="/chuck.jpg" alt="Chuck Ackerman" className="w-10 h-10 rounded-full border-2 border-slate-700 object-cover" />
            Chuck Ackerman
          </Link>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm uppercase tracking-widest font-medium">
            <Link to="/about" className={isActive('/about')}>About</Link>
            <Link to="/books" className={isActive('/books')}>Books</Link>
            <Link to="/shop" className={isActive('/shop')}>Shop</Link>
            <Link to="/audit" className={isActive('/audit')}>Call Audit</Link>
            <Link to="/blog" className={isActive('/blog')}>Blog</Link>
            <Link to="/podcast" className={isActive('/podcast')}>Podcast</Link>
            <Link to="/contact" className={isActive('/contact')}>Contact</Link>
          </div>
        </nav>
      </AnimatedGradient>

      <div className="overflow-x-hidden flex-grow flex flex-col w-full">
        {/* Main Content Area */}
        <main className="flex-grow w-full relative z-10">
          <Outlet />
        </main>

        {/* Footer */}
        <AnimatedGradient className="mt-12 md:mt-32 border-t border-white/10 bg-slate-950/80 backdrop-blur-xl py-16">
          <footer className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8 text-center relative z-10">
            <Link to="/" className="text-2xl font-serif font-bold text-slate-500 hover:text-white transition-colors">
              Chuck Ackerman
            </Link>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-medium text-sm tracking-widest uppercase">
              <a href="https://www.linkedin.com/in/chuck-ackerman/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors">LinkedIn</a>
              <a href="https://amazon.com/author/chuckackerman" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors">Amazon</a>
              <Link to="/podcast" className="text-slate-400 hover:text-amber-400 transition-colors">Podcast</Link>
              <Link to="/contact" className="text-slate-400 hover:text-amber-400 transition-colors">Contact</Link>
            </div>
            <div className="w-24 h-px bg-white/10"></div>
            <div className="text-slate-500 text-sm space-y-2">
              <p>&copy; {new Date().getFullYear()} Chuck Ackerman &bull; Customer Service and Technical Support Professional, Author, & Designer</p>
              <p>Baltimore, MD</p>
            </div>
            <a href="https://chickenonaraft.com" target="_blank" rel="noreferrer" className="mt-8 text-xs font-mono text-slate-600 hover:text-amber-500 transition-colors">
              &gt; click here for your moment of zen_
            </a>
          </footer>
        </AnimatedGradient>
      </div>
    </div>
  );
}
