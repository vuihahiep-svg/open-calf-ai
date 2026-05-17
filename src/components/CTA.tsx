import { ArrowRight, Github } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-border/60">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Clone the repo. <span className="text-gradient">Ship by lunch.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Open-source, Docker-friendly, and built for developers who want to stay in control.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://opencalf.achain.site"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 glow-accent"
          >
            Get started
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/a20-ai-thuc-chien/A20-App-097"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-surface px-5 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated"
          >
            <Github className="h-4 w-4" />
            Star on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
