import { Fragment } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import {
  ArrowRight,
  ChevronRight,
  Github,
  Linkedin,
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
  "relative mx-auto max-w-6xl px-4 sm:px-6 md:px-10 lg:px-14 py-10 sm:py-14 md:py-16";

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
      <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[10px] sm:text-xs font-semibold font-mono text-sky-400 flex items-center gap-2">
            <span className="text-sky-400">{'//\u00A0'}</span>{eyebrow}
          </p>
          <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-bold md:text-4xl lg:text-5xl text-slate-100 tracking-tight">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-7 text-slate-300">
              {description}
            </p>
          ) : null}
        </div>
      </div>
      <div className="mt-6 sm:mt-8">{children}</div>
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
    border: "border-cyan-400/30",
    badge: "bg-cyan-400/15 text-cyan-300 border-cyan-400/30",
    background:
      "bg-gradient-to-br from-cyan-500/15 via-slate-900/50 to-slate-900/80",
  },
  systems: {
    border: "border-emerald-400/30",
    badge: "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
    background:
      "bg-gradient-to-br from-emerald-500/15 via-slate-900/50 to-slate-900/80",
  },
  tooling: {
    border: "border-purple-400/30",
    badge: "bg-purple-400/15 text-purple-300 border-purple-400/30",
    background:
      "bg-gradient-to-br from-purple-500/15 via-slate-900/50 to-slate-900/80",
  },
};

