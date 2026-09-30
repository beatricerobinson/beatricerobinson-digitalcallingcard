import { ArrowDown, Mail, MapPin } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { GitHubIcon } from '@/components/github-icon'
import { NetworkBackground } from '@/components/network-background'
import { GITHUB_URL, MAILTO } from '@/lib/site'
import { cn } from '@/lib/utils'

const roles = ['AI Project Builder', 'Data Analytics', 'Healthcare & Workforce Analytics']

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[92svh] items-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 -z-10">
        <NetworkBackground />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,var(--background)_20%,transparent_75%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur">
            <MapPin className="size-3.5 text-primary" aria-hidden="true" />
            San Antonio, Texas
          </p>

          <h1
            id="hero-title"
            className="text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-6xl md:text-7xl"
          >
  Beatrice J. Robinson
  </h1>

  <p className="mt-3 text-base text-muted-foreground md:text-lg">Thank you for stopping by.</p>
  
          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-primary md:text-base">
            {roles.map((role, i) => (
              <span key={role} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true" className="size-1 rounded-full bg-border" />}
                {role}
              </span>
            ))}
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
            Building data-driven solutions that connect healthcare operations, analytics, and
            emerging AI technology.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className={cn(buttonVariants(), 'h-11 gap-2 px-5 text-sm')}
            >
              View Projects
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: 'outline' }), 'h-11 gap-2 bg-card/80 px-5 text-sm backdrop-blur')}
            >
              <GitHubIcon className="size-4" />
              GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href={MAILTO}
              className={cn(buttonVariants({ variant: 'ghost' }), 'h-11 gap-2 px-5 text-sm')}
            >
              <Mail className="size-4" aria-hidden="true" />
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
