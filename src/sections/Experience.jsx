import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { experience } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: ".timeline",
            start: "top 75%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      );
      gsap.fromTo(
        ".timeline-entry",
        { opacity: 0, x: -24, clipPath: "inset(0 100% 0 0)" },
        {
          opacity: 1,
          x: 0,
          clipPath: "inset(0 0% 0 0)",
          duration: 0.9,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: { trigger: ".timeline", start: "top 70%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="section experience" ref={sectionRef}>
      <div className="section-inner">
        <span className="eyebrow">Experience</span>
        <h2 className="experience-heading">Where I've worked.</h2>

        <div className="timeline">
          <span className="timeline-line" aria-hidden="true" />
          {experience.map((e) => (
            <div className="timeline-entry" key={e.role}>
              <span className="timeline-dot" aria-hidden="true" />
              <span className="timeline-period">{e.period}</span>
              <h3 className="timeline-role">{e.role}</h3>
              <span className="timeline-org">{e.org}</span>
              <ul className="timeline-points">
                {e.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
