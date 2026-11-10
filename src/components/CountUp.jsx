import { useEffect, useRef, useState } from 'react';

// Counts up from 0 to `end` once the number scrolls into view.
export default function CountUp({ end, duration = 1500, suffix = '', className = '' }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        const start = performance.now();
        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          setValue(Math.round(progress * end));
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref} className={className}>{value}{suffix}</span>;
}
