import { Server, ShieldCheck, Terminal } from "lucide-react";

const ITEMS = [
  {
    icon: Server,
    title: "Your stack",
    body: "Postgres, Qdrant, Redis — keys and data under your control.",
  },
  {
    icon: ShieldCheck,
    title: "Real deployments",
    body: "nginx TLS, VPS Docker, Cloudflare or Tunnel — documented in-repo.",
  },
  {
    icon: Terminal,
    title: "Stable surface",
    body: "/api/v1, JWT admin, public agent token for widget/API.",
  },
];

export function SelfHost() {
  return (
    <section id="self-host" className="relative border-t border-border/60 bg-surface/20">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">/ self-host</p>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Own your data. Own your agent.
            </h2>
            <p className="mt-4 text-muted-foreground">
              No vendor lock-in. Run OpenCalf on your own infra, swap the LLM, and pipe leads where they belong.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 font-mono text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              docs/production-deploy.md · docs/docker-vps-deploy.md
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {ITEMS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex flex-col bg-surface p-6">
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* OpenClaw disclaimer */}
        <div className="mt-12 rounded-lg border border-border bg-surface/60 p-4 text-center text-sm text-muted-foreground">
          <span className="font-mono text-xs uppercase tracking-wider text-primary">Optional integration · </span>
          OpenClaw enables Zalo Personal and/or a gateway-first LLM path — not required to use OpenCalf.
        </div>
      </div>
    </section>
  );
}
