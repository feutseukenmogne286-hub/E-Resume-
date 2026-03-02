import { notFound } from 'next/navigation';
import { resume } from '@/data/resume';

export function generateStaticParams() {
  return resume.projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectCaseStudy({ params }: { params: { slug: string } }) {
  const project = resume.projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <a href="/#projects" className="text-sm text-accent">
        ← Back to projects
      </a>
      <h1 className="mt-4 text-4xl font-bold">{project.title}</h1>
      <p className="mt-2 text-sm text-slate-500">
        {project.type} · {project.date} · {project.location}
      </p>
      <p className="mt-4 text-slate-600">{project.oneLiner}</p>

      {project.caseStudy ? (
        <section className="mt-8 space-y-8">
          <article>
            <h2 className="text-xl font-semibold">Goal</h2>
            <p className="mt-2 text-slate-700">{project.caseStudy.goal}</p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Snapshot</h2>
            <ul className="mt-2 list-disc pl-5 text-slate-700">
              <li>Banner: {project.caseStudy.snapshot.banner}</li>
              <li>Date: {project.caseStudy.snapshot.date}</li>
              <li>Time: {project.caseStudy.snapshot.time}</li>
              <li>Address: {project.caseStudy.snapshot.address}</li>
              <li>Category: {project.caseStudy.snapshot.category}</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Observations</h2>
            <ul className="mt-2 space-y-3 text-slate-700">
              {project.caseStudy.observations.map((observation) => (
                <li key={observation.label}>
                  <p className="font-medium">{observation.label}</p>
                  <p>{observation.detail}</p>
                </li>
              ))}
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Insight</h2>
            <p className="mt-2 text-slate-700">{project.caseStudy.insight}</p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Recommendation</h2>
            <p className="mt-2 font-medium text-slate-800">{project.caseStudy.recommendation.title}</p>
            <p className="mt-1 text-slate-700">{project.caseStudy.recommendation.concept}</p>
            <p className="mt-1 text-slate-700">{project.caseStudy.recommendation.placement}</p>
            <h3 className="mt-4 font-medium">Build Specs</h3>
            <ul className="mt-1 list-disc pl-5 text-slate-700">
              {project.caseStudy.recommendation.buildSpecs.map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </ul>
            <h3 className="mt-4 font-medium">Merchandising Plan</h3>
            <ul className="mt-1 list-disc pl-5 text-slate-700">
              {project.caseStudy.recommendation.merchandisingPlan.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Success Metrics</h2>
            <ul className="mt-2 list-disc pl-5 text-slate-700">
              {project.caseStudy.successMetrics.map((metric) => (
                <li key={metric}>{metric}</li>
              ))}
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Deliverables</h2>
            <ul className="mt-2 list-disc pl-5 text-slate-700">
              {project.caseStudy.deliverables.map((deliverable) => (
                <li key={deliverable}>{deliverable}</li>
              ))}
            </ul>
          </article>
        </section>
      ) : (
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Project Outcomes</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700">
            {(project.outcomes ?? []).map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
