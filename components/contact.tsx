import { Mail } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { GitHubIcon } from '@/components/github-icon'
import { Reveal } from '@/components/reveal'
import { EMAIL, GITHUB_URL, MAILTO } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="px-5 pb-20 md:px-8 md:pb-28">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center text-ink-foreground md:px-12 md:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:22px_22px]"
          />
          <div className="relative mx-auto max-w-2xl">
            <p className="mb-4 font-mono text-xs tracking-widest text-[oklch(0.8_0.1_190)] uppercase">
              07 — Contact
            </p>
            <h2 id="contact-title" className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              {"Let's Build Something With Data + AI"}
            </h2>
            <p className="mt-6 leading-relaxed text-pretty text-ink-foreground/75 md:text-lg">
              {"I'm interested in opportunities where data, healthcare, technology, and AI can come together to solve meaningful organizational problems."}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'h-11 gap-2 border-ink-foreground/25 bg-transparent px-5 text-sm text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground',
                )}
              >
                <GitHubIcon className="size-4" />
                GitHub
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <a
                href={MAILTO}
                className={cn(
                  buttonVariants(),
                  'h-11 gap-2 bg-ink-foreground px-5 text-sm text-ink hover:bg-ink-foreground/90 [a]:hover:bg-ink-foreground/90',
                )}
              >
                <Mail className="size-4" aria-hidden="true" />
                Email Me
              </a>
            </div>
            <p className="mt-6 font-mono text-xs text-ink-foreground/60">{EMAIL}</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
