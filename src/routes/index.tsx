import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BadgeRow } from "@/components/BadgeRow";
import { Features } from "@/components/Features";
import { SelfHost } from "@/components/SelfHost";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "OpenCalf — Self-host AI customer service with RAG & leads" },
      {
        name: "description",
        content:
          "Enterprise-grade self-hosted AI agents in minutes. Open-source AI customer service platform: RAG chat, voice, multi-channel support, lead extraction to your dashboard. MIT.",
      },
      { property: "og:title", content: "OpenCalf — Self-host AI agents in minutes" },
      {
        property: "og:description",
        content:
          "Open-source AI agents platform — RAG-powered chat, voice, multi-channel support, and lead extraction. MIT · Docker · TypeScript.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <BadgeRow />
        <Features />
        <SelfHost />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
