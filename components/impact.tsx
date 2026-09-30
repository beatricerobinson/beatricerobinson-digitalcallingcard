import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const stats = [
  {
    value: '441+',
    label: 'Physicians & dentists supported through VA compensation program administration',
  },
  { value: '800+', label: 'VistA user accounts remediated' },
  {
    value: 'Power BI',
    label: 'Dashboard developed to replace manual Excel compensation tracking',
  },
  {
    value: '8+ Years',
    label: 'Healthcare, federal government, managed care, and insurance experience',
  },
]

export function Impact() {
  return (
    <section
      id="impact"
      aria-labelledby="impact-title"
      className="relative overflow-hidden bg-ink py-20 text-ink-foreground md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading index="02" eyebrow="Impact" title="Selected Impact" id="impact-title" tone="dark" />

        <ul className="grid gap-px overflow-hidden rounded-xl bg-ink-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <li key={stat.value} className="bg-ink">
              <Reveal delay={i * 100} className="flex h-full flex-col p-6 md:p-8">
                <p className="text-4xl font-semibold tracking-tight text-[oklch(0.78_0.12_255)] md:text-5xl">
                  {stat.value}
                </p>
                <span aria-hidden="true" className="my-5 h-px w-10 bg-ink-foreground/25" />
                <p className="text-sm leading-relaxed text-ink-foreground/75">{stat.label}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
