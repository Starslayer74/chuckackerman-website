import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ScrollReveal from '../components/ScrollReveal';

export default function Software() {
  const [enlarged, setEnlarged] = useState(null);
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
              onClick={() => setEnlarged("/petfolio-icon.png")}
              className="w-24 h-24 rounded-2xl shadow-2xl border border-white/10 cursor-zoom-in"
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
              Never miss a pet dose. Now with shared care for the whole household.
            </p>
            <p>
              PetFolio is the pet medication tracker and health organizer built for pet owners who take their animal's care seriously: log doses, schedule vet appointments, and track side effects, all for as many pets as you've got.
            </p>
            <p>
              Sign in with Google to sync everything to the cloud and invite up to 10 people with a single-use invite code. Give family Can edit access, a sitter Can log doses, or View only. Change anyone's access or remove them anytime. Reminders sync across every phone in the household until someone logs the dose.
            </p>
            <p>
              Free to try. Unlock Premium local use forever for $6.99, or Share with others forever for $9.99 (includes Premium). Invited caregivers pay nothing.
            </p>
          </div>
        </div>

        <div className="flex-1 w-full relative z-10">
          <div className="grid grid-cols-3 gap-4">
            <img src="/petfolio-screenshot1.png" alt="PetFolio Home Screen" onClick={() => setEnlarged("/petfolio-screenshot1.png")} className="rounded-2xl shadow-2xl border border-white/10 w-full object-cover cursor-zoom-in" onError={(e) => { e.target.src = "https://via.placeholder.com/300x600?text=Screenshot+1" }} />
            <img src="/petfolio-screenshot2.png" alt="PetFolio Appointments" onClick={() => setEnlarged("/petfolio-screenshot2.png")} className="rounded-2xl shadow-2xl border border-white/10 w-full object-cover cursor-zoom-in" onError={(e) => { e.target.src = "https://via.placeholder.com/300x600?text=Screenshot+2" }} />
            <img src="/petfolio-screenshot3.png" alt="PetFolio Sharing Settings" onClick={() => setEnlarged("/petfolio-screenshot3.png")} className="rounded-2xl shadow-2xl border border-white/10 w-full object-cover cursor-zoom-in" onError={(e) => { e.target.src = "https://via.placeholder.com/300x600?text=Screenshot+3" }} />
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
              onClick={() => setEnlarged("/app-icon.png")}
              className="w-24 h-24 rounded-2xl shadow-2xl border border-white/10 cursor-zoom-in"
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
              You're only getting married once. Now you can plan it together.
            </p>
            <p>
              Ultimate Wedding Planner puts everything in one place: guest management with seating charts, full budget and expense tracking, vendor coordination, task scheduling, ceremony timeline, and a gifts tracker.
            </p>
            <p>
              Sign in with Google from the Sharing menu to sync your plan to the cloud and collaborate with up to 10 invited people using a single-use invite code. Assign Can edit or View only access, and adjust roles or stop sharing anytime. Invited members pay nothing, and their own local wedding plan stays untouched.
            </p>
            <p>
              Free to try. Unlock Premium local use forever for $4.99, add Sharing for $6.99 (includes Premium). Invited planners pay nothing. Users also receive an exclusive discount code for custom invitations and thank you cards through our Blueprint Kit Etsy shop.
            </p>
          </div>
        </div>

        <div className="flex-1 w-full relative z-10">
          <div className="grid grid-cols-3 gap-4">
            <img src="/screenshot1.png" alt="Ultimate Wedding Planner Home Screen" onClick={() => setEnlarged("/screenshot1.png")} className="rounded-2xl shadow-2xl border border-white/10 w-full object-cover cursor-zoom-in" onError={(e) => { e.target.src = "https://via.placeholder.com/300x600?text=Screenshot+1" }} />
            <img src="/screenshot2.png" alt="Ultimate Wedding Planner Guest List" onClick={() => setEnlarged("/screenshot2.png")} className="rounded-2xl shadow-2xl border border-white/10 w-full object-cover cursor-zoom-in" onError={(e) => { e.target.src = "https://via.placeholder.com/300x600?text=Screenshot+2" }} />
            <img src="/screenshot3.png" alt="Ultimate Wedding Planner Day Schedule" onClick={() => setEnlarged("/screenshot3.png")} className="rounded-2xl shadow-2xl border border-white/10 w-full object-cover cursor-zoom-in" onError={(e) => { e.target.src = "https://via.placeholder.com/300x600?text=Screenshot+3" }} />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <ScrollReveal className="text-center mb-12">
          <h3 className="text-3xl font-serif font-bold text-white">In Development</h3>
          <p className="text-slate-400 mt-2">More apps coming soon</p>
        </ScrollReveal>
      </div>

      {enlarged && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6 cursor-zoom-out"
          onClick={() => setEnlarged(null)}
        >
          <div className="w-[90vw] h-[90vh] flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <img
              src={enlarged}
              alt="Enlarged view"
              onClick={() => setEnlarged(null)}
              className="max-w-full max-h-full object-contain rounded-sm shadow-2xl shadow-black/60 cursor-zoom-out"
            />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
