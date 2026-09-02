import { projects } from "../data/content";
import PinnedProject from "../components/PinnedProject";
import ProjectRow from "../components/ProjectRow";

export default function Work() {
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="section work">
      <div className="section-inner">
        <div className="work-heading">
          <span className="eyebrow">Selected Work</span>
          <h2>Four projects, built end to end.</h2>
        </div>
      </div>

      <PinnedProject project={featured} />

      <div className="section-inner work-list">
        {rest.map((p) => (
          <ProjectRow key={p.number} project={p} />
        ))}
      </div>
    </section>
  );
}
