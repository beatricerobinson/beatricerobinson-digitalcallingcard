import { ArrowUpRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { GitHubIcon } from '@/components/github-icon'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { AsthmaVisual, FunnelVisual, HealthWarsVisual } from '@/components/project-visuals'
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
    href: 'https://beatricerobinson.github.io/recruitment-disparity-simulator',
    github: false,
    Visual: FunnelVisual,
  },
  {
    title: 'Healthcare Data Analysis with R',
    category: 'Healthcare Analytics',
    description:
      'Analyzes CDC adult asthma prevalence across U.S. states, years, and demographic groups, using a reproducible workflow for data cleaning, exploratory analysis, and clear visualizations.',
    tech: ['R', 'tidyverse', 'dplyr', 'ggplot2'],
    cta: 'View Analysis',
    href: 'https://github.com/beatricerobinson/beatrice-robinson-data-portfolio/tree/main/R-Projects/healthcare-data-analysis',
    Visual: AsthmaVisual,
  },
  {
    title: 'Health Wars: Quickfire',
    category: 'Interactive Public Health Game',
    description:
      'A real-time public health trivia game for 2–8 players. A host creates a room, friends join with a code, and everyone answers ten timed questions from their own device.',
    tech: ['Public Health', 'Multiplayer', 'JavaScript', 'Netlify'],
    cta: 'Play the Game',
    href: 'https://glistening-malasada-aac885.netlify.app',
    sourceHref: 'https://github.com/beatricerobinson/health-wars-quickfire',
    Visual: HealthWarsVisual,
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

        <ul className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <li key={project.title}>
              <Reveal delay={i * 120} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 lg:flex-row">
                  <div className="relative aspect-[16/8] overflow-hidden border-b border-border bg-secondary/60 lg:aspect-auto lg:min-h-80 lg:w-1/2 lg:border-r lg:border-b-0">
                    <project.Visual />
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-10">
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
                    <div className="mt-auto flex flex-wrap gap-3 pt-8">
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
                      {project.sourceHref && (
                        <a
                          href={project.sourceHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(buttonVariants({ variant: 'outline' }), 'h-10 gap-2 px-4 text-sm')}
                        >
                          <GitHubIcon className="size-4" />
                          View on GitHub
                          <span className="sr-only">: {project.title} source code (opens in a new tab)</span>
                        </a>
                      )}
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
