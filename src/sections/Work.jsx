import { projects } from "../data/content";
import ProjectRow from "../components/ProjectRow";

export default function Work() {
  return (
    <section id="work" className="section work">
      <div className="section-inner">
        <div className="work-heading">
          <span className="eyebrow">Selected Work</span>
          <h2>{projects.length} projects, built with care.</h2>
        </div>
      </div>

      <div className="section-inner work-list">
        {projects.map((p) => (
          <ProjectRow key={p.number} project={p} total={projects.length} />
        ))}
      </div>
    </section>
  );
}