export default function Home() {
  return (
    <Fragment>
      <header className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-10 lg:px-14 pt-10 sm:pt-12 pb-12 sm:pb-16">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-x-4 -top-28 h-[450px] rounded-full bg-sky-500/20 blur-[160px]" />
          <div className="absolute inset-x-20 top-24 h-[280px] rounded-full bg-indigo-500/20 blur-[180px]" />
        </div>
        <nav className="flex items-center justify-between text-sm text-slate-300 border-b border-white/5 pb-3 sm:pb-4 gap-2">
          <span className="font-semibold text-slate-200 font-mono tracking-tight text-xs sm:text-sm">
            <span className="text-sky-400">&gt;</span> Adrian Cancio
          </span>
          <div className="hidden items-center gap-6 sm:flex">
            <a className="hover:text-sky-400 transition-colors font-mono" href="#about">
              About
            </a>
            <a className="hover:text-sky-400 transition-colors font-mono" href="#stack">
              Stack
            </a>
            <a className="hover:text-sky-400 transition-colors font-mono" href="#approach">
              Approach
            </a>
            <a className="hover:text-sky-400 transition-colors font-mono" href="#projects">
              Projects
            </a>
            <a className="hover:text-sky-400 transition-colors font-mono" href="#contact">
              Contact
            </a>
          </div>
          <Link
            className="inline-flex items-center gap-1.5 sm:gap-2 rounded-md border border-sky-400/30 bg-sky-400/10 px-3 sm:px-4 py-1.5 sm:py-2 font-medium font-mono text-sky-300 text-xs sm:text-sm shadow-[0_0_20px_-5px_rgba(56,189,248,0.5)] transition hover:bg-sky-400/20 hover:border-sky-400/50 hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.8)]"
            href="#contact"
          >
            <span className="hidden sm:inline">Let&apos;s talk</span>
            <span className="sm:hidden">Talk</span>
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden />
          </Link>
        </nav>

        <div
          className={clsx(
            "relative mt-10 sm:mt-12 grid gap-6 sm:gap-8 overflow-hidden rounded-xl sm:rounded-2xl border border-sky-400/20 bg-gradient-to-br from-slate-900/95 via-slate-950/80 to-slate-900/70 p-6 sm:p-8 md:grid-cols-[minmax(0,1fr)_minmax(0,300px)] md:p-10 shadow-[0_0_50px_-15px_rgba(56,189,248,0.3)]",
            heroBackground,
          )}
        >
          <div className="relative z-10 flex flex-col gap-4 sm:gap-5">
            <span className="inline-flex items-center gap-2 self-start rounded-md border border-sky-400/30 bg-sky-400/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-mono font-medium uppercase tracking-[0.25em] sm:tracking-[0.3em] text-sky-300 shadow-[0_0_15px_-5px_rgba(56,189,248,0.5)]">
              <span className="text-sky-400">{'//\u00A0'}</span>{hero.aspiration}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl tracking-tight">
              {hero.name}
            </h1>
            <p className="text-base sm:text-lg font-medium text-slate-200/90 font-mono">
              <span className="text-sky-400">$</span> {hero.role}
            </p>
            <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300">
              {hero.bio}
            </p>
            <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-md bg-sky-400 px-5 py-2.5 sm:py-3 text-sm font-semibold font-mono text-slate-950 transition hover:bg-sky-300 shadow-[0_0_20px_-5px_rgba(56,189,248,0.8)] hover:shadow-[0_0_30px_-5px_rgba(56,189,248,1)]"
                href="#projects"
              >
                View portfolio
                <ChevronRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-md border border-sky-400/30 bg-sky-400/5 px-5 py-2.5 sm:py-3 text-sm font-semibold font-mono text-sky-300 transition hover:bg-sky-400/10 hover:border-sky-400/50"
                href="#contact"
              >
                Contact me
                <Mail className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
          <div className="relative z-10 flex flex-col gap-4 sm:gap-5 rounded-lg sm:rounded-xl border border-sky-400/20 bg-slate-900/60 p-5 sm:p-6 backdrop-blur shadow-[0_0_30px_-10px_rgba(56,189,248,0.2)]">
            <h3 className="text-xs sm:text-sm font-semibold font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-sky-300 border-b border-sky-400/20 pb-2">
              <span className="text-sky-400">$</span> Trajectory
            </h3>
            <p className="text-xs sm:text-sm leading-6 text-slate-300">
              Operating across backend, frontend, and automation to enable delivery teams at Treelogic.
            </p>
            <div className="flex flex-col gap-3 sm:gap-4">
              {highlights.map(({ title, description, icon: Icon }) => (
                <div key={title} className="flex items-start gap-2.5 sm:gap-3 group">
                  <span className="mt-0.5 sm:mt-1 rounded-md bg-sky-400/10 p-1.5 sm:p-2 text-sky-400 border border-sky-400/20 group-hover:bg-sky-400/20 transition-colors flex-shrink-0">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="font-medium font-mono text-sm sm:text-base text-white group-hover:text-sky-300 transition-colors">{title}</p>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{description}</p>
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
        <div className="mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed text-slate-300">
          <p className="mb-4">
            My journey in software development began with a focus on building robust applications using enterprise-grade technologies. 
            Today, I combine that foundation with cloud automation expertise to deliver modern, scalable solutions. 
            From designing <a href="#stack" className="text-sky-400 hover:text-sky-300 underline decoration-sky-400/30 hover:decoration-sky-300 transition-colors">RESTful APIs with Spring Boot</a> to 
            creating <a href="#stack" className="text-sky-400 hover:text-sky-300 underline decoration-sky-400/30 hover:decoration-sky-300 transition-colors">responsive frontends with Angular</a>, 
            every project strengthens my understanding of the full software delivery lifecycle.
          </p>
          <p>
            As I advance toward a dedicated Cloud/DevOps engineering role, I&apos;m actively building 
            expertise through <a href="#projects" className="text-sky-400 hover:text-sky-300 underline decoration-sky-400/30 hover:decoration-sky-300 transition-colors">hands-on automation projects</a> and 
            continuous learning. My <a href="#projects" className="text-sky-400 hover:text-sky-300 underline decoration-sky-400/30 hover:decoration-sky-300 transition-colors">PowerShell automation scripts</a>, 
            <a href="#projects" className="text-sky-400 hover:text-sky-300 underline decoration-sky-400/30 hover:decoration-sky-300 transition-colors">DevSecOps pipelines</a>, 
            and infrastructure tools demonstrate a commitment to codifying best practices and eliminating manual toil. 
            This portfolio showcases my ability to bridge development and operations, creating systems that are both powerful and maintainable.
          </p>
        </div>
        <div className="grid gap-5 sm:gap-6 sm:grid-cols-3">
          <div className="rounded-lg sm:rounded-xl border border-sky-400/20 bg-sky-400/5 p-5 sm:p-6 hover:border-sky-400/40 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(56,189,248,0.3)]">
            <h3 className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-2">
              <span className="text-sky-400">&gt;</span> Current mission
            </h3>
            <p className="mt-3 sm:mt-4 text-sm leading-6 sm:leading-7 text-slate-300">
              {about.currentFocus}
            </p>
          </div>
          <div className="rounded-lg sm:rounded-xl border border-sky-400/20 bg-sky-400/5 p-5 sm:p-6 hover:border-sky-400/40 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(56,189,248,0.3)]">
            <h3 className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-2">
              <span className="text-sky-400">&gt;</span> Career vision
            </h3>
            <p className="mt-3 sm:mt-4 text-sm leading-6 sm:leading-7 text-slate-300">
              {about.careerVision}
            </p>
          </div>
          <div className="rounded-lg sm:rounded-xl border border-sky-400/20 bg-sky-400/5 p-5 sm:p-6 hover:border-sky-400/40 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(56,189,248,0.3)]">
            <h3 className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-2">
              <span className="text-sky-400">&gt;</span> Active learning
            </h3>
            <p className="mt-3 sm:mt-4 text-sm leading-6 sm:leading-7 text-slate-300">
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
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
          {techStack.map(({ title, focus, items, icon: Icon }) => (
            <article
              key={title}
              className="relative overflow-hidden rounded-lg sm:rounded-xl border border-sky-400/20 bg-gradient-to-br from-sky-400/5 via-slate-900/40 to-transparent p-5 sm:p-6 hover:border-sky-400/40 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(56,189,248,0.4)]"
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="rounded-md bg-sky-400/15 p-1.5 sm:p-2 text-sky-400 border border-sky-400/20 flex-shrink-0">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-white font-mono truncate">{title}</h3>
                  {focus ? (
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-mono text-sky-300/80 truncate">
                      {focus}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-md border border-sky-400/20 bg-sky-400/10 px-2.5 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-mono text-sky-200"
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
        id="approach"
        eyebrow="Development philosophy"
        title="Building reliable systems through automation and best practices"
      >
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          <div className="rounded-lg sm:rounded-xl border border-sky-400/20 bg-gradient-to-br from-sky-400/5 via-slate-900/40 to-transparent p-5 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white font-mono flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-sky-400">&gt;</span> Infrastructure as Code
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-300 mb-3 sm:mb-4">
              I treat infrastructure configuration with the same rigor as application code. Using tools like <a href="#stack" className="text-sky-400 hover:text-sky-300 underline decoration-sky-400/30 hover:decoration-sky-300 transition-colors">PowerShell</a> and 
              shell scripting, I create declarative, version-controlled infrastructure definitions that ensure consistency across environments. 
              This approach eliminates configuration drift and makes infrastructure changes reviewable, testable, and reversible.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-300">
              My <a href="#projects" className="text-sky-400 hover:text-sky-300 underline decoration-sky-400/30 hover:decoration-sky-300 transition-colors">automation projects</a> demonstrate 
              practical applications of IaC principles, from automated environment provisioning to security hardening scripts that can be deployed across entire infrastructure fleets.
            </p>
          </div>
          <div className="rounded-lg sm:rounded-xl border border-sky-400/20 bg-gradient-to-br from-sky-400/5 via-slate-900/40 to-transparent p-5 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white font-mono flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-sky-400">&gt;</span> Security-First Development
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-300 mb-3 sm:mb-4">
              Security isn&apos;t an afterthought—it&apos;s integrated into every phase of the development lifecycle. 
              I implement automated security scanning in <a href="#projects" className="text-sky-400 hover:text-sky-300 underline decoration-sky-400/30 hover:decoration-sky-300 transition-colors">CI/CD pipelines</a>, 
              follow the principle of least privilege in infrastructure design, and stay current with emerging threats like post-quantum cryptography challenges.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-300">
              Projects like the <a href="#projects" className="text-sky-400 hover:text-sky-300 underline decoration-sky-400/30 hover:decoration-sky-300 transition-colors">PQC DevSecOps Pipeline</a> showcase 
              my commitment to building security guardrails that protect systems without slowing down development velocity.
            </p>
          </div>
          <div className="rounded-lg sm:rounded-xl border border-sky-400/20 bg-gradient-to-br from-sky-400/5 via-slate-900/40 to-transparent p-5 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white font-mono flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-sky-400">&gt;</span> Continuous Integration & Delivery
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-300 mb-3 sm:mb-4">
              Modern software delivery requires automation at every step. I design and implement CI/CD pipelines that automate testing, security scanning, and deployment processes. 
              These pipelines provide fast feedback loops, enabling teams to ship features confidently and frequently.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-300">
              By combining automated testing with <a href="#stack" className="text-sky-400 hover:text-sky-300 underline decoration-sky-400/30 hover:decoration-sky-300 transition-colors">monitoring and observability tools</a>, 
              I create systems that not only deploy automatically but also provide insights into application health and performance in production.
            </p>
          </div>
          <div className="rounded-lg sm:rounded-xl border border-sky-400/20 bg-gradient-to-br from-sky-400/5 via-slate-900/40 to-transparent p-5 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white font-mono flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-sky-400">&gt;</span> Developer Experience
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-300 mb-3 sm:mb-4">
              Great tools empower great work. I invest time in creating developer experiences that reduce friction and boost productivity. 
              From crafting <a href="#projects" className="text-sky-400 hover:text-sky-300 underline decoration-sky-400/30 hover:decoration-sky-300 transition-colors">optimized development environments</a> to 
              building reusable utilities and scripts, I focus on eliminating repetitive tasks.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-300">
              Tools like my <a href="#projects" className="text-sky-400 hover:text-sky-300 underline decoration-sky-400/30 hover:decoration-sky-300 transition-colors">Neovim configuration</a> and 
              <a href="#projects" className="text-sky-400 hover:text-sky-300 underline decoration-sky-400/30 hover:decoration-sky-300 transition-colors"> automation scripts</a> reflect 
              this philosophy, providing efficient workflows that let developers focus on solving problems rather than fighting with tools.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="Key projects"
        title="Proof in shipped automation, systems, and tooling"
        description="Selected initiatives spanning infrastructure automation, secure delivery, and developer experience."
      >
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
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
        <div className="mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed text-slate-300">
          <p className="mb-4">
            I&apos;m seeking opportunities to apply my <a href="#stack" className="text-sky-400 hover:text-sky-300 underline decoration-sky-400/30 hover:decoration-sky-300 transition-colors">full-stack development expertise</a> and 
            growing <a href="#approach" className="text-sky-400 hover:text-sky-300 underline decoration-sky-400/30 hover:decoration-sky-300 transition-colors">DevOps capabilities</a> in 
            roles that emphasize automation, cloud infrastructure, and secure delivery. Whether you&apos;re building a new platform, migrating to the cloud, 
            or improving existing CI/CD pipelines, I bring both software engineering fundamentals and infrastructure automation skills to the table.
          </p>
          <p>
            My experience at Treelogic has given me deep insights into enterprise software development, while my 
            <a href="#projects" className="text-sky-400 hover:text-sky-300 underline decoration-sky-400/30 hover:decoration-sky-300 transition-colors"> personal automation projects</a> demonstrate 
            initiative and continuous learning. I&apos;m particularly interested in roles that involve <a href="#stack" className="text-sky-400 hover:text-sky-300 underline decoration-sky-400/30 hover:decoration-sky-300 transition-colors">Infrastructure as Code</a>, 
            container orchestration, and building developer platforms that improve team productivity. Let&apos;s discuss how I can contribute to your infrastructure and automation goals.
          </p>
        </div>
        <div className="grid gap-5 sm:gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="rounded-lg sm:rounded-xl border border-sky-400/20 bg-gradient-to-br from-slate-900/70 via-slate-900/50 to-transparent p-5 sm:p-6 shadow-[0_0_40px_-15px_rgba(56,189,248,0.2)]">
            <h3 className="text-lg sm:text-xl font-bold text-white font-mono flex items-center gap-2">
              <span className="text-sky-400">&gt;</span> Let&apos;s build together
            </h3>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Whether it&apos;s automating environments, hardening CI/CD, or crafting full-stack features, I thrive where software and infrastructure intersect.
            </p>
            <div className="mt-5 sm:mt-6 grid gap-3 sm:gap-4 sm:grid-cols-2">
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
          <div className="flex flex-col justify-between gap-4 sm:gap-5 rounded-lg sm:rounded-xl border border-sky-400/20 bg-sky-400/5 p-5 sm:p-6 hover:border-sky-400/40 transition-all duration-300">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-2">
                <span className="text-sky-400">&gt;</span> Availability
              </h4>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Open to opportunities that amplify cloud adoption, DevOps culture, and automation excellence.
              </p>
            </div>
            <Link
              href={contact.github}
              className="group inline-flex items-center justify-between rounded-md border border-sky-400/30 bg-sky-400/10 px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold font-mono text-sky-300 transition-all duration-300 hover:bg-sky-400/20 hover:border-sky-400/50 hover:shadow-[0_0_20px_-5px_rgba(56,189,248,0.6)]"
              target="_blank"
              rel="noopener"
            >
              Explore GitHub
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Section>

      <footer className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 lg:px-14 pb-8 sm:pb-12 text-[10px] sm:text-xs text-slate-500 font-mono border-t border-sky-400/10 pt-6 sm:pt-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-sky-400">&gt;</span> © {new Date().getFullYear()} Adrian Cancio. Built with an automation mindset.
          </div>
          <div className="flex items-center gap-4">
            <Link
              href={contact.github}
              target="_blank"
              rel="noopener me"
              className="flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </Link>
            <Link
              href={contact.linkedin}
              target="_blank"
              rel="noopener me"
              className="flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </Link>
            <Link
              href={`mailto:${contact.email}`}
              className="flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">Email</span>
            </Link>
          </div>
        </div>
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
    <div className="flex items-center gap-3 sm:gap-4 rounded-lg border border-sky-400/20 bg-sky-400/5 px-3 sm:px-4 py-2.5 sm:py-3 transition-all duration-300 hover:border-sky-400/40 hover:bg-sky-400/10 hover:shadow-[0_0_20px_-5px_rgba(56,189,248,0.4)]">
      <span className="rounded-md bg-sky-400/15 p-1.5 sm:p-2 text-sky-400 border border-sky-400/20 flex-shrink-0">
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
      </span>
      <div className="flex flex-col min-w-0">
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-mono text-sky-400">
          {title}
        </span>
        <span className="text-xs sm:text-sm font-medium font-mono text-white truncate">{value}</span>
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
  "relative h-full rounded-lg sm:rounded-xl border bg-white/10 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.6)]",
        projectPalette[project.theme].border,
        projectPalette[project.theme].background,
      )}
    >
      <div className="flex items-center justify-between gap-3 sm:gap-4">
        <span
          className={clsx(
            "inline-flex items-center rounded-md px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] border",
            projectPalette[project.theme].badge,
          )}
        >
          <span className="mr-1 sm:mr-1.5">$</span>{project.theme}
        </span>
        <Link
          href={project.repository}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-mono font-medium text-sky-400 hover:text-sky-300 transition-colors flex-shrink-0"
        >
          <span className="hidden xs:inline">View repo</span>
          <span className="xs:hidden">Repo</span>
          <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden />
        </Link>
      </div>
      <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-bold text-white tracking-tight">{project.title}</h3>
      <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-300">{project.description}</p>
      <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
        {project.stack.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-md border border-sky-400/20 bg-sky-400/5 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-mono tracking-wide text-sky-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
