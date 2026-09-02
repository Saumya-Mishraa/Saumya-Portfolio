import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);
  const [enabled] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      window.innerWidth > 860
  );
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("cursor-active");

    const dot = dotRef.current;
    const ring = ringRef.current;
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const label = labelRef.current;
    gsap.set(dot, { xPercent: -50, yPercent: -50 });
    gsap.set(ring, { xPercent: -50, yPercent: -50 });
    gsap.set(label, { xPercent: -50, yPercent: -50 });

    const move = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      gsap.to(dot, { x: pos.x, y: pos.y, duration: 0.12, ease: "power2.out" });
      gsap.to(ring, { x: pos.x, y: pos.y, duration: 0.45, ease: "power3.out" });
      gsap.to(label, { x: pos.x, y: pos.y, duration: 0.45, ease: "power3.out" });
    };

    const onDown = () => gsap.to(ring, { scale: 0.8, duration: 0.2 });
    const onUp = () => gsap.to(ring, { scale: 1, duration: 0.2 });

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    const attachTargets = () => {
      const interactive = document.querySelectorAll("[data-cursor]");
      interactive.forEach((el) => {
        const type = el.getAttribute("data-cursor");
        const onEnter = () => {
          if (type === "project") {
            setLabel("VIEW PROJECT ↗");
            gsap.to(ring, { scale: 2.8, duration: 0.4, ease: "power3.out" });
            gsap.to(dot, { scale: 0, duration: 0.2 });
          } else {
            setLabel("");
            gsap.to(ring, { scale: 1.8, duration: 0.4, ease: "power3.out" });
          }
        };
        const onLeave = () => {
          setLabel("");
          gsap.to(ring, { scale: 1, duration: 0.4, ease: "power3.out" });
          gsap.to(dot, { scale: 1, duration: 0.2 });
        };
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
        el._cursorEnter = onEnter;
        el._cursorLeave = onLeave;
      });
    };

    attachTargets();
    const observer = new MutationObserver(attachTargets);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      observer.disconnect();
      document.body.classList.remove("cursor-active");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
      <div className="cursor-label" ref={labelRef} aria-hidden="true">{label}</div>
    </>
  );
}
