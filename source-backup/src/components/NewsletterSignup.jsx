import React, { useState } from 'react';

export default function NewsletterSignup() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    // The form submission happens via the target iframe, 
    // so we just show the success message optimistically.
    setTimeout(() => setSubscribed(true), 800);
  };

  return (
    <div className="glass-card p-8 md:p-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h3 className="text-2xl font-serif font-bold text-white mb-2">Never miss a post</h3>
          <p className="text-slate-300">Get new posts from <span className="font-bold text-white">The Chuck Stops Here</span> delivered directly to your inbox.</p>
        </div>
        
        <div className="w-full md:w-auto">
          {subscribed ? (
            <div className="text-amber-400 font-bold flex items-center gap-2 text-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              You are subscribed!
            </div>
          ) : (
            <>
              <form 
                action="https://ece171bd.sibforms.com/serve/MUIFAETs0eOGaxDePezD_oHScMm_bS1kuv6PdRxQ2p2-pPL31OBKbrYgy_zYO0WNYS3lQHwM1axkln41pGI18IeLyeSYGqeSBAovJU5amVHTWmwObRgW3ZWlEEe9gzBs5Nwq5ifpvmiRhpuh-nVTQWldCuUUJTO9cXN1XMq7Q81F7490rZHRzV93G6iaj67hQCFSBWGE6hH5sr31rg==" 
                method="POST" 
                target="index_subscribe_frame" 
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input 
                  type="email" 
                  name="EMAIL" 
                  placeholder="yourname@email.com" 
                  required 
                  className="px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-500 w-full sm:min-w-[250px]"
                />
                <button type="submit" className="btn-primary py-3 px-6 whitespace-nowrap">
                  Subscribe
                </button>
              </form>
              <iframe name="index_subscribe_frame" style={{ display: 'none' }} title="hidden_iframe"></iframe>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
