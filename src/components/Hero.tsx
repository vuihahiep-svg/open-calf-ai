import { ArrowRight, BookOpen, Copy, Check } from "lucide-react";
import { useState } from "react";

const SNIPPET = `git clone https://github.com/opencalf/opencalf.git
cd opencalf
cp .env.example .env
# DATABASE_URL, JWT_SECRET, ENCRYPTION_KEY + one LLM API key
docker compose up -d
# run DB migrations (see repo README)
# open http://localhost:3000`;

export function Hero() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(SNIPPET);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="grid-bg absolute inset-0 -z-10" aria-hidden />
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden />

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            v1.0 · open-source under MIT
            <ArrowRight className="h-3 w-3" />
          </a>

          <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient">Enterprise-grade AI agents,</span>
            <br />
            <span className="text-foreground">self-hosted in under 10 minutes.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground">
            Open-source <strong className="font-semibold text-foreground">AI Agents platform</strong> — RAG-powered chat,
            voice, multi-channel support, and <strong className="font-semibold text-foreground">lead extraction</strong>{" "}
            to the dashboard.
          </p>

          <p className="mt-3 font-mono text-xs text-muted-foreground">
            MIT · Docker-friendly · TypeScript — agents, widget, optional voice (LiveKit), headless API.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://opencalf.achain.site"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 glow-accent"
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-surface px-5 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated"
            >
              <BookOpen className="h-4 w-4" />
              Documentation
            </a>
          </div>
        </div>

        {/* Code block */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="overflow-hidden rounded-xl border border-border bg-surface/80 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between border-b border-border bg-surface-elevated/60 px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">~/opencalf</span>
              </div>
              <button
                onClick={copy}
                className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-xs text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                aria-label="Copy snippet"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-primary" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "copied" : "copy"}
              </button>
            </div>
            <pre className="overflow-x-auto p-5 text-left font-mono text-[13px] leading-relaxed">
              <code>
                {SNIPPET.split("\n").map((line, i) => (
                  <div key={i} className="flex">
                    <span className="mr-4 inline-block w-5 select-none text-right text-muted-foreground/40">
                      {i + 1}
                    </span>
                    <span className={line.startsWith("#") ? "text-muted-foreground" : "text-foreground"}>
                      {line.startsWith("#") ? (
                        line
                      ) : line.startsWith("git") || line.startsWith("docker") || line.startsWith("cp") || line.startsWith("cd") ? (
                        <>
                          <span className="text-primary">{line.split(" ")[0]}</span>
                          <span>{line.slice(line.split(" ")[0].length)}</span>
                        </>
                      ) : (
                        line
                      )}
                    </span>
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
