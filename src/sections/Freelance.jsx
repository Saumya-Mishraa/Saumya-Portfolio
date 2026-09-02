import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MagneticButton from "../components/MagneticButton";
import SplitWords from "../components/SplitWords";

gsap.registerPlugin(ScrollTrigger);

export default function Freelance() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".freelance-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          transformOrigin: "left center",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );
      gsap.fromTo(
        ".freelance-heading .split-word > span",
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 0.9,
          stagger: 0.04,
          ease: "power4.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
        }
      );
      gsap.fromTo(
        ".freelance-text, .freelance-cta",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 60%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="section freelance" ref={sectionRef}>
      <div className="section-inner freelance-inner">
        <span className="freelance-line" aria-hidden="true" />
        <span className="eyebrow">Available for freelance</span>
        <h2 className="freelance-heading">
          <SplitWords text="Building your next" />
          <br />
          <SplitWords text="idea into product." />
        </h2>
        <p className="freelance-text">
          I'm available for freelance projects and collaborations — responsive websites,
          full-stack web applications, dashboards and custom web solutions.
        </p>
        <MagneticButton as="button" className="btn btn-primary freelance-cta" onClick={() => scrollTo("#contact")}>
          Hire Me <span className="arrow">→</span>
        </MagneticButton>
      </div>
    </section>
  );
}
