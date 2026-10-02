import React from 'react';
import { books } from '../data';
import ScrollReveal from '../components/ScrollReveal';

function BookCard({ book, square }) {
  return (
    <div className="h-full flex items-start gap-6 group pb-6 border-b border-white/5">
      <img src={book.cover} alt={book.title} className={`w-1/3 max-w-[140px] shadow-xl shadow-black/50 rounded-sm transform group-hover:-translate-y-1 transition-transform duration-300 object-contain flex-shrink-0 ${square ? 'aspect-square' : 'aspect-[2/3]'}`} />
      <div className="flex flex-col flex-grow h-full">
        <h4 className="font-bold text-white text-xl mb-1">{book.title}</h4>
        <p className="text-slate-400 text-sm mb-4">By {book.author}</p>
        <p className="text-slate-300 leading-relaxed mb-4 flex-grow max-w-lg">{book.description}</p>
        <a href={book.link} target="_blank" rel="noreferrer" className="inline-block self-start mt-auto">
          <img src="/amazon-badge.png" alt="Available on Amazon.com" className="h-[52px]" />
        </a>
      </div>
    </div>
  );
}

export default function Books() {
  const fictionBooks = books.filter(b => b.category === 'fiction');
  const parodyBooks = books.filter(b => b.category === 'parody');
  const nonFictionBooks = books.filter(b => b.category === 'non-fiction');
  const coloringBooks = books.filter(b => b.category === 'coloring');

  return (
    <div className="px-6 pt-6 pb-4 md:pt-10 md:pb-16 max-w-6xl mx-auto">
      <header className="mb-8 md:mb-12 text-center">
        <h2 className="text-5xl font-serif font-bold text-white mb-4">Stuff I've Written</h2>
        <p className="text-slate-400 text-xl font-light mb-3 max-w-lg mx-auto">Nonfiction as Chuck Ackerman. Fiction as Lars C. Hallene. Parody as whoever felt right that week. I've lost count of the names at this point.</p>
        <p className="text-slate-400 text-xs">
          <em>Disclosure: As an Amazon Associate, I earn from qualifying purchases when you use the links on this page.</em>
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">

        {/* Non-Fiction */}
        {nonFictionBooks.length > 0 && (
          <>
            <div className="md:col-span-2 mb-2">
              <ScrollReveal><h3 className="text-3xl font-serif font-bold text-white border-b border-white/10 pb-4">Non-Fiction Books</h3></ScrollReveal>
            </div>
            {nonFictionBooks.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </>
        )}

        {/* Fiction */}
        {fictionBooks.length > 0 && (
          <>
            <div className="md:col-span-2 mb-2">
              <ScrollReveal><h3 className="text-3xl font-serif font-bold text-white border-b border-white/10 pb-4">Fiction</h3></ScrollReveal>
            </div>
            {fictionBooks.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </>
        )}

        {/* AI Parody Projects */}
        {parodyBooks.length > 0 && (
          <>
            <div className="md:col-span-2 mb-2">
              <ScrollReveal><h3 className="text-3xl font-serif font-bold text-white border-b border-white/10 pb-4">AI Parody Projects</h3></ScrollReveal>
            </div>
            {parodyBooks.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </>
        )}

        {/* Activity Books */}
        {coloringBooks.length > 0 && (
          <>
            <div className="md:col-span-2 mb-2">
              <ScrollReveal><h3 className="text-3xl font-serif font-bold text-white border-b border-white/10 pb-4">Activity Books</h3></ScrollReveal>
            </div>
            {coloringBooks.map((book, index) => (
              <BookCard key={index} book={book} square />
            ))}
          </>
        )}

      </div>
    </div>
  );
}
