import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { education, achievements } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".education-card, .achievements-list li",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="education" className="section education" ref={sectionRef}>
      <div className="section-inner education-grid">
        <div className="education-card">
          <span className="eyebrow">Education</span>
          <h3 className="education-degree">{education.degree}</h3>
          <span className="education-school">{education.school}</span>
          <span className="education-meta">
            {education.period} · {education.location}
          </span>
          <ul className="education-coursework">
            {education.coursework.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>

        <div className="achievements">
          <span className="eyebrow">Achievements</span>
          <ul className="achievements-list">
            {achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
