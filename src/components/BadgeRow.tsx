const BADGES = [
  "MIT",
  "Node 20",
  "TypeScript 5.5",
  "NestJS",
  "Next.js 15",
  "PostgreSQL",
  "Qdrant",
  "Redis / BullMQ",
  "LiveKit",
  "Docker",
];

export function BadgeRow() {
  return (
    <section className="border-y border-border/60 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <p className="mb-5 text-center font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          Built on a stack you already trust
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          {BADGES.map((b) => (
            <span
              key={b}
              className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted-foreground"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
