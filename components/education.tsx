import { Award, GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const degrees = [
  {
    degree: 'Master of Science in Data Analytics',
    school: 'Johnson & Wales University',
    meta: ['3.94 GPA', 'August 2026'],
  },
  {
    degree: 'Bachelor of Science in Public Health',
    school: 'Johnson & Wales University',
    meta: ['April 2024'],
  },
]

const certifications = [
  'KNIME Data Science Professional Certificate',
  'Oracle AI Associate',
  'Oracle Fusion AI Agent',
  'Oracle Cloud Infrastructure',
  'Microsoft Copilot Essentials',
]

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading index="06" eyebrow="Education" title="Education & Certifications" id="education-title" />

        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <ul className="grid gap-4">
            {degrees.map((d, i) => (
              <li key={d.degree}>
                <Reveal delay={i * 100}>
                  <article className="flex gap-5 rounded-xl border border-border bg-card p-6">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <GraduationCap className="size-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold tracking-tight text-balance">{d.degree}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{d.school}</p>
                      <p className="mt-3 flex flex-wrap gap-2">
                        {d.meta.map((m) => (
                          <span key={m} className="rounded-md bg-muted px-2 py-0.5 font-mono text-xs text-foreground/80">
                            {m}
                          </span>
                        ))}
                      </p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={150} className="h-full">
            <div className="h-full rounded-xl border border-border bg-card p-6">
              <h3 className="mb-5 flex items-center gap-2.5 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                <Award className="size-4 text-primary" aria-hidden="true" />
                Certifications
              </h3>
              <ul className="flex flex-col divide-y divide-border">
                {certifications.map((c) => (
                  <li key={c} className="flex items-center gap-3 py-3 text-sm first:pt-0 last:pb-0">
                    <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-primary" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
