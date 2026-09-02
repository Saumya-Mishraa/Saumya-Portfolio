import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MagneticButton from "../components/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export default function Resume() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".resume-panel",
        { opacity: 0, y: 30, rotateX: 4 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="resume" className="section resume" ref={sectionRef}>
      <div className="section-inner resume-inner">
        <div className="resume-copy">
          <span className="eyebrow">Resume</span>
          <h2>Everything on paper.</h2>
          <p>The complete overview — education, experience, projects and skills — in one document.</p>
          <div className="resume-actions">
            <MagneticButton as="a" href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary">
              View Resume <span className="arrow">↗</span>
            </MagneticButton>
            <MagneticButton as="a" href="/resume.pdf" download className="btn btn-outline">
              Download PDF <span className="arrow">↓</span>
            </MagneticButton>
          </div>
        </div>

        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="resume-panel" data-cursor="project">
          <div className="resume-panel-header">
            <span>Saumya Mishra</span>
            <span>Resume.pdf</span>
          </div>
          <div className="resume-panel-lines">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} style={{ width: `${100 - i * 6}%` }} />
            ))}
          </div>
        </a>
      </div>
    </section>
  );
}
