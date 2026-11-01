import { useRef } from 'react';

// macOS dock-style magnification: icons tagged .dock-icon inside this
// container scale up based on horizontal distance from the cursor, with
// falloff to neighbors. Plain mousemove + transform, no library.
const MAX_SCALE = 1.35;
const RANGE = 90;

export default function DockRow({ children, className = '' }) {
  const containerRef = useRef(null);

  function handleMove(e) {
    containerRef.current.querySelectorAll('.dock-icon').forEach((el) => {
      const rect = el.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const dist = Math.abs(e.clientX - center);
      const scale = 1 + Math.max(0, (RANGE - dist) / RANGE) * (MAX_SCALE - 1);
      el.style.transform = `scale(${scale}) translateY(${(scale - 1) * -14}px)`;
    });
  }

  function handleLeave() {
    containerRef.current.querySelectorAll('.dock-icon').forEach((el) => {
      el.style.transform = '';
    });
  }

  return (
    <div ref={containerRef} onMouseMove={handleMove} onMouseLeave={handleLeave} className={className}>
      {children}
    </div>
  );
}
