import React, { useEffect, useState } from 'react';
import NewsletterSignup from '../components/NewsletterSignup';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch full blog posts natively so users never leave the site
    const feedUrl = encodeURIComponent('https://chuckackerman.blogspot.com/feeds/posts/default?alt=rss');
    const url = `https://api.rss2json.com/v1/api.json?rss_url=${feedUrl}&api_key=gdijogjiorta9rud0xljuzdvxu0xltgyqgzkhwjz&count=10&_=${Date.now()}`;
    
    fetch(url)
      .then(r => r.json())
      .then(data => {
        if (data.status === 'ok') {
          setPosts(data.items || []);
        } else {
          setError(data.message);
        }
        setLoading(false);
      })
      .catch(e => {
        setError(e.toString());
        setLoading(false);
      });
  }, []);

  function formatDate(d) {
    return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  return (
    <div className="px-6 py-20 max-w-4xl mx-auto">
      <header className="mb-12 border-b border-slate-700 pb-8">
        <h2 className="text-4xl font-serif font-bold text-white mb-4">The Chuck Stops Here</h2>
      </header>

      {loading && <p className="text-amber-400 animate-pulse text-lg">Fetching the latest posts...</p>}
      {error && <p className="text-red-400 bg-red-900/20 p-4 rounded-lg border border-red-900">Error loading blog: {error}</p>}
      
      {!loading && !error && posts.length === 0 && (
        <p className="text-slate-400 text-lg">No posts available yet.</p>
      )}

      <div className="space-y-16">
        {posts.map(post => (
          <article key={post.guid} className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-xl">
            <div className="p-8 md:p-12">
              <time className="text-amber-400 font-bold tracking-wider text-sm uppercase mb-4 block">{formatDate(post.pubDate)}</time>
              <h3 className="text-3xl font-serif font-bold text-white mb-8 leading-tight">{post.title}</h3>
              <div 
                className="prose prose-invert prose-teal max-w-none prose-img:rounded-xl prose-img:mx-auto prose-a:text-amber-400 hover:prose-a:text-amber-300 break-words"
                dangerouslySetInnerHTML={{ __html: post.content || post.description }}
              />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16">
        <NewsletterSignup />
      </div>
    </div>
  );
}
