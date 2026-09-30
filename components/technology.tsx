import { Database, HeartPulse, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const groups = [
  {
    icon: Sparkles,
    label: 'AI',
    tools: ['Oracle AI', 'Oracle Fusion AI Agent', 'Microsoft Copilot', 'Oracle Cloud Infrastructure'],
  },
  {
    icon: Database,
    label: 'Data',
    tools: ['SQL', 'MySQL', 'R', 'RStudio', 'Power BI', 'Excel', 'KNIME'],
  },
  {
    icon: HeartPulse,
    label: 'Healthcare',
    tools: ['SharePoint', 'VistA', 'Electronic Health Records'],
  },
]

export function Technology() {
  return (
    <section id="tools" aria-labelledby="tools-title" className="border-y border-border bg-muted/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading index="04" eyebrow="Technology" title="Tools I Work With" id="tools-title" />

        <div className="grid gap-4 md:grid-cols-3">
          {groups.map((group, i) => (
            <Reveal key={group.label} delay={i * 100} className="h-full">
              <div className="h-full rounded-xl border border-border bg-card p-6">
                <h3 className="mb-5 flex items-center gap-2.5 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  <group.icon className="size-4 text-primary" aria-hidden="true" />
                  {group.label}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary/50 hover:bg-accent"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
