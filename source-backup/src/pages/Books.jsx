import React from 'react';
import { books } from '../data';
import AnimatedGradient from '../components/AnimatedGradient';

export default function Books() {
  const fictionBook = books.find(b => b.category === 'fiction');
  const parodyBooks = books.filter(b => b.category === 'parody');
  const nonFictionBooks = books.filter(b => b.category === 'non-fiction');
  const coloringBooks = books.filter(b => b.category === 'coloring');

  return (
    <div className="px-6 pt-12 pb-4 md:py-20 max-w-6xl mx-auto">
      <header className="mb-12 md:mb-24 text-center">
        <h2 className="text-5xl font-serif font-bold text-white mb-6">Books by Chuck Ackerman</h2>
        <p className="text-slate-400 text-xl font-light mb-4">Nonfiction as Chuck Ackerman. Fiction as Lars C. Hallene. Two names, one author, zero regrets.</p>
        <p className="text-slate-500 text-xs">
          <em>Disclosure: As an Amazon Associate, I earn from qualifying purchases when you use the links on this page.</em>
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Main Fiction Release - Full Width */}
        {fictionBook && (
          <div className="glass-card md:col-span-2 flex flex-col md:flex-row overflow-hidden group">
            <div className="w-full md:w-1/3 p-8 flex items-center justify-center bg-black/20 border-b md:border-b-0 md:border-r border-white/5">
               <img src={fictionBook.cover} alt={fictionBook.title} className="w-full max-w-xs shadow-2xl rounded-sm transform group-hover:scale-105 transition-transform duration-500 aspect-[2/3] object-contain" />
            </div>
            <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
              <p className="text-amber-400 font-bold uppercase tracking-widest text-xs mb-4">Latest Fiction Release</p>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">{fictionBook.title}</h3>
              <p className="text-slate-400 mb-6 font-medium">By {fictionBook.author}</p>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">{fictionBook.description}</p>
              <div>
                <a href={fictionBook.link} target="_blank" rel="noreferrer" className="btn-primary">Available on Amazon</a>
              </div>
            </div>
          </div>
        )}

        {/* AI Parody Projects Grid */}
        {parodyBooks.length > 0 && (
          <>
            <div className="md:col-span-2 mt-12 mb-4">
              <h3 className="text-3xl font-serif font-bold text-white border-b border-white/10 pb-4">AI Parody Projects</h3>
            </div>
            {parodyBooks.map((book, index) => (
              <div key={index} className="glass-card p-8 flex flex-col group h-full">
                <div className="flex gap-6 mb-6">
                  <div className="w-1/3 flex-shrink-0">
                    <img src={book.cover} alt={book.title} className="w-full shadow-lg rounded-sm transform group-hover:scale-105 transition-transform duration-500 aspect-[2/3] object-contain" />
                  </div>
                  <div className="w-2/3 flex flex-col justify-center">
                    <h4 className="font-bold text-white text-xl mb-2">{book.title}</h4>
                    <p className="text-slate-400 text-sm">By {book.author}</p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed mb-6 flex-grow">{book.description}</p>
                <div className="mt-auto">
                  <a href={book.link} target="_blank" rel="noreferrer" className="text-amber-400 font-bold hover:text-white transition-colors uppercase tracking-widest text-sm inline-flex items-center gap-2">
                    Available on Amazon <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </>
        )}

        {/* Non-Fiction Grid */}
        {nonFictionBooks.length > 0 && (
          <>
            <div className="md:col-span-2 mt-12 mb-4">
              <h3 className="text-3xl font-serif font-bold text-white border-b border-white/10 pb-4">Non-Fiction Books</h3>
            </div>
            {nonFictionBooks.map((book, index) => (
              <div key={index} className="glass-card p-8 flex flex-col group h-full">
                <div className="flex gap-6 mb-6">
                  <div className="w-1/3 flex-shrink-0">
                    <img src={book.cover} alt={book.title} className="w-full shadow-lg rounded-sm transform group-hover:scale-105 transition-transform duration-500 aspect-[2/3] object-contain" />
                  </div>
                  <div className="w-2/3 flex flex-col justify-center">
                    <h4 className="font-bold text-white text-xl mb-2">{book.title}</h4>
                    <p className="text-slate-400 text-sm">By {book.author}</p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed mb-6 flex-grow">{book.description}</p>
                <div className="mt-auto">
                  <a href={book.link} target="_blank" rel="noreferrer" className="text-amber-400 font-bold hover:text-white transition-colors uppercase tracking-widest text-sm inline-flex items-center gap-2">
                    Available on Amazon <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </>
        )}

        {/* Activity Books Grid */}
        {coloringBooks.length > 0 && (
          <>
            <div className="md:col-span-2 mt-12 mb-4">
              <h3 className="text-3xl font-serif font-bold text-white border-b border-white/10 pb-4">Activity Books</h3>
            </div>
            {coloringBooks.map((book, index) => (
              <div key={index} className="glass-card p-8 flex flex-col group h-full md:col-span-1">
                <div className="flex gap-6 mb-6">
                  <div className="w-1/3 flex-shrink-0">
                    <img src={book.cover} alt={book.title} className="w-full shadow-lg rounded-sm transform group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="w-2/3 flex flex-col justify-center">
                    <h4 className="font-bold text-white text-xl mb-2">{book.title}</h4>
                    <p className="text-slate-400 text-sm">By {book.author}</p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed mb-6 flex-grow">{book.description}</p>
                <div className="mt-auto">
                  <a href={book.link} target="_blank" rel="noreferrer" className="text-amber-400 font-bold hover:text-white transition-colors uppercase tracking-widest text-sm inline-flex items-center gap-2">
                    Available on Amazon <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </>
        )}

        {/* Coming Soon & Next in Series Cards */}
        <div className="md:col-span-2 mt-12 mb-4">
          <h3 className="text-3xl font-serif font-bold text-white border-b border-white/10 pb-4">Upcoming Releases</h3>
        </div>

        <div className="glass-card p-8 flex flex-col group h-full justify-between items-center text-center bg-slate-900/20 border-dashed border-2 border-white/10">
          <div className="w-32 h-48 bg-slate-800/50 rounded-sm mb-6 flex items-center justify-center text-slate-600 font-serif text-4xl shadow-inner">
            ?
          </div>
          <h4 className="font-bold text-white text-xl mb-2">Next in the Series</h4>
          <p className="text-slate-400 text-sm mb-6">By Lars C. Hallene</p>
          <p className="text-slate-300 leading-relaxed italic">Currently in development. The next thrilling chapter is coming soon.</p>
        </div>

        <div className="glass-card p-8 flex flex-col group h-full justify-between items-center text-center bg-slate-900/20 border-dashed border-2 border-white/10">
          <div className="w-32 h-48 bg-slate-800/50 rounded-sm mb-6 flex items-center justify-center text-slate-600 font-serif text-4xl shadow-inner">
            ?
          </div>
          <h4 className="font-bold text-white text-xl mb-2">Coming Soon</h4>
          <p className="text-slate-400 text-sm mb-6">By Chuck Ackerman</p>
          <p className="text-slate-300 leading-relaxed italic">A new non-fiction exploration into the world of tech and culture.</p>
        </div>

      </div>
    </div>
  );
}
