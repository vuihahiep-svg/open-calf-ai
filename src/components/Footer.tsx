export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/30">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <span className="font-mono text-xs font-bold">{"{"}</span>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            OpenCalf · MIT · © {new Date().getFullYear()}
          </span>
        </div>
        <div className="flex items-center gap-6 font-mono text-xs text-muted-foreground">
          <a href="#" className="transition-colors hover:text-foreground">GitHub</a>
          <a href="#" className="transition-colors hover:text-foreground">Docs</a>
          <a href="#" className="transition-colors hover:text-foreground">Changelog</a>
        </div>
      </div>
    </footer>
  );
}
