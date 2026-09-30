import { BarChart3, MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function CurrentRole() {
  return (
    <section id="currently" aria-labelledby="currently-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading index="05" eyebrow="Current Role" title="Currently" id="currently-title" />

        <Reveal>
          <article className="grid overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-[1.4fr_1fr]">
            <div className="p-6 md:p-10">
              <p className="mb-4 flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                Current position
              </p>
              <h3 className="text-2xl font-semibold tracking-tight text-balance md:text-3xl">
                Medical Administrative Specialist
              </h3>
              <p className="mt-2 text-lg text-foreground/80">U.S. Department of Veterans Affairs</p>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="size-4" aria-hidden="true" />
                San Antonio, Texas
              </p>
              <p className="mt-6 max-w-2xl leading-relaxed text-pretty text-muted-foreground">
                Supporting the VA Physician Staff Market Pay Program for 441+ physicians and
                dentists while using data, technology, and process improvement to improve
                compensation tracking, reporting, and audit readiness.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4 border-t border-border bg-accent/60 p-6 md:p-10 lg:border-t-0 lg:border-l">
              <div className="flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <BarChart3 className="size-5" aria-hidden="true" />
              </div>
              <p className="font-mono text-xs tracking-widest text-accent-foreground uppercase">
                Highlight
              </p>
              <p className="text-lg leading-snug font-medium text-pretty text-foreground">
                Designed and deployed a Power BI dashboard that replaced manual Excel compensation
                tracking.
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
