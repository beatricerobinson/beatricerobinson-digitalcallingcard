import { Activity, BarChart3, Sparkles, Workflow } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const focusAreas = [
  {
    icon: Activity,
    title: 'Healthcare Analytics',
    description:
      'Healthcare operations, provider data, workforce analytics, compensation analysis, and data quality.',
  },
  {
    icon: Sparkles,
    title: 'AI & Emerging Technology',
    description:
      'Oracle AI, Oracle Fusion AI Agent, Microsoft Copilot, and AI-assisted development.',
  },
  {
    icon: BarChart3,
    title: 'Data & Business Intelligence',
    description:
      'SQL, MySQL, R, Power BI, Excel, KNIME, dashboards, and data visualization.',
  },
  {
    icon: Workflow,
    title: 'Program Operations',
    description:
      'Program administration, process improvement, compliance, executive reporting, and stakeholder collaboration.',
  },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <SectionHeading index="01" eyebrow="About" title="What I Do" id="about-title" className="mb-6 md:mb-6" />
            <p className="leading-relaxed text-pretty text-muted-foreground">
              Data Analytics and Program Operations professional with 8+ years of experience supporting compliance-driven 
              programs across federal healthcare, managed care, and health insurance environments. My experience spans healthcare 
              operations, provider credentialing, physician compensation, workforce analytics, data quality, compliance, program 
              administration, and executive reporting. I use data, technology, and emerging AI tools to identify problems, 
              strengthen processes and controls, improve reporting, and support evidence-based organizational decisions.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area, i) => (
              <li key={area.title}>
                <Reveal delay={i * 80} className="h-full">
                  <article className="group h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                    <div className="mb-5 flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <area.icon className="size-5" aria-hidden="true" />
                    </div>
                    <h3 className="mb-2 font-semibold tracking-tight">{area.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {area.description}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
