import { useRef } from "react";
import gsap from "gsap";

// Wraps any button/link and gives it a subtle magnetic pull toward the cursor.
export default function MagneticButton({ as: Tag = "button", className = "", children, strength = 0.35, cursorType = "button", ...rest }) {
  const wrapRef = useRef(null);
  const innerRef = useRef(null);

  const handleMove = (e) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    gsap.to(el, { x: relX * strength, y: relY * strength, duration: 0.5, ease: "power3.out" });
    gsap.to(innerRef.current, { x: relX * strength * 0.4, y: relY * strength * 0.4, duration: 0.5, ease: "power3.out" });
  };

  const handleLeave = () => {
    gsap.to(wrapRef.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
    gsap.to(innerRef.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
  };

  return (
    <Tag
      ref={wrapRef}
      className={`magnetic ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      data-cursor={cursorType}
      {...rest}
    >
      <span className="magnetic-inner" ref={innerRef}>
        {children}
      </span>
    </Tag>
  );
}
