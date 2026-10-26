import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitWords from "./SplitWords";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectRow({ project, total }) {
  const rowRef = useRef(null);
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
    const ctx = gsap.context(() => {
      gsap.fromTo(
        rowRef.current.querySelector(".proj-number"),
        { opacity: 0, x: -12 },
        { opacity: 1, x: 0, duration: 0.7, scrollTrigger: { trigger: rowRef.current, start: "top 78%" } }
      );
      gsap.fromTo(
        rowRef.current.querySelectorAll(".proj-title .split-word > span"),
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 0.9,
          stagger: 0.03,
          ease: "power4.out",
          scrollTrigger: { trigger: rowRef.current, start: "top 76%" },
        }
      );
      gsap.fromTo(
        rowRef.current.querySelectorAll(".proj-meta, .proj-desc, .proj-links"),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          scrollTrigger: { trigger: rowRef.current, start: "top 72%" },
        }
      );
      gsap.fromTo(
        rowRef.current.querySelector(".proj-media"),
        { clipPath: "inset(0% 0% 100% 0%)", scale: 0.92 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: { trigger: rowRef.current, start: "top 75%" },
        }
      );
      gsap.fromTo(
        rowRef.current.querySelector(".proj-accent-line"),
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: "power3.inOut",
          transformOrigin: "left",
          scrollTrigger: { trigger: rowRef.current, start: "top 70%" },
        }
      );
    }, rowRef);
    return () => ctx.revert();
  }, []);

  // Hover lift scales the whole frame (not the image alone) so the
  // complete screenshot stays visible — nothing gets cropped by zoom.
  const handleEnter = () => {
    gsap.to(mediaRef.current, { scale: 1.03, duration: 0.7, ease: "power3.out" });
  };
  const handleLeave = () => {
    gsap.to(mediaRef.current, { scale: 1, duration: 0.7, ease: "power3.out" });
  };

  const isReverse = project.layout === "large-right";
  const isCentered = project.layout === "centered";

  return (
    <article
      ref={rowRef}
      className={`project-row ${isReverse ? "is-reverse" : ""} ${isCentered ? "is-centered" : ""}`}
    >
      <div className="proj-media" ref={mediaRef} onMouseEnter={handleEnter} onMouseLeave={handleLeave} data-cursor="project">
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
            loading="lazy"
            onLoad={handleImgLoad}
          />
        </a>
      </div>

      <div className="proj-copy">
        <span className="proj-number">
          {project.number} / {String(total).padStart(2, "0")}
        </span>
        <h3 className="proj-title">
          <SplitWords text={project.title} />
        </h3>
        <span className="proj-meta">{project.category}</span>
        <p className="proj-desc">{project.description}</p>
        {project.features && (
          <ul className="proj-features">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        )}
        <ul className="proj-stack">
          {project.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <span className="proj-accent-line" aria-hidden="true" />
        <div className="proj-links">
          {project.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="proj-link" data-cursor="button">
              {l.label} <span className="arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
