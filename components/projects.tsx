import { ArrowUpRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { GitHubIcon } from '@/components/github-icon'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { FunnelVisual, ChartVisual } from '@/components/project-visuals'
import { GITHUB_URL } from '@/lib/site'
import { cn } from '@/lib/utils'

const projects = [
  {
    title: 'Systemic Recruitment Disparity Simulator',
    category: 'AI / Data Project',
    description:
      'Interactive simulation exploring how sequential recruitment stages can influence candidate progression and outcomes.',
    tech: ['HTML', 'JavaScript', 'Data Modeling', 'Simulation'],
    cta: 'View Project',
    href: GITHUB_URL,
    github: false,
    Visual: FunnelVisual,
  },
  {
    title: 'Healthcare Data Analysis with R',
    category: 'Data Analytics Project',
    description:
      'Analysis of CDC Chronic Disease Indicators data examining adult asthma patterns across demographic and geographic dimensions.',
    tech: ['R', 'RStudio', 'dplyr', 'ggplot2'],
    cta: 'View on GitHub',
    href: GITHUB_URL,
    github: true,
    Visual: ChartVisual,
  },
]

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading index="03" eyebrow="Projects" title="Things I've Built" id="projects-title" />
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-10 inline-flex items-center gap-2 self-start text-sm font-medium text-primary underline-offset-4 hover:underline md:mb-14 md:self-auto"
          >
            <GitHubIcon className="size-4" />
            github.com/beatricerobinson
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>

        <ul className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <li key={project.title}>
              <Reveal delay={i * 120} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                  <div className="relative aspect-[16/8] overflow-hidden border-b border-border bg-secondary/60">
                    <project.Visual />
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <p className="mb-3 font-mono text-xs tracking-widest text-primary uppercase">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-semibold tracking-tight text-balance md:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-pretty text-muted-foreground">
                      {project.description}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                      {project.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-md border border-border bg-muted px-2.5 py-1 font-mono text-xs text-foreground/80"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-8">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants(), 'h-10 gap-2 px-4 text-sm')}
                      >
                        {project.github && <GitHubIcon className="size-4" />}
                        {project.cta}
                        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                        <span className="sr-only">: {project.title} (opens in a new tab)</span>
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
