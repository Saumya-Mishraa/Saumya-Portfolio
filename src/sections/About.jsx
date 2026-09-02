import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitWords from "../components/SplitWords";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-heading .split-word > span",
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 0.9,
          stagger: 0.03,
          ease: "power4.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );
      gsap.fromTo(
        ".about-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: "power3.inOut",
          transformOrigin: "left",
          scrollTrigger: { trigger: sectionRef.current, start: "top 60%" },
        }
      );
      gsap.fromTo(
        ".about-detail",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          scrollTrigger: { trigger: ".about-details", start: "top 80%" },
        }
      );
      gsap.to(".about-heading", {
        yPercent: -6,
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 0.6 },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className="section-inner">
        <span className="eyebrow">About</span>
        <h2 className="about-heading">
          <SplitWords text="BCA student building" />
          <br />
          <SplitWords text="full-stack products," />
          <br />
          <SplitWords text="one interface at a time." />
        </h2>
        <span className="about-line" aria-hidden="true" />

        <div className="about-details">
          <p className="about-detail about-lede">
            Saumya Mishra is a BCA student with hands-on experience across the stack — from
            responsive React interfaces to REST APIs backed by Node.js, Express and MongoDB.
          </p>
          <div className="about-facts">
            <div className="about-detail about-fact">
              <span className="about-fact-label">Focus</span>
              <p>Web & full-stack application development, database-driven systems, UI/UX and API integration.</p>
            </div>
            <div className="about-detail about-fact">
              <span className="about-fact-label">Currently</span>
              <p>Pursuing a Bachelor of Computer Applications at MAIMS, Delhi, India (2024 – Present).</p>
            </div>
            <div className="about-detail about-fact">
              <span className="about-fact-label">Approach</span>
              <p>Comfortable moving from CRUD-driven backends to polished, responsive frontends — and everything in between.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
