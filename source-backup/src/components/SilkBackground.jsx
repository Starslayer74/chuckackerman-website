import { useEffect, useRef } from 'react';

// Recreates 21st.dev's "Custom gradient" (Silk Blend, ios mode): a linear
// gradient swaying around a base angle, driven by an elapsed-seconds clock
// so the motion starts at zero offset and never snaps.
export default function SilkBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const start = performance.now();
    let frame;

    function tick(now) {
      const t = (now - start) / 1000;
      const angle = 90 + Math.sin(t * 0.6) * 24;
      el.style.setProperty('--angle', `${angle}deg`);
      frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, []);

  return <div ref={ref} className="silk-bg" aria-hidden="true" />;
}
