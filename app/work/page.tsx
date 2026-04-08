import Link from "next/link";
import { projects } from "@/content/projects";

export default function WorkPage() {
  return (
    <div className="work-page">
      <div className="container">
        <div className="work-header">
          <p className="hero__eyebrow">Portfolio</p>
          <h1 className="work-header__title">Selected Work</h1>
          <p className="work-header__sub">
            UX research and design projects spanning AI, community platforms,
            and social research.
          </p>
        </div>
        <div className="project-grid project-grid--full">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={project.status === "published" ? `/work/${project.slug}` : "#"}
              className={`project-card ${project.status === "coming-soon" ? "project-card--muted" : ""}`}
            >
              <div className="project-card__cover" />
              <div className="project-card__body">
                <div className="project-card__meta">
                  <span className="project-card__year">{project.year}</span>
                  {project.status === "coming-soon" && (
                    <span className="tag tag--muted">Coming soon</span>
                  )}
                </div>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__tagline">{project.tagline}</p>
                <p className="project-card__role">{project.role}</p>
                {project.status === "published" && (
                  <span className="project-card__cta">Read case study →</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
