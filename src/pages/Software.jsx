import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Software() {
  return (
    <div className="blueprint-bg pt-10 pb-4 md:pt-14 md:pb-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <a href="https://play.google.com/store/apps/dev?id=8344010299119094363" target="_blank" rel="noreferrer" className="group inline-block rounded-2xl overflow-hidden ring-2 ring-white/70 ring-offset-4 ring-offset-[#16548f] transform group-hover:scale-105 transition-transform duration-300 mb-6">
          <img src="/bpkbanner2.jpg" alt="Blueprint Kit Software" className="w-full max-w-sm mx-auto shadow-2xl" />
        </a>
        <p className="text-amber-400 max-w-2xl mx-auto text-lg">
          My Android Development Lab. Tools and utilities designed for focused execution.
        </p>
      </div>

      {/* PetFolio Listing */}
      <div className="pb-10 md:pb-12 mb-10 md:mb-12 border-b border-white/25 relative flex flex-col lg:flex-row gap-8 items-center">
        <div className="flex-1 relative z-10 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
            <img 
              src="/petfolio-icon.png" 
              alt="PetFolio Icon" 
              className="w-24 h-24 rounded-2xl shadow-2xl border border-white/10"
              onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=Icon" }}
            />
            <ScrollReveal>
              <h2 className="text-3xl font-serif font-bold text-white">PetFolio</h2>
              <div className="flex flex-wrap items-center gap-3 mt-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.blueprintkit.petfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img src="/google-play-badge.png" alt="Get it on Google Play" className="h-[52px]" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="text-slate-300 space-y-4 leading-relaxed">
            <p className="font-medium text-amber-200">
              Never miss a pet dose. Vet-ready PDF reports. Offline, private, no subscription.
            </p>
            <p>
              PetFolio is the pet medication tracker and health organizer built for pet owners who take their animal's care seriously: log doses, schedule vet appointments, and track side effects, all for as many pets as you've got.
            </p>
            <p>
              Generate professional Caregiver Report PDFs in seconds to share with your vet or groomer. Your data stays on your device. No cloud. No accounts. Total privacy.
            </p>
            <p>
              Free to try. Unlock unlimited pets, medications, and appointments forever for a one-time cost of $6.99. No monthly fees.
            </p>
          </div>
        </div>

        <div className="flex-1 w-full relative z-10">
          <div className="grid grid-cols-3 gap-4">
            <img src="/petfolio-screenshot1.png" alt="PetFolio Screenshot 1" className="rounded-2xl shadow-2xl border border-white/10 w-full object-cover" onError={(e) => { e.target.src = "https://via.placeholder.com/300x600?text=Screenshot+1" }} />
            <img src="/petfolio-screenshot2.png" alt="PetFolio Screenshot 2" className="rounded-2xl shadow-2xl border border-white/10 w-full object-cover" onError={(e) => { e.target.src = "https://via.placeholder.com/300x600?text=Screenshot+2" }} />
            <img src="/petfolio-screenshot3.png" alt="PetFolio Screenshot 3" className="rounded-2xl shadow-2xl border border-white/10 w-full object-cover" onError={(e) => { e.target.src = "https://via.placeholder.com/300x600?text=Screenshot+3" }} />
          </div>
        </div>
      </div>

      {/* Ultimate Wedding Planner Listing */}
      <div className="mb-6 relative flex flex-col lg:flex-row gap-8 items-center">
        <div className="flex-1 relative z-10 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
            <img 
              src="/app-icon.png" 
              alt="Ultimate Wedding Planner Icon" 
              className="w-24 h-24 rounded-2xl shadow-2xl border border-white/10"
              onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=Icon" }}
            />
            <ScrollReveal>
              <h2 className="text-3xl font-serif font-bold text-white">Ultimate Wedding Planner</h2>
              <div className="flex flex-wrap items-center gap-3 mt-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.blueprintkit.ultimateweddingplanner&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img src="/google-play-badge.png" alt="Get it on Google Play" className="h-[52px]" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="text-slate-300 space-y-4 leading-relaxed">
            <p className="font-medium text-amber-200">
              You're only getting married once. You shouldn't have to pay monthly for it.
            </p>
            <p>
              Ultimate Wedding Planner puts everything in one place: guest management with seating charts, full budget and expense tracking, vendor coordination, task scheduling, ceremony timeline, and a gifts tracker.
            </p>
            <p>
              Your data never leaves your device. No cloud. No accounts. No data shared with vendors. Your wedding details belong to you.
            </p>
            <p>
              Free to try. Unlock full access forever for a one-time cost of $4.99. Users also receive an exclusive discount code for custom invitations and thank you cards through our Blueprint Kit Etsy shop.
            </p>
          </div>
        </div>

        <div className="flex-1 w-full relative z-10">
          <div className="grid grid-cols-3 gap-4">
            <img src="/screenshot1.png" alt="App Screenshot 1" className="rounded-2xl shadow-2xl border border-white/10 w-full object-cover" onError={(e) => { e.target.src = "https://via.placeholder.com/300x600?text=Screenshot+1" }} />
            <img src="/screenshot2.png" alt="App Screenshot 2" className="rounded-2xl shadow-2xl border border-white/10 w-full object-cover" onError={(e) => { e.target.src = "https://via.placeholder.com/300x600?text=Screenshot+2" }} />
            <img src="/screenshot3.png" alt="App Screenshot 3" className="rounded-2xl shadow-2xl border border-white/10 w-full object-cover" onError={(e) => { e.target.src = "https://via.placeholder.com/300x600?text=Screenshot+3" }} />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <ScrollReveal className="text-center mb-12">
          <h3 className="text-3xl font-serif font-bold text-white">In Development</h3>
          <p className="text-slate-400 mt-2">More apps coming soon</p>
        </ScrollReveal>
      </div>
    </div>
  );
}
