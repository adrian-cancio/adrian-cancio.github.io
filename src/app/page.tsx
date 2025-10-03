import { Fragment } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import {
  ArrowRight,
  ChevronRight,
  Github,
  Mail,
  Target,
} from "lucide-react";
import {
  about,
  contact,
  hero,
  highlights,
  projects,
  techStack,
} from "@/content";
import type { Project as ProjectType } from "@/content";
import type { LucideIcon } from "lucide-react";

const sectionClass =
  "relative mx-auto max-w-6xl px-6 sm:px-10 lg:px-14 py-16 sm:py-20";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className={sectionClass}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="uppercase tracking-[0.35em] text-xs font-semibold text-sky-300/70">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-5xl text-slate-100">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-slate-300">
              {description}
            </p>
          ) : null}
        </div>
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}

const heroBackground =
  "after:absolute after:inset-0 after:rounded-3xl after:bg-slate-900/60 after:ring-1 after:ring-white/5 after:backdrop-blur-lg";

const projectPalette: Record<
  ProjectType["theme"],
  { border: string; badge: string; background: string }
> = {
  automation: {
    border: "border-cyan-400/25",
    badge: "bg-cyan-400/15 text-cyan-200",
    background:
      "bg-gradient-to-br from-cyan-500/10 via-slate-900/40 to-slate-900/70",
  },
  systems: {
    border: "border-emerald-400/25",
    badge: "bg-emerald-400/15 text-emerald-200",
    background:
      "bg-gradient-to-br from-emerald-500/10 via-slate-900/40 to-slate-900/70",
  },
  tooling: {
    border: "border-purple-400/25",
    badge: "bg-purple-400/15 text-purple-200",
    background:
      "bg-gradient-to-br from-purple-500/10 via-slate-900/40 to-slate-900/70",
  },
};

