
import React, { useEffect, useRef, useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

const calendarItems = [
  { title: 'American Landmarks 2027 Wall Calendar', price: '$22.99', link: 'https://calendars.baddecisionsdesigns.com/product/32651043', image: 'https://d123s6f1z9g2wk.cloudfront.net/files/2026/10/20261002181404-1f1be8d0-d665-69c6-9a6d-161615cfc23f.jpg' },
  { title: 'Space History 2027 Wall Calendar', price: '$22.99', link: 'https://calendars.baddecisionsdesigns.com/product/32445426', image: 'https://d123s6f1z9g2wk.cloudfront.net/files/2026/10/20261002211325-1f1bea61-b127-647e-934d-7a8196392917.jpg' },
  { title: 'Aviation 2027 Wall Calendar', price: '$22.99', link: 'https://calendars.baddecisionsdesigns.com/product/32436362', image: 'https://d123s6f1z9g2wk.cloudfront.net/files/2026/10/20261002211208-1f1bea5e-d287-6cac-8766-be1f72993485.jpg' },
  { title: 'Starry Night National Parks 2027 Wall Calendar', price: '$22.99', link: 'https://calendars.baddecisionsdesigns.com/product/32432613', image: 'https://d123s6f1z9g2wk.cloudfront.net/files/2026/10/20261002210921-1f1bea58-9941-65c0-814e-62f364602235.jpg' },
  { title: 'Presidential Gnomes 2027 Wall Calendar', price: '$22.99', link: 'https://calendars.baddecisionsdesigns.com/product/32422294', image: 'https://d123s6f1z9g2wk.cloudfront.net/files/2026/10/20261002211443-1f1bea64-9717-64e6-96cd-ba6ed697eb96.jpg' },
  { title: 'Presidential Gnomes 2027 Coloring Calendar', price: '$22.99', link: 'https://calendars.baddecisionsdesigns.com/product/32422283', image: 'https://d123s6f1z9g2wk.cloudfront.net/files/2026/10/20261002211601-1f1bea67-7e9b-6cb6-ba14-aab457899eb4.jpg' },
];

const blueprintItems = [
  {
    title: 'Wedding Planner Digital Download',
    price: '$7.00',
    link: 'https://www.etsy.com/listing/4505962389/wedding-planner-digital-download-budget',
    image: 'https://i.etsystatic.com/42595275/r/il/544843/8074352755/il_1080xN.8074352755_h2ww.jpg'
  },
  {
    title: 'Personalized Wedding Thank You Cards',
    price: '$49.55+',
    link: 'https://www.etsy.com/listing/4505119897/personalized-wedding-thank-you-cards',
    image: 'https://i.etsystatic.com/42595275/r/il/41fdf1/8067527397/il_1080xN.8067527397_fmlk.jpg'
  },
  {
    title: 'Personalized Wedding Invitation Cards',
    price: '$49.55+',
    link: 'https://www.etsy.com/listing/4505062613/personalized-wedding-invitation-cards',
    image: 'https://i.etsystatic.com/42595275/r/il/831a00/8020772864/il_1080xN.8020772864_3zaf.jpg'
  },
  {
    title: 'Customer Service Email Templates',
    price: '$17.00',
    link: 'https://www.etsy.com/listing/4497924185/customer-service-email-templates-for',
    image: 'https://i.etsystatic.com/42595275/r/il/6fd54a/8021476411/il_1080xN.8021476411_ocx4.jpg'
  }
];

export default function Shop() {
  const scrollerRef = useRef(null);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const check = () => setCanScroll(el.scrollWidth > el.clientWidth + 1);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const scrollByCard = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector('a');
    const amount = card ? card.getBoundingClientRect().width + 32 : 300;
    el.scrollBy({ left: direction * amount, behavior: 'smooth' });
  };

  return (
    <div className="px-6 pt-6 pb-4 md:pt-10 md:pb-16 max-w-7xl mx-auto space-y-10 md:space-y-14">
      <section id="calendars">
        <header className="mb-8 text-center">
          <h2 className="text-5xl font-serif font-bold text-white mb-4">2027 Calendars</h2>
          <p className="text-slate-400 text-lg font-light">2027 wall calendars, from Bad Decisions Designs. Limited time only.</p>
        </header>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {calendarItems.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noreferrer" className="group block">
              <div className="overflow-hidden rounded-xl mb-3 w-full aspect-square transform group-hover:scale-105 transition-transform duration-500">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-white text-sm group-hover:text-amber-400 transition-colors mb-1">{item.title}</h3>
              <p className="text-amber-500 font-bold text-sm">{item.price}</p>
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="https://calendars.baddecisionsdesigns.com/" target="_blank" rel="noreferrer" className="btn-primary inline-block">
            Shop All Calendars
          </a>
        </div>
      </section>

      <section id="bad-decisions">
        <header className="mb-8 text-center">
          <h2 className="text-5xl font-serif font-bold text-white mb-6">Bad Decisions Designs</h2>
          <p className="text-slate-400 text-xl font-light">Viral t-shirts, apparel & accessories</p>
        </header>
        <div className="rounded-2xl overflow-hidden relative">
          <iframe src="https://bad-decisions.dashery.com/embed/v1/carousel?wmode=transparent" width="100%" height="400px" style={{border:'none', display:'block'}} title="Bad Decisions Carousel"></iframe>
        </div>
      </section>

      <section id="blueprint-kit">
        <header className="mb-8 text-center">
          <ScrollReveal>
            <h2 className="text-5xl font-serif font-bold text-white mb-4">Blueprint Kit</h2>
            <p className="text-slate-400 text-lg font-light">Digital Blueprints for your life. Available on Etsy.</p>
          </ScrollReveal>
        </header>
        <div className="relative">
          {canScroll && (
            <>
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Scroll left"
                className="hidden md:flex absolute -left-5 top-[35%] -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white items-center justify-center shadow-lg hover:bg-slate-100 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Scroll right"
                className="hidden md:flex absolute -right-5 top-[35%] -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white items-center justify-center shadow-lg hover:bg-slate-100 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </>
          )}

          <div ref={scrollerRef} className={`flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${canScroll ? 'justify-start' : 'justify-center'}`}>
            {blueprintItems.map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noreferrer" className="group block flex-shrink-0 w-[45%] sm:w-[30%] md:w-[22%] snap-start">
                <div className="overflow-hidden rounded-xl mb-4 w-full aspect-square transform group-hover:scale-105 transition-transform duration-500">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-white text-base group-hover:text-amber-400 transition-colors mb-1">{item.title}</h3>
                <p className="text-amber-500 font-bold text-sm">{item.price}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="https://blueprintkit.etsy.com" target="_blank" rel="noreferrer" className="text-white font-bold hover:text-slate-200 transition-colors underline underline-offset-4 text-2xl tracking-wide" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Shop All Blueprints
          </a>
        </div>
      </section>
    </div>
  );
}

