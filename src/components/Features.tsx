import {
  Bot,
  Database,
  Code2,
  Mic,
  Sparkles,
  BarChart3,
  Layout,
  Plug,
} from "lucide-react";

const FEATURES = [
  {
    icon: Bot,
    title: "Agents",
    body: "Build agents in the dashboard; pick LLM provider/model; optional voice and optional OpenClaw-first routing with fallback.",
  },
  {
    icon: Database,
    title: "RAG knowledge",
    body: "URLs, files (PDF, Office, EPUB…), text snippets → normalized → chunked → Qdrant; queue-backed ingestion.",
  },
  {
    icon: Code2,
    title: "Web widget",
    body: "Embeddable snippet; colors, launcher, allowed origins from Channels.",
  },
  {
    icon: Mic,
    title: "Voice",
    body: "WebRTC via LiveKit; pluggable STT/TTS (Whisper, Edge, ElevenLabs, …).",
  },
  {
    icon: Sparkles,
    title: "Lead extraction",
    body: "JSON fields per agent; async processing — leads show in dashboard after workers run.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    body: "Conversations, leads, fallback rate, knowledge gaps — out of the box.",
  },
  {
    icon: Layout,
    title: "Custom UI",
    body: "Headless API + @opencalf/react for your own frontends.",
  },
  {
    icon: Plug,
    title: "Adapters",
    body: "New channels via IChannelAdapter in @opencalf/sdk.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">/ features</p>
          <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Everything to ship a real agent.
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            A TypeScript monorepo: NestJS API, Next.js admin, embeddable widget, BullMQ workers, Postgres + Qdrant.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative bg-surface p-6 transition-colors hover:bg-surface-elevated"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-primary">
                <Icon className="h-4 w-4" />
              </div>
              <h3 className="mt-4 font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
