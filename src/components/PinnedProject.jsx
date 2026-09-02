import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PinnedProject({ project }) {
  const wrapRef = useRef(null);
  const imgRef = useRef(null);
  const mediaRef = useRef(null);

  const handleImgLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.target;
    if (naturalWidth && naturalHeight && mediaRef.current) {
      mediaRef.current.style.aspectRatio = `${naturalWidth} / ${naturalHeight}`;
      requestAnimationFrame(() => ScrollTrigger.refresh());
    }
  };

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isNarrow = window.innerWidth < 860;
    if (reduce || isNarrow) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top top",
          end: "+=120%",
          scrub: 0.8,
          pin: true,
        },
      });

      tl.fromTo(imgRef.current, { scale: 0.72, borderRadius: "28px" }, { scale: 1, borderRadius: "6px", ease: "none" })
        .to(".pinned-copy", { opacity: 0.35, x: -30, ease: "none" }, 0)
        .to(".pinned-overlay", { opacity: 0.85, ease: "none" }, 0.5);
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="pinned-project" ref={wrapRef}>
      <div className="pinned-inner">
        <div className="pinned-copy">
          <span className="proj-number">{project.number} / 04</span>
          <h3 className="pinned-title">{project.title}</h3>
          <span className="proj-meta">{project.category}</span>
          <p className="proj-desc">{project.description}</p>
          <ul className="proj-stack">
            {project.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <a
            href={project.links[0].href}
            target="_blank"
            rel="noreferrer"
            className="proj-link"
            data-cursor="button"
          >
            {project.links[0].label} <span className="arrow">↗</span>
          </a>
        </div>
        <div className="pinned-media" ref={mediaRef} data-cursor="project">
          <a
            href={project.links[0].href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title}`}
          >
            <img
              ref={imgRef}
              src={project.image}
              alt={`${project.title} screenshot`}
              onLoad={handleImgLoad}
            />
          </a>
          <div className="pinned-overlay" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
