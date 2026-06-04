
import React from 'react';

export default function Shop() {
  return (
    <div className="px-6 py-20 max-w-7xl mx-auto space-y-32">
      <section id="blueprint-kit">
        <header className="mb-16 text-center">
          <h2 className="text-5xl font-serif font-bold text-white mb-6">Blueprint Kit</h2>
          <p className="text-slate-400 text-xl font-light">Digital Blueprints for your life. Available on Etsy.</p>
        </header>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          
        <a href="https://www.etsy.com/listing/4505962389/wedding-planner-digital-download-budget" target="_blank" rel="noreferrer" className="glass-card p-6 flex flex-col items-center text-center group">
            <div className="overflow-hidden rounded-xl mb-6 w-full aspect-square relative">
                <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img src="https://i.etsystatic.com/42595275/r/il/544843/8074352755/il_1080xN.8074352755_h2ww.jpg" alt="Wedding Planner Digital Download" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
            </div>
            <h4 className="font-bold text-white text-lg group-hover:text-amber-400 transition-colors mb-2">Wedding Planner Digital Download</h4>
            <p className="text-amber-500 font-bold">$7.00</p>
        </a>
        <a href="https://www.etsy.com/listing/4505119897/personalized-wedding-thank-you-cards" target="_blank" rel="noreferrer" className="glass-card p-6 flex flex-col items-center text-center group">
            <div className="overflow-hidden rounded-xl mb-6 w-full aspect-square relative">
                <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img src="https://i.etsystatic.com/42595275/r/il/41fdf1/8067527397/il_1080xN.8067527397_fmlk.jpg" alt="Personalized Wedding Thank You Cards" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
            </div>
            <h4 className="font-bold text-white text-lg group-hover:text-amber-400 transition-colors mb-2">Personalized Wedding Thank You Cards</h4>
            <p className="text-amber-500 font-bold">$49.55+</p>
        </a>
        <a href="https://www.etsy.com/listing/4505062613/personalized-wedding-invitation-cards" target="_blank" rel="noreferrer" className="glass-card p-6 flex flex-col items-center text-center group">
            <div className="overflow-hidden rounded-xl mb-6 w-full aspect-square relative">
                <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img src="https://i.etsystatic.com/42595275/r/il/831a00/8020772864/il_1080xN.8020772864_3zaf.jpg" alt="Personalized Wedding Invitation Cards" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
            </div>
            <h4 className="font-bold text-white text-lg group-hover:text-amber-400 transition-colors mb-2">Personalized Wedding Invitation Cards</h4>
            <p className="text-amber-500 font-bold">$49.55+</p>
        </a>
        <a href="https://www.etsy.com/listing/4497924185/customer-service-email-templates-for" target="_blank" rel="noreferrer" className="glass-card p-6 flex flex-col items-center text-center group">
            <div className="overflow-hidden rounded-xl mb-6 w-full aspect-square relative">
                <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img src="https://i.etsystatic.com/42595275/r/il/6fd54a/8021476411/il_1080xN.8021476411_ocx4.jpg" alt="Customer Service Email Templates" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
            </div>
            <h4 className="font-bold text-white text-lg group-hover:text-amber-400 transition-colors mb-2">Customer Service Email Templates</h4>
            <p className="text-amber-500 font-bold">$17.00</p>
        </a>
        </div>
      </section>

      <section id="bad-decisions">
        <header className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-4xl font-serif font-bold text-white mb-4">Bad Decisions Merch</h2>
            <p className="text-slate-400 text-lg font-light">Viral t-shirts, apparel & accessories</p>
          </div>
          <div className="flex gap-4">
            <a href="https://bad-decisions.dashery.com/albums/511069-sfw" target="_blank" rel="noreferrer" className="btn-outline">SFW Collection</a>
            <a href="https://bad-decisions.dashery.com" target="_blank" rel="noreferrer" className="btn-primary">Full Store (NSFW included)</a>
          </div>
        </header>
        <div className="glass-card overflow-hidden p-2">
          <div className="rounded-2xl overflow-hidden bg-black relative">
            <iframe src="https://bad-decisions.dashery.com/embed/v1/carousel?wmode=opaque" width="100%" height="500px" style={{border:'none', display:'block'}} title="Bad Decisions Carousel"></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
