// Fetches Chuck's Blogspot feed via Blogger's native JSONP endpoint.
// No third-party proxy/API needed (and no shared quota to run into) since
// Blogger supports alt=json-in-script specifically for cross-domain use.
let jsonpCounter = 0;

// Google Docs paste-in leaves inline "line-height: 1.15 !important" on spans/paragraphs.
// Inline !important beats any stylesheet rule, so the only fix is stripping it at the source.
function stripLineHeight(html) {
  return html.replace(/line-height\s*:[^;"]*;?\s*/gi, '');
}

// Blogger's editor sometimes leaves empty leading paragraphs (a lone &nbsp;
// or nothing at all) before the real content, which render as blank
// vertical space. Strip any run of these from the very start of the post.
function stripLeadingEmptyParagraphs(html) {
  return html.replace(/^(\s*<p(?:\s[^>]*)?>(?:&nbsp;|\s|<br\s*\/?>)*<\/p>\s*)+/i, '');
}

export function fetchBlogPosts({ maxResults = 20 } = {}) {
  return new Promise((resolve, reject) => {
    const callbackName = `__blogFeedCallback_${jsonpCounter++}`;
    const timeout = setTimeout(() => {
      cleanup();
      reject(new Error('Blog feed request timed out'));
    }, 10000);

    function cleanup() {
      clearTimeout(timeout);
      delete window[callbackName];
      script.remove();
    }

    window[callbackName] = (data) => {
      cleanup();
      try {
        const entries = data.feed.entry || [];
        resolve(entries.map(entry => ({
          id: entry.id.$t,
          title: entry.title.$t,
          pubDate: entry.published.$t,
          content: stripLeadingEmptyParagraphs(stripLineHeight(entry.content.$t))
        })));
      } catch (e) {
        reject(e);
      }
    };

    const script = document.createElement('script');
    script.src = `https://chuckackerman.blogspot.com/feeds/posts/default?alt=json-in-script&callback=${callbackName}&max-results=${maxResults}`;
    script.onerror = () => {
      cleanup();
      reject(new Error('Failed to load blog feed'));
    };
    document.body.appendChild(script);
  });
}
