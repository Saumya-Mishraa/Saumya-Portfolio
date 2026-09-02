import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { skills } from "../data/content";
import SkillIcon from "../components/SkillIcon";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".skills-category").forEach((cat) => {
        gsap.fromTo(
          cat.querySelector(".skills-category-label"),
          { opacity: 0, x: -16 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: { trigger: cat, start: "top 84%" },
          }
        );
        gsap.fromTo(
          cat.querySelectorAll(".skill-item"),
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.045,
            ease: "power3.out",
            scrollTrigger: { trigger: cat, start: "top 82%" },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleEnter = (e) => {
    gsap.to(e.currentTarget.querySelector(".skill-icon"), { y: -4, x: 3, scale: 1.12, duration: 0.4, ease: "power3.out" });
    gsap.to(e.currentTarget.querySelector(".skill-name"), { x: 4, duration: 0.4, ease: "power3.out" });
    gsap.to(e.currentTarget.querySelector(".skill-accent"), { scaleX: 1, duration: 0.45, ease: "power3.out" });
  };
  const handleLeave = (e) => {
    gsap.to(e.currentTarget.querySelector(".skill-icon"), { y: 0, x: 0, scale: 1, duration: 0.5, ease: "power3.out" });
    gsap.to(e.currentTarget.querySelector(".skill-name"), { x: 0, duration: 0.5, ease: "power3.out" });
    gsap.to(e.currentTarget.querySelector(".skill-accent"), { scaleX: 0, duration: 0.5, ease: "power3.out" });
  };

  return (
    <section id="skills" className="section skills" ref={sectionRef}>
      <div className="section-inner">
        <span className="eyebrow">Skills & Tools</span>
        <h2 className="skills-heading">What I build with.</h2>

        <div className="skills-categories">
          {skills.map((group, i) => (
            <div className="skills-category" key={group.category}>
              <div className="skills-category-label">
                <span className="skills-category-index">{String(i + 1).padStart(2, "0")}</span>
                <span className="skills-category-name">{group.category}</span>
              </div>

              <div className="skills-category-items">
                {group.items.map((s) => (
                  <div
                    className="skill-item"
                    key={s.name}
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                  >
                    <SkillIcon name={s.icon} className="skill-icon" />
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-accent" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
