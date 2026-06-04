import React from 'react';

export default function Another() {
  return (
    <div className="px-6 py-20 max-w-6xl mx-auto space-y-16">
      
      {/* HEADER SECTION */}
      <header className="text-center">
        <h2 className="text-5xl font-serif font-bold text-white mb-6">Another</h2>
        <p className="text-slate-400 text-xl font-light max-w-2xl mx-auto">
          Write a short, engaging subtitle or description for this page here.
        </p>
      </header>

      {/* TEXT PANEL 1 */}
      <section className="glass-card p-12">
        <h3 className="text-3xl font-serif font-bold text-white mb-6">First Main Topic</h3>
        <p className="text-slate-300 leading-relaxed text-lg mb-6">
          This is a text paragraph. You don't need to know any code to edit this. Just delete this text and type your own words. It will automatically be formatted perfectly.
        </p>
        <p className="text-slate-300 leading-relaxed text-lg">
          You can add as many paragraphs as you want. Just copy and paste this paragraph block and type inside it.
        </p>
      </section>

      {/* IMAGE AND TEXT COMBO PANEL */}
      <section className="glass-card p-8 flex flex-col md:flex-row gap-8 items-center">
        
        {/* The Image Side */}
        <div className="w-full md:w-1/3">
          {/* To change this image, drop a photo in the 'public' folder and type its name below instead of '/chuck.jpg' */}
          <img src="/chuck.jpg" alt="Description" className="w-full rounded-xl shadow-xl" />
        </div>

        {/* The Text Side */}
        <div className="w-full md:w-2/3">
          <h3 className="text-3xl font-serif font-bold text-white mb-4">Another Topic Header</h3>
          <p className="text-slate-300 leading-relaxed text-lg mb-6">
            This is a side-by-side layout. The image is on the left, and this text is on the right. Just type your new content in here!
          </p>
          <a href="/contact" className="btn-primary">
            Contact Me Button
          </a>
        </div>
      </section>

    </div>
  );
}
