import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Impact } from '@/components/impact'
import { Projects } from '@/components/projects'
import { Technology } from '@/components/technology'
import { CurrentRole } from '@/components/current-role'
import { Education } from '@/components/education'
import { Contact } from '@/components/contact'
import { GITHUB_URL, MAILTO } from '@/lib/site'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <Impact />
        <Projects />
        <Technology />
        <CurrentRole />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row md:px-8">
          <p>
            {'© '}
            {new Date().getFullYear()} Beatrice J. Robinson · San Antonio, Texas
          </p>
          <div className="flex gap-5">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              GitHub
            </a>
            <a href={MAILTO} className="hover:text-foreground">
              Email
            </a>
            <a href="#top" className="hover:text-foreground">
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
