import type { ResumeData } from '@/data/resume';

type Project = ResumeData['projects'][number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{project.type}</p>
      <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-slate-600">{project.oneLiner}</p>
      <p className="mt-3 text-xs text-slate-500">{project.tags.join(' · ')}</p>
      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        {project.links.map((link) => (
          <a key={link.href} className="text-accent" href={link.href}>
            {link.label}
          </a>
        ))}
        {project.caseStudy ? (
          <a className="text-accent" href={`/projects/${project.slug}`}>
            Case Study
          </a>
        ) : null}
      </div>
    </article>
  );
}