export default function Home() {
  return (
    <Fragment>
      <header className="relative mx-auto max-w-6xl px-6 sm:px-10 lg:px-14 pt-16 pb-24">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-x-4 -top-28 h-[450px] rounded-full bg-sky-500/20 blur-[160px]" />
          <div className="absolute inset-x-20 top-24 h-[280px] rounded-full bg-indigo-500/20 blur-[180px]" />
        </div>
        <nav className="flex items-center justify-between text-sm text-slate-300">
          <span className="font-semibold text-slate-200">Adrian Cancio</span>
          <div className="hidden items-center gap-6 sm:flex">
            <a className="hover:text-white transition" href="#about">
              About
            </a>
            <a className="hover:text-white transition" href="#stack">
              Stack
            </a>
            <a className="hover:text-white transition" href="#projects">
              Projects
            </a>
            <a className="hover:text-white transition" href="#contact">
              Contact
            </a>
          </div>
          <Link
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 font-medium text-white shadow-[0_10px_40px_-20px_rgba(56,189,248,0.6)] transition hover:bg-white/20"
            href="#contact"
          >
            Let&apos;s talk
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </nav>

        <div
          className={clsx(
            "relative mt-16 grid gap-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-950/70 to-slate-900/60 p-10 md:grid-cols-[minmax(0,1fr)_minmax(0,300px)] md:p-14",
            heroBackground,
          )}
        >
          <div className="relative z-10 flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.35em] text-sky-200/80">
              {hero.aspiration}
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {hero.name}
            </h1>
            <p className="text-lg font-medium text-slate-200/90">
              {hero.role}
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300">
              {hero.bio}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
                href="#projects"
              >
                View portfolio
                <ChevronRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                href="#contact"
              >
                Contact me
                <Mail className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
          <div className="relative z-10 flex flex-col gap-6 rounded-2xl border border-white/5 bg-white/10 p-6 backdrop-blur">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200/80">
              Trajectory
            </h3>
            <p className="text-sm leading-6 text-slate-300">
              Operating across backend, frontend, and automation to enable delivery teams at Treelogic.
            </p>
            <div className="flex flex-col gap-4">
              {highlights.map(({ title, description, icon: Icon }) => (
                <div key={title} className="flex items-start gap-3">
                  <span className="mt-1 rounded-md bg-sky-400/10 p-2 text-sky-300">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-medium text-white">{title}</p>
                    <p className="text-sm text-slate-400">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <Section
        id="about"
        eyebrow="Career narrative"
        title="Rooted in full-stack delivery, accelerating toward Cloud & DevOps"
        description={about.valueProposition}
      >
        <div className="grid gap-10 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Current mission</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {about.currentFocus}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Career vision</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {about.careerVision}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Active learning</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {about.learning}
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="stack"
        eyebrow="Technical stack"
        title="Tools that shape resilient, automated delivery"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {techStack.map(({ title, focus, items, icon: Icon }) => (
            <article
              key={title}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/10 to-transparent p-6"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-lg bg-sky-400/15 p-2 text-sky-300">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  {focus ? (
                    <p className="text-xs uppercase tracking-[0.28em] text-sky-200/70">
                      {focus}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="Key projects"
        title="Proof in shipped automation, systems, and tooling"
        description="Selected initiatives spanning infrastructure automation, secure delivery, and developer experience."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="Let&apos;s collaborate"
        title="Bring Cloud/DevOps ambition to your team"
        description="I&apos;m always up for conversations about automation, platform enablement, and secure delivery pipelines."
      >
        <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-transparent p-8">
            <h3 className="text-xl font-semibold text-white">Let&apos;s build together</h3>
            <p className="mt-4 text-base text-slate-300">
              Whether it&apos;s automating environments, hardening CI/CD, or crafting full-stack features, I thrive where software and infrastructure intersect.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <ContactCard
                title="Email"
                value={contact.email}
                href={`mailto:${contact.email}`}
                icon={Mail}
              />
              <ContactCard
                title="GitHub"
                value="adrian-cancio"
                href={contact.github}
                icon={Github}
              />
              <ContactCard
                title="Pronouns"
                value={contact.pronouns}
                icon={Target}
              />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-8">
            <div>
              <h4 className="text-lg font-semibold text-white">Availability</h4>
              <p className="mt-3 text-sm text-slate-300">
                Open to opportunities that amplify cloud adoption, DevOps culture, and automation excellence.
              </p>
            </div>
            <Link
              href={contact.github}
              className="group inline-flex items-center justify-between rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              target="_blank"
              rel="noopener"
            >
              Explore GitHub
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Section>

      <footer className="mx-auto max-w-6xl px-6 pb-12 text-xs text-slate-500 sm:px-10 lg:px-14">
        © {new Date().getFullYear()} Adrian Cancio. Built with an automation mindset.
      </footer>
    </Fragment>
  );
}

type ContactCardProps = {
  title: string;
  value: string;
  href?: string;
  icon: LucideIcon;
};

function ContactCard({ title, value, href, icon: Icon }: ContactCardProps) {
  const content = (
    <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-white/20">
      <span className="rounded-md bg-sky-400/15 p-2 text-sky-300">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <div className="flex flex-col">
        <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
          {title}
        </span>
        <span className="text-sm font-medium text-white">{value}</span>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener" className="block">
        {content}
      </Link>
    );
  }

  return content;
}

type ProjectCardProps = {
  project: ProjectType;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={clsx(
  "relative h-full rounded-2xl border bg-white/10 p-6 transition hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_30px_80px_-40px_rgba(56,189,248,0.5)]",
        projectPalette[project.theme].border,
        projectPalette[project.theme].background,
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <span
          className={clsx(
            "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em]",
            projectPalette[project.theme].badge,
          )}
        >
          {project.theme}
        </span>
        <Link
          href={project.repository}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1 text-xs font-medium text-slate-200 hover:text-white"
        >
          View repo
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-100/80"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
