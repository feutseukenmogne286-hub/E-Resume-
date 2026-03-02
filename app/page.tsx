import { Navbar } from '@/components/navbar';
import { ProjectCard } from '@/components/project-card';
import { resume } from '@/data/resume';

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-14">
      <h2 className="mb-6 text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

export default function HomePage() {
  const featuredSet = new Set(resume.featuredProjects);
  const featured = resume.projects.filter((project) => featuredSet.has(project.id));
  const rest = resume.projects.filter((project) => !featuredSet.has(project.id));

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 pb-24">
        <section id="hero" className="scroll-mt-24 py-20">
          <p className="text-sm uppercase tracking-wider text-accent">{resume.basics.location}</p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight">{resume.basics.name}</h1>
          <p className="mt-3 text-xl text-slate-700">{resume.basics.headline}</p>
          <p className="mt-6 max-w-3xl text-slate-600">{resume.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="rounded-lg bg-ink px-4 py-2 text-sm font-medium text-white" href={`mailto:${resume.basics.email}`}>
              Email
            </a>
            <a className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium" href={resume.basics.linkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium" href={resume.basics.resumePdfUrl} download>
              Download Resume
            </a>
          </div>
        </section>

        <Section id="about" title="About">
          <p className="max-w-3xl text-slate-700">{resume.summary}</p>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-4 md:grid-cols-2">
            {resume.skillGroups.map((group) => (
              <article key={group.title} className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="font-semibold">{group.title}</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Featured Projects">
          <div className="grid gap-4 md:grid-cols-2">
            {[...featured, ...rest].map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="space-y-6">
            {resume.experience.map((item) => (
              <article key={`${item.company}-${item.role}`}>
                <h3 className="font-semibold">
                  {item.role} · {item.company}
                </h3>
                <p className="text-sm text-slate-500">
                  {item.start} — {item.end} · {item.location}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="space-y-4">
            {resume.education.map((ed) => (
              <article key={ed.school}>
                <h3 className="font-semibold">{ed.program}</h3>
                <p className="text-slate-700">{ed.school}</p>
                <p className="text-sm text-slate-500">
                  {ed.location} · {ed.end}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certifications">
          <ul className="space-y-2">
            {resume.certifications.map((cert) => (
              <li key={cert.title} className="text-slate-700">
                {cert.title}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <p className="text-lg font-medium">Let’s connect.</p>
          <p className="mt-2 text-slate-700">Open to internships and opportunities in marketing, brand, and digital strategy.</p>
          <a className="mt-4 inline-block text-accent" href={`mailto:${resume.basics.email}`}>
            {resume.basics.email}
          </a>
        </Section>
      </main>
    </>
  );
}
