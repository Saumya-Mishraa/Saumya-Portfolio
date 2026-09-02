import { useEffect, useRef } from "react";
import gsap from "gsap";
import MagneticButton from "../components/MagneticButton";
import portrait from "../assets/images/portrait.jpg";

export default function Hero() {
  const heroRef = useRef(null);
  const portraitWrapRef = useRef(null);
  const portraitImgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-bg-wash", { opacity: 0, duration: 1.2, ease: "power2.out" })
        .from(".hero-eyebrow", { opacity: 0, y: 14, duration: 0.6 }, "-=0.7")
        .from(
          ".hero-title .split-word > span",
          { yPercent: 110, duration: 1, stagger: 0.06, ease: "power4.out" },
          "-=0.3"
        )
        .from(".hero-sub-line", { opacity: 0, y: 18, duration: 0.7, stagger: 0.12 }, "-=0.5")
        .from(
          portraitWrapRef.current,
          { clipPath: "inset(100% 0% 0% 0%)", duration: 1.2, ease: "power4.inOut" },
          "-=0.9"
        )
        .from(portraitImgRef.current, { scale: 1.25, duration: 1.4, ease: "power3.out" }, "-=1.2")
        .from(".hero-ring", { scale: 0, opacity: 0, duration: 0.9, ease: "back.out(1.6)" }, "-=0.9")
        .from(".hero-cta", { opacity: 0, y: 16, duration: 0.6, stagger: 0.1 }, "-=0.6")
        .from(".hero-scroll-indicator", { opacity: 0, duration: 0.6 }, "-=0.3");

      if (!reduce) {
        gsap.to(".hero-scroll-indicator .dot", {
          y: 10,
          opacity: 0.2,
          repeat: -1,
          yoyo: true,
          duration: 1.1,
          ease: "sine.inOut",
        });

        // Mouse parallax on portrait
        const onMove = (e) => {
          const { innerWidth, innerHeight } = window;
          const relX = (e.clientX / innerWidth - 0.5) * 2;
          const relY = (e.clientY / innerHeight - 0.5) * 2;
          gsap.to(portraitImgRef.current, {
            x: relX * 14,
            y: relY * 10,
            duration: 0.8,
            ease: "power2.out",
          });
          gsap.to(".hero-ring", {
            x: relX * -18,
            y: relY * -14,
            duration: 1,
            ease: "power2.out",
          });
        };
        if (window.matchMedia("(hover: hover)").matches) {
          window.addEventListener("mousemove", onMove);
          return () => window.removeEventListener("mousemove", onMove);
        }
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-bg-wash" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="hero-eyebrow eyebrow">01 — Portfolio</span>
          <h1 className="hero-title">
            <span className="split-word"><span>Full</span></span>
            <br />
            <span className="split-word"><span>Stack</span></span>
            <br />
            <span className="split-word"><span>Developer</span></span>
          </h1>
          <p className="hero-sub">
            <span className="hero-sub-line">I build modern, responsive and scalable web applications —</span>
            <span className="hero-sub-line">from React interfaces to Node.js and MongoDB-backed APIs.</span>
          </p>
          <div className="hero-actions">
            <MagneticButton as="button" className="btn btn-primary hero-cta" onClick={() => scrollTo("#work")}>
              View Projects <span className="arrow">↗</span>
            </MagneticButton>
            <MagneticButton as="button" className="btn btn-outline hero-cta" onClick={() => scrollTo("#contact")}>
              Hire Me <span className="arrow">↗</span>
            </MagneticButton>
          </div>
        </div>

        <div className="hero-portrait">
          <div className="hero-ring" aria-hidden="true" />
          <div className="hero-portrait-wrap" ref={portraitWrapRef}>
            <img
              ref={portraitImgRef}
              src={portrait}
              alt="Portrait of Saumya Mishra"
              className="hero-portrait-img"
              data-cursor="portrait"
            />
          </div>
          <span className="hero-portrait-tag">Delhi, India</span>
        </div>
      </div>

      <div className="hero-scroll-indicator" aria-hidden="true">
        <span className="line" />
        <span className="dot" />
        <span className="label">Scroll</span>
      </div>
    </section>
  );
}
