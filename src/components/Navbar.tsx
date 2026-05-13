import { Github } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <span className="font-mono text-sm font-bold">{"{"}</span>
          </div>
          <span className="text-base font-semibold tracking-tight">OpenCalf</span>
          <span className="ml-1 rounded-md border border-border bg-surface px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            MIT
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#self-host" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Self-host
          </a>
          <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Docs
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="hidden h-9 items-center gap-2 rounded-md border border-border bg-surface px-3 text-sm text-foreground transition-colors hover:bg-surface-elevated sm:inline-flex"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <a
            href="#"
            className="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get started
          </a>
        </div>
      </nav>
    </header>
  );
}
