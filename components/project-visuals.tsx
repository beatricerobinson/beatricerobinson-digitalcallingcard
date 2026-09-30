const funnelStages = [100, 78, 54, 36, 22]

export function FunnelVisual() {
  return (
    <div aria-hidden="true" className="flex size-full items-center justify-center gap-6 p-6 md:gap-10">
      <div className="flex w-full max-w-sm flex-col gap-2.5">
        {funnelStages.map((pct, i) => (
          <div key={pct} className="flex items-center gap-3">
            <span className="w-6 font-mono text-[10px] text-muted-foreground">S{i + 1}</span>
            <div className="h-3 flex-1 rounded-full bg-background">
              <div
                className="h-full origin-left rounded-full bg-primary transition-transform duration-700 group-hover:scale-x-[1.03]"
                style={{ width: `${pct}%`, opacity: 1 - i * 0.14 }}
              />
            </div>
            <div className="h-3 flex-1 rounded-full bg-background">
              <div
                className="h-full rounded-full bg-foreground/70"
                style={{ width: `${Math.max(8, pct - i * 7)}%`, opacity: 1 - i * 0.14 }}
              />
            </div>
          </div>
        ))}
        <div className="mt-2 flex justify-end gap-4 font-mono text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-primary" />Group A</span>
          <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-foreground/70" />Group B</span>
        </div>
      </div>
    </div>
  )
}

const bars = [42, 58, 35, 71, 49, 64, 38, 55, 46, 68]

export function ChartVisual() {
  return (
    <div aria-hidden="true" className="flex size-full items-end justify-center p-6 md:p-8">
      <div className="relative flex h-full w-full max-w-sm items-end gap-2 border-b border-l border-border pb-px pl-2">
        {[25, 50, 75].map((y) => (
          <span key={y} className="absolute inset-x-0 border-t border-dashed border-border" style={{ bottom: `${y}%` }} />
        ))}
        {bars.map((h, i) => (
          <div
            key={i}
            className="relative flex-1 rounded-t-sm bg-primary/80 transition-all duration-500 group-hover:bg-primary"
            style={{ height: `${h}%`, transitionDelay: `${i * 30}ms` }}
          />
        ))}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 size-full">
          <polyline
            points="5,70 15,55 25,62 35,38 45,50 55,40 65,58 75,45 85,52 95,34"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
            className="text-foreground/70"
          />
        </svg>
      </div>
    </div>
  )
}
