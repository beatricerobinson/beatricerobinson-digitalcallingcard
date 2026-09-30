import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: string
  id: string
  className?: string
  tone?: 'light' | 'dark'
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  id,
  className,
  tone = 'light',
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-10 md:mb-14', className)}>
      <p
        className={cn(
          'mb-3 flex items-center gap-3 font-mono text-xs tracking-widest uppercase',
          tone === 'dark' ? 'text-ink-foreground/60' : 'text-muted-foreground',
        )}
      >
        <span className="text-primary">{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-current opacity-40" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          'text-3xl font-semibold tracking-tight text-balance md:text-4xl',
          tone === 'dark' ? 'text-ink-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
    </div>
  )
}
